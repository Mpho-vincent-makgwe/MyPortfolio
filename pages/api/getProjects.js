import { getGitHubProjects } from "../../lib/github";

export default async function handler(req, res) {
    if (req.method !== "GET" && req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const projects = await getGitHubProjects();
        res.status(200).json(projects);
    } catch (error) {
        console.error("API Error in getProjects:", {
            error: error.message,
            stack: error.stack
        });
        res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}
