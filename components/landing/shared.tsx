import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="section-label">
      <span className="status-dot" />
      {children}
    </p>
  );
}

export function ProductWindow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`product-window ${className}`}>
      <div className="window-bar">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="window-title">clerkmate / cases / fever</span>
        <span className="window-mode">clinical mode</span>
      </div>
      {children}
    </div>
  );
}
