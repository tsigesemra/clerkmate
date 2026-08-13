import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./shared";
export function FinalCta() {
  return (
    <section id="start" className="final-cta section-wrap">
      <div>
        <SectionLabel>Your next case</SectionLabel>
        <h2>
          Ready for the
          <br />
          <em>next patient?</em>
        </h2>
      </div>
      <div>
        <p>
          Prepare your history. Focus at the bedside. Learn from what you
          missed.
        </p>
        <a href="#top" className="button-primary">
          Start a case <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
