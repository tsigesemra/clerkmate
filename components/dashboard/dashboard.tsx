
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Plus, X } from "lucide-react";
import { createCase } from "@/app/actions/cases";

type DashboardCase = {
  id: string;
  chief_complaint: string;
  age: number | null;
  sex: string | null;
  specialty: string;
  current_step: number;
  created_at: string;
  updated_at: string;
};

type DashboardProps = {
  cases: DashboardCase[];
  userEmail: string;
};

function getStage(currentStep: number) {
  const stages: Record<number, string> = {
    0: "Clerking Prep",
    1: "History Assistant",
    2: "Review History",
    3: "Bedside Prep",
  };

  return stages[currentStep] ?? "In Progress";
}

function getEditedLabel(dateString: string) {
  const date = new Date(dateString);
  const elapsed = Date.now() - date.getTime();

  if (Number.isNaN(date.getTime()) || elapsed < 0) {
    return "Recently";
  }

  const minutes = Math.floor(elapsed / 60000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);

  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);

  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  return date.toLocaleDateString();
}

const kicker =
  "mb-3 text-[10px] font-bold uppercase tracking-[.13em] text-[#238776]";

const input =
  "mt-2 h-[43px] w-full rounded border border-[#cfdad5] bg-white px-3 text-[13px] font-normal text-[#26322f] outline-none focus:border-[#4baf9d]";

