import { Check, CircleAlert } from "lucide-react";
import { SectionTitle } from "./clerking-prep";
import { ChatInterface, Message } from "./chat-interface";
export function ReviewHistory({
  messages,
  onSend,
}: {
  messages: Message[];
  onSend: (text: string) => void;
}) {
  return (
    <div>
      <SectionTitle
        eyebrow="03 · Review"
        title="Review the history you took"
        description="Use feedback to find gaps and improve structure before you present the case."
      />
      <div className="grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
        <article className="rounded-xl border border-[#dfe6e2] bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="m-0 text-sm font-semibold text-[#26322f]">
              Student history
            </h3>
            <span className="text-[10px] text-[#238776]">Draft</span>
          </div>
          <p className="text-sm leading-7 text-[#52605b]">
            The patient describes abdominal pain that started two days ago. It
            is central and has gradually worsened. Further details about
            radiation, associated symptoms, and previous episodes are still to
            be clarified.
          </p>
          <div className="mt-6 border-t border-[#e6ece9] pt-5 text-[10px] uppercase tracking-[.12em] text-[#9aa6a1]">
            Last edited just now
          </div>
        </article>
        <div className="space-y-3">
          <Info
            icon={<Check size={15} />}
            title="What you covered"
            text="Presenting complaint, onset, and initial location are established."
          />
          <Info
            icon={<CircleAlert size={15} />}
            title="What may be missing"
            text="Consider vomiting, bowel habit changes, urinary symptoms, and previous similar episodes."
          />
        </div>
      </div>
      <div className="mt-5">
        <ChatInterface compact messages={messages.slice(-2)} onSend={onSend} />
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
    <div className="rounded-xl border border-[#dfe6e2] bg-white p-5">
      <h3 className="mb-4 flex items-center gap-2 text-sm text-[#26322f]">
        {icon}
        {title}
      </h3>
      <p className="m-0 text-xs leading-5 text-[#687771]">{text}</p>
    </div>
  );
}
