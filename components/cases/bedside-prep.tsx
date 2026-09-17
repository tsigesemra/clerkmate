import { Sparkles } from "lucide-react";
import { SectionTitle } from "./clerking-prep";
import { ChatInterface, Message } from "./chat-interface";
export function BedsidePrep({
  messages,
  onSend,
}: {
  messages: Message[];
  onSend: (text: string) => void;
}) {
  return (
    <div>
      <SectionTitle
        eyebrow="04 · Discussion"
        title="Prepare for the bedside"
        description="Bring the case together into a concise summary and anticipate the questions that may come next."
      />
      <div className="grid gap-5 xl:grid-cols-[1fr_.8fr]">
        <div className="rounded-xl border border-[#dfe6e2] bg-white p-6">
          <div className="flex items-start justify-between border-b border-[#e6ece9] pb-5">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[.12em] text-[#238776]">
                Case summary
              </p>
              <h3 className="m-0 text-2xl font-medium tracking-[-.04em] text-[#17201e]">
                Abdominal Pain
              </h3>
              <p className="mt-1 text-xs text-[#687771]">54-year-old male</p>
            </div>
            <Sparkles size={18} className="text-[#238776]" />
          </div>
          <div className="grid gap-5 py-6 sm:grid-cols-2">
            <List
              title="Key points"
              items={[
                "Two-day history of worsening pain",
                "Central location established",
                "Associated symptoms to clarify",
              ]}
            />
            <List
              title="Be ready to discuss"
              items={[
                "Important differentials",
                "Relevant examination findings",
                "Questions for a senior",
              ]}
            />
          </div>
        </div>
        <ChatInterface compact messages={messages.slice(-2)} onSend={onSend} />
      </div>
    </div>
  );
}
function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-[10px] uppercase tracking-[.12em] text-[#9aa6a1]">
        {title}
      </p>
      <ul className="m-0 space-y-2 pl-4 text-xs leading-5 text-[#52605b]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
