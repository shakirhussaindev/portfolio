"use client";

import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-accent-2"
          >
            <FiGithub className="h-4.5 w-4.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-accent-2"
          >
            <FiLinkedin className="h-4.5 w-4.5" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-accent-2 hover:text-accent-2"
          >
            <FiArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
