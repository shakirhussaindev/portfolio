"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { profile } from "@/lib/data";

function useTypewriter(
  words,
  { typingMs = 70, deletingMs = 40, pauseMs = 1400 } = {},
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1),
          );
        },
        deleting ? deletingMs : typingMs,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const [showResumeNote, setShowResumeNote] = useState(false);

  const handleResumeClick = () => {
    setShowResumeNote(true);
    setTimeout(() => setShowResumeNote(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-10 pb-16 mt-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            {profile.availability} · {profile.location}
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent-2 to-accent-blue bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-4 flex h-9 items-center font-mono text-md text-text-muted sm:text-xl">
            <span className="mr-2 text-accent">const</span>
            <span className="mr-2 text-text">role</span>
            <span className="mr-2 text-text-muted">=</span>
            <span className="text-accent-2">{typed}</span>
            <span className="ml-0.5 h-5 w-0.5 animate-pulse bg-accent-2" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            {profile.tagline}
          </p>

          {/* <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              title="Resume coming soon"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FiDownload className="h-4 w-4" />
              Download resume
            </button>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-mono text-sm text-text transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              View projects
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div> */}

          <div className="relative mt-9 flex flex-wrap items-center gap-3">
            <a
              // type="button"
              // onClick={handleResumeClick}
              // title="Resume coming soon"
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Resume download link"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
            >
              <FiDownload className="h-4 w-4" />
              Download resume
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-mono text-sm text-text transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              View projects
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <AnimatePresence>
              {showResumeNote && (
                <motion.div
                //   initial={{ opacity: 0, y: 6, scale: 0.96 }}
                //   animate={{ opacity: 1, y: 0, scale: 1 }}
                //   exit={{ opacity: 0, y: 6, scale: 0.96 }}
                //   transition={{ duration: 0.2 }}
                //   className="absolute -top-11 left-0 whitespace-nowrap rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-text-muted shadow-lg"
                >
                  {/* <span className="text-accent-2">$</span> resume.pdf not uploaded yet — check back soon */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              <FiGithub className="h-4.5 w-4.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              <FiLinkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-accent-2/20 via-transparent to-accent/20 blur-xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-text-muted">
                Profile
              </span>
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 1024px) 60vw, 380px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-1.5 px-4 py-4 font-mono text-[12.5px] leading-relaxed">
              <p className="text-text-muted">
                <span className="text-accent-blue">const</span> dev = {"{"}
              </p>
              <p className="pl-4 text-text-muted">
                name:{" "}
                <span className="text-accent-2">
                  &quot;Shakir Hussain&quot;
                </span>
                ,
              </p>
              <p className="pl-4 text-text-muted">
                stack:{" "}
                <span className="text-accent-2">
                  &quot;MERN + Next.js&quot;
                </span>
                ,
              </p>
              <p className="pl-4 text-text-muted">
                focus:{" "}
                <span className="text-accent-2">
                  &quot;full-stack apps&quot;
                </span>
                ,
              </p>
              <p className="text-text-muted">{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
