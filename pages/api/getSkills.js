import * as fs from "fs";
import path from "path";

export default async function getProjects(req, res) {
    try {
        const skillsDir = path.join(process.cwd(), 'data', 'skillData', 'skills');
        let data = await fs.promises.readdir(skillsDir);
        let allSkills = [];

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            const skillPath = path.join(skillsDir, item);
            const skills = await fs.promises.readFile(skillPath, "utf-8");
            allSkills.push(JSON.parse(skills));
        }

        allSkills.sort((a, b) => a.index - b.index);

        res.status(200).send(allSkills);
    } catch (error) {
        console.error("API Error in getSkills:", {
            error: error.message,
            stack: error.stack,
            cwd: process.cwd()
        });
        res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}