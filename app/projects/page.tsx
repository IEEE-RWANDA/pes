// PROJECTS — community projects run by the chapter (set "projects" in the content file).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content";
import IrrigationDiagram from "@/components/IrrigationDiagram";
import { Check, External, Pin } from "@/components/Icons";
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
      <PageBanner
        title="Projects"
        intro="Community engineering projects where our members put power, energy and electronics skills to work with partners in Rwanda."
      />
      {projects.map((p, i) => (
        <article key={p.id} id={p.id} className={`scroll-mt-24 ${i > 0 ? "border-t border-rule" : ""}`}>
          <Container className="py-14">
            <p className="inline-block border-2 border-accent bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-ieee-navy">
              {p.status}
            </p>
            <h2 className="mt-4 max-w-4xl font-condensed text-3xl font-bold leading-tight text-ieee-navy sm:text-4xl">{p.title}</h2>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-muted"><Pin /> {p.location}</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink">{p.summary}</p>

            {/* key facts */}
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded border border-rule bg-rule sm:grid-cols-3 lg:grid-cols-6">
              {p.facts.map((f) => (
                <div key={f.label} className="bg-white p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">{f.label}</dt>
                  <dd className="mt-1 font-condensed text-xl font-bold text-ieee-navy">{f.value}</dd>
                </div>
              ))}
            </dl>

            {/* the need */}
            <div className="mt-14 max-w-3xl">
              <h3 className="text-xl font-bold text-ieee-navy">The need</h3>
              {p.problem.map((t) => <p key={t} className="mt-3 leading-relaxed text-ink">{t}</p>)}
            </div>
            {p.diagram === "solar-gravity-irrigation" && <div className="mt-10"><IrrigationDiagram /></div>}

            {/* how it works */}
            <h3 className="mt-14 text-xl font-bold text-ieee-navy">How it works</h3>
            <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {p.howItWorks.map((s, n) => (
                <li key={s.title} className="border-t-4 border-ieee-blue pt-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ieee-navy text-sm font-bold text-white">{n + 1}</span>
                  <h4 className="mt-3 font-bold text-ieee-navy">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{s.text}</p>
                </li>
              ))}
            </ol>

            {/* timeline + impact */}
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-ieee-navy">Timeline</h3>
                <ol className="mt-5 space-y-5 border-l-2 border-rule pl-5">
                  {p.timeline.map((t) => (
                    <li key={t.period} className="relative">
                      <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                      <p className="text-sm font-bold text-brand">{t.period} · {t.phase}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink">{t.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ieee-navy">What we aim to achieve</h3>
                <ul className="mt-5 space-y-3">
                  {p.impact.map((t) => (
                    <li key={t} className="flex gap-3 leading-relaxed text-ink">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* partners, funding, team */}
            <div className="mt-14 grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-ieee-navy">Partners</h3>
                <ul className="mt-5 space-y-4">
                  {p.partners.map((pt) => (
                    <li key={pt.name}>
                      <p className="font-bold text-ieee-navy">
                        {pt.url ? <a href={pt.url} className="inline-flex items-center gap-1 hover:underline">{pt.name} <External /></a> : pt.name}
                      </p>
                      <p className="text-sm leading-relaxed text-ink">{pt.role}</p>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-10 text-xl font-bold text-ieee-navy">Funding</h3>
                <p className="mt-3 leading-relaxed text-ink">{p.funding.text}</p>
                {p.funding.links?.length ? (
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {p.funding.links.map((l) => (
                      <a key={l.href} href={l.href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">{l.label} <External /></a>
                    ))}
                  </p>
                ) : null}
              </div>
              {p.team?.length ? (
                <div className="self-start rounded border border-rule bg-surface p-6">
                  <h3 className="text-xl font-bold text-ieee-navy">Project team</h3>
                  <ul className="mt-4 space-y-2">
                    {p.team.map((m) => (
                      <li key={m.name} className="text-sm">
                        <span className="font-bold text-ieee-navy">{m.name}</span>
                        <span className="text-muted"> · {m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </Container>
        </article>
      ))}
    </>
  );
}
