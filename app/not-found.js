import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-16">
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

        <div className="mx-auto w-full max-w-lg text-center">
          <p className="font-display text-[clamp(5rem,18vw,8rem)] font-semibold leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_var(--color-border)]">
            404
          </p>

          <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-xl border border-border bg-surface text-left">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-text-muted">
                zsh
              </span>
            </div>
            <div className="space-y-2 px-5 py-5 font-mono text-[13px] leading-relaxed">
              <p className="text-text-muted">
                <span className="text-accent-2">$</span> cd ~/requested-page
              </p>
              <p className="text-accent">
                zsh: no such file or directory: requested-page
              </p>
              <p className="text-text-muted">
                <span className="text-accent-2">$</span>{" "}
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <h1 className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            This page took a wrong turn.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, moved, or never
            shipped. Let&apos;s get you back on route.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              <FiHome className="h-4 w-4" />
              Back to home
            </Link>
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-mono text-sm text-text transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              View projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
