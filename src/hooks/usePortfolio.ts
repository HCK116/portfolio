"use client";

import { useEffect, useState } from "react";

export default function usePortfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);
  const [techStacks, setTechStacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // =========================
    // PROJECTS
    // =========================
    const myProjects = [
      {
        id: "ecogreen",
        title: "EcoGreen - Waste Classification",
        description:
          "AI-based waste classification project that uses deep learning and MobileNet to classify organic and recyclable waste.",
        image_url: "/assets/ecogreen.png",
        live_url:
          "https://ecogreen-waste-classification-hck.netlify.app/",
      },

      {
        id: "portfolio",
        title: "Personal Portfolio Website",
        description:
          "Personal portfolio website built to showcase my profile, projects, certificates, and technical interests with interactive UI and 3D components.",
        image_url: "/assets/portfolio.png",
        live_url: "",
      },

      {
        id: "cashier",
        title: "Cashier System - Toko Telur",
        description:
          "A simple cashier system for a small grocery shop with separate access for cashier and store admin.",
        image_url: "/assets/cashier.png",
        live_url: "",
      },
    ];

    setProjects(myProjects);

    // =========================
    // CERTIFICATES
    // =========================
    const myCertificates = [
      {
        id: "google-cloud",
        title: "Google Cloud Computing Foundations Certificate",
        image_url: "/assets/google-cloud.png",
      },

      {
        id: "python-101",
        title: "Python 101 for Data Science",
        image_url: "/assets/python-101.png",
      },
    ];

    setCertificates(myCertificates);

    // =========================
    // TECH STACK
    // =========================
    const myTechStacks = [
      // Programming
      {
        id: "python",
        name: "Python",
        category: "Programming",
      },
      {
        id: "java",
        name: "Java",
        category: "Programming",
      },
      {
        id: "javascript",
        name: "JavaScript",
        category: "Programming",
      },
      {
        id: "sql",
        name: "SQL",
        category: "Programming",
      },

      // Web Development
      {
        id: "html",
        name: "HTML",
        category: "Web Development",
      },
      {
        id: "css",
        name: "CSS",
        category: "Web Development",
      },
      {
        id: "react",
        name: "React",
        category: "Web Development",
      },
      {
        id: "nextjs",
        name: "Next.js",
        category: "Web Development",
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "Web Development",
      },

      // Cloud & AI
      {
        id: "google-cloud",
        name: "Google Cloud",
        category: "Cloud & AI",
      },
      {
        id: "cloud-computing",
        name: "Cloud Computing",
        category: "Cloud & AI",
      },
      {
        id: "deep-learning",
        name: "Deep Learning",
        category: "Cloud & AI",
      },
      {
        id: "mobilenet",
        name: "MobileNet",
        category: "Cloud & AI",
      },

      // Tools
      {
        id: "git",
        name: "Git",
        category: "Tools",
      },
      {
        id: "github",
        name: "GitHub",
        category: "Tools",
      },
      {
        id: "vscode",
        name: "VS Code",
        category: "Tools",
      },
      {
        id: "canva",
        name: "Canva",
        category: "Tools",
      },
      {
        id: "word",
        name: "Microsoft Word",
        category: "Tools",
      },
      {
        id: "excel",
        name: "Microsoft Excel",
        category: "Tools",
      },
      {
        id: "powerpoint",
        name: "Microsoft PowerPoint",
        category: "Tools",
      },
      {
        id: "capcut",
        name: "CapCut",
        category: "Tools",
      },

      // AI Tools
      {
        id: "chatgpt",
        name: "ChatGPT",
        category: "AI Tools",
      },
      {
        id: "gemini",
        name: "Google Gemini",
        category: "AI Tools",
      },
      {
        id: "claude",
        name: "Claude",
        category: "AI Tools",
      },
      {
        id: "github-copilot",
        name: "GitHub Copilot",
        category: "AI Tools",
      },
    ];

    setTechStacks(myTechStacks);

    setLoading(false);
  }, []);

  return {
    projects,
    certificates,
    techStacks,
    loading,
  };
}