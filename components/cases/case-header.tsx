import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function CaseHeader() {
  return (
    <header className="border-b border-[#dfe6e2] bg-[#f5f7f6]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] items-center justify-between gap-5 py-4 max-[700px]:w-[min(calc(100%-28px),600px)]">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            href="/dashboard"
            className="grid size-8 shrink-0 place-items-center rounded-full border border-[#d7e1dd] text-[#687771] transition hover:border-[#43aa97] hover:text-[#238776]"
            aria-label="Back to dashboard"
          >
            <ArrowLeft size={15} />
          </Link>
          <div className="min-w-0 border-l border-[#d7e1dd] pl-4">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-[.13em] text-[#238776]">
              Case 01 · Internal Medicine
            </p>
            <div className="flex items-baseline gap-3 max-[520px]:block">
              <h1 className="!mb-0 truncate !text-[clamp(25px,3vw,38px)] !font-medium !leading-none tracking-[-.055em] text-[#17201e]">
                Abdominal Pain
              </h1>
              <p className="m-0 text-xs text-[#687771]">54-year-old male</p>
            </div>
          </div>
        </div>
        <span className="hidden items-center gap-2 text-[10px] text-[#238776] sm:inline-flex">
          <span className="size-1.5 rounded-full bg-[#238776]" /> Mock case
          workspace
        </span>
      </div>
    </header>
  );
}
