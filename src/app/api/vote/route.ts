import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { weeklyCandidateSlugs } from "@/lib/weekly-candidates";

const COOKIE_NAME = "wertstueck_vote";
const WEEK_SEED_ORDER = weeklyCandidateSlugs;
const INITIAL_SEED = [128, 96, 143, 71, 108];

// In-memory vote store for this server instance. No database in this
// prototype — resets when the dev server restarts.
const voteCounts = new Map<string, number>(
  WEEK_SEED_ORDER.map((slug, i) => [slug, INITIAL_SEED[i] ?? 0])
);

async function currentState() {
  const store = await cookies();
  const votedFor = store.get(COOKIE_NAME)?.value ?? null;
  return {
    votes: Object.fromEntries(voteCounts),
    votedFor,
  };
}

export async function GET() {
  return NextResponse.json(await currentState());
}

export async function POST(request: NextRequest) {
  const store = await cookies();
  const alreadyVoted = store.get(COOKIE_NAME)?.value;

  if (alreadyVoted) {
    return NextResponse.json(
      { ...(await currentState()), error: "already-voted" },
      { status: 409 }
    );
  }

  const body = await request.json().catch(() => null);
  const bagId = body?.bagId;

  if (typeof bagId !== "string" || !weeklyCandidateSlugs.includes(bagId as (typeof weeklyCandidateSlugs)[number])) {
    return NextResponse.json({ error: "invalid-bag" }, { status: 400 });
  }

  voteCounts.set(bagId, (voteCounts.get(bagId) ?? 0) + 1);

  const response = NextResponse.json({
    votes: Object.fromEntries(voteCounts),
    votedFor: bagId,
  });
  response.cookies.set(COOKIE_NAME, bagId, {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    path: "/",
  });
  return response;
}
