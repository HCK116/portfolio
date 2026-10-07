"use client";

import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Music2,
} from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      username: "@hans-kosasih",
      url: "https://www.linkedin.com/in/hans-kosasih-3a027b325/",
      icon: (
        <span className="font-bold text-[15px]">
          in
        </span>
      ),
      full: true,
    },
    {
      name: "Instagram",
      username: "@kosasihhans",
      url: "https://www.instagram.com/kosasihhans/",
      icon: (
        <span className="font-bold text-[17px]">
          ◎
        </span>
      ),
      full: false,
    },
    {
      name: "GitHub",
      username: "@HCK116",
      url: "https://github.com/HCK116",
      icon: (
        <span className="font-bold text-[12px]">
          GH
        </span>
      ),
      full: false,
    },
    {
      name: "TikTok",
      username: "@hc_kosasih",
      url: "https://www.tiktok.com/@hc_kosasih",
      icon: <Music2 size={16} />,
      full: false,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-10 py-24 text-white"
    >
      <div className="w-full max-w-[1450px] mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] tracking-[0.3em] text-white/40 mb-3">
            HAVE SOMETHING IN MIND?
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Let's Connect
          </h2>

          <p className="mt-3 text-sm text-white/45">
            Feel free to reach out if you want to collaborate,
            discuss ideas, or simply say hello.
          </p>
        </motion.div>

        {/* ================= CONTACT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-full max-w-[580px] rounded-[26px] border border-white/10 bg-[#0b0e18]/90 backdrop-blur-xl p-6 md:p-7 shadow-[0_0_60px_rgba(0,80,180,0.08)]"
        >

          {/* ================= TITLE ================= */}
          <h3 className="text-2xl font-bold mb-2">
            Hubungi Saya
          </h3>

          <p className="text-[12px] text-white/45 mb-6">
            Feel free to reach out if you want to collaborate,
            discuss ideas, or simply say hello.
          </p>

          {/* ================= CONTACT FORM ================= */}
          <form
            action="https://formsubmit.co/hanskosasih08@gmail.com"
            method="POST"
            className="space-y-3"
          >

            {/* FormSubmit Settings */}
            <input
              type="hidden"
              name="_subject"
              value="New Message from Hans Portfolio"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            {/* ================= NAME ================= */}
            <div className="relative">
              <User
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full h-11 rounded-xl border border-white/10 bg-black/10 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-blue-400/40"
              />
            </div>

            {/* ================= EMAIL ================= */}
            <div className="relative">
              <Mail
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full h-11 rounded-xl border border-white/10 bg-black/10 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-blue-400/40"
              />
            </div>

            {/* ================= MESSAGE ================= */}
            <div className="relative">
              <MessageSquare
                size={17}
                className="absolute left-4 top-4 text-white/40"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/10 pl-11 pr-4 pt-4 text-sm text-white placeholder:text-white/35 outline-none resize-none transition focus:border-blue-400/40"
              />
            </div>

            {/* ================= SEND BUTTON ================= */}
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm text-white"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>

          {/* ================= DIVIDER ================= */}
          <div className="border-t border-white/10 my-5" />

          {/* ================= SOCIAL MEDIA ================= */}
          <p className="text-[11px] text-white/45 mb-3">
            Connect With Me
          </p>

          <div className="grid grid-cols-2 gap-2">

            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}

                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}

                className={`
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-black/10
                  px-3
                  py-3
                  transition-all
                  duration-300
                  hover:border-blue-400/30
                  hover:bg-white/[0.06]
                  ${social.full ? "col-span-2" : ""}
                `}
              >

                {/* SOCIAL ICON */}
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-white/75 group-hover:text-white transition">
                  {social.icon}
                </div>

                {/* SOCIAL INFO */}
                <div className="min-w-0">

                  <p className="text-[12px] font-semibold text-white/90">
                    {social.name}
                  </p>

                  <p className="text-[10px] text-white/35 truncate">
                    {social.username}
                  </p>

                </div>

              </motion.a>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
}