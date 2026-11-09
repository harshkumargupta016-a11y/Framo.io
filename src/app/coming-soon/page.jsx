/**
 * COMING SOON PAGE
 * What this file does: Shared placeholder route for roadmap links (Documentation, About, Careers, etc.).
 * What to edit: Update coming soon layout, roadmap timeline, or early access messaging.
 */
"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

function ComingSoonContent() {
  const searchParams = useSearchParams();
  const rawFeature = searchParams.get("feature") || "Documentation";
  const featureName = rawFeature.charAt(0).toUpperCase() + rawFeature.slice(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16 bg-background/80 backdrop-blur-2xl text-foreground">
      <div className="relative z-20 w-full max-w-lg p-8 sm:p-10 rounded-3xl bg-card/95 dark:bg-[#0E1116]/95 backdrop-blur-3xl border border-border-strong shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-glow text-accent border border-accent/30 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Roadmap Milestone</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
          {featureName} is Coming Soon
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
          We are actively crafting the next release of {featureName} with high-fidelity visual design, 60 FPS interactions, and agentic workflows.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-surface/90 border border-border text-sm space-y-2 backdrop-blur-sm">
            <div className="inline-flex items-center gap-1.5 text-accent font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>You&apos;re on the priority list!</span>
            </div>
            <p className="text-xs text-muted-foreground">
              We will notify you at <span className="font-semibold text-foreground">{email}</span> as soon as this is live.
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
              className="flex-1 px-3.5 py-2.5 rounded-lg text-sm bg-surface border border-border text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer shadow-sm"
            >
              <span>Notify</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-2.5 py-1.5"
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
