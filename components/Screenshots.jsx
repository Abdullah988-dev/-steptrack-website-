"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Footprints,
  Target,
  TrendingUp,
} from "lucide-react";

const MOCKS = [
  {
    label: "Steps",
    gradient: "from-slate-950 via-slate-900 to-blue-700",
    icon: Footprints,
    accent: "text-blue-300",
    value: "8,342",
    sub: "of 10,000 steps",
    progress: "83%",
  },
  {
    label: "Water",
    gradient: "from-slate-950 via-slate-900 to-cyan-700",
    icon: Droplet,
    accent: "text-cyan-300",
    value: "1,500 ml",
    sub: "of 2,000 ml goal",
    progress: "75%",
  },
  {
    label: "Goals",
    gradient: "from-slate-950 via-slate-900 to-indigo-700",
    icon: Target,
    accent: "text-indigo-300",
    value: "Daily Goals",
    sub: "Steps & water targets",
    progress: "90%",
  },
];

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[-180px] bottom-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto w-[calc(100%-28px)] max-w-6xl">
        {/* =====================================================
            HEADER
            ===================================================== */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-blue-600 shadow-sm sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            App preview
          </div>

          <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            See{" "}
            <span className="steptrack-gradient-text">
              StepTrack
            </span>{" "}
            in Action
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            A clean and focused experience designed to make your daily
            activity easy to understand and enjoyable to track.
          </p>
        </motion.div>

        {/* =====================================================
            PHONE SHOWCASE
            ===================================================== */}
        <div className="relative">
          {/* Desktop connecting glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl lg:block" />

          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-end md:gap-6 lg:gap-10">
            {MOCKS.map((mock, index) => {
              const Icon = mock.icon;

              return (
                <motion.div
                  key={mock.label}
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: index === 1 ? -18 : 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: index === 1 ? -28 : -10,
                    scale: 1.025,
                  }}
                  className="group relative w-[235px] sm:w-[245px] lg:w-[260px]"
                >
                  {/* Phone shadow */}
                  <div className="absolute -bottom-8 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-slate-900/20 blur-2xl transition-all duration-500 group-hover:w-[60%]" />

                  {/* Phone */}
                  <div className="relative aspect-[0.485] overflow-hidden rounded-[42px] border-[8px] border-slate-950 bg-slate-950 shadow-[0_30px_70px_rgba(15,23,42,0.24)] sm:rounded-[46px] sm:border-[9px]">
                    {/* Dynamic island */}
                    <div className="absolute left-1/2 top-0 z-30 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950 sm:h-6 sm:w-28" />

                    {/* Screen */}
                    <div
                      className={`relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-gradient-to-b ${mock.gradient}`}
                    >
                      {/* Glow */}
                      <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

                      {/* Top content */}
                      <div className="relative px-5 pt-14 text-center">
                        <motion.div
                          animate={{
                            y: [0, -4, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4,
                          }}
                          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md"
                        >
                          <Icon
                            size={30}
                            strokeWidth={2}
                            className={mock.accent}
                          />
                        </motion.div>

                        <p className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
                          {mock.label}
                        </p>

                        <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                          {mock.value}
                        </h3>

                        <p className="mt-1 text-[9px] font-bold text-white/50">
                          {mock.sub}
                        </p>
                      </div>

                      {/* Progress ring */}
                      <div className="relative mx-auto mt-8 h-28 w-28">
                        <svg
                          viewBox="0 0 100 100"
                          className="h-full w-full -rotate-90"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="5"
                          />

                          <motion.circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="rgba(255,255,255,0.85)"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeDasharray="264"
                            initial={{
                              strokeDashoffset: 264,
                            }}
                            whileInView={{
                              strokeDashoffset:
                                index === 0
                                  ? 45
                                  : index === 1
                                    ? 66
                                    : 27,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 0.7 + index * 0.15,
                              ease: "easeOut",
                            }}
                          />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-black text-white">
                            {mock.progress}
                          </span>
                        </div>
                      </div>

                      {/* Bottom dashboard */}
                      <div className="absolute bottom-0 left-0 right-0 rounded-t-[28px] bg-white/95 px-4 pb-5 pt-5 backdrop-blur-md">
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                              Today's progress
                            </p>

                            <p className="mt-1 text-sm font-black text-slate-900">
                              {mock.progress} complete
                            </p>
                          </div>

                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50">
                            <TrendingUp
                              size={14}
                              className="text-blue-600"
                            />
                          </div>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: mock.progress,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1.2,
                              delay: 1 + index * 0.15,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.15,
                    }}
                    className="mt-5 text-center"
                  >
                    <p className="text-sm font-black text-slate-800">
                      {mock.label}
                    </p>

                    <p className="mt-1 text-xs font-medium text-slate-400">
                      StepTrack preview
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFO
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-14 max-w-2xl text-center sm:mt-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-500 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Designed for simple everyday tracking
          </div>
        </motion.div>
      </div>
    </section>
  );
}