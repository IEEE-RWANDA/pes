// PROJECTS — community projects run by the chapter (set "projects" in the content file).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content";
import { External, Pin } from "@/components/Icons";
import { Container, PageBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: `Community engineering projects led by ${site.fullName}.`,
};

export default function ProjectsPage() {
  const projects = site.projects ?? [];
  if (!projects.length) notFound();

  return (
    <>
      <PageBanner title="Projects" intro="Community engineering projects led by our members with partners in Rwanda." />
      <Container className="py-14">
        <div className="max-w-3xl space-y-14">
          {projects.map((p) => (
            <article key={p.id} id={p.id} className="scroll-mt-24">
              <p className="inline-block border-2 border-accent bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-ieee-navy">
                {p.status}
              </p>
              <h2 className="mt-4 font-condensed text-3xl font-bold leading-tight text-ieee-navy">{p.title}</h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted"><Pin /> {p.location}</p>
              {p.description.map((t) => <p key={t} className="mt-4 text-lg leading-relaxed text-ink">{t}</p>)}
              {p.funding && (
                <p className="mt-5 text-sm text-muted">
                  {p.funding.text}{" "}
                  {p.funding.links?.map((l) => (
                    <a key={l.href} href={l.href} className="ml-1 inline-flex items-center gap-1 font-semibold text-brand hover:underline">{l.label} <External /></a>
                  ))}
                </p>
              )}
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
