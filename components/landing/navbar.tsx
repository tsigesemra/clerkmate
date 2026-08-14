"use client"
import { useState } from "react";
import { ArrowRight, FileText, Menu, Stethoscope, X } from "lucide-react";
export function Navbar({ onStartCase }: { onStartCase?: () => void }) {
  const [open, setOpen] = useState(false);
  const start = () => {
    setOpen(false);
    onStartCase?.();
  };
  return (
    <nav className="nav-shell">
      <a href="#top" className="brand" aria-label="ClerkMate home">
        <span className="brand-mark" aria-hidden="true">
          <FileText className="brand-binder" size={18} />
          <Stethoscope className="brand-scope" size={21} />
        </span>
        <span>lerkMate</span>
      </a>
      <div className={`nav-links ${open ? "nav-open" : ""}`}>
        <a href="#cases" onClick={() => setOpen(false)}>
          Cases
        </a>
        <a href="#bedside" onClick={() => setOpen(false)}>
          Bedside
        </a>
        <a href="#resources" onClick={() => setOpen(false)}>
          Resources
        </a>
        <button className="mobile-start" onClick={start}>
          Start a case <ArrowRight size={14} />
        </button>
      </div>
      <button className="nav-cta" onClick={start}>
        Start a case <ArrowRight size={14} />
      </button>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
