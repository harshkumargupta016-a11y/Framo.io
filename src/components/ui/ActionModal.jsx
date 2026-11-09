"use client";

/**
 * ACTION MODAL COMPONENT
 * What this file does: Renders an accessible, reusable modal dialog for user actions (signup, login, trial, etc.).
 * What to edit: Modify dialog layout, form confirmation animation, or close behaviors here.
 */

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";

export function ActionModal({ isOpen, onClose, modalData }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setEmail("");
      const timer = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !modalData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border-strong)] shadow-[var(--shadow-float)] text-[var(--foreground)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Request Received</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              We&apos;ve sent access instructions to <span className="font-semibold text-[var(--foreground)]">{email}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 id="modal-title" className="text-xl font-bold tracking-tight">{modalData.title}</h2>
              <p className="mt-1 text-sm text-[var(--muted-foreground)] leading-relaxed">{modalData.subtitle}</p>
            </div>
            <input
              ref={inputRef}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={modalData.emailPlaceholder || "Enter your email"}
              className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold hover:opacity-90 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer"
            >
              <span>{modalData.buttonLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-[var(--muted-foreground)]">{modalData.footerText}</p>
          </form>
        )}
      </div>
    </div>
  );
}
