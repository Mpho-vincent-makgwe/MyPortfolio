import axios from "axios";
import fs from "fs";
import path from "path";

const ACCOUNT_PERSONAL = "Mpho-vincent-makgwe"; // Updated username
const API_URL = "https://api.github.com";

export async function getGitHubProjects() {
    try {
        // 1. Fetch Public Repos
        const response = await axios.get(`${API_URL}/users/${ACCOUNT_PERSONAL}/repos`);
        const publicRepos = response.data;

        // 2. Read Local/Private Projects Configuration
        const localDataPath = path.join(process.cwd(), "data", "projectData", "index.json");
        let localProjects = [];

        try {
            const fileContent = await fs.promises.readFile(localDataPath, "utf-8");
            localProjects = JSON.parse(fileContent);
        } catch (err) {
            console.warn("Could not read local project data:", err);
        }

        // 3. Merge and Format Data
        // We want to enhance the GitHub data with local overrides (like images, specific descriptions)
        // And also include "manual" entries that might not be in the public API fetch (e.g. private repos defined locally)

        const formattedProjects = publicRepos.map(repo => {
            // Find matching local config
            const localConfig = localProjects.find(p => p.repo_name === repo.name);

            return {
                id: repo.id,
                name: repo.name,
                overview: localConfig?.overview || repo.description || "No description available.",
                links: {
                    github: repo.html_url,
                    hosted: repo.homepage || localConfig?.links?.hosted || false,
                },
                // Add other fields from local config if needed
                ...localConfig
            };
        });

        // Add purely local projects (that weren't found in public repos)
        // This covers "Private" repos that are manually defined in index.json
        localProjects.forEach(localP => {
            const exists = formattedProjects.find(fp => fp.name === localP.repo_name);
            if (!exists) {
                formattedProjects.push({
                    id: localP.id || Math.random().toString(36).substr(2, 9),
                    name: localP.repo_name,
                    overview: localP.overview || "No description available.",
                    links: localP.links || {},
                    isPrivate: true, // Flag to maybe show a lock icon
                    ...localP
                });
            }
        });

        // Final sanitization pass to ensure no undefined values
        const sanitizedProjects = JSON.parse(JSON.stringify(formattedProjects));

        // Sort by date (pushed_at for github, or some index for local)
        // For now, let's sort by pushed_at if available, otherwise push to bottom
        sanitizedProjects.sort((a, b) => {
            const dateA = a.pushed_at ? new Date(a.pushed_at) : new Date(0);
            const dateB = b.pushed_at ? new Date(b.pushed_at) : new Date(0);
            return dateB - dateA;
        });

        return sanitizedProjects;

    } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        return [];
    }
}
