import { NextResponse } from "next/server";
import { getGitHubActivity } from "@/lib/github";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const data = await getGitHubActivity("masudbuilds");

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to retrieve GitHub activity at this time.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while fetching activity.",
      },
      { status: 500 },
    );
  }
}
