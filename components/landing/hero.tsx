import { ArrowRight, ChevronDown } from "lucide-react";
import { ProductWindow, SectionLabel } from "./shared";

export function Hero() {
  return (
    <section id="top" className="hero-section content-grid">
      <div className="hero-copy">
        <SectionLabel>Clinical history-taking companion</SectionLabel>
        <h1>
          Take better
          <br />
          <em>histories.</em>
        </h1>
        <p className="hero-lede">
          Prepare before the patient. Stay focused at the bedside. Review what
          you missed.
        </p>
        <div className="hero-actions">
          <a href="#start" className="button-primary">
            Start a case <ArrowRight size={16} />
          </a>
          <a href="#workflow" className="text-link">
            See how it works <ArrowRight size={15} />
          </a>
        </div>
        <p className="hero-note">
          <span className="status-dot" /> Built for C1 &amp; C2 medical students
        </p>
      </div>
      <ProductWindow className="hero-product">
        <div className="case-interface">
          <div className="interface-heading">
            <div>
              <p className="eyebrow">New case</p>
              <h2>Start with the patient.</h2>
            </div>
            <span className="live-indicator">● ready</span>
          </div>
          <label>Clinical area</label>
          <div className="select-field">
            <span>Pediatrics</span>
            <ChevronDown size={15} />
          </div>
          <label>Chief complaint</label>
          <div className="input-field">
            <span>Fever</span>
            <span className="field-cursor" />
          </div>
          <p className="eyebrow cases-label">Common cases</p>
          <div className="case-chips">
            <button>Fever</button>
            <button>Cough</button>
            <button>Vomiting</button>
            <button>Abdominal pain</button>
          </div>
          <button className="interface-button">
            Prepare history <ArrowRight size={15} />
          </button>
        </div>
      </ProductWindow>
    </section>
  );
}
