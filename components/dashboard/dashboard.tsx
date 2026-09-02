"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Plus, X } from "lucide-react";

const cases = [
  {
    complaint: "Abdominal Pain",
    age: 54,
    sex: "male",
    specialty: "Internal Medicine",
    stage: "History Assistant",
    progress: 80,
    edited: "2 hours ago",
    id: "abdominal-pain",
  },
  {
    complaint: "Headache",
    age: 22,
    sex: "female",
    specialty: "Neurology",
    stage: "Clerking Prep",
    progress: 35,
    edited: "Yesterday",
    id: "headache",
  },
  {
    complaint: "Fever",
    age: 7,
    sex: "male",
    specialty: "Pediatrics",
    stage: "Review History",
    progress: 65,
    edited: "3 days ago",
    id: "fever",
  },
  {
    complaint: "Shortness of Breath",
    age: 68,
    sex: "female",
    specialty: "Internal Medicine",
    stage: "Bedside Prep",
    progress: 92,
    edited: "5 days ago",
    id: "shortness-of-breath",
  },
];

const kicker =
  "mb-3 text-[10px] font-bold uppercase tracking-[.13em] text-[#238776]";
const input =
  "mt-2 h-[43px] w-full rounded border border-[#cfdad5] bg-white px-3 text-[13px] font-normal text-[#26322f] outline-none focus:border-[#4baf9d]";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false),
    [profileOpen, setProfileOpen] = useState(false),
    [hovered, setHovered] = useState<string | null>(null),
    [loading, setLoading] = useState(false);
  function startCase() {
    setLoading(true);
    window.setTimeout(() => {
      window.location.href = "/cases/new";
    }, 650);
  }
  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17201e]">
      <header className="mx-auto flex h-[78px] w-[min(1120px,calc(100%-48px))] items-center justify-between border-b border-[#dfe6e2] max-[800px]:w-[min(calc(100%-36px),600px)]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[15px] font-bold tracking-[-.035em]"
        >
          <span className="size-[31px] rounded-[6px_6px_6px_3px] border border-[#9fcfc2] bg-[#e3f1ed]" />
          <span>ClerkMate</span>
        </Link>
        <div className="relative">
          <button
            className="flex items-center gap-[9px] border-0 bg-transparent text-xs text-[#52605b]"
            onClick={() => setProfileOpen(!profileOpen)}
            aria-expanded={profileOpen}
          >
            <span className="grid size-[31px] place-items-center rounded-full bg-[#c9e4dd] text-[10px] font-bold text-[#0a4b41]">
              AM
            </span>
            <span className="max-[800px]:hidden">Alex Morgan</span>
            <ChevronDown size={14} />
          </button>
          {profileOpen && (
            <div className="absolute right-0 top-[42px] z-10 min-w-[170px] rounded-lg border border-[#d9e2de] bg-white p-[15px] shadow-[0_14px_35px_#17332b18]">
              <p className="mb-[3px] text-xs font-bold">Alex Morgan</p>
              <span className="text-[11px] text-[#7a8882]">
                Medical student · C2
              </span>
              <button
                className="mt-[14px] block border-0 bg-transparent p-0 text-[11px] text-[#668078]"
                onClick={() => setProfileOpen(false)}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </header>
      <section className="mx-auto w-[min(1120px,calc(100%-48px))] py-[92px] pb-20 max-[800px]:w-[min(calc(100%-36px),600px)] max-[800px]:pt-[58px]">
        <div className="flex items-end justify-between gap-10 max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-7">
          <div>
            <p className={kicker}>Student workspace</p>
            <h1 className="mb-4 text-[clamp(42px,6vw,70px)] font-medium leading-[.93] tracking-[-.07em]">
              Welcome back, Alex.
            </h1>
            <p className="m-0 max-w-[430px] text-[15px] leading-[1.7] text-[#687771]">
              Pick up where you left off, or start a new case to prepare for
              your next patient.
            </p>
          </div>
          <button
            className="button-primary whitespace-nowrap border-0 max-[800px]:w-full max-[800px]:justify-center"
            onClick={() => setModalOpen(true)}
          >
            <Plus size={17} /> Start New Case
          </button>
        </div>
        <section className="mt-[105px] max-[800px]:mt-[75px]">
          <div className="flex items-end justify-between border-b border-[#cdd9d4] pb-4">
            <div>
              <p className={kicker}>Your workspace</p>
              <h2 className="m-0 text-[30px] font-medium tracking-[-.065em]">
                Recent cases
              </h2>
            </div>
            <span className="text-[11px] text-[#82908a]">
              {cases.length} active cases
            </span>
          </div>
          <div className="border-b border-[#dfe6e2]">
            {cases.map((item, index) => (
              <article
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={`border-b border-[#dfe6e2] py-[26px] transition-[padding] duration-300 last:border-0 ${hovered === item.id ? "pb-5" : ""}`}
              >
                <div className="grid grid-cols-[80px_1fr_20px] items-center gap-[25px] max-[800px]:grid-cols-[58px_1fr_18px] max-[800px]:gap-[14px]">
                  <span className="text-[10px] tracking-[.1em] text-[#94a19c]">
                    CASE {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 text-[clamp(23px,3vw,32px)] font-medium tracking-[-.05em]">
                    {item.complaint}
                  </h3>
                  <ArrowRight
                    size={18}
                    className={`text-[#9eaaa5] transition duration-300 ${hovered === item.id ? "translate-x-1 text-[#238776]" : ""}`}
                  />
                </div>
                <div
                  className={`grid grid-cols-[1.1fr_1fr_1.5fr_1fr_auto] items-center gap-[18px] overflow-hidden transition-[max-height,opacity,padding] duration-300 max-[800px]:grid-cols-2 ${hovered === item.id ? "max-h-[60px] pt-[18px] pl-[105px] opacity-100 max-[800px]:max-h-[120px] max-[800px]:pt-[17px] max-[800px]:pl-[72px]" : "max-h-0 opacity-0"}`}
                >
                  <p className="m-0 text-[11px] text-[#7a8882]">
                    {item.age}-year-old {item.sex}
                  </p>
                  <p className="m-0 text-[11px] text-[#7a8882]">
                    {item.specialty}
                  </p>
                  <p className="m-0 text-[11px] text-[#7a8882]">
                    {item.stage} · {item.progress}% complete
                  </p>
                  <p className="m-0 text-[11px] text-[#7a8882]">
                    Last edited {item.edited}
                  </p>
                  <Link
                    href={`/cases/${item.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#238776] max-[800px]:col-start-2"
                  >
                    Resume <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <p className="mt-[38px] text-[11px] text-[#9aa6a1]">
          Cases are private to your workspace. Use them to practise the process,
          not to store real patient information.
        </p>
      </section>
      {modalOpen && (
        <StartCaseModal
          onClose={() => setModalOpen(false)}
          onStart={startCase}
          loading={loading}
        />
      )}
    </main>
  );
}

function StartCaseModal({
  onClose,
  onStart,
  loading,
}: {
  onClose: () => void;
  onStart: () => void;
  loading: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-40 grid place-items-center bg-[#17201e66] p-6 backdrop-blur-[7px]"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="relative w-[min(100%,490px)] rounded-[10px] border border-[#d3dfda] bg-[#fbfcfb] p-[38px] shadow-[0_25px_80px_#17332b2e] max-[800px]:p-[30px_22px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-modal-title"
      >
        <button
          className="absolute right-4 top-4 grid size-7 place-items-center border-0 bg-transparent text-[#82908a]"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
        <p className={kicker}>New workspace</p>
        <h2
          id="case-modal-title"
          className="mb-2 text-[34px] font-medium tracking-[-.065em]"
        >
          Start a new case
        </h2>
        <p className="mb-[27px] text-[13px] text-[#7a8882]">
          Set up the basics before you begin.
        </p>
        <label className="mt-[18px] block text-[11px] font-bold text-[#52605b]">
          Specialty
          <select defaultValue="Internal Medicine" className={input}>
            <option>Internal Medicine</option>
            <option>Pediatrics</option>
            <option>Surgery</option>
            <option>Obstetrics & Gynecology</option>
          </select>
        </label>
        <label className="mt-[18px] block text-[11px] font-bold text-[#52605b]">
          Chief Complaint
          <input placeholder="e.g. abdominal pain" className={input} />
        </label>
        <div className="grid grid-cols-2 gap-[18px]">
          <label className="mt-[18px] block text-[11px] font-bold text-[#52605b]">
            Age
            <input type="number" placeholder="54" className={input} />
          </label>
          <label className="mt-[18px] block text-[11px] font-bold text-[#52605b]">
            Sex
            <div className="mt-2 flex">
              <button className="h-[43px] flex-1 rounded-l border border-[#4baf9d] bg-[#e5f3ef] text-xs text-[#0a6659]">
                Male
              </button>
              <button className="h-[43px] flex-1 rounded-r border border-l-0 border-[#cfdad5] bg-white text-xs text-[#7a8882]">
                Female
              </button>
            </div>
          </label>
        </div>
        <div className="mt-[31px] flex justify-end gap-3">
          <button
            className="border-0 bg-transparent px-4 py-[11px] text-[13px] text-[#687771]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="button-primary border-0"
            onClick={onStart}
            disabled={loading}
          >
            {loading ? (
              "Opening case..."
            ) : (
              <>
                Start Case <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
