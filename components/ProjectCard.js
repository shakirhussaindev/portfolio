"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const shotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(
    project.live,
  )}?w=1000&h=650`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent-2/50"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-surface-2"
      >
        <Image
          src={shotUrl}
          alt={`Screenshot of ${project.name}`}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs text-accent-2">
          0{index + 1} / {project.stack[0]}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {project.short}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-accent-2"
        >
          View details
          <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
