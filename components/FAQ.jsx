"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What is StepTrack?",
    a: "StepTrack is a mobile fitness app that helps you track your daily steps, set activity goals, and monitor your water intake.",
  },
  {
    q: "What does StepTrack track?",
    a: "StepTrack tracks your daily step count using your phone's motion sensor, your water intake, and your progress toward the goals you set.",
  },
  {
    q: "Which devices are supported?",
    a: "StepTrack is currently available for Android devices.",
  },
  {
    q: "How can I download StepTrack?",
    a: "Tap the Download StepTrack button anywhere on this page to get the app.",
  },
  {
    q: "Does StepTrack require an account?",
    a: "Yes, a simple email and password account is required so your steps, water intake and goals are saved to your profile.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-bold text-slate-900">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-slate-500 text-sm mt-3 leading-relaxed overflow-hidden"
        >
          {a}
        </motion.p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <div>
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
