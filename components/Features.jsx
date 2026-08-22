"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Droplet,
  Footprints,
  LayoutDashboard,
  Target,
  TrendingUp,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    icon: Footprints,
    title: "Step Tracking",
    description:
      "Your daily walking steps are tracked automatically using your device's built-in motion sensor.",
  },
  {
    icon: Target,
    title: "Daily Goals",
    description:
      "Set your own daily step and water targets, and track how close you are to reaching them.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "See your daily progress at a glance with clean circular progress indicators and a weekly activity view.",
  },
  {
    icon: Droplet,
    title: "Water Tracking",
    description:
      "Log your daily water intake with quick-add buttons and keep your hydration on track.",
  },
  {
    icon: LayoutDashboard,
    title: "Fitness Dashboard",
    description:
      "A clean home dashboard brings your steps, water intake and goal progress together in one place.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Optional water and daily step check-in reminders help you stay consistent throughout the day.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto w-[calc(100%-28px)] max-w-6xl">
        {/* =====================================================
            SECTION HEADER
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16"
        >
          {/* Small label */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-blue-600 shadow-sm sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Built for your routine
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            Everything You Need
            <br className="hidden sm:block" />{" "}
            <span className="steptrack-gradient-text">
              to Stay Active
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            A focused set of tools built to help you build and keep a
            healthier daily routine — without unnecessary complexity.
          </p>
        </motion.div>

        {/* =====================================================
            FEATURE GRID
            ===================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="min-w-0"
            >
              <FeatureCard
                {...feature}
                delay={index * 0.04}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM MINI CTA
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
          className="mt-10 flex justify-center sm:mt-12"
        >
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md sm:text-sm"
          >
            See how StepTrack works

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}