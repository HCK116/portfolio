"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

import {
  Code,
  Award,
  Globe,
  FileText,
  ArrowUpRight,
  Cloud,
  Database,
  Laptop,
  Terminal,
  Monitor,
} from "lucide-react";

/* =========================================================
   ANIMATION
========================================================= */

const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 90,
    rotate: 5,
  },

  show: {
    opacity: 1,
    x: 0,
    rotate: 0,

    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const pop: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 25,
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   FLOATING ICON
========================================================= */

function FloatingIcon({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",

        width: 62,
        height: 62,

        borderRadius: 14,

        border: "1px solid rgba(60,160,255,0.55)",

        background:
          "linear-gradient(145deg, rgba(10,45,95,0.85), rgba(2,12,30,0.95))",

        boxShadow:
          "0 0 25px rgba(0,110,255,0.25), inset 0 0 20px rgba(50,150,255,0.08)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        color: "#5eb2ff",

        backdropFilter: "blur(10px)",

        zIndex: 5,

        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   CLOUD COMPUTING CARD
========================================================= */

function CloudComputingCard() {
  return (
    <div
      style={{
        position: "relative",

        width: "100%",
        maxWidth: 720,

        height: 450,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        perspective: 1400,
      }}
    >
      {/* =====================================================
          ORBIT 1
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",

          width: 560,
          height: 300,

          border: "1px solid rgba(40,145,255,0.45)",

          borderRadius: "50%",

          transform: "rotate(-12deg)",

          boxShadow:
            "0 0 25px rgba(20,120,255,0.15)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          ORBIT 2
      ===================================================== */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",

          width: 600,
          height: 340,

          border: "1px solid rgba(50,130,255,0.2)",

          borderRadius: "50%",

          transform: "rotate(20deg)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          BLUE GLOW
      ===================================================== */}

      <div
        style={{
          position: "absolute",

          width: 430,
          height: 280,

          borderRadius: "50%",

          background: "#087cff",

          filter: "blur(100px)",

          opacity: 0.18,

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          FLOATING CLOUD
      ===================================================== */}

      <FloatingIcon
        style={{
          top: 5,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Cloud size={34} />
      </FloatingIcon>

      {/* =====================================================
          FLOATING TERMINAL
          Dipindahkan agar tidak menutupi HCK
      ===================================================== */}

      <FloatingIcon
        style={{
          top: 55,
          left: 0,
          transform: "rotate(-12deg)",
        }}
      >
        <Terminal size={28} />
      </FloatingIcon>

      {/* =====================================================
          FLOATING DATABASE
      ===================================================== */}

      <FloatingIcon
        style={{
          right: 0,
          top: 175,
          transform: "rotate(10deg)",
        }}
      >
        <Database size={30} />
      </FloatingIcon>

      {/* =====================================================
          FLOATING LAPTOP
      ===================================================== */}

      <FloatingIcon
        style={{
          right: 110,
          bottom: 5,
          transform: "rotate(8deg)",
        }}
      >
        <Laptop size={30} />
      </FloatingIcon>

      {/* =====================================================
          MAIN CARD
      ===================================================== */}

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.12}

        /*
         * CARD TIDAK BISA KELUAR TERLALU JAUH
         */
        dragConstraints={{
          top: -70,
          bottom: 70,
          left: -100,
          right: 100,
        }}

        whileDrag={{
          scale: 1.04,

          cursor: "grabbing",

          boxShadow:
            "0 0 20px rgba(70,180,255,1), 0 0 70px rgba(0,120,255,0.45)",
        }}

        whileHover={{
          scale: 1.02,
        }}

        animate={{
          y: [0, -5, 0],

          rotateZ: [-5, -3, -5],
        }}

        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },

          rotateZ: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}

        style={{
          position: "relative",

          width: 590,
          height: 350,

          borderRadius: 25,

          border:
            "1px solid rgba(100,185,255,0.9)",

          background:
            "linear-gradient(145deg, #071b3c 0%, #031027 48%, #020817 100%)",

          boxShadow:
            "0 0 12px rgba(50,160,255,0.8), 0 0 45px rgba(0,100,255,0.3), inset 0 0 35px rgba(40,130,255,0.08)",

          overflow: "hidden",

          transformStyle: "preserve-3d",

          zIndex: 3,

          padding: 25,

          cursor: "grab",

          touchAction: "none",
        }}
      >
        {/* =================================================
            CARD LIGHT
        ================================================= */}

        <div
          style={{
            position: "absolute",

            inset: 0,

            background:
              "linear-gradient(115deg, transparent 25%, rgba(80,170,255,0.08) 48%, transparent 65%)",

            pointerEvents: "none",
          }}
        />

        {/* =================================================
            TOP LINE
        ================================================= */}

        <div
          style={{
            position: "absolute",

            top: 20,

            left: 25,
            right: 25,

            height: 1,

            background:
              "linear-gradient(90deg, transparent, #3da8ff, transparent)",

            opacity: 0.6,
          }}
        />

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          style={{
            position: "relative",

            display: "flex",

            justifyContent: "space-between",

            alignItems: "flex-start",

            zIndex: 5,
          }}
        >
          {/* HCK */}

          <div>
            <div
              style={{
                fontSize: 30,

                fontWeight: 900,

                color: "#68b7ff",

                letterSpacing: "0.03em",

                textShadow:
                  "0 0 15px rgba(50,150,255,0.6)",
              }}
            >
              HCK
            </div>

            <div
              style={{
                marginTop: 3,

                width: 75,

                height: 2,

                background:
                  "linear-gradient(90deg, #168aff, transparent)",
              }}
            />
          </div>

          {/* CHIP */}

          <div
            style={{
              width: 42,

              height: 42,

              borderRadius: 10,

              border:
                "1px solid #4baaff",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              boxShadow:
                "0 0 15px rgba(50,150,255,0.35)",
            }}
          >
            <div
              style={{
                width: 20,

                height: 20,

                borderRadius: 5,

                background: "#3d9eff",

                boxShadow:
                  "0 0 15px #168aff",
              }}
            />
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          style={{
            position: "relative",

            display: "flex",

            gap: 25,

            marginTop: 25,

            zIndex: 4,
          }}
        >
          {/* =================================================
              PHOTO
          ================================================= */}

          <div
            style={{
              width: 190,

              height: 215,

              borderRadius: 18,

              padding: 2,

              background:
                "linear-gradient(135deg, #53b7ff, #0b5bd3, #54baff)",

              boxShadow:
                "0 0 25px rgba(30,130,255,0.35)",

              flexShrink: 0,
            }}
          >
            <img
              src="/assets/hans.jpg"

              alt="Hans Christian Kosasih"

              draggable={false}

              style={{
                width: "100%",

                height: "100%",

                objectFit: "cover",

                borderRadius: 16,

                display: "block",

                userSelect: "none",

                pointerEvents: "none",
              }}
            />
          </div>

          {/* =================================================
              INFORMATION
          ================================================= */}

          <div
            style={{
              flex: 1,

              paddingTop: 3,
            }}
          >
            {/* COMPUTER SCIENCE STUDENT */}

            <div
              style={{
                fontFamily:
                  "'DM Mono', monospace",

                fontSize: 11,

                color: "#73baff",

                letterSpacing:
                  "0.12em",

                marginBottom: 10,
              }}
            >
              COMPUTER SCIENCE
              <br />
              STUDENT
            </div>

            {/* NAME */}

            <div
              style={{
                fontSize: 23,

                fontWeight: 800,

                color: "#f4f8ff",

                lineHeight: 1.2,

                marginBottom: 20,
              }}
            >
              Hans Christian
              <br />
              Kosasih
            </div>

            {/* COMPUTER SCIENCE */}

            <div
              style={{
                display: "flex",

                alignItems: "center",

                gap: 10,

                marginBottom: 13,

                color: "#64b5ff",
              }}
            >
              <Monitor size={19} />

              <span
                style={{
                  fontSize: 13,

                  color: "#a7c9ec",
                }}
              >
                Computer Science
              </span>
            </div>

            {/* CLOUD COMPUTING */}

            <div
              style={{
                display: "flex",

                alignItems: "center",

                gap: 10,

                color: "#64b5ff",
              }}
            >
              <Cloud size={21} />

              <span
                style={{
                  fontSize: 13,

                  color: "#a7c9ec",
                }}
              >
                Cloud Computing
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            SIGNATURE
        ================================================= */}

        <div
          style={{
            position: "absolute",

            right: 30,

            bottom: 73,

            fontSize: 31,

            fontFamily: "cursive",

            fontStyle: "italic",

            color: "#5caeff",

            transform: "rotate(-8deg)",

            opacity: 0.8,

            zIndex: 5,
          }}
        >
          HCK
        </div>

        {/* =================================================
            BOTTOM BADGE
        ================================================= */}

        <div
          style={{
            position: "absolute",

            left: 25,

            bottom: 24,

            padding: "10px 17px",

            borderRadius: 25,

            border:
              "1px solid rgba(50,160,255,0.75)",

            background:
              "rgba(0,70,150,0.25)",

            boxShadow:
              "0 0 15px rgba(20,130,255,0.2)",

            fontFamily:
              "'DM Mono', monospace",

            fontSize: 11,

            letterSpacing:
              "0.12em",

            color: "#d2eaff",

            zIndex: 5,
          }}
        >
          <span
            style={{
              color: "#4db0ff",

              marginRight: 8,
            }}
          >
            {"</>"}
          </span>

          LEARNING · BUILDING · EXPLORING
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   ABOUT COMPONENT
========================================================= */

export default function About() {
  const [isMobile, setIsMobile] =
    useState<boolean | null>(null);

  const [projectCount] =
    useState(0);

  const [certificateCount] =
    useState(0);

  /* =======================================================
     RESPONSIVE
  ======================================================= */

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    check();

    window.addEventListener(
      "resize",
      check
    );

    return () => {
      window.removeEventListener(
        "resize",
        check
      );
    };
  }, []);

  /* =======================================================
     SCROLL TO PORTFOLIO
  ======================================================= */

  const scrollToPortfolio = () => {
    const el =
      document.getElementById(
        "portfolio"
      );

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  /* =======================================================
     WAIT RESPONSIVE CHECK
  ======================================================= */

  if (isMobile === null) {
    return null;
  }

  /* =======================================================
     STATS
  ======================================================= */

  const stats = [
  {
    icon: <Code size={16} />,
    value: "3",
    title: "PROJECTS",
  },

  {
    icon: <Award size={16} />,
    value: "2",
    title: "CERTIFICATES",
  },

  {
    icon: <Globe size={16} />,
    value: "4",
    title: "EXPERIENCE",
  },
];

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      id="about"

      style={{
        minHeight: "100vh",

        display: "flex",

        alignItems:
          "flex-start",

        padding: isMobile
          ? "70px 24px 40px"
          : "90px 60px 35px 120px",

        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",

          maxWidth: 1600,

          margin: "0 auto",
        }}
      >
        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div
          style={{
            display: "flex",

            flexDirection:
              isMobile
                ? "column"
                : "row",

            alignItems: "center",

            justifyContent:
              "space-between",

            gap: isMobile
              ? 50
              : 20,
          }}
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            variants={container}

            initial="hidden"

            whileInView="show"

            viewport={{
              once: false,

              margin: "-80px",
            }}

            style={{
              maxWidth: 600,

              width: "100%",

              flexShrink: 0,
            }}
          >
            {/* ABOUT ME */}

            <motion.div
              variants={fadeUp}

              style={{
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  fontFamily:
                    "'DM Mono', monospace",

                  fontSize: 12,

                  color: "#6598c9",

                  letterSpacing:
                    "0.22em",
                }}
              >
                ABOUT ME
              </span>
            </motion.div>

            {/* NAME */}

            <motion.div
              variants={fadeUp}
            >
              <div
                style={{
                  fontSize: isMobile
                    ? 40
                    : "clamp(42px, 5vw, 70px)",

                  fontWeight: 900,

                  lineHeight: 0.95,

                  color:
                    "var(--text-primary)",

                  letterSpacing:
                    "-0.04em",
                }}
              >
                <div>
                  Hans
                </div>

                <div>
                  Christian
                </div>

                <div>
                  Kosasih
                </div>
              </div>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}

              style={{
                marginTop: 30,

                fontSize: 14,

                color: "#8fb1d5",

                lineHeight: 1.8,

                maxWidth: 570,
              }}
            >
              Mahasiswa Computer
              Science yang sedang
              mendalami Cloud
              Computing dan
              mengeksplorasi berbagai
              teknologi melalui
              project kecil. Saya
              masih terus belajar dan
              mengembangkan kemampuan
              melalui berbagai
              pengalaman dan project.
            </motion.p>

            {/* =================================================
                MOTO HIDUP
            ================================================= */}

            <motion.div
              variants={fadeUp}

              style={{
                marginTop: 25,

                fontSize: 11,

                color: "#5887b6",

                letterSpacing:
                  "0.18em",

                fontFamily:
                  "'DM Mono', monospace",
              }}
            >
              MOTO HIDUP
            </motion.div>

            {/* =================================================
                QUOTE
            ================================================= */}

            <motion.div
              variants={pop}

              style={{
                marginTop: 14,

                padding:
                  "17px 30px",

                borderRadius: 12,

                border:
                  "1px solid rgba(40,120,210,0.45)",

                background:
                  "linear-gradient(135deg, rgba(7,25,55,0.9), rgba(3,15,35,0.8))",

                boxShadow:
                  "0 0 20px rgba(0,80,180,0.08)",

                fontSize: 12,

                fontStyle: "italic",

                color: "#d2e2f5",

                lineHeight: 1.7,

                maxWidth: 590,
              }}
            >
              “Aku tidak akan melakukan
              sesuatu yang tidak harus
              kulakukan. Tapi bila harus
              kulakukan, maka akan segera
              kuselesaikan.”
            </motion.div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              variants={fadeUp}

              style={{
                display: "flex",

                gap: 12,

                marginTop: 22,

                flexWrap: "wrap",
              }}
            >
              {/* DOWNLOAD CV */}

              <a
                href="/assets/Hans_Christian_Kosasih_CV.pdf"

                target="_blank"

                rel="noopener noreferrer"

                style={{
                  textDecoration:
                    "none",
                }}
              >
                <button
                  style={{
                    display: "flex",

                    alignItems:
                      "center",

                    gap: 8,

                    padding:
                      "12px 20px",

                    borderRadius: 9,

                    border:
                      "1px solid white",

                    background: "white",

                    color: "#020817",

                    fontSize: 13,

                    fontWeight: 700,

                    cursor: "pointer",

                    transition:
                      "transform 0.25s ease",
                  }}

                  onMouseEnter={(
                    e
                  ) => {
                    e.currentTarget.style.transform =
                      "translateY(-2px) scale(1.03)";
                  }}

                  onMouseLeave={(
                    e
                  ) => {
                    e.currentTarget.style.transform =
                      "translateY(0) scale(1)";
                  }}
                >
                  <FileText
                    size={15}
                  />

                  Download CV
                </button>
              </a>

              {/* VIEW PROJECTS */}

              <button
                onClick={
                  scrollToPortfolio
                }

                style={{
                  display: "flex",

                  alignItems:
                    "center",

                  gap: 8,

                  padding:
                    "12px 20px",

                  borderRadius: 9,

                  border:
                    "1px solid rgba(220,235,255,0.8)",

                  background:
                    "transparent",

                  color: "white",

                  fontSize: 13,

                  fontWeight: 700,

                  cursor: "pointer",

                  transition:
                    "transform 0.25s ease",
                }}

                onMouseEnter={(
                  e
                ) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.03)";
                }}

                onMouseLeave={(
                  e
                ) => {
                  e.currentTarget.style.transform =
                    "translateY(0) scale(1)";
                }}
              >
                <ArrowUpRight
                  size={15}
                />

                View Projects
              </button>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          {!isMobile && (
            <motion.div
              variants={slideLeft}

              initial="hidden"

              whileInView="show"

              viewport={{
                once: false,
              }}

              style={{
                flex: 1,

                minWidth: 0,

                display: "flex",

                justifyContent:
                  "center",
              }}
            >
              <CloudComputingCard />
            </motion.div>
          )}
        </div>

        {/* =================================================
            STATS
        ================================================= */}

        <motion.div
          variants={container}

          initial="hidden"

          whileInView="show"

          viewport={{
            once: false,
          }}

          style={{
            display: "grid",

            gridTemplateColumns:
              isMobile
                ? "1fr"
                : "repeat(3, 1fr)",

            gap: 20,

            marginTop: isMobile
              ? 45
              : 20,
          }}
        >
          {stats.map(
            (item, i) => (
              <motion.div
                key={i}

                variants={pop}

                whileHover={{
                  scale: 1.025,

                  y: -3,
                }}

                transition={{
                  duration: 0.25,
                }}

                style={{
                  position:
                    "relative",

                  minHeight: 105,

                  padding:
                    "20px 22px",

                  borderRadius: 16,

                  border:
                    "1px solid rgba(35,105,180,0.55)",

                  background:
                    "linear-gradient(135deg, rgba(8,27,58,0.95), rgba(3,15,34,0.95))",

                  boxShadow:
                    "0 0 20px rgba(0,80,180,0.08)",

                  cursor: "pointer",
                }}
              >
                {/* ICON */}

                <div
                  style={{
                    width: 42,

                    height: 42,

                    borderRadius:
                      "50%",

                    border:
                      "1px solid rgba(50,140,230,0.45)",

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    color: "#69b5ff",

                    marginBottom: 10,
                  }}
                >
                  {item.icon}
                </div>

                {/* VALUE */}

                <div
                  style={{
                    position:
                      "absolute",

                    top: 20,

                    right: 24,

                    fontSize: 28,

                    fontWeight: 800,

                    color: "#eef7ff",
                  }}
                >
                  {item.value}
                </div>

                {/* TITLE */}

                <div
                  style={{
                    fontSize: 11,

                    letterSpacing:
                      "0.1em",

                    color: "#8db1d6",

                    fontFamily:
                      "'DM Mono', monospace",
                  }}
                >
                  {item.title}
                </div>

                {/* ARROW */}

                <div
                  onClick={
                    scrollToPortfolio
                  }

                  style={{
                    position:
                      "absolute",

                    bottom: 18,

                    right: 20,

                    color: "#65b3ff",

                    cursor: "pointer",
                  }}
                >
                  <ArrowUpRight
                    size={19}
                  />
                </div>

                {/* DOT */}

                <div
                  style={{
                    position:
                      "absolute",

                    top: 20,

                    right: 20,

                    width: 8,

                    height: 8,

                    borderRadius:
                      "50%",

                    background:
                      "#6ebaff",

                    boxShadow:
                      "0 0 12px rgba(80,170,255,0.9)",
                  }}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}