import { weeklyCandidateSlugs } from "@/lib/weekly-candidates";

const STORAGE_KEY = "wertstueck_vote_v1";
const INITIAL_SEED = [128, 96, 143, 71, 108];

export type VoteState = {
  votes: Record<string, number>;
  votedFor: string | null;
};

function seedVotes(): Record<string, number> {
  return Object.fromEntries(
    weeklyCandidateSlugs.map((slug, i) => [slug, INITIAL_SEED[i] ?? 0])
  );
}

// Client-only, per-browser vote store. There is no backend in this static
// prototype, so votes are not shared across visitors.
export function getVoteState(): VoteState {
  if (typeof window === "undefined") {
    return { votes: seedVotes(), votedFor: null };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as VoteState;
  } catch {
    // ignore malformed storage
  }
  const initial: VoteState = { votes: seedVotes(), votedFor: null };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

export function castVote(bagId: string): VoteState {
  const current = getVoteState();
  if (current.votedFor) return current;

  const next: VoteState = {
    votes: { ...current.votes, [bagId]: (current.votes[bagId] ?? 0) + 1 },
    votedFor: bagId,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}
