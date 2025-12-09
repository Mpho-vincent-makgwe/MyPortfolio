import fs from "fs";
import path from "path";

export async function getAllBlogs() {
    try {
        const filePath = path.join(process.cwd(), "data", "blogData", "index.json");
        const fileContent = await fs.promises.readFile(filePath, "utf-8");
        const blogs = JSON.parse(fileContent);

        // Sort by date descending
        blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

        return blogs;
    } catch (error) {
        console.error("Error reading blogs:", error);
        return [];
    }
}

export async function getAllTopics() {
    try {
        const blogs = await getAllBlogs();
        const topicSet = new Set(blogs.map(blog => blog.topic));
        return Array.from(topicSet);
    } catch (error) {
        console.error("Error getting topics:", error);
        return [];
    }
}

export async function getBlogBySlug(slug) {
    const blogs = await getAllBlogs();
    // Match slug with or without leading slash
    const blog = blogs.find(b => b.link === slug || b.link === `/${slug}` || b.link.replace(/^\//, "") === slug);

    if (!blog) return null;

    // Sanitize to ensure no undefined values
    return JSON.parse(JSON.stringify(blog));
}
