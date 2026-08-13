import { SectionLabel } from "./shared";

const workflow = [
  ["01", "Prepare", "Know what to ask before you enter the room."],
  ["02", "Bedside", "Keep a focused checklist at hand."],
  ["03", "Write", "Turn your findings into a structured history."],
  ["04", "Review", "Find gaps and improve your history."],
  ["05", "Present", "Prepare for the questions that come next."],
];

export function Workflow() {
  return (
    <section id="workflow" className="workflow-section section-wrap">
      <div className="section-intro">
        <SectionLabel>The ClerkMate loop</SectionLabel>
        <h2>
          A case, from first thought
          <br />
          to <em>final question.</em>
        </h2>
      </div>
      <div className="workflow-line">
        {workflow.map(([number, title, text], index) => (
          <div className="workflow-step" key={title}>
            <div className="step-marker">
              <span>{number}</span>
              {index < workflow.length - 1 && <i />}
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
