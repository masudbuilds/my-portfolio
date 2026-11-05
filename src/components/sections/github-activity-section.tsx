import { getGitHubActivity } from "@/lib/github";
import { GitHubActivityClient } from "@/components/sections/github-activity-client";

export async function GitHubActivitySection() {
  const initialData = await getGitHubActivity("masudbuilds");

  return <GitHubActivityClient initialData={initialData} />;
}

export default GitHubActivitySection;
