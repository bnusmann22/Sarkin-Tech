import type { Metadata } from "next";
import GdgocPlanExperience from "./GdgocPlanExperience";

export const metadata: Metadata = {
  title: "GDGoC BUK Session 1 Action Plan | Just Jamil",
  description:
    "An interactive May to December 2026 action plan for GDGoC BUK, themed GDGoC dey for you.",
};

export default function GdgocPlanPage() {
  return <GdgocPlanExperience />;
}
