export interface Activity {
  id: string;
  type: 'commit' | 'pr' | 'repo';
  message: string;
  date: string;
  url: string;
  repo: string;
}

export async function getLatestActivity(username: string, limit: number = 5): Promise<Activity[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=${limit}`, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (!response.ok) {
      if (response.status === 403) console.warn('GitHub API rate limit exceeded');
      return [];
    }

    const repos = await response.json();
    
    if (!Array.isArray(repos)) return [];

    return repos.map((repo: any) => ({
      id: repo.id.toString(),
      type: 'repo',
      message: repo.description,
      date: repo.pushed_at,
      url: repo.html_url,
      repo: repo.name,
    }));
  } catch (error) {
    console.error('GitHub fetch failed:', error);
    return [];
  }
}

export function getRelativeTime(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 172800) return 'Yesterday';
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
