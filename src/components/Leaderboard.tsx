"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TexturePanel } from "@/components/TexturePanel";
import type { Product } from "@/lib/types";

type VoteState = {
  votes: Record<string, number>;
  votedFor: string | null;
};

export function Leaderboard({ candidates }: { candidates: Product[] }) {
  const [state, setState] = useState<VoteState | null>(null);
  const [pending, setPending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/vote")
      .then((res) => res.json())
      .then(setState)
      .catch(() => setError("Die Ergebnisse konnten nicht geladen werden."));
  }, []);

  const vote = async (slug: string) => {
    if (state?.votedFor || pending) return;
    setPending(slug);
    setError(null);
    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bagId: slug }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.votedFor) setState(data);
        else setError("Ihre Stimme konnte nicht gezählt werden.");
        return;
      }
      setState(data);
    } catch {
      setError("Ihre Stimme konnte nicht gezählt werden.");
    } finally {
      setPending(null);
    }
  };

  if (!state) {
    return <p className="text-sm text-ink-soft/60">Ergebnisse werden geladen …</p>;
  }

  const sorted = [...candidates].sort(
    (a, b) => (state.votes[b.slug] ?? 0) - (state.votes[a.slug] ?? 0)
  );
  const maxVotes = Math.max(1, ...sorted.map((c) => state.votes[c.slug] ?? 0));
  const totalVotes = sorted.reduce((sum, c) => sum + (state.votes[c.slug] ?? 0), 0);

  return (
    <div>
      {state.votedFor && (
        <p className="mb-8 text-sm text-tan-dark">
          Danke für Ihre Stimme! Sie können pro Woche einmal abstimmen.
        </p>
      )}
      {error && <p className="mb-8 text-sm text-red-700">{error}</p>}

      <div className="space-y-6">
        {sorted.map((candidate, i) => {
          const count = state.votes[candidate.slug] ?? 0;
          const share = Math.round((count / maxVotes) * 100);
          const isLeader = i === 0;
          const hasVotedForThis = state.votedFor === candidate.slug;

          return (
            <div
              key={candidate.slug}
              className={`grid grid-cols-[auto_1fr_auto] items-center gap-5 border p-5 transition sm:grid-cols-[80px_1fr_auto] ${
                isLeader ? "border-ink bg-ink text-bone" : "border-line"
              }`}
            >
              <TexturePanel tone={candidate.tone} className="h-16 w-16 shrink-0" />

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/kollektion/${candidate.slug}`}
                    className="font-display text-lg hover:underline"
                  >
                    {candidate.name}
                  </Link>
                  {isLeader && (
                    <span className="rounded-full bg-tan px-2 py-0.5 text-[10px] tracking-wide text-bone uppercase">
                      Führend
                    </span>
                  )}
                </div>
                <div
                  className={`mt-2 h-1.5 w-full max-w-xs overflow-hidden rounded-full ${
                    isLeader ? "bg-bone/20" : "bg-sand"
                  }`}
                >
                  <div
                    className={`h-full rounded-full ${isLeader ? "bg-bone" : "bg-tan"}`}
                    style={{ width: `${share}%` }}
                  />
                </div>
                <p className={`mt-1 text-xs ${isLeader ? "text-bone/70" : "text-ink-soft/60"}`}>
                  {count} Stimmen
                </p>
              </div>

              <button
                onClick={() => vote(candidate.slug)}
                disabled={Boolean(state.votedFor) || pending === candidate.slug}
                className={`shrink-0 border px-4 py-2 text-xs tracking-[0.15em] uppercase transition disabled:cursor-not-allowed disabled:opacity-50 ${
                  isLeader
                    ? "border-bone/40 text-bone hover:border-bone"
                    : "border-ink text-ink hover:bg-ink hover:text-bone"
                } ${hasVotedForThis ? "opacity-100" : ""}`}
              >
                {hasVotedForThis
                  ? "Ihre Stimme"
                  : pending === candidate.slug
                  ? "…"
                  : "Abstimmen"}
              </button>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-ink-soft/50">{totalVotes} Stimmen insgesamt diese Woche</p>
    </div>
  );
}
