"use client";

import Link from "next/link";
import { ArrowLeft, Check, LockKeyhole } from "lucide-react";

const steps = [
  ["01", "Clerking Prep", "Prepare before seeing the patient."],
  ["02", "History Assistant", "Work through the actual history."],
  ["03", "Review History", "Improve structure and completeness."],
  ["04", "Bedside Prep", "Prepare to discuss the case."],
];

export default function CaseWorkspace({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  return (
    <main className="workspace-shell">
      <header className="workspace-header">
        <Link href="/dashboard" className="back-link">
          <ArrowLeft size={15} /> Dashboard
        </Link>
        <span className="workspace-status">
          <span className="status-dot" /> Mock case workspace
        </span>
      </header>
      <section className="workspace-content">
        <div className="workspace-case-heading">
          <p className="dashboard-kicker">Case 01 · Internal Medicine</p>
          <h1>Abdominal Pain</h1>
          <p>54-year-old male</p>
        </div>
        <div className="workspace-rule" />
        <div className="workspace-grid">
          <aside className="workspace-nav">
            <p className="dashboard-kicker">Case workflow</p>
            {steps.map((step, index) => (
              <div
                className={`workspace-step ${index === 0 ? "active" : ""}`}
                key={step[1]}
              >
                <span>{index === 0 ? <Check size={14} /> : step[0]}</span>
                <div>
                  <strong>{step[1]}</strong>
                  <small>{step[2]}</small>
                </div>
              </div>
            ))}
            <div className="simulation-note">
              <LockKeyhole size={15} />
              <div>
                <strong>Patient simulation</strong>
                <small>Coming later</small>
              </div>
            </div>
          </aside>
          <section className="workspace-panel">
            <p className="dashboard-kicker">Step 01 · Before the patient</p>
            <h2>Clerking Prep</h2>
            <p className="workspace-lede">
              Build a focused plan before you enter the room. Know what matters,
              then listen closely.
            </p>
            <div className="prep-block">
              <div>
                <span className="block-number">01</span>
                <h3>Important questions to ask</h3>
                <p>
                  Start with the story in the patient&apos;s own words, then
                  clarify onset, site, character, and progression.
                </p>
              </div>
              <div className="prep-checks">
                <p>
                  <Check size={14} /> Onset and duration
                </p>
                <p>
                  <Check size={14} /> Site and radiation
                </p>
                <p>
                  <Check size={14} /> Character and severity
                </p>
                <p>
                  <Check size={14} /> Associated symptoms
                </p>
              </div>
            </div>
            <div className="workspace-footer">
              <span>Educational workspace · no real patient data</span>
              <button className="button-primary">
                Continue to history{" "}
                <ArrowLeft size={15} className="rotate-arrow" />
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
