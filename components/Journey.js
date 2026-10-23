"use client";

import { motion } from "framer-motion";
import { journey, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { FiBookOpen } from "react-icons/fi";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="03"
        title="Education & journey"
        subtitle="How I got to full-stack development"
      />

      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="h-fit rounded-xl border border-border bg-surface p-6"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <FiBookOpen className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold">
            {education.degree}
          </h3>
          <p className="mt-1 font-mono text-xs text-accent-2">
            {education.detail}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {education.note}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" />
          <ol className="space-y-10">
            {journey.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent-2 bg-bg sm:h-5 sm:w-5" />
                <p className="font-mono text-xs uppercase tracking-wide text-accent">
                  {item.year}
                </p>
                <h4 className="mt-1 font-display text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
