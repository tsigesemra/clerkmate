"use client";
import { useState } from "react";
import { ChevronDown, CircleAlert, ClipboardList } from "lucide-react";
export function ClerkingPrep() {
  const [open, setOpen] = useState("story");
  const groups = [
    [
      "story",
      "Start with the patient's story",
      "Let the patient describe the problem in their own words before clarifying the details.",
    ],
    [
      "detail",
      "Clarify the pain",
      "Onset and duration, site and radiation, character, severity, progression, and aggravating or relieving factors.",
    ],
    [
      "associated",
      "Ask associated symptoms",
      "Explore gastrointestinal, urinary, constitutional, and cardiorespiratory symptoms relevant to the complaint.",
    ],
  ];
  return (
    <div>
      <SectionTitle
        eyebrow="01 · Preparation"
        title="Know what to ask before you enter"
        description="A concise clinical prompt to help you structure the encounter without turning preparation into a textbook."
      />
      <div className="grid gap-3">
        {groups.map(([id, title, text], i) => (
          <div key={id} className="border-b border-[#dfe6e2] py-1">
            <button
              onClick={() => setOpen(open === id ? "" : id)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="flex items-center gap-3 text-sm font-semibold text-[#26322f]">
                <span className="text-[10px] text-[#238776]">0{i + 1}</span>
                {title}
              </span>
              <ChevronDown
                size={16}
                className={`text-[#238776] transition ${open === id ? "rotate-180" : ""}`}
              />
            </button>
            {open === id && (
              <p className="max-w-2xl pb-5 pl-7 text-sm leading-6 text-[#687771]">
                {text}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Info
          icon={<CircleAlert size={15} />}
          title="Red flags"
          text="Severe or sudden pain, haemodynamic instability, gastrointestinal bleeding, persistent vomiting, or peritonism."
        />
        <Info
          icon={<ClipboardList size={15} />}
          title="Don't forget"
          text="Previous episodes, medications, allergies, past surgery, and the patient's ideas, concerns, and expectations."
        />
      </div>
    </div>
  );
}
function Info({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-[#dfe6e2] bg-white p-5">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#26322f]">
        {icon}
        {title}
      </div>
      <p className="m-0 text-xs leading-5 text-[#687771]">{text}</p>
    </div>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[.13em] text-[#238776]">
        {eyebrow}
      </p>
      <h2 className="!mb-2 !text-[clamp(26px,3vw,38px)] !font-medium !leading-[1.05] tracking-[-.055em] text-[#17201e]">
        {title}
      </h2>
      <p className="m-0 max-w-2xl text-sm leading-6 text-[#687771]">
        {description}
      </p>
    </div>
  );
}
