import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub, FiHome } from "react-icons/fi";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const {slug} = await params
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Shakir Hussain`,
    description: project.short,
  };
}

export default async function ProjectPage({ params }) {
  const {slug} = await params
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const shotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(
    project.live,
  )}?w=1600&h=1000`;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-text-muted transition-colors hover:text-accent-2"
          >
            <FiArrowLeft className="h-4 w-4" />
            back to projects
          </Link>

          <div className="mt-6">
            <span className="font-mono text-xs text-accent-2">
              case study / {project.slug}
            </span>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-2xl text-text-muted">{project.short}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-medium text-bg"
              >
                Live project
                <FiExternalLink className="h-4 w-4" />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-sm text-text transition-colors hover:border-accent-2 hover:text-accent-2"
                >
                  <FiGithub className="h-4 w-4" />
                  Client repo
                </a>
              )}
            </div>
          </div>

          <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-surface-2">
            <Image
              src={shotUrl}
              alt={`Screenshot of ${project.name}`}
              fill
              unoptimized
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 pb-24 sm:grid-cols-2">
            <section>
              <h2 className="font-mono text-sm text-accent-2"># Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="font-mono text-sm text-accent-2">
                # Main tech stack
              </h2>
              <ul className="mt-3 space-y-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-2" />
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-sm text-accent-2">
                # Key Challenges Faced
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </p>
            </section>

            <section>
              <h2 className="font-mono text-sm text-accent-2">
                # Potential Future Improvements
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {project.improvements.map((improve) => (
                  <li key={improve}>{improve}</li>
                ))}
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-3 border-t border-border py-10 sm:flex-row">
            <Link
              href="/#home"
              className="group flex shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-5 font-mono text-sm text-text-muted transition-colors hover:border-accent-2 hover:text-accent-2 sm:justify-start sm:px-6"
            >
              <FiHome className="h-4.5 w-4.5" />
              <span>Home</span>
            </Link>

            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-1 items-center justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent-2/50"
            >
              <div>
                <span className="font-mono text-xs text-text-muted">
                  next project
                </span>
                <p className="mt-1 font-display text-lg font-semibold">
                  {next.name}
                </p>
              </div>
              <FiArrowLeft className="h-5 w-5 rotate-180 text-text-muted transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
