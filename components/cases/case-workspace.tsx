"use client";
import { ChevronRight, Menu } from "lucide-react";
import { useMemo, useState } from "react";
import { CaseHeader } from "./case-header";
import { CaseWorkflow, StepId } from "./case-workflow";
import { ClerkingPrep } from "./clerking-prep";
import { HistoryAssistant } from "./history-assistant";
import { ReviewHistory } from "./review-history";
import { BedsidePrep } from "./bedside-prep";
import { Message } from "./chat-interface";
const starterMessages: Message[] = [
  { role: "assistant", text: "What is the patient's presenting complaint?" },
  {
    role: "student",
    text: "The patient reports abdominal pain that started two days ago.",
  },
  {
    role: "assistant",
    text: "Good. You have established the onset and initial complaint. What would you like to clarify next?",
  },
];
export function CaseWorkspace() {
  const [active, setActive] = useState<StepId>("prep");
  const [collapsed, setCollapsed] = useState(false);
  const [messages, setMessages] = useState(starterMessages);
  const sendMessage = (text: string) =>
    setMessages((current) => [
      ...current,
      { role: "student", text },
      {
        role: "assistant",
        text: "Good thinking. Keep clarifying the details that will change your differential and guide the next question.",
      },
    ]);
  const workspace = useMemo(
    () =>
      ({
        prep: <ClerkingPrep />,
        history: <HistoryAssistant messages={messages} onSend={sendMessage} />,
        review: <ReviewHistory messages={messages} onSend={sendMessage} />,
        bedside: <BedsidePrep messages={messages} onSend={sendMessage} />,
      })[active],
    [active, messages],
  );
  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17201e]">
      <CaseHeader />
      <div className="mx-auto flex min-h-[calc(100vh-91px)] w-[min(1180px,calc(100%-40px))] max-[700px]:w-full">
        <CaseWorkflow
          active={active}
          collapsed={collapsed}
          onToggle={() => setCollapsed((value) => !value)}
          onSelect={setActive}
        />
        <section className="min-w-0 flex-1 px-10 py-10 max-[800px]:px-6 max-[600px]:px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[#82908a]">
              <span className="size-1.5 rounded-full bg-[#238776]" /> Working
              space <ChevronRight size={13} />
            </div>
            {collapsed && (
              <button
                onClick={() => setCollapsed(false)}
                className="inline-flex items-center gap-2 rounded-md border border-[#d7e1dd] bg-white px-3 py-2 text-[10px] font-semibold text-[#52605b] hover:border-[#43aa97] hover:text-[#238776]"
              >
                <Menu size={14} /> Workflow
              </button>
            )}
          </div>
          {workspace}
        </section>
      </div>
    </main>
  );
}
