"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/lib/data";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#home"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          <span className="text-accent-2">&lt;</span>Shakir
          <span className="text-accent">.dev</span>
          <span className="text-accent-2">/&gt;</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 rounded-md px-3 py-2 font-mono text-[13px] text-text-muted transition-colors hover:text-text"
            >
              <span className="text-accent-2 opacity-70 group-hover:opacity-100">
                #
              </span>
              {link.file}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <a
            href="#contact"
            className="hidden rounded-md border border-accent-2/40 bg-accent-2/10 px-3.5 py-2 font-mono text-[13px] text-accent-2 transition-colors hover:bg-accent-2/20 sm:block"
          >
            let&apos;s talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text md:hidden"
          >
            {open ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-2 py-3 font-mono text-sm text-text-muted"
                >
                  <span className="text-accent-2">#</span>
                  {link.file}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-xs text-text-muted">theme</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
