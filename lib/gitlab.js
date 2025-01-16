const GITLAB_API_URL = "https://gitlab.com/api/v4";

export async function fetchGitLabProjects(token) {
    const res = await fetch(`${GITLAB_API_URL}/projects?membership=true`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects from GitLab");
    }

    return res.json();
}
