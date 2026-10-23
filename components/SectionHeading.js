"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : ""}
    >
      <div
        className={`flex items-center gap-3 font-mono text-xs text-accent-2 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-text-muted">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span>{subtitle}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
