"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  CheckCircle2,
  Download,
  Footprints,
  Sparkles,
} from "lucide-react";

import { APK_DOWNLOAD_URL } from "@/lib/config";

const BENEFITS = [
  "Track daily steps",
  "Monitor water intake",
  "Set personal goals",
];

export default function DownloadCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-[600px] sm:w-[600px]"
        />

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Decorative dots */}
        <div className="absolute left-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-400/60" />
        <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-cyan-400/50" />
        <div className="absolute bottom-[25%] left-[20%] h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* =====================================================
            MAIN CARD
            ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] px-5 py-12 text-center shadow-2xl backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Top glow line */}
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          {/* Floating icon */}
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl shadow-blue-600/20"
          >
            <Footprints
              size={28}
              className="text-white"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-blue-300 sm:text-xs"
          >
            <Sparkles size={13} />
            Start your journey
          </motion.div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Start Tracking Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Steps Today
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Download StepTrack and start building a more active, consistent
            and healthier daily routine.
          </p>

          {/* Benefits */}
          <div className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-3">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit}
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
                  delay: 0.25 + index * 0.08,
                }}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400"
              >
                <CheckCircle2
                  size={14}
                  className="text-emerald-400"
                />
                {benefit}
              </motion.div>
            ))}
          </div>

          {/* Download button */}
          <motion.a
            href={APK_DOWNLOAD_URL}
            initial={{
              opacity: 0,
              y: 15,
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
              delay: 0.5,
            }}
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group relative mt-9 inline-flex min-h-[54px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-7 text-sm font-black text-slate-950 shadow-2xl shadow-black/20 sm:px-8 sm:text-base"
          >
            {/* Button shine */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <Download
              size={19}
              className="relative transition-transform duration-300 group-hover:-translate-y-1"
            />

            <span className="relative">
              Download StepTrack
            </span>

            <ArrowDown
              size={15}
              className="relative opacity-40 transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </motion.a>

          {/* Small note */}
          <p className="mt-4 text-[10px] font-medium text-slate-600">
            Android APK • Free to download
          </p>
        </motion.div>
      </div>
    </section>
  );
}