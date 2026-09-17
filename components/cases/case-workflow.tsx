import { Check, Menu, X } from "lucide-react";
export type StepId = "prep" | "history" | "review" | "bedside";
const steps = [
  {
    id: "prep",
    number: "01",
    title: "Clerking Prep",
    description: "Prepare before seeing the patient.",
  },
  {
    id: "history",
    number: "02",
    title: "History Assistant",
    description: "Work through the actual history.",
  },
  {
    id: "review",
    number: "03",
    title: "Review History",
    description: "Improve structure and completeness.",
  },
  {
    id: "bedside",
    number: "04",
    title: "Bedside Prep",
    description: "Prepare to discuss the case.",
  },
] as const;
export function CaseWorkflow({
  active,
  collapsed,
  onToggle,
  onSelect,
}: {
  active: StepId;
  collapsed: boolean;
  onToggle: () => void;
  onSelect: (id: StepId) => void;
}) {
  return (
    <aside
      className={`relative shrink-0 border-r border-[#dfe6e2] transition-[width] duration-300 max-[800px]:absolute max-[800px]:z-20 max-[800px]:h-full max-[800px]:bg-[#f5f7f6] ${collapsed ? "w-[58px] max-[800px]:-translate-x-full" : "w-[244px] max-[800px]:w-[276px]"}`}
    >
      <div className="sticky top-0 p-3">
        <button
          onClick={onToggle}
          className="mb-5 grid size-8 place-items-center rounded-md text-[#687771] transition hover:bg-[#e7efec] hover:text-[#238776]"
          aria-label={
            collapsed ? "Expand case workflow" : "Collapse case workflow"
          }
        >
          {collapsed ? <Menu size={16} /> : <X size={16} />}
        </button>
        {!collapsed && (
          <>
            <p className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[.13em] text-[#238776]">
              Case workflow
            </p>
            <nav className="space-y-1" aria-label="Case workflow">
              {steps.map((step) => {
                const selected = active === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => onSelect(step.id)}
                    className={`group flex w-full items-start gap-3 rounded-lg p-3 text-left transition ${selected ? "bg-[#e5f3ef]" : "hover:bg-[#edf3f1]"}`}
                  >
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full border text-[9px] ${selected ? "border-[#43aa97] bg-white text-[#238776]" : "border-[#cbd8d2] text-[#94a19c]"}`}
                    >
                      {selected && step.id === "prep" ? (
                        <Check size={13} />
                      ) : (
                        step.number
                      )}
                    </span>
                    <span>
                      <strong
                        className={`block text-xs ${selected ? "text-[#17201e]" : "text-[#61716b]"}`}
                      >
                        {step.title}
                      </strong>
                      <small className="mt-1 block text-[10px] leading-[1.4] text-[#9aa6a1]">
                        {step.description}
                      </small>
                    </span>
                  </button>
                );
              })}
            </nav>
          </>
        )}
      </div>
    </aside>
  );
}
