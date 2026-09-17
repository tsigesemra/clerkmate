import { SectionTitle } from "./clerking-prep";
import { ChatInterface, Message } from "./chat-interface";
export function HistoryAssistant({
  messages,
  onSend,
}: {
  messages: Message[];
  onSend: (text: string) => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <SectionTitle
        eyebrow="02 · Conversational workspace"
        title="History Assistant"
        description="Work through the history step by step. ClerkMate will prompt your clinical thinking rather than take over the encounter."
      />
      <ChatInterface messages={messages} onSend={onSend} />
    </div>
  );
}
