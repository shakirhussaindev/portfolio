"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface-2/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          index="02"
          title="Skills & tools"
          subtitle="What I build with"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-mono text-sm text-accent-2">
                // {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-bg px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent-2 hover:text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
