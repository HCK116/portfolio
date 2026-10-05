'use client';

import './index.css';
import * as THREE from 'three';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

const GLTF_PATH = '/assets/kartu.glb';
const BAND_TEXTURE_PATH = '/assets/bandd.png';
const PHOTO_PATH = '/assets/hans.jpg';

useGLTF.preload(GLTF_PATH);
useTexture.preload(BAND_TEXTURE_PATH);
useTexture.preload(PHOTO_PATH);

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();

    window.addEventListener('resize', check);

    return () => {
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <div
      className="responsive-wrapper"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
        camera={{
          position: [0, 0, 13],
          fov: 25,
        }}
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          pointerEvents: isMobile ? 'none' : 'auto',
        }}
      >
        <ambientLight intensity={Math.PI} />

        <Scene isMobile={isMobile} />

        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />

          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />

          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />

          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Scene({ isMobile }) {
  return (
    <Physics
      key={isMobile ? 'mobile' : 'desktop'}
      interpolate
      gravity={[0, -40, 0]}
      timeStep={1 / 60}
    >
      {!isMobile && <Band isMobile={isMobile} />}
    </Physics>
  );
}

function Band({ isMobile, maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(GLTF_PATH);

  const bandTexture = useTexture(BAND_TEXTURE_PATH);
  const photo = useTexture(PHOTO_PATH);

  const { width, height } = useThree((state) => state.size);

  /*
   * Geometri kartu dengan UV baru (planar), supaya foto
   * menutupi seluruh muka kartu tanpa terpotong.
   */
  const cardGeometry = useMemo(() => {
    const g = nodes.card.geometry.clone();
    g.computeBoundingBox();

    const { min, max } = g.boundingBox;
    const pos = g.attributes.position;
    const uv = new Float32Array(pos.count * 2);

    for (let i = 0; i < pos.count; i++) {
      uv[i * 2] = (pos.getX(i) - min.x) / (max.x - min.x);
      uv[i * 2 + 1] = (pos.getY(i) - min.y) / (max.y - min.y);
    }

    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));

    return g;
  }, [nodes]);

  /*
   * FOTO HANS
   * FOCUS_X: posisi crop horizontal (0 = kiri, 0.5 = tengah, 1 = kanan)
   * FOCUS_Y: posisi crop vertikal   (0 = atas, 0.5 = tengah, 1 = bawah)
   * Ubah dua angka ini kalau wajah belum pas di tengah.
   */
  const FOCUS_X = 0.6;
  const FOCUS_Y = 0.2;

  useEffect(() => {
    const bb = cardGeometry.boundingBox;
    const cardAspect = (bb.max.x - bb.min.x) / (bb.max.y - bb.min.y);
    const imgAspect = photo.image.width / photo.image.height;

    photo.colorSpace = THREE.SRGBColorSpace;
    photo.flipY = true;
    photo.wrapS = THREE.ClampToEdgeWrapping;
    photo.wrapT = THREE.ClampToEdgeWrapping;

    if (imgAspect > cardAspect) {
      // foto lebih lebar dari kartu: crop kiri-kanan
      photo.repeat.set(cardAspect / imgAspect, 1);
      photo.offset.set((1 - photo.repeat.x) * FOCUS_X, 0);
    } else {
      // foto lebih tinggi dari kartu: crop atas-bawah
      photo.repeat.set(1, imgAspect / cardAspect);
      photo.offset.set(0, (1 - photo.repeat.y) * (1 - FOCUS_Y));
    }

    photo.needsUpdate = true;
  }, [photo, cardGeometry]);

  bandTexture.wrapS = bandTexture.wrapT = THREE.RepeatWrapping;

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  const canDrag = !isMobile;

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useEffect(() => {
    if (hovered && canDrag) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';

      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged, canDrag]);

  useFrame((state, delta) => {
    if (dragged && card.current && canDrag) {
      vec
        .set(state.pointer.x, state.pointer.y, 0.5)
        .unproject(state.camera);

      dir.copy(vec).sub(state.camera.position).normalize();

      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((ref) => {
        ref.current?.wakeUp();
      });

      const newX = vec.x - dragged.x;

      let newY = vec.y - dragged.y;

      const newZ = vec.z - dragged.z;

      const screenY = state.pointer.y;

      const limit = isMobile ? -0.1 : -0.2;

      if (screenY < limit) {
        newY = card.current.translation().y;
      }

      card.current.setNextKinematicTranslation({
        x: newX,
        y: newY,
        z: newZ,
      });
    }

    if (
      fixed.current &&
      j1.current &&
      j2.current &&
      j3.current &&
      card.current
    ) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        }

        const d = Math.max(
          0.1,
          Math.min(
            1,
            ref.current.lerped.distanceTo(ref.current.translation())
          )
        );

        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + d * (maxSpeed - minSpeed))
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());

      if (band.current?.geometry) {
        band.current.geometry.setPoints(curve.getPoints(32));
      }

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());

      card.current.setAngvel({
        x: ang.x,
        y: ang.y - rot.y * 0.25,
        z: ang.z,
      });
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      <group position={[3, 4, 0]}>
        {/* TITIK ATAS */}
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />

        {/* TALI */}
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        {/* CARD */}
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => canDrag && hover(true)}
            onPointerOut={() => canDrag && hover(false)}
            onPointerUp={(e) => {
              if (!canDrag) return;

              e.target.releasePointerCapture(e.pointerId);

              drag(false);
            }}
            onPointerDown={(e) => {
              if (!canDrag) return;

              e.target.setPointerCapture(e.pointerId);

              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            {/* CARD + FOTO HANS */}
            <mesh geometry={cardGeometry}>
              <meshPhysicalMaterial
                {...materials.base}
                map={photo}
                roughness={0.4}
                metalness={0}
              />
            </mesh>

            {/* CLIP */}
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />

            {/* CLAMP */}
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      {/* BAND / STRAP */}
      <mesh ref={band}>
        <meshLineGeometry />

        <meshLineMaterial
          transparent
          opacity={0.9}
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={bandTexture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}