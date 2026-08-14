"use client";

import { useState } from "react";
import { ArrowRight, Check, Eye, EyeOff, X } from "lucide-react";

type AuthMode = "signup" | "login";

export function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<AuthMode>("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const isSignup = mode === "signup";

  function switchMode(nextMode: AuthMode) {
    setMode(nextMode);
    setSubmitted(false);
    setShowPassword(false);
  }

  return (
    <div
      className="auth-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        <button
          className="auth-close"
          onClick={onClose}
          aria-label="Close authentication dialog"
        >
          <X size={17} />
        </button>
        <div className="auth-kicker">
          <span className="status-dot" /> ClerkMate access
        </div>
        <h2 id="auth-title">
          {isSignup ? "Create your account" : "Welcome back"}
        </h2>
        <p className="auth-intro">
          {isSignup
            ? "Start building a calmer, more complete clinical history."
            : "Continue preparing for better bedside conversations."}
        </p>
        {submitted ? (
          <div className="auth-success">
            <Check size={20} />
            <p>
              {isSignup
                ? "Your account is ready to begin."
                : "You are signed in."}
            </p>
            <button className="button-primary" onClick={onClose}>
              Continue <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="auth-email">Email</label>
            <input id="auth-email" type="email" autoComplete="email" required />
            <label htmlFor="auth-password">Password</label>
            <div className="auth-password">
              <input
                id="auth-password"
                type={showPassword ? "text" : "password"}
                autoComplete={isSignup ? "new-password" : "current-password"}
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <button className="button-primary auth-submit" type="submit">
              {isSignup ? "Create account" : "Log in"} <ArrowRight size={14} />
            </button>
          </form>
        )}
        <p className="auth-switch">
          {isSignup ? "Already have an account?" : "New to ClerkMate?"}{" "}
          <button onClick={() => switchMode(isSignup ? "login" : "signup")}>
            {isSignup ? "Log in" : "Create an account"}
          </button>
        </p>
      </section>
    </div>
  );
}
