"use client";

import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Users,
  Calendar,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 py-24 text-white"
    >
      {/* ================= HEADER ================= */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          margin: "-100px",
        }}
        variants={fadeUp}
        className="text-center mb-14"
      >
        <p className="text-[11px] tracking-[0.3em] text-blue-400/70 mb-3">
          EDUCATION & EXPERIENCE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          My Journey
        </h2>

        <p className="text-sm md:text-base text-white/45 max-w-2xl mx-auto">
          My academic background and experiences that have helped me
          develop technical, communication, and teamwork skills.
        </p>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            margin: "-80px",
          }}
          variants={fadeUp}
          className="rounded-[24px] border border-white/10 bg-[#0b0e18]/80 backdrop-blur-xl p-6 md:p-7 shadow-[0_0_50px_rgba(0,80,180,0.06)]"
        >
          {/* TITLE */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-11 h-11 rounded-xl border border-blue-400/20 bg-blue-400/10 flex items-center justify-center text-blue-400">
              <GraduationCap size={21} />
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-white/35">
                EDUCATION
              </p>

              <h3 className="text-xl font-semibold">
                Academic Background
              </h3>
            </div>
          </div>

          {/* EDUCATION ITEM */}
          <div className="relative pl-7 border-l border-blue-400/20">

            <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

            <div className="flex items-center gap-2 text-[11px] text-blue-400/80 mb-2">
              <Calendar size={13} />
              2024 – Present
            </div>

            <h4 className="text-lg font-semibold text-white mb-1">
              BINUS University
            </h4>

            <p className="text-sm text-white/60 mb-3">
              Bachelor of Computer Science
            </p>

            <p className="text-xs leading-6 text-white/40">
              Currently studying Computer Science with an interest
              in Cloud Computing and exploring various technologies
              through academic and personal projects.
            </p>
          </div>
        </motion.div>

        {/* ================= EXPERIENCE ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            margin: "-80px",
          }}
          variants={fadeUp}
          className="rounded-[24px] border border-white/10 bg-[#0b0e18]/80 backdrop-blur-xl p-6 md:p-7 shadow-[0_0_50px_rgba(0,80,180,0.06)]"
        >
          {/* TITLE */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-11 h-11 rounded-xl border border-blue-400/20 bg-blue-400/10 flex items-center justify-center text-blue-400">
              <Briefcase size={21} />
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-white/35">
                EXPERIENCE
              </p>

              <h3 className="text-xl font-semibold">
                Organization & Activities
              </h3>
            </div>
          </div>

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-7">

            {/* HIMTI */}
            <div className="relative pl-7 border-l border-blue-400/20">

              <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

              <div className="flex items-center gap-2 text-[11px] text-blue-400/80 mb-2">
                <Users size={13} />
                Student Organization
              </div>

              <h4 className="text-lg font-semibold text-white mb-1">
                HIMTI BINUS Bandung
              </h4>

              <p className="text-xs leading-6 text-white/40">
                Contributed to student organization activities and
                event preparation while working with team members
                in coordination and communication.
              </p>
            </div>

            {/* OSIS & CHURCH */}
            <div className="relative pl-7 border-l border-blue-400/20">

              <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

              <div className="flex items-center gap-2 text-[11px] text-blue-400/80 mb-2">
                <Users size={13} />
                Event & Committee Experience
              </div>

              <h4 className="text-lg font-semibold text-white mb-1">
                OSIS & Church Activities
              </h4>

              <p className="text-xs leading-6 text-white/40">
                Participated in organizing school and church events,
                gaining experience in teamwork, public speaking,
                vendor coordination, and interpersonal communication.
              </p>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM ================= */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="mt-8 text-center"
      >
        <p className="text-[11px] tracking-[0.18em] text-white/25">
          LEARNING · BUILDING · EXPLORING
        </p>
      </motion.div>
    </section>
  );
}