"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="01"
        title="About me"
        subtitle="Who I am, and how I got here"
      />

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {profile.about.map((paragraph, i) => (
            <p
              key={i}
              className="text-[15px] leading-relaxed text-text-muted sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-fit overflow-hidden rounded-xl border border-border bg-surface"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-text-muted">
              ~/about.sh
            </span>
          </div>
          <div className="space-y-3 px-5 py-5 font-mono text-[13px] leading-relaxed">
            <p className="text-text-muted">
              <span className="text-accent-2">$</span> whoami
            </p>
            <p className="pl-4 text-text">{profile.name}</p>
            <p className="text-text-muted">
              <span className="text-accent-2">$</span> location
            </p>
            <p className="pl-4 text-text">{profile.location}</p>
            <p className="text-text-muted">
              <span className="text-accent-2">$</span> focus
            </p>
            <p className="pl-4 text-text">
              React · Next.js · Node.js · MongoDB
            </p>
            <p className="text-text-muted">
              <span className="text-accent-2">$</span> status
            </p>
            <p className="pl-4">
              <span className="text-accent">{profile.availability}</span>
            </p>
            <p className="text-text-muted">
              <span className="text-accent-2">$</span>{" "}
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
