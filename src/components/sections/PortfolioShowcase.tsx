'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  X,
  ChevronDown,
  ChevronUp,
  Cloud,
  Brain,
} from 'lucide-react'

import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGooglecloud,
  SiGit,
  SiGithub,
} from 'react-icons/si'

import usePortfolio from '@/hooks/usePortfolio'
import PortfolioCard from './PortfolioCard'

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
]

/* =========================================================
   TECH STACK ICONS
========================================================= */

function getTechIcon(name: string) {
  const iconProps = {
    size: 48,
  }

  switch (name) {
    /* ================= PROGRAMMING ================= */

    case 'Python':
      return (
        <SiPython
          {...iconProps}
          color="#3776AB"
        />
      )

    case 'Java':
      return (
        <div className="text-orange-400 text-3xl font-bold">
          JAVA
        </div>
      )

    case 'JavaScript':
      return (
        <SiJavascript
          {...iconProps}
          color="#F7DF1E"
        />
      )

    case 'SQL':
      return (
        <SiMysql
          {...iconProps}
          color="#4479A1"
        />
      )

    /* ================= WEB DEVELOPMENT ================= */

    case 'HTML':
      return (
        <SiHtml5
          {...iconProps}
          color="#E34F26"
        />
      )

    case 'CSS':
      return (
        <SiCss
          {...iconProps}
          color="#1572B6"
        />
      )

    case 'React':
      return (
        <SiReact
          {...iconProps}
          color="#61DAFB"
        />
      )

    case 'Next.js':
      return (
        <SiNextdotjs
          {...iconProps}
          color="#FFFFFF"
        />
      )

    case 'TypeScript':
      return (
        <SiTypescript
          {...iconProps}
          color="#3178C6"
        />
      )

    /* ================= CLOUD & AI ================= */

    case 'Google Cloud':
      return (
        <SiGooglecloud
          {...iconProps}
          color="#4285F4"
        />
      )

    case 'Cloud Computing':
      return (
        <Cloud
          size={48}
          color="#60A5FA"
        />
      )

    case 'Deep Learning':
      return (
        <Brain
          size={48}
          color="#A78BFA"
        />
      )

    case 'MobileNet':
      return (
        <Brain
          size={48}
          color="#34D399"
        />
      )

    /* ================= TOOLS ================= */

    case 'Git':
      return (
        <SiGit
          {...iconProps}
          color="#F05032"
        />
      )

    case 'GitHub':
      return (
        <SiGithub
          {...iconProps}
          color="#FFFFFF"
        />
      )

    case 'VS Code':
      return (
        <div className="text-blue-400 text-3xl font-bold">
          VS
        </div>
      )

    case 'Canva':
      return (
        <div className="text-cyan-400 text-3xl font-bold">
          C
        </div>
      )

    case 'Microsoft Word':
      return (
        <div className="text-blue-400 text-3xl font-bold">
          W
        </div>
      )

    case 'Microsoft Excel':
      return (
        <div className="text-green-400 text-3xl font-bold">
          X
        </div>
      )

    case 'Microsoft PowerPoint':
      return (
        <div className="text-orange-400 text-3xl font-bold">
          P
        </div>
      )

    case 'CapCut':
      return (
        <div className="text-white text-2xl font-bold">
          CC
        </div>
      )

    /* ================= AI TOOLS ================= */

    case 'ChatGPT':
      return (
        <div className="text-white text-2xl font-bold">
          AI
        </div>
      )

    case 'Google Gemini':
      return (
        <div className="text-blue-400 text-2xl font-bold">
          ✦
        </div>
      )

    case 'Claude':
      return (
        <div className="text-orange-400 text-2xl font-bold">
          AI
        </div>
      )

    case 'GitHub Copilot':
      return (
        <div className="text-white text-2xl font-bold">
          AI
        </div>
      )

    default:
      return (
        <div className="text-white/70 text-3xl font-bold">
          {name.charAt(0)}
        </div>
      )
  }
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PortfolioShowcase() {
  const {
    projects,
    certificates,
    techStacks,
    loading,
  } = usePortfolio()

  const [activeTab, setActiveTab] =
    useState('projects')

  const [previewOpen, setPreviewOpen] =
    useState(false)

  const [previewImage, setPreviewImage] =
    useState('')

  const [showAllProjects, setShowAllProjects] =
    useState(false)

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, 3)

  const categories = [
    'Programming',
    'Web Development',
    'Cloud & AI',
    'Tools',
    'AI Tools',
  ]

  return (
    <>
      {/* =====================================================
          IMAGE PREVIEW
      ===================================================== */}

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center px-6"
          >
            <button
              onClick={() =>
                setPreviewOpen(false)
              }
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <X size={18} />
            </button>

            <motion.img
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              src={previewImage}
              className="max-w-[88vw] max-h-[88vh] rounded-3xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          PORTFOLIO SECTION
      ===================================================== */}

      <section
        id="portfolio"
        className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-24 text-white"
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Portfolio Showcase
          </h1>

          <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
            Explore my journey through projects,
            certifications, and technical expertise.
          </p>
        </motion.div>

        {/* ===================================================
            TABS
        =================================================== */}

        <div className="flex justify-center mb-10">
          <div className="w-full max-w-3xl rounded-full border border-white/10 bg-white/5 p-2 flex gap-2 backdrop-blur-xl">
            {[
              'projects',
              'certificates',
              'techstack',
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)

                  if (tab !== 'projects') {
                    setShowAllProjects(false)
                  }
                }}
                className={`flex-1 rounded-full py-3 text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {tab === 'projects'
                  ? 'Projects'
                  : tab === 'certificates'
                  ? 'Certificates'
                  : 'Tech Stack'}
              </button>
            ))}
          </div>
        </div>

        {/* ===================================================
            TAB CONTENT
        =================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.45,
            }}
          >

            {/* =================================================
                PROJECTS
            ================================================= */}

            {activeTab === 'projects' && (
              <div className="space-y-8">

                <motion.div
                  layout
                  transition={{
                    layout: {
                      duration: 0.75,
                      ease: smoothEase,
                    },
                  }}
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-1"
                >

                  <AnimatePresence mode="popLayout">

                    {!loading &&
                      displayedProjects.map(
                        (item, i) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{
                              opacity: 0,
                              y: 40,
                              scale: 0.96,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: -30,
                              scale: 0.95,
                            }}
                            transition={{
                              duration: 0.55,
                              delay: i * 0.04,
                              ease: smoothEase,
                            }}
                          >
                            <PortfolioCard
                              index={i}
                              title={item.title}
                              description={
                                item.description
                              }
                              image={
                                item.image_url
                              }
                              live_url={
                                item.live_url
                              }
                              id={item.id}
                            />
                          </motion.div>
                        )
                      )}

                  </AnimatePresence>

                </motion.div>

                {/* SEE MORE */}

                {!loading &&
                  projects.length > 3 && (
                    <motion.div
                      layout
                      transition={{
                        duration: 0.6,
                        ease: smoothEase,
                      }}
                      className="flex justify-center"
                    >
                      <motion.button
                        layout
                        whileHover={{
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        onClick={() =>
                          setShowAllProjects(
                            !showAllProjects
                          )
                        }
                        className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl text-sm text-white/75 hover:text-white transition flex items-center gap-2"
                      >

                        <AnimatePresence mode="wait">

                          <motion.div
                            key={
                              showAllProjects
                                ? 'less'
                                : 'more'
                            }
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: -8,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="flex items-center gap-2"
                          >

                            {showAllProjects ? (
                              <>
                                <ChevronUp
                                  size={16}
                                />
                                See Less
                              </>
                            ) : (
                              <>
                                <ChevronDown
                                  size={16}
                                />
                                See More
                              </>
                            )}

                          </motion.div>

                        </AnimatePresence>

                      </motion.button>
                    </motion.div>
                  )}

              </div>
            )}

            {/* =================================================
                CERTIFICATES
            ================================================= */}

            {activeTab === 'certificates' && (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-1">

                {!loading &&
                  certificates.map(
                    (item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{
                          opacity: 0,
                          y: 25,
                          scale: 0.96,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.04,
                        }}
                        whileHover={{
                          y: -4,
                        }}
                        onClick={() => {
                          setPreviewImage(
                            item.image_url
                          )

                          setPreviewOpen(true)
                        }}
                        className="group cursor-pointer rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                      >

                        <div className="rounded-2xl overflow-hidden border border-white/10 h-56">

                          <img
                            src={item.image_url}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />

                        </div>

                        <h3 className="mt-4 text-[15px] font-semibold text-center text-white/90">
                          {item.title}
                        </h3>

                      </motion.div>
                    )
                  )}

              </div>
            )}

            {/* =================================================
                TECH STACK
            ================================================= */}

            {activeTab === 'techstack' && (
              <div className="space-y-12">

                {categories.map(
                  (
                    category,
                    categoryIndex
                  ) => {

                    const items =
                      techStacks?.filter(
                        (item) =>
                          item.category ===
                          category
                      ) || []

                    if (
                      items.length === 0
                    ) {
                      return null
                    }

                    return (
                      <motion.div
                        key={category}
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                          delay:
                            categoryIndex *
                            0.08,
                        }}
                      >

                        {/* CATEGORY TITLE */}

                        <div className="flex items-center gap-3 mb-5">

                          <div className="h-px flex-1 bg-white/10" />

                          <h2 className="text-sm md:text-base font-semibold text-white/70 tracking-widest uppercase">
                            {category}
                          </h2>

                          <div className="h-px flex-1 bg-white/10" />

                        </div>

                        {/* TECH LOGOS */}

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

                          {items.map(
                            (
                              item,
                              index
                            ) => (
                              <motion.div
                                key={item.id}
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                  y: 20,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                  y: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration: 0.45,
                                  delay:
                                    index *
                                    0.04,
                                }}
                                whileHover={{
                                  y: -7,
                                  scale: 1.04,
                                }}
                                className="group rounded-[24px] border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl flex flex-col items-center justify-center gap-4 h-[145px] w-full transition-all duration-300"
                              >

                                {/* LOGO */}

                                <div className="relative flex items-center justify-center">

                                  <div className="absolute w-[80px] h-[80px] rounded-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                  <div className="relative z-10 flex items-center justify-center min-h-[48px]">
                                    {getTechIcon(
                                      item.name
                                    )}
                                  </div>

                                </div>

                                {/* NAME */}

                                <p className="text-[12px] text-white/80 text-center leading-tight px-2">
                                  {item.name}
                                </p>

                              </motion.div>
                            )
                          )}

                        </div>

                      </motion.div>
                    )
                  }
                )}

              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </section>
    </>
  )
}