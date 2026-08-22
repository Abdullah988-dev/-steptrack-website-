"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplet,
  Flame,
  Footprints,
  Navigation2,
  Sparkles,
  Target,
} from "lucide-react";

import { APK_DOWNLOAD_URL } from "@/lib/config";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 sm:pt-32 md:pt-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.65, 0.45],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-blue-400/15 blur-3xl sm:h-[420px] sm:w-[420px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[-130px] top-[160px] h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-3xl sm:h-[420px] sm:w-[420px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      <div className="mx-auto w-[calc(100%-28px)] max-w-6xl">
        <div className="grid items-center gap-14 pb-20 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-28 md:pt-12 lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
              ===================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-2 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur-sm sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>

              Your daily activity companion
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mx-auto max-w-[760px] text-[2.55rem] font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl md:mx-0 md:text-[3.8rem] lg:text-[4.35rem]"
            >
              Track Every Step.
              <br />

              <span className="relative inline-block">
                Build a{" "}
                <span className="steptrack-gradient-text">
                  Healthier You.
                </span>

                {/* Heading underline */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "55%" }}
                  transition={{
                    delay: 1.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 sm:-bottom-3"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8 md:mx-0 md:text-lg"
            >
              StepTrack helps you monitor your daily steps, fitness goals,
              water intake, and progress — all from one simple and beautiful
              mobile application.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
            >
              <motion.a
                href={APK_DOWNLOAD_URL}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative inline-flex min-h-[52px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-shadow hover:shadow-2xl hover:shadow-blue-600/30"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10">
                  Download StepTrack
                </span>

                <ArrowRight
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600"
              >
                Explore Features

                <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Trust / quick info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold text-slate-400 md:justify-start"
            >
              <span className="flex items-center gap-1.5">
                <Footprints size={14} className="text-blue-500" />
                Step tracking
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span className="flex items-center gap-1.5">
                <Droplet size={14} className="text-cyan-500" />
                Water tracking
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span className="flex items-center gap-1.5">
                <Target size={14} className="text-indigo-500" />
                Daily goals
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT PHONE SHOWCASE
              ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-w-0 items-center justify-center"
          >
            {/* Large background glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[260px] w-[260px] rounded-full bg-blue-500/20 blur-3xl sm:h-[350px] sm:w-[350px]"
            />

            {/* Decorative orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute hidden h-[430px] w-[430px] rounded-full border border-dashed border-blue-200/50 sm:block"
            />

            {/* Phone */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 0.4, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[230px] max-w-[72vw] sm:w-[265px] md:w-[275px] lg:w-[285px]"
            >
              {/* Phone shadow */}
              <div className="absolute -bottom-8 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-slate-900/20 blur-2xl" />

              {/* Phone frame */}
              <div className="relative aspect-[0.483] overflow-hidden rounded-[42px] border-[8px] border-slate-950 bg-slate-950 shadow-[0_35px_80px_rgba(15,23,42,0.28)] sm:rounded-[46px] sm:border-[9px]">
                {/* Dynamic island / speaker */}
                <div className="absolute left-1/2 top-0 z-30 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950 sm:h-6 sm:w-28" />

                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-gradient-to-b from-[#0b1428] via-[#142342] to-[#1554db]">
                  {/* Screen glow */}
                  <div className="absolute left-1/2 top-20 h-44 w-44 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

                  {/* Header */}
                  <div className="relative px-4 pt-12 text-center sm:px-5 sm:pt-14">
                    <p className="mb-3 text-[8px] font-black uppercase tracking-[0.18em] text-blue-300 sm:text-[9px]">
                      Activity Counter
                    </p>

                    {/* Progress Ring */}
                    <div className="relative mx-auto flex aspect-square w-[145px] items-center justify-center sm:w-[175px]">
                      {/* Ring background */}
                      <div className="absolute inset-0 rounded-full border-[7px] border-white/10" />

                      {/* Ring progress */}
                      <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 h-full w-full -rotate-90"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="43"
                          fill="none"
                          stroke="rgba(255,255,255,0.08)"
                          strokeWidth="5"
                        />

                        <motion.circle
                          cx="50"
                          cy="50"
                          r="43"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeDasharray="270"
                          initial={{
                            strokeDashoffset: 270,
                          }}
                          animate={{
                            strokeDashoffset: 46,
                          }}
                          transition={{
                            duration: 1.8,
                            delay: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </svg>

                      <div className="relative z-10 flex flex-col items-center">
                        <Footprints
                          size={22}
                          className="mb-1 text-sky-400"
                        />

                        <span className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                          8,342
                        </span>

                        <span className="mt-0.5 text-[8px] font-bold text-slate-300">
                          of 10,000 steps
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom dashboard */}
                  <div className="absolute bottom-0 left-0 right-0 rounded-t-[25px] bg-white px-3 pb-5 pt-4 sm:rounded-t-[30px] sm:px-4 sm:pt-5">
                    <div className="grid grid-cols-3 gap-2">
                      {/* Calories */}
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="rounded-xl bg-slate-50 p-2 text-center sm:rounded-2xl sm:p-3"
                      >
                        <Flame
                          size={14}
                          className="mx-auto mb-1 text-orange-500"
                        />

                        <span className="block text-xs font-black text-slate-900 sm:text-sm">
                          334
                        </span>

                        <span className="text-[7px] font-bold text-slate-400 sm:text-[9px]">
                          kcal
                        </span>
                      </motion.div>

                      {/* Distance */}
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="rounded-xl bg-slate-50 p-2 text-center sm:rounded-2xl sm:p-3"
                      >
                        <Navigation2
                          size={14}
                          className="mx-auto mb-1 text-emerald-500"
                        />

                        <span className="block text-xs font-black text-slate-900 sm:text-sm">
                          6.4
                        </span>

                        <span className="text-[7px] font-bold text-slate-400 sm:text-[9px]">
                          km
                        </span>
                      </motion.div>

                      {/* Water */}
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="rounded-xl bg-slate-50 p-2 text-center sm:rounded-2xl sm:p-3"
                      >
                        <Droplet
                          size={14}
                          className="mx-auto mb-1 text-cyan-500"
                        />

                        <span className="block text-xs font-black text-slate-900 sm:text-sm">
                          1.5L
                        </span>

                        <span className="text-[7px] font-bold text-slate-400 sm:text-[9px]">
                          water
                        </span>
                      </motion.div>
                    </div>

                    {/* Goal */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 1.8,
                        duration: 0.5,
                      }}
                      className="mt-2.5 flex items-center gap-2 rounded-xl bg-blue-50 p-2.5 sm:mt-3 sm:rounded-2xl sm:p-3"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                        <Sparkles
                          size={12}
                          className="text-blue-600"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[8px] font-black text-blue-700 sm:text-[9px]">
                          83% daily goal completed
                        </p>

                        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-blue-100">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "83%" }}
                            transition={{
                              delay: 1.4,
                              duration: 1,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING STAT — LEFT
                ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
                y: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -7, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.7,
                  delay: 1,
                },
                x: {
                  duration: 0.7,
                  delay: 1,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                },
              }}
              className="absolute left-0 top-[28%] z-20 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:block lg:left-[-35px]"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
                  <Flame size={16} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-slate-400">
                    Calories
                  </p>

                  <p className="text-sm font-black text-slate-900">
                    334 kcal
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING STAT — RIGHT
                ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
                y: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 8, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.7,
                  delay: 1.2,
                },
                x: {
                  duration: 0.7,
                  delay: 1.2,
                },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                },
              }}
              className="absolute bottom-[22%] right-0 z-20 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:block lg:right-[-25px]"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50">
                  <Droplet size={16} className="text-cyan-500" />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-slate-400">
                    Water
                  </p>

                  <p className="text-sm font-black text-slate-900">
                    1.5 L
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom decorative dot */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute bottom-[-10px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}