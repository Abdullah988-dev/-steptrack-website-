"use client";

import { motion } from "framer-motion";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] sm:p-7"
    >
      {/* Hover background glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: delay + 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent"
      />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: -5,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="relative mb-5 flex h-13 w-13 items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm"
      >
        {/* Icon glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <Icon
          size={22}
          strokeWidth={2.2}
          className="relative z-10 text-blue-600 transition-transform duration-300 group-hover:scale-110"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="mb-2 text-base font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-lg">
          {title}
        </h3>

        <p className="text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      {/* Bottom arrow */}
      <motion.div
        initial={{
          opacity: 0,
          x: -5,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
        }}
        className="mt-5 flex items-center gap-1 text-xs font-bold text-blue-600"
      >
        <span>Explore</span>

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </motion.div>

      {/* Corner decoration */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 translate-x-8 translate-y-8 rounded-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-xl transition-transform duration-500 group-hover:scale-150" />
    </motion.div>
  );
}