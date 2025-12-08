import { getGitHubProjects } from "../../lib/github";

export default async function getProjects(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method Not Allowed" });
        return;
    }

    try {
        const projects = await getGitHubProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}
