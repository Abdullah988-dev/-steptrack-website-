"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, LineChart, Target } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Download,
    title: "Download",
    description:
      "Download the StepTrack app and install it on your Android device.",
  },
  {
    number: "02",
    icon: Target,
    title: "Set Your Goal",
    description:
      "Set your daily step and water intake targets to match your routine.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Track Your Progress",
    description:
      "Walk through your day and watch your progress update in real time.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
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
            scale: [1, 1.12, 1],
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

      <div className="relative mx-auto w-[calc(100%-28px)] max-w-5xl">
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
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Simple by design
          </div>

          <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            How{" "}
            <span className="steptrack-gradient-text">
              StepTrack
            </span>{" "}
            Works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Getting started takes just a few simple steps. Set your goals,
            stay active, and let StepTrack keep you on track.
          </p>
        </motion.div>

        {/* =====================================================
            STEPS
            ===================================================== */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[67px] hidden h-px bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 md:block" />

          {/* Animated line */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-[16.66%] right-[16.66%] top-[67px] hidden h-[2px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 md:block"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >
                  {/* Mobile connecting line */}
                  {index < STEPS.length - 1 && (
                    <div className="absolute bottom-[-20px] left-1/2 z-0 hidden h-5 w-px bg-gradient-to-b from-blue-200 to-transparent md:hidden" />
                  )}

                  <div className="relative h-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white p-6 shadow-sm transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-[0_22px_50px_rgba(37,99,235,0.11)] sm:p-7">
                    {/* Top glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Number */}
                    <span className="absolute right-5 top-4 select-none text-5xl font-black tracking-tighter text-slate-100 transition-colors duration-500 group-hover:text-blue-50 sm:right-6">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20"
                    >
                      <Icon
                        size={23}
                        strokeWidth={2.2}
                        className="text-white"
                      />

                      <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="mb-2 text-lg font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom arrow */}
                    <div className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-600 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      <span>Step {index + 1}</span>
                      <ArrowRight size={13} />
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
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
          className="mt-12 flex justify-center"
        >
          <a
            href="#screenshots"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md sm:text-sm"
          >
            See the app in action

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}