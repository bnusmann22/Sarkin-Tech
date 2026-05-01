"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Handshake,
  Layers3,
  Megaphone,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
  RotateCcw,
} from "lucide-react";

const colors = {
  blue: "#1A73E8",
  green: "#34A853",
  yellow: "#F9AB00",
  red: "#EA4335",
  ink: "#202124",
  muted: "#5F6368",
};

const stats = [
  { label: "Session Duration", value: "8 Months", color: colors.blue },
  { label: "Kick-off Date", value: "May 20", color: colors.green },
  { label: "Focus", value: "Visibility", color: colors.yellow },
  { label: "Lead", value: "Jamil M.A", color: colors.red },
];

const pillars = [
  {
    title: "Visibility",
    text: "Make GDGoC BUK known across the entire university.",
    icon: Megaphone,
    color: colors.blue,
  },
  {
    title: "Inclusiveness",
    text: "Remove the 'only for techies' perception.",
    icon: Users,
    color: colors.green,
  },
  {
    title: "Collaboration",
    text: "Build institutional partnerships with student bodies and faculty.",
    icon: Handshake,
    color: colors.yellow,
  },
  {
    title: "Foundation",
    text: "Set up the structures that will power Sessions 2 and beyond.",
    icon: Layers3,
    color: colors.red,
  },
];

const partners = [
  {
    tier: "Tier 1",
    partner: "FoC",
    title: "Faculty of Computing",
    brings: "Venue access, academic credibility, access to CS/SE/IT students.",
    offer: "Tech workshops, project showcases, AI and coding skills for students.",
    color: colors.blue,
  },
  {
    tier: "Tier 1",
    partner: "MSSN FoC",
    title: "Trust network",
    brings: "Large Muslim student base, trust network, event co-hosting.",
    offer: "Non-tech workshops, career talks, community building sessions.",
    color: colors.blue,
  },
  {
    tier: "Tier 1",
    partner: "NACOS BUK",
    title: "Peer-to-peer reach",
    brings: "CS association network, peer-to-peer reach, existing structure.",
    offer: "Joint hackathons, Build-with-AI events, technical upskilling.",
    color: colors.blue,
  },
  {
    tier: "Tier 1",
    partner: "AWS Cloud Club BUK",
    title: "Cloud muscle",
    brings: "Cloud expertise, co-marketing, AWS-certified speakers.",
    offer: "Combined events, dual-branding, expanded tech audience.",
    color: colors.blue,
  },
  {
    tier: "Tier 2",
    partner: "NUESA BUK",
    title: "Engineering expansion",
    brings: "Engineering students, a largely untapped GDGoC audience.",
    offer: "IoT and hardware talks, Build-with-AI for engineering problems.",
    color: colors.green,
  },
  {
    tier: "Tier 2",
    partner: "SUG BUK",
    title: "University-wide reach",
    brings: "Official university-wide reach and legitimacy.",
    offer: "Major event partnerships, campaign endorsement, space and funding.",
    color: colors.green,
  },
  {
    tier: "Tier 2",
    partner: "BUK Innovation Hub",
    title: "Startup ecosystem",
    brings: "Infrastructure, mentors, startup ecosystem.",
    offer: "Project support, space for clusters, Demo Day venue.",
    color: colors.green,
  },
];

