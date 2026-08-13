"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardList,
  FileText,
  MessageSquare,
  Moon,
  PanelTop,
  Sparkles,
} from "lucide-react";
import { SectionLabel, ProductWindow } from "./shared";

export function PreparePreview() {
  return (
    <section id="cases" className="feature-section section-wrap split-layout">
      <div className="feature-copy">
        <SectionLabel>Before the patient</SectionLabel>
        <h2>
          Prepare with
          <br />
          <em>purpose.</em>
        </h2>
        <p>
          Good histories start before you enter the room. ClerkMate helps you
          map the questions, associated symptoms, and important negatives worth
          keeping in mind.
        </p>
        <p className="quiet-note">
          ClerkMate helps you prepare. Clinical judgment remains yours.
        </p>
      </div>
      <ProductWindow className="prepare-window">
        <div className="prep-content">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Pediatrics / case 004</p>
              <h3>Fever for 3 days</h3>
            </div>
            <span className="tag">preparation</span>
          </div>
          <div className="prep-grid">
            <div>
              <p className="eyebrow">Essential questions</p>
              {[
                "Onset and duration",
                "Fever pattern",
                "Associated symptoms",
                "Feeding and fluid intake",
                "Urine output",
                "Relevant danger signs",
              ].map((item) => (
                <p className="check-row" key={item}>
                  <Check size={14} />
                  {item}
                </p>
              ))}
            </div>
            <div className="differentials">
              <p className="eyebrow">Think around</p>
              {[
                "Infectious causes",
                "Respiratory infection",
                "Malaria",
                "Other relevant causes",
              ].map((item) => (
                <p className="bullet-row" key={item}>
                  <span>•</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="panel-footer">
            <span>
              <Sparkles size={13} /> educational support
            </span>
            <ArrowRight size={14} />
          </div>
        </div>
      </ProductWindow>
    </section>
  );
}

export function BedsidePreview() {
  return (
    <section
      id="bedside"
      className="bedside-section section-wrap split-layout reverse-mobile"
    >
      <div className="phone-wrap">
        <div className="phone-frame">
          <div className="phone-top">
            <span>9:41</span>
            <Moon size={12} />
            <span>▮▮▮</span>
          </div>
          <div className="phone-header">
            <ArrowRight size={16} className="back-arrow" />
            <span>Fever</span>
            <span className="phone-count">12</span>
          </div>
          <div className="phone-body">
            <p className="eyebrow">History checklist</p>
            {["Chief complaint", "Onset", "Duration"].map((item) => (
              <p className="phone-check checked" key={item}>
                <Check size={13} />
                {item}
              </p>
            ))}
            <p className="eyebrow phone-subhead">Associated symptoms</p>
            {["Cough", "Dyspnea", "Vomiting", "Diarrhea", "Convulsions"].map(
              (item) => (
                <p className="phone-check" key={item}>
                  <span className="empty-check" />
                  {item}
                </p>
              ),
            )}
            <button className="phone-button">
              Next <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="feature-copy bedside-copy">
        <SectionLabel>At the bedside</SectionLabel>
        <h2>
          Focused when you need it.
          <br />
          <em>Quiet when you don&apos;t.</em>
        </h2>
        <p>
          A phone-sized checklist that keeps the next useful question close,
          without turning the patient encounter into a screen-time exercise.
        </p>
        <div className="feature-list">
          <span>
            <ClipboardList size={17} /> Quick and readable
          </span>
          <span>
            <PanelTop size={17} /> Minimal distractions
          </span>
        </div>
      </div>
    </section>
  );
}

export function ReviewPreview() {
  return (
    <section id="resources" className="review-section section-wrap">
      <div className="section-intro centered">
        <SectionLabel>After the bedside</SectionLabel>
        <h2>
          Write what you heard.
          <br />
          <em>Learn what you missed.</em>
        </h2>
        <p>
          ClerkMate never replaces your history. It gives you a second set of
          eyes while you are still learning the craft.
        </p>
      </div>
      <ProductWindow className="review-window">
        <div className="review-grid">
          <div className="history-editor">
            <div className="editor-top">
              <span className="eyebrow">Your history</span>
              <span>Saved just now</span>
            </div>
            <p className="editor-label">Chief complaint</p>
            <p className="editor-text strong">Fever for 3 days</p>
            <p className="editor-label">History of presenting illness</p>
            <p className="editor-text">
              The child was apparently well until three days prior to
              presentation, when the mother noticed...
            </p>
            <div className="editor-line" />
          </div>
          <div className="review-panel">
            <div className="editor-top">
              <span className="eyebrow">History review</span>
              <span className="review-status">learning notes</span>
            </div>
            <p className="check-row">
              <Check size={14} />
              Chief complaint documented
            </p>
            <p className="check-row">
              <Check size={14} />
              Onset documented
            </p>
            <p className="warning-row">
              <span>!</span>Duration could be more specific
            </p>
            <p className="warning-row">
              <span>!</span>Ask about respiratory symptoms
            </p>
            <p className="warning-row">
              <span>!</span>Past medical history may need review
            </p>
            <div className="panel-footer">
              <MessageSquare size={13} /> Why this matters{" "}
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </ProductWindow>
    </section>
  );
}

export function PresentationPreview() {
  const questions = [
    "What are your leading differentials?",
    "What findings support your leading diagnosis?",
    "What important diagnosis must you exclude?",
    "What additional history would you obtain?",
  ];
  return (
    <section className="presentation-section section-wrap split-layout">
      <div className="feature-copy">
        <SectionLabel>When the history is done</SectionLabel>
        <h2>
          Be ready for
          <br />
          <em>what comes next.</em>
        </h2>
        <p>
          Turn your case into the questions a supervisor may ask. Think through
          your differentials, supporting findings, and what you still need to
          know.
        </p>
      </div>
      <div className="question-card">
        <div className="question-card-top">
          <span className="eyebrow">After the history</span>
          <span className="tag">presentation prep</span>
        </div>
        <h3>Questions to think about</h3>
        {questions.map((q, i) => (
          <div className="question-row" key={q}>
            <span>{i + 1}</span>
            <p>{q}</p>
          </div>
        ))}
        <button className="copy-button">
          <FileText size={14} /> Copy questions
        </button>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-strip section-wrap">
      <button onClick={() => setOpen(!open)}>
        Is ClerkMate a diagnostic tool?{" "}
        <ChevronDown className={open ? "rotate" : ""} size={17} />
      </button>
      {open && (
        <p>
          No. ClerkMate is an educational preparation and review companion. It
          does not diagnose patients or replace clinical judgment.
        </p>
      )}
    </div>
  );
}
