import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, CheckCircle2, FileText } from "lucide-react";

const monthMeta = [
  { slug: "month-1", label: "Month 1", range: "May 20 - Jun 20", phase: "Launch", color: "#1A73E8" },
  { slug: "month-2", label: "Month 2", range: "Jun 20 - Jul 20", phase: "Launch", color: "#1557B0" },
  { slug: "month-3", label: "Month 3", range: "Jul 20 - Aug 20", phase: "Growth", color: "#34A853" },
  { slug: "month-4", label: "Month 4", range: "Aug 20 - Sep 20", phase: "Growth", color: "#2E7D32" },
  { slug: "month-5", label: "Month 5", range: "Sep 20 - Oct 20", phase: "Growth", color: "#E65100" },
  { slug: "month-6", label: "Month 6", range: "Oct 20 - Nov 20", phase: "Showcase", color: "#EA4335" },
  { slug: "month-7", label: "Month 7", range: "Nov 20 - Dec 1", phase: "Showcase", color: "#B71C1C" },
  { slug: "month-8", label: "Month 8", range: "Dec 2026", phase: "Showcase", color: "#5F6368" },
];

type PageProps = {
  params: Promise<{ month: string }>;
};

function getMeta(slug: string) {
  return monthMeta.find((month) => month.slug === slug);
}

async function getMonthMarkdown(slug: string) {
  const meta = getMeta(slug);

  if (!meta) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "content", "gdgoc-plan", "months", `${slug}.md`);

  try {
    const markdown = await fs.readFile(filePath, "utf8");
    return { meta, markdown };
  } catch {
    notFound();
  }
}

function renderInline(text: string) {
  const chunks = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean);

  return chunks.map((chunk, index) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return <strong key={`${chunk}-${index}`}>{chunk.slice(2, -2)}</strong>;
    }

    if (chunk.startsWith("`") && chunk.endsWith("`")) {
      return (
        <code key={`${chunk}-${index}`} className="rounded-md bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
          {chunk.slice(1, -1)}
        </code>
      );
    }

    return <span key={`${chunk}-${index}`}>{chunk}</span>;
  });
}

function MarkdownView({ markdown }: { markdown: string }) {
  const lines = markdown.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    nodes.push(
      <ul key={`list-${nodes.length}`} className="my-5 space-y-3">
        {listItems.map((item) => (
          <li key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-slate-600 shadow-sm ring-1 ring-slate-100">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#34A853]" />
            <span>{renderInline(item)}</span>
          </li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();

    if (trimmed.startsWith("# ")) {
      nodes.push(
        <h1 key={index} className="font-clash text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          {renderInline(trimmed.slice(2))}
        </h1>
      );
      return;
    }

    if (trimmed.startsWith("## ")) {
      nodes.push(
        <h2 key={index} className="mt-10 font-clash text-2xl font-bold text-slate-950 sm:text-3xl">
          {renderInline(trimmed.slice(3))}
        </h2>
      );
      return;
    }

    nodes.push(
      <p key={index} className="mt-4 text-lg leading-8 text-slate-600">
        {renderInline(trimmed)}
      </p>
    );
  });

  flushList();
  return <div>{nodes}</div>;
}

export function generateStaticParams() {
  return monthMeta.map((month) => ({ month: month.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { month } = await params;
  const meta = getMeta(month);

  if (!meta) {
    return { title: "GDGoC BUK Month Plan" };
  }

  return {
    title: `${meta.label} Plan | GDGoC BUK`,
    description: `${meta.phase} details for ${meta.label}, ${meta.range}, in the GDGoC BUK Session 1 roadmap.`,
  };
}

export default async function MonthPlanPage({ params }: PageProps) {
  const { month } = await params;
  const { meta, markdown } = await getMonthMarkdown(month);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-96 w-96 rounded-full bg-green-300/25 blur-3xl" />

      <section className="relative mx-auto max-w-5xl">
        <Link href="/gdgoc-plan#roadmap" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4" /> Back to roadmap
        </Link>

        <div className="mt-8 rounded-[2.5rem] border border-white/80 bg-white/85 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.09)] backdrop-blur-xl sm:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black text-white" style={{ backgroundColor: meta.color }}>
                <CalendarDays className="h-4 w-4" /> {meta.phase} | {meta.range}
              </div>
              <MarkdownView markdown={markdown} />
            </div>
            <div className="shrink-0 rounded-3xl bg-slate-950 p-5 text-white sm:w-56">
              <FileText className="mb-5 h-8 w-8 text-[#FBBC04]" />
              <p className="text-sm text-white/55">Editable source</p>
              <p className="mt-2 break-words font-mono text-xs leading-6 text-white/80">content/gdgoc-plan/months/{meta.slug}.md</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
