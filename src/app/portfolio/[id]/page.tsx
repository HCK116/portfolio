"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
  Sparkles,
  Code2,
  Layers,
  X,
  Box,
  UserRound,
} from "lucide-react";

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<any>({
    title: "",
    description: "",
    technologies: "",
    key_features: "",
    contribution: "",
    image_url: "",
    image_urls: [],
    live_url: "",
    github_url: "",
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = () => {
    const projects = [
      {
        id: "ecogreen",

        title: "EcoGreen - Waste Classification",

        description:
          "AI-based waste classification project that uses deep learning and image classification techniques to classify organic and recyclable waste.",

        technologies:
          "Python, Deep Learning, MobileNetV4, YOLOv8, CNN, EfficientNetB0, ResNet50",

        key_features:
          "Waste image classification, Dataset preparation, Model training, Model evaluation, Organic and recyclable waste classification",

        contribution:
          "Independently developed the project, including dataset preparation, model training, evaluation, and analysis of multiple deep learning models for waste image classification.",

        image_url: "/assets/ecogreen.png",

        image_urls: ["/assets/ecogreen.png"],

        live_url:
          "https://ecogreen-waste-classification-hck.netlify.app/",

        github_url:
          "https://github.com/HCK116/EcoGreen-Waste-Classification",
      },

      {
        id: "portfolio",

        title: "Personal Portfolio Website",

        description:
          "Personal portfolio website built to showcase my profile, projects, certificates, technical skills, and interests with an interactive interface and 3D components.",

        technologies:
          "Next.js, React, TypeScript, Tailwind CSS, Three.js, Framer Motion",

        key_features:
          "Interactive UI, 3D lanyard, Project showcase, Certificate showcase, Tech Stack showcase, Contact form",

        contribution:
          "Independently developed and customized the portfolio website, including the interface, project showcase, certificate section, contact section, animations, and interactive 3D components.",

        image_url: "/assets/portfolio.png",

        image_urls: ["/assets/portfolio.png"],

        live_url: "",

        github_url:
          "https://github.com/HCK116/portfolio",
      },

      {
        id: "cashier",

        title: "Cashier System - Toko Telur",

        description:
          "A simple cashier system for a small grocery shop with separate access for cashier and store admin.",

        technologies:
          "HTML, CSS",

        key_features:
          "Cashier login, Admin login, Product interface, Transaction interface, Simple grocery store interface",

        contribution:
          "Independently developed the cashier interface and implemented the main product and transaction features for the small grocery store system.",

        image_url: "/assets/cashier.png",

        image_urls: ["/assets/cashier.png"],

        live_url: "",

        github_url: "",
      },
    ];

    const foundProject = projects.find(
      (item) => item.id === String(id)
    );

    if (foundProject) {
      setProject(foundProject);
      setCurrentImage(0);
    }
  };

  const tech = (project?.technologies || "")
    .split(",")
    .filter((t: string) => t.trim() !== "");

  const features = (project?.key_features || "")
    .split(",")
    .filter((f: string) => f.trim() !== "");

  const galleryImages =
    project?.image_urls &&
    Array.isArray(project.image_urls)
      ? project.image_urls
      : project?.image_url
      ? [project.image_url]
      : [];

  const nextImage = () => {
    if (currentImage < galleryImages.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  const handleBack = () => {
    sessionStorage.setItem("skipIntroOnce", "true");
    router.push("/#portfolio");
  };

  return (
    <>
      {/* ================= IMAGE PREVIEW ================= */}

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -40,
            }}
            transition={{
              duration: 0.55,
              ease: smoothEase,
            }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            {/* CLOSE */}

            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <X size={18} />
            </button>

            {/* PREVIOUS */}

            {currentImage > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* IMAGE */}

            {galleryImages.length > 0 && (
              <motion.img
                key={currentImage}
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -80,
                }}
                transition={{
                  duration: 0.6,
                  ease: smoothEase,
                }}
                src={galleryImages[currentImage]}
                className="max-w-[85vw] max-h-[80vh] rounded-3xl object-contain"
              />
            )}

            {/* NEXT */}

            {currentImage <
              galleryImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN ================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="min-h-screen text-white px-6 md:px-10 lg:px-16 py-8 relative overflow-hidden"
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 -z-10 bg-[#030712]" />

        <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top_left,#12305f_0%,transparent_35%)]" />

        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_bottom_right,#0b3568_0%,transparent_35%)]" />

        {/* ================= GRID ================= */}

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 items-start">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.95,
              ease: smoothEase,
            }}
            className="max-w-[560px]"
          >

            {/* BACK */}

            <motion.div
              initial={{
                opacity: 0,
                x: -70,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: smoothEase,
              }}
              className="mb-8"
            >
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-all duration-300 mb-6"
              >
                <ArrowLeft size={14} />
                Back
              </button>

              {/* TITLE */}

              <motion.h1
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.08,
                  ease: smoothEase,
                }}
                className="text-[28px] md:text-[38px] font-bold leading-tight tracking-tight mb-3"
              >
                {project.title}
              </motion.h1>

              <motion.div
                initial={{
                  width: 0,
                  x: -20,
                }}
                animate={{
                  width: 65,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: smoothEase,
                }}
                className="h-[2px] rounded-full bg-gradient-to-r from-blue-400/80 to-white/5 mb-5"
              />
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: smoothEase,
              }}
              className="text-[12px] leading-6 text-white/60 mb-7"
            >
              {project.description}
            </motion.p>

            {/* ================= STATS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.2,
                ease: smoothEase,
              }}
              className="grid grid-cols-2 gap-3 mb-7 max-w-[420px]"
            >

              {/* TECHNOLOGIES COUNT */}

              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="bg-gradient-to-br from-[#0b1729] to-[#0a101c] border border-white/10 rounded-2xl p-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400">
                  <Code2 size={16} />
                </div>

                <div>
                  <p className="text-base font-semibold">
                    {tech.length}
                  </p>

                  <p className="text-[10px] text-white/40">
                    Technologies Used
                  </p>
                </div>
              </motion.div>

              {/* FEATURES COUNT */}

              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="bg-gradient-to-br from-[#0b1729] to-[#0a101c] border border-white/10 rounded-2xl p-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400">
                  <Layers size={16} />
                </div>

                <div>
                  <p className="text-base font-semibold">
                    {features.length}
                  </p>

                  <p className="text-[10px] text-white/40">
                    Key Features
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* ================= BUTTONS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 55,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.28,
                ease: smoothEase,
              }}
              className="flex flex-wrap gap-3 mb-8"
            >

              {/* LIVE DEMO */}

              {project.live_url ? (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-blue-400/30 transition-all duration-300 text-sm"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white/30 text-sm">
                  <ExternalLink size={14} />
                  No Live Demo
                </div>
              )}

              {/* GITHUB */}

              {project.github_url ? (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-blue-400/30 transition-all duration-300 text-sm"
                >
                  <GitBranch size={14} />
                  GitHub
                </a>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white/30 text-sm">
                  <GitBranch size={14} />
                  GitHub Not Available
                </div>
              )}

            </motion.div>

            {/* ================= TECHNOLOGIES ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-3">
                <Code2
                  size={14}
                  className="text-blue-400"
                />

                <p className="text-[13px] font-semibold">
                  Technology Stack
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tech.map(
                  (t: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.12 + i * 0.04,
                        duration: 0.5,
                      }}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-[#0d1b30] to-[#0b111d] border border-white/10 text-[11px] text-white/75"
                    >
                      <Box
                        size={11}
                        className="text-blue-400/70"
                      />

                      {t.trim()}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* ================= CONTRIBUTION ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <UserRound
                  size={14}
                  className="text-blue-400"
                />

                <p className="text-[13px] font-semibold">
                  My Contribution
                </p>
              </div>

              <p className="text-[12px] leading-6 text-white/55">
                {project.contribution}
              </p>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: smoothEase,
            }}
            className="w-full pt-10 md:pt-14"
          >

            {/* ================= IMAGE ================= */}

            {galleryImages.length > 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: 55,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.12,
                  ease: smoothEase,
                }}
                className="mb-5"
              >

                <div className="relative rounded-[26px] overflow-hidden border border-blue-400/10 bg-gradient-to-br from-[#0b1729] to-[#080d16] max-w-[560px] mx-auto shadow-[0_0_50px_rgba(20,100,220,0.08)]">

                  <motion.img
                    key={currentImage}
                    initial={{
                      opacity: 0,
                      x: 60,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: smoothEase,
                    }}
                    src={galleryImages[currentImage]}
                    onClick={() =>
                      setPreviewOpen(true)
                    }
                    className="w-full h-[220px] md:h-[250px] object-cover cursor-pointer"
                  />

                  {/* PREVIOUS */}

                  {currentImage > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-all duration-300"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  )}

                  {/* NEXT */}

                  {currentImage <
                    galleryImages.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-all duration-300"
                    >
                      <ChevronRight size={16} />
                    </button>
                  )}

                </div>

                {/* IMAGE INDICATORS */}

                {galleryImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-3">
                    {galleryImages.map(
                      (_: any, i: number) => (
                        <motion.button
                          key={i}
                          onClick={() =>
                            setCurrentImage(i)
                          }
                          className={`rounded-full transition-all duration-300 ${
                            currentImage === i
                              ? "w-6 h-1.5 bg-blue-400"
                              : "w-1.5 h-1.5 bg-white/30"
                          }`}
                        />
                      )
                    )}
                  </div>
                )}

              </motion.div>
            )}

            {/* ================= KEY FEATURES ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -55,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.22,
                ease: smoothEase,
              }}
              whileHover={{
                y: -2,
              }}
              className="bg-gradient-to-br from-[#0b1729] to-[#0a101c] border border-white/10 rounded-3xl p-5"
            >

              <div className="flex items-center gap-2 mb-4">
                <Sparkles
                  size={14}
                  className="text-blue-400"
                />

                <p className="text-sm font-semibold">
                  Key Features
                </p>
              </div>

              <ul className="space-y-2.5 text-[12px] text-white/65 leading-6">

                {features.map(
                  (f: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{
                        opacity: 0,
                        x: i % 2 === 0 ? 30 : -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.55,
                      }}
                      className="flex gap-3"
                    >
                      <span className="text-blue-400/60">
                        •
                      </span>

                      <span>
                        {f.trim()}
                      </span>
                    </motion.li>
                  )
                )}

              </ul>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </>
  );
}