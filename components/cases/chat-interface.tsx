"use client";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
export type Message = { role: "assistant" | "student"; text: string };
export function ChatInterface({
  messages,
  onSend,
  compact = false,
}: {
  messages: Message[];
  onSend: (text: string) => void;
  compact?: boolean;
}) {
  const [input, setInput] = useState("");
  const submit = () => {
    const text = input.trim();
    if (!text) return;
    onSend(text);
    setInput("");
  };
  return (
    <div
      className={`flex flex-col rounded-xl border border-[#dfe6e2] bg-white ${compact ? "min-h-[250px]" : "min-h-[470px]"}`}
    >
      <div className="flex-1 space-y-6 overflow-auto p-6 max-[600px]:p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex max-w-2xl gap-3 ${message.role === "student" ? "ml-auto flex-row-reverse" : ""}`}
          >
            <div
              className={`grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${message.role === "assistant" ? "bg-[#e5f3ef] text-[#238776]" : "bg-[#dce8e3] text-[#52605b]"}`}
            >
              {message.role === "assistant" ? <Sparkles size={13} /> : "A"}
            </div>
            <div
              className={`rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "assistant" ? "rounded-tl-sm bg-[#f3f7f5] text-[#41504b]" : "rounded-tr-sm bg-[#e5f3ef] text-[#26322f]"}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#e6ece9] p-3">
        <div className="flex items-end gap-2 rounded-lg border border-[#cddbd5] bg-[#fbfcfb] p-2 focus-within:border-[#43aa97]">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey &&
                !e.nativeEvent.isComposing &&
                e.keyCode !== 229
              ) {
                e.preventDefault();
                submit();
              }
            }}
            rows={1}
            placeholder="Enter the history you took..."
            className="max-h-32 min-h-9 flex-1 resize-none border-0 bg-transparent px-2 py-2 text-sm text-[#26322f] outline-none placeholder:text-[#9aa6a1]"
          />
          <button
            onClick={submit}
            className="grid size-9 shrink-0 place-items-center rounded-md bg-[#238776] text-white transition hover:bg-[#176c60]"
            aria-label="Send message"
          >
            <Send size={15} />
          </button>
        </div>
        <p className="m-1 text-[10px] text-[#9aa6a1]">
          Shift + Enter for a new line
        </p>
      </div>
    </div>
  );
}