const months = [
  {
    id: 1,
    slug: "month-1",
    phase: "Launch",
    label: "Month 1",
    range: "May 20 - Jun 20",
    color: colors.blue,
    goals: ["Assemble core team", "Launch social media presence", "Secure FoC partnership", "Announce theme publicly"],
    activities: ["Kick-off event", "Social media blitz", "Core team onboarding call", "Partnership meetings with FoC and MSSN"],
    partners: ["FoC", "MSSN FoC", "AWS Club"],
    kpi: ["50+ new followers", "Core team of 8-10", "2 partnership MOUs signed"],
  },
  {
    id: 2,
    slug: "month-2",
    phase: "Launch",
    label: "Month 2",
    range: "Jun 20 - Jul 20",
    color: "#1557B0",
    goals: ["Expand reach to NACOS and NUESA", "First public event", "Onboard 100 members"],
    activities: ["GDGoC dey for you orientation", "NACOS joint session", "Member registration drive", "Flyer campaigns across faculties"],
    partners: ["NACOS", "NUESA", "SUG BUK"],
    kpi: ["100 registered members", "1 joint event done", "3+ faculties represented"],
  },
  {
    id: 3,
    slug: "month-3",
    phase: "Growth",
    label: "Month 3",
    range: "Jul 20 - Aug 20",
    color: colors.green,
    goals: ["Launch skill clusters", "Begin weekly sessions", "First informal hackathon"],
    activities: ["Cluster kick-offs", "Weekly Saturday sessions", "Build in a Day mini-hackathon"],
    partners: ["FoC", "AWS Club", "BUK Innovation Hub"],
    kpi: ["5 clusters active", "50+ session attendees", "1 hackathon held"],
  },
  {
    id: 4,
    slug: "month-4",
    phase: "Growth",
    label: "Month 4",
    range: "Aug 20 - Sep 20",
    color: "#2E7D32",
    goals: ["Deepen cluster depth", "Guest speakers", "Mid-session visibility push"],
    activities: ["Industry speaker series", "Cluster project kickoffs", "Member spotlight series", "Mid-session survey"],
    partners: ["Alumni", "MSSN FoC", "NACOS"],
    kpi: ["3+ speakers hosted", "Every cluster has a project", "150+ total members"],
  },
  {
    id: 5,
    slug: "month-5",
    phase: "Growth",
    label: "Month 5",
    range: "Sep 20 - Oct 20",
    color: "#E65100",
    goals: ["Formal hackathon", "Partner with SUG BUK", "Milestone celebration"],
    activities: ["Build with AI Hackathon", "Mid-year internal showcase", "Partner activation with SUG BUK", "Blog or press release"],
    partners: ["SUG BUK", "NUESA", "BUK Innovation Hub"],
    kpi: ["30+ hackathon participants", "5+ projects submitted", "University media coverage"],
  },
  {
    id: 6,
    slug: "month-6",
    phase: "Showcase",
    label: "Month 6",
    range: "Oct 20 - Nov 20",
    color: colors.red,
    goals: ["Project polishing", "Prepare Demo Day", "Document session impact"],
    activities: ["Cluster project reviews", "Demo Day prep workshops", "Impact report draft", "Identify next leads"],
    partners: ["BUK Innovation Hub", "FoC", "Alumni"],
    kpi: ["All projects demo-ready", "Impact report drafted", "Year 2 core team identified"],
  },
  {
    id: 7,
    slug: "month-7",
    phase: "Showcase",
    label: "Month 7",
    range: "Nov 20 - Dec 1",
    color: "#B71C1C",
    goals: ["Demo Day", "Public showcase", "Media and press"],
    activities: ["Open Demo Day", "Live project demos", "Awards and recognition", "Social media recap"],
    partners: ["All partners", "SUG BUK", "FoC", "BUK Media"],
    kpi: ["100+ Demo Day attendees", "10+ projects shown", "University-wide coverage"],
  },
  {
    id: 8,
    slug: "month-8",
    phase: "Showcase",
    label: "Month 8",
    range: "Dec 2026",
    color: colors.muted,
    goals: ["Review and retrospective", "Plan for Year 2", "Transition and handover prep"],
    activities: ["Session 1 retrospective", "Publish impact report", "Year 2 planning workshop", "Thank partners officially"],
    partners: ["All partners", "Regional GDGoC Lead", "BUK Alumni"],
    kpi: ["Session 1 report published", "Year 2 plan outline ready", "All partners re-confirmed"],
  },
];

const phaseCopy = {
  Launch: "Make GDGoC BUK visible. Get people talking. Lock in the core team and key partnerships.",
  Growth: "Build habits with weekly sessions, skill clusters, and cross-community hackathons.",
  Showcase: "Make the impact visible, celebrate the community, and set the stage for Year 2.",
};

const metrics = [
  ["Total Registered Members", "150", "250+", 78],
  ["Faculties Represented", "3", "5+", 70],
  ["Partnership MOUs", "3", "6+", 62],
  ["Events / Sessions Held", "12", "20+", 74],
  ["Hackathon Participants", "30", "60+", 58],
  ["Projects Completed", "5", "10+", 68],
  ["Demo Day Attendance", "80", "150+", 64],
  ["Social Media Followers", "300", "600+", 82],
];

const phaseOrder = ["Launch", "Growth", "Showcase"];

const storageKey = "gdgoc-plan-roadmap-completed";

function ListCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
        <h3 className="font-clash text-lg font-semibold text-slate-950">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GdgocPlanExperience() {
  const [activePhase, setActivePhase] = useState("Launch");
  const [activeMonth, setActiveMonth] = useState(1);
  const [activePartner, setActivePartner] = useState(partners[0].partner);
  const [openMetric, setOpenMetric] = useState(metrics[0][0]);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);

  const visibleMonths = useMemo(
    () => months.filter((month) => month.phase === activePhase),
    [activePhase]
  );

  const selectedMonth = months.find((month) => month.id === activeMonth) ?? months[0];
  const selectedPartner = partners.find((partner) => partner.partner === activePartner) ?? partners[0];
  const progress = Math.round((selectedMonth.id / months.length) * 100);
  const roadmapItems = months.flatMap((month) =>
    month.kpi.map((milestone, index) => ({
      id: `${month.slug}-${index}`,
      month,
      milestone,
    }))
  );
  const completedCount = completedMilestones.length;
  const completionPercent = Math.round((completedCount / roadmapItems.length) * 100);

  useEffect(() => {
    const savedMilestones = window.localStorage.getItem(storageKey);

    if (savedMilestones) {
      try {
        setCompletedMilestones(JSON.parse(savedMilestones) as string[]);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(completedMilestones));
  }, [completedMilestones]);

  const toggleMilestone = (id: string) => {
    setCompletedMilestones((current) =>
      current.includes(id)
        ? current.filter((milestoneId) => milestoneId !== id)
        : [...current, id]
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-green-300/30 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-yellow-200/45 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" /> Session 1 Action Plan | May - December 2026
            </div>
            <h1 className="font-clash text-5xl font-bold tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
              GDGoC BUK
              <span className="mt-2 block bg-gradient-to-r from-[#1A73E8] via-[#34A853] to-[#F9AB00] bg-clip-text text-transparent">
                dey for you.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              A campus-wide operating system for visibility, inclusion, partnerships, and a stronger developer community at Bayero University Kano.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#roadmap" className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800">
                Explore the roadmap <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#partners" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700">
                Partnership map
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[2.25rem] border border-white/80 bg-white/75 p-4 shadow-[0_30px_100px_rgba(26,115,232,0.18)] backdrop-blur-xl"
            >
              <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Command center</p>
                    <h2 className="font-clash text-3xl font-semibold">Session pulse</h2>
                  </div>
                  <Zap className="h-8 w-8 text-[#FBBC04]" />
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.08 }}
                      className="rounded-3xl p-4"
                      style={{ backgroundColor: stat.color }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">{stat.label}</p>
                      <p className="mt-3 font-clash text-2xl font-bold">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 rounded-3xl bg-white/10 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span>Session readiness</span>
                    <span className="font-bold">{progress}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-[#1A73E8] via-[#34A853] to-[#FBBC04]" animate={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.35em] text-blue-700">Overview</p>
            <h2 className="mt-3 font-clash text-4xl font-bold text-slate-950 sm:text-5xl">Four pillars, one promise.</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            GDGoC BUK is open to every BUK student, regardless of faculty, department, or technical background.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, rotate: index % 2 ? -1 : 1 }}
                className="group rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: pillar.color }}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-clash text-2xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="roadmap" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/75 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
              <p className="font-bold uppercase tracking-[0.35em] text-white/45">Interactive roadmap</p>
              <h2 className="mt-4 font-clash text-4xl font-bold sm:text-5xl">Tick progress as the session moves.</h2>
              <p className="mt-5 leading-8 text-white/65">
                This checklist saves in your browser, so the roadmap can become a live operating board during the session.
              </p>

              <div className="mt-8 rounded-3xl bg-white/10 p-5">
                <div className="mb-4 flex items-center justify-between gap-4 text-sm">
                  <span className="font-bold">Milestone completion</span>
                  <span className="font-black text-[#34A853]">{completedCount}/{roadmapItems.length}</span>
                </div>
                <div className="h-4 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#1A73E8] via-[#34A853] to-[#FBBC04]"
                    animate={{ width: `${completionPercent}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-white/55">{completionPercent}% complete</p>
              </div>

              <button
                onClick={() => setCompletedMilestones([])}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 transition hover:border-white/35 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" /> Reset checklist
              </button>
            </div>

            <div className="max-h-[780px] overflow-y-auto p-4 sm:p-6 lg:p-8">
              <div className="space-y-4">
                {months.map((month) => {
                  const monthItems = roadmapItems.filter((item) => item.month.id === month.id);
                  const monthDone = monthItems.filter((item) => completedMilestones.includes(item.id)).length;

                  return (
                    <motion.div
                      key={month.slug}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white" style={{ backgroundColor: month.color }}>
                            {month.id}
                          </span>
                          <div>
                            <p className="font-clash text-xl font-semibold text-slate-950">{month.label}</p>
                            <p className="text-sm text-slate-500">{month.phase} | {month.range}</p>
                          </div>
                        </div>
                        <Link
                          href={`/gdgoc-plan/${month.slug}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                        >
                          <BookOpen className="h-4 w-4" /> Details
                        </Link>
                      </div>

                      <div className="space-y-2">
                        {monthItems.map((item) => {
                          const isDone = completedMilestones.includes(item.id);

                          return (
                            <button
                              key={item.id}
                              onClick={() => toggleMilestone(item.id)}
                              className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 ${
                                isDone
                                  ? "border-green-200 bg-green-50 text-slate-500"
                                  : "border-slate-100 bg-slate-50 text-slate-700 hover:bg-white"
                              }`}
                            >
                              <span
                                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                                  isDone ? "border-[#34A853] bg-[#34A853] text-white" : "border-slate-300 bg-white"
                                }`}
                              >
                                {isDone ? <CheckCircle2 className="h-4 w-4" /> : null}
                              </span>
                              <span className={`text-sm leading-6 ${isDone ? "line-through" : ""}`}>{item.milestone}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: month.color }}
                          animate={{ width: `${Math.round((monthDone / monthItems.length) * 100)}%` }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white/70 p-5 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.35em] text-green-700">Timeline</p>
              <h2 className="mt-3 font-clash text-4xl font-bold sm:text-5xl">Month-by-month action plan.</h2>
            </div>
            <div className="flex flex-wrap gap-2 rounded-full bg-slate-100 p-2">
              {phaseOrder.map((phase) => (
                <button
                  key={phase}
                  onClick={() => {
                    setActivePhase(phase);
                    setActiveMonth(months.find((month) => month.phase === phase)?.id ?? 1);
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${activePhase === phase ? "bg-slate-950 text-white shadow-lg" : "text-slate-500 hover:bg-white hover:text-slate-950"}`}
                >
                  {phase}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-6 w-6 text-[#34A853]" />
                  <div>
                    <h3 className="font-clash text-2xl font-semibold">Phase {phaseOrder.indexOf(activePhase) + 1}: {activePhase}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/65">{phaseCopy[activePhase as keyof typeof phaseCopy]}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {visibleMonths.map((month) => (
                  <button
                    key={month.id}
                    onClick={() => setActiveMonth(month.id)}
                    className={`w-full rounded-3xl border p-4 text-left transition hover:-translate-y-0.5 ${activeMonth === month.id ? "border-slate-950 bg-white shadow-xl" : "border-slate-200 bg-white/60 hover:bg-white"}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black text-white" style={{ backgroundColor: month.color }}>
                          {month.id}
                        </span>
                        <div>
                          <p className="font-clash text-xl font-semibold text-slate-950">{month.label}</p>
                          <p className="text-sm text-slate-500">{month.range}</p>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-slate-400 transition ${activeMonth === month.id ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMonth.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="rounded-[2rem] bg-[#f8fafc] p-4 sm:p-6"
              >
                <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em]" style={{ color: selectedMonth.color }}>{selectedMonth.phase}</p>
                    <h3 className="font-clash text-3xl font-bold text-slate-950">{selectedMonth.label}: {selectedMonth.range}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">{progress}% through session</div>
                    <Link
                      href={`/gdgoc-plan/${selectedMonth.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
                    >
                      <BookOpen className="h-4 w-4" /> Full month plan
                    </Link>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <ListCard title="Goals" items={selectedMonth.goals} color={selectedMonth.color} />
                  <ListCard title="Activities" items={selectedMonth.activities} color={selectedMonth.color} />
                  <ListCard title="Partners" items={selectedMonth.partners} color={selectedMonth.color} />
                  <ListCard title="KPI / Target" items={selectedMonth.kpi} color={selectedMonth.color} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="partners" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.35em] text-red-600">Partnership map</p>
            <h2 className="mt-3 font-clash text-4xl font-bold sm:text-5xl">The engine of Session 1.</h2>
          </div>
          <p className="max-w-xl text-slate-600">Click a partner to see the exchange: what they bring, and what GDGoC BUK offers back.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {partners.map((partner) => (
              <button
                key={partner.partner}
                onClick={() => setActivePartner(partner.partner)}
                className={`rounded-3xl border p-4 text-left transition hover:-translate-y-1 ${activePartner === partner.partner ? "border-slate-950 bg-white shadow-xl" : "border-slate-200 bg-white/65 hover:bg-white"}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full px-3 py-1 text-xs font-black text-white" style={{ backgroundColor: partner.color }}>{partner.tier}</span>
                  <CircleDot className="h-5 w-5" style={{ color: partner.color }} />
                </div>
                <h3 className="font-clash text-xl font-semibold text-slate-950">{partner.partner}</h3>
                <p className="mt-1 text-sm text-slate-500">{partner.title}</p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPartner.partner}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="rounded-[2.25rem] border border-white/80 bg-white/85 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.1)] backdrop-blur"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: selectedPartner.color }}>{selectedPartner.tier}</p>
                  <h3 className="mt-2 font-clash text-4xl font-bold text-slate-950">{selectedPartner.partner}</h3>
                  <p className="mt-2 text-slate-500">{selectedPartner.title}</p>
                </div>
                <Handshake className="h-10 w-10" style={{ color: selectedPartner.color }} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-950 p-5 text-white">
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-white/50">What they bring</p>
                  <p className="text-lg leading-8">{selectedPartner.brings}</p>
                </div>
                <div className="rounded-3xl p-5 text-white" style={{ backgroundColor: selectedPartner.color }}>
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-white/70">What we offer</p>
                  <p className="text-lg leading-8">{selectedPartner.offer}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.35em] text-yellow-700">Success metrics</p>
            <h2 className="mt-3 font-clash text-4xl font-bold sm:text-5xl">Targets worth chasing.</h2>
          </div>
          <p className="max-w-xl text-slate-600">Each metric has a minimum target and a stretch target. Tap a card to spotlight the ambition.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([metric, minimum, stretch, confidence]) => {
            const active = openMetric === metric;
            return (
              <button
                key={metric as string}
                onClick={() => setOpenMetric(metric as string)}
                className={`rounded-[2rem] border p-5 text-left transition hover:-translate-y-1 ${active ? "border-slate-950 bg-slate-950 text-white shadow-2xl" : "border-slate-200 bg-white/75 text-slate-950 hover:bg-white"}`}
              >
                <Target className={`mb-5 h-7 w-7 ${active ? "text-[#34A853]" : "text-[#1A73E8]"}`} />
                <h3 className="min-h-14 font-clash text-xl font-semibold">{metric}</h3>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className={`rounded-2xl p-3 ${active ? "bg-white/10" : "bg-slate-100"}`}>
                    <p className="text-xs opacity-60">Minimum</p>
                    <p className="mt-1 font-bold">{minimum}</p>
                  </div>
                  <div className={`rounded-2xl p-3 ${active ? "bg-white/10" : "bg-green-50"}`}>
                    <p className="text-xs opacity-60">Stretch</p>
                    <p className="mt-1 font-bold text-[#34A853]">{stretch}</p>
                  </div>
                </div>
                <div className={`mt-5 h-2 overflow-hidden rounded-full ${active ? "bg-white/10" : "bg-slate-100"}`}>
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-[#1A73E8] to-[#34A853]" animate={{ width: `${confidence}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-28 pt-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)]">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative p-8 sm:p-10">
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#34A853]/25 blur-2xl" />
              <Trophy className="mb-8 h-12 w-12 text-[#FBBC04]" />
              <p className="font-bold uppercase tracking-[0.35em] text-white/45">Closing note</p>
              <h2 className="mt-4 font-clash text-4xl font-bold sm:text-5xl">Build now. Leave infrastructure behind.</h2>
              <p className="mt-5 leading-8 text-white/65">
                This is Session 1 of a 2-year tenure. Every decision should deliver results now while laying the people, partnerships, and reputation that make Sessions 2 and 3 stronger.
              </p>
            </div>
            <div className="bg-white p-8 text-slate-950 sm:p-10">
              <blockquote className="font-clash text-4xl font-bold leading-tight text-[#34A853] sm:text-5xl">
                &quot;GDGoC dey for you!&quot;
              </blockquote>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                GDGoC BUK is not just a tech club. It is a community where every BUK student, from any faculty, can find a place to grow, collaborate, and build.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-3xl bg-slate-100 p-5">
                <div className="relative h-26 w-26 shrink-0 overflow-hidden rounded-full ring-4 ring-white">
                  <Image
                    src="/assets/Jamil-AI.png"
                    alt="Jamil Muhammad Abdullahi"
                    fill
                    sizes="64px"
                    className="object-cover object-[center_28%]"
                  />
                </div>
                <div>
                  <p className="font-clash text-2xl font-semibold">Jamil Muhammad Abdullahi</p>
                  <p className="mt-1 text-slate-500">Lead, GDGoC BUK | Session 1, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
