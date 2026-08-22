"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Droplet,
  Footprints,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Footprints,
    title: "Automatic Step Tracking",
    description: "Keep track of your daily movement without manually entering every step.",
  },
  {
    icon: Droplet,
    title: "Smart Water Tracking",
    description: "Quickly record your water intake and stay closer to your hydration goal.",
  },
  {
    icon: Target,
    title: "Personal Goals",
    description: "Create daily targets that fit your own routine and activity level.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto w-[calc(100%-28px)] max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =====================================================
              LEFT — VISUAL
              ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Main card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-700 p-7 shadow-[0_30px_70px_rgba(15,23,42,0.18)] sm:p-8"
            >
              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />

              <div className="relative z-10">
                {/* Logo icon */}
                <motion.div
                  animate={{
                    rotate: [0, 3, 0, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md"
                >
                  <Footprints
                    size={26}
                    className="text-blue-300"
                  />
                </motion.div>

                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
                  About StepTrack
                </p>

                <h3 className="max-w-xs text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                  Small steps.
                  <br />
                  Better habits.
                  <br />
                  Healthier days.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
                  Everything you need to understand your daily activity and
                  stay consistent with your goals.
                </p>

                {/* Mini stats */}
                <div className="mt-7 grid grid-cols-3 gap-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <Footprints
                      size={15}
                      className="mb-2 text-blue-300"
                    />
                    <p className="text-xs font-black text-white">
                      Steps
                    </p>
                    <p className="mt-0.5 text-[9px] font-medium text-slate-400">
                      Track
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <Droplet
                      size={15}
                      className="mb-2 text-cyan-300"
                    />
                    <p className="text-xs font-black text-white">
                      Water
                    </p>
                    <p className="mt-0.5 text-[9px] font-medium text-slate-400">
                      Hydrate
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <Target
                      size={15}
                      className="mb-2 text-indigo-300"
                    />
                    <p className="text-xs font-black text-white">
                      Goals
                    </p>
                    <p className="mt-0.5 text-[9px] font-medium text-slate-400">
                      Improve
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-5 -right-2 rounded-2xl border border-white bg-white p-3 shadow-xl shadow-slate-900/10 sm:-right-5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
                  <ShieldCheck
                    size={17}
                    className="text-emerald-500"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-slate-400">
                    Built for
                  </p>

                  <p className="text-xs font-black text-slate-900">
                    Everyday fitness
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative circle */}
            <div className="absolute -bottom-12 -left-12 -z-10 h-28 w-28 rounded-full border border-blue-100" />
          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT
              ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
          >
            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              About the app
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
              What is{" "}
              <span className="steptrack-gradient-text">
                StepTrack?
              </span>
            </h2>

            {/* Main paragraph */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              StepTrack is a modern mobile fitness companion designed to help
              you monitor your daily physical activity without making fitness
              feel complicated.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              It tracks your daily steps, lets you set personal step goals,
              monitors your water intake, and brings everything together in
              one clean and easy-to-use dashboard.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                      delay: 0.15 + index * 0.1,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="group flex gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/20">
                      <Icon
                        size={19}
                        className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-black text-slate-900 sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    <CheckCircle2
                      size={17}
                      className="ml-auto mt-1 hidden shrink-0 text-emerald-500 sm:block"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom statement */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                <Zap
                  size={16}
                  className="text-blue-600"
                />
              </div>

              <p className="text-xs font-bold text-slate-500 sm:text-sm">
                Simple tracking. Clear progress. Better consistency.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}