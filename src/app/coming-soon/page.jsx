/**
 * COMING SOON PAGE
 * What this file does: Shared placeholder route for roadmap links (About, Careers, Docs, etc.).
 * What to edit: Update coming soon layout, roadmap timeline, or early access messaging.
 */
"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

function ComingSoonContent() {
  const searchParams = useSearchParams();
  const rawFeature = searchParams.get("feature") || "This Feature";
  const featureName = rawFeature.charAt(0).toUpperCase() + rawFeature.slice(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full max-w-lg p-8 sm:p-10 rounded-2xl bg-[var(--card)] border border-[var(--border-strong)] shadow-[var(--shadow-float)] text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Roadmap Milestone</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {featureName} is Coming Soon
        </h1>

        <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed max-w-md mx-auto">
          We are actively crafting the next release of {featureName} with high-fidelity visual design, 60 FPS interactions, and agentic workflows.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[var(--accent)] font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>You&apos;re on the priority list!</span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)]">
              We will notify you at <span className="font-medium text-[var(--foreground)]">{email}</span> as soon as this is live.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-3.5 py-2.5 rounded-lg text-sm bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span>Notify</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-[var(--border)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Framo Canvas</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ComingSoonPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm">Loading roadmap preview...</div>}>
      <ComingSoonContent />
    </Suspense>
  );
}