export function Dashboard({ cases, userEmail }: DashboardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

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
            type="button"
            className="flex items-center gap-[9px] border-0 bg-transparent text-xs text-[#52605b]"
            onClick={() => setProfileOpen(!profileOpen)}
            aria-expanded={profileOpen}
          >
            <span className="grid size-[31px] place-items-center rounded-full bg-[#c9e4dd] text-[10px] font-bold text-[#0a4b41]">
              {userEmail ? userEmail.charAt(0).toUpperCase() : "S"}
            </span>

            <span className="max-[800px]:hidden">
              {userEmail || "Student"}
            </span>

            <ChevronDown size={14} />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-[42px] z-10 min-w-[170px] rounded-lg border border-[#d9e2de] bg-white p-[15px] shadow-[0_14px_35px_#17332b18]">
              <p className="mb-[3px] text-xs font-bold">
                {userEmail || "Student"}
              </p>

              <span className="text-[11px] text-[#7a8882]">
                Medical student
              </span>

              <button
                type="button"
                className="mt-[14px] block border-0 bg-transparent p-0 text-[11px] text-[#668078]"
                onClick={() => setProfileOpen(false)}
              >
                Close menu
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
              Welcome back.
            </h1>

            <p className="m-0 max-w-[430px] text-[15px] leading-[1.7] text-[#687771]">
              Pick up where you left off, or start a new case to prepare for
              your next patient.
            </p>
          </div>

          <button
            type="button"
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
              {cases.length} {cases.length === 1 ? "case" : "cases"}
            </span>
          </div>

          <div className="border-b border-[#dfe6e2]">
            {cases.length === 0 ? (
              <div className="py-12 text-center">
                <p className="mb-2 text-[15px] font-medium text-[#26322f]">
                  No cases yet
                </p>

                <p className="mx-auto mb-5 max-w-[340px] text-[13px] leading-6 text-[#7a8882]">
                  Start your first case to begin preparing and organizing a
                  clinical history.
                </p>

                <button
                  type="button"
                  className="button-primary border-0"
                  onClick={() => setModalOpen(true)}
                >
                  <Plus size={16} /> Start your first case
                </button>
              </div>
            ) : (
              cases.map((item, index) => (
                <article
                  key={item.id}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`border-b border-[#dfe6e2] py-[26px] transition-[padding] duration-300 last:border-0 ${
                    hovered === item.id ? "pb-5" : ""
                  }`}
                >
                  <div className="grid grid-cols-[80px_1fr_20px] items-center gap-[25px] max-[800px]:grid-cols-[58px_1fr_18px] max-[800px]:gap-[14px]">
                    <span className="text-[10px] tracking-[.1em] text-[#94a19c]">
                      CASE {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="m-0 text-[clamp(23px,3vw,32px)] font-medium tracking-[-.05em]">
                      {item.chief_complaint}
                    </h3>

                    <ArrowRight
                      size={18}
                      className={`text-[#9eaaa5] transition duration-300 ${
                        hovered === item.id
                          ? "translate-x-1 text-[#238776]"
                          : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`grid grid-cols-[1.1fr_1fr_1.5fr_1fr_auto] items-center gap-[18px] overflow-hidden transition-[max-height,opacity,padding] duration-300 max-[800px]:grid-cols-2 ${
                      hovered === item.id
                        ? "max-h-[100px] pt-[18px] pl-[105px] opacity-100 max-[800px]:max-h-[160px] max-[800px]:pt-[17px] max-[800px]:pl-[72px]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="m-0 text-[11px] text-[#7a8882]">
                      {item.age != null
                        ? `${item.age} years old`
                        : "Age not provided"}
                      {item.sex ? ` · ${item.sex}` : ""}
                    </p>

                    <p className="m-0 text-[11px] text-[#7a8882]">
                      {item.specialty}
                    </p>

                    <p className="m-0 text-[11px] text-[#7a8882]">
                      Stage: {getStage(item.current_step)}
                    </p>

                    <p className="m-0 text-[11px] text-[#7a8882]">
                      Last edited {getEditedLabel(item.updated_at)}
                    </p>

                    <Link
                      href={`/cases/${item.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#238776] max-[800px]:col-start-2"
                    >
                      Resume <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        <p className="mt-[38px] text-[11px] text-[#9aa6a1]">
          Cases are private to your workspace. Use them to practise the process,
          not to store real patient information.
        </p>
      </section>

      {modalOpen && (
        <StartCaseModal onClose={() => setModalOpen(false)} />
      )}
    </main>
  );
}

function StartCaseModal({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sex, setSex] = useState("Male");

  const sexButtonClass = (value: string) =>
    `h-[43px] flex-1 text-xs ${
      sex === value
        ? "border border-[#4baf9d] bg-[#e5f3ef] text-[#0a6659]"
        : "border border-[#cfdad5] bg-white text-[#7a8882]"
    }`;

  return (
    <div
      className="fixed inset-0 z-40 grid place-items-center bg-[#17201e66] p-6 backdrop-blur-[7px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !loading) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-[min(100%,490px)] rounded-[10px] border border-[#d3dfda] bg-[#fbfcfb] p-[38px] shadow-[0_25px_80px_#17332b2e] max-[800px]:p-[30px_22px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-modal-title"
      >
        <button
          type="button"
          className="absolute right-4 top-4 grid size-7 place-items-center border-0 bg-transparent text-[#82908a]"
          onClick={onClose}
          disabled={loading}
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

        <form
          action={async (formData: FormData) => {
            setLoading(true);
            setError(null);

            const result = await createCase(formData);

            if (result?.error) {
              setError(result.error);
              setLoading(false);
            }
          }}
        >
          <label className="mt-[18px] block text-[11px] font-bold text-[#52605b]">
            Specialty

            <select
              name="specialty"
              defaultValue="Internal Medicine"
              className={input}
              required
              disabled={loading}
            >
              <option>Internal Medicine</option>
              <option>Pediatrics</option>
              <option>Surgery</option>
              <option>Obstetrics & Gynecology</option>
            </select>
          </label>

          <label className="mt-[18px] block text-[11px] font-bold text-[#52605b]">
            Chief Complaint

            <input
              name="chief_complaint"
              placeholder="e.g. abdominal pain"
              className={input}
              required
              maxLength={200}
              disabled={loading}
            />
          </label>

          <div className="grid grid-cols-2 gap-[18px]">
            <label className="mt-[18px] block text-[11px] font-bold text-[#52605b]">
              Age

              <input
                name="age"
                type="number"
                min={0}
                max={120}
                step={1}
                placeholder="54"
                className={input}
                disabled={loading}
              />
            </label>

            <fieldset className="mt-[18px] min-w-0 border-0 p-0">
              <legend className="text-[11px] font-bold text-[#52605b]">
                Sex
              </legend>

              <input type="hidden" name="sex" value={sex} />

              <div className="mt-2 flex">
                <button
                  type="button"
                  className={`${sexButtonClass("Male")} rounded-l`}
                  onClick={() => setSex("Male")}
                  aria-pressed={sex === "Male"}
                  disabled={loading}
                >
                  Male
                </button>

                <button
                  type="button"
                  className={`${sexButtonClass("Female")} rounded-r border-l-0`}
                  onClick={() => setSex("Female")}
                  aria-pressed={sex === "Female"}
                  disabled={loading}
                >
                  Female
                </button>
              </div>
            </fieldset>
          </div>

          {error && (
            <p
              role="alert"
              className="mt-4 rounded border border-red-200 bg-red-50 p-3 text-[12px] leading-5 text-red-700"
            >
              {error}
            </p>
          )}

          <div className="mt-[31px] flex justify-end gap-3">
            <button
              type="button"
              className="border-0 bg-transparent px-4 py-[11px] text-[13px] text-[#687771]"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="button-primary border-0"
              disabled={loading}
            >
              {loading ? (
                "Saving case..."
              ) : (
                <>
                  Start Case <ArrowRight size={15} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
