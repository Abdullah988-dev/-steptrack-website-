"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Download,
  Footprints,
} from "lucide-react";

import { APK_DOWNLOAD_URL } from "@/lib/config";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 px-6 pb-8 pt-14 text-white sm:pt-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* =====================================================
            TOP CTA
            ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:p-8 lg:p-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Start today
              </div>

              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Ready to track your progress?
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                Download StepTrack and start building a healthier daily
                routine.
              </p>
            </div>

            <motion.a
              href={APK_DOWNLOAD_URL}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-shadow hover:shadow-2xl hover:shadow-blue-600/30"
            >
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              Download StepTrack
            </motion.a>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FOOTER
            ===================================================== */}
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: -6,
                  scale: 1.06,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20"
              >
                <Footprints
                  size={21}
                  className="text-white"
                />
              </motion.div>

              <div>
                <span className="block text-lg font-black tracking-tight text-white">
                  StepTrack
                </span>

                <span className="block text-[10px] font-semibold text-slate-500">
                  Your daily activity companion
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Track your steps, water intake and daily goals in one simple
              mobile fitness experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
              Explore
            </p>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-1">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <span>{link.label}</span>

                  <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* =====================================================
            BOTTOM
            ===================================================== */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs font-medium text-slate-500">
            © 2026 StepTrack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs font-semibold text-slate-600">
              Made for better habits.
            </span>

            <motion.a
              href="#home"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
            >
              <ArrowUp size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}