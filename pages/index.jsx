import React from "react";
import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Meta from "@/components/Meta";
import styles from "@/styles/index.module.css";

import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Featured from "@/components/sections/Featured";

export default function Home({ projects, skills }) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // SSR/SSG Shell: We render a basic layout with Meta to ensure stability and SEO.
    // The actual interactive components hydrate only on the client.
    if (!mounted) {
        return (
            <main className="bg-[#08001A] min-h-screen border-none outline-none">
                <Meta />
                <div className="w-full h-full flex items-center justify-center pt-20">
                    {/* Minimal decorative element for the shell */}
                    <div className="w-20 h-20 rounded-full border-t-2 border-primary animate-spin opacity-20"></div>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-[#08001A] min-h-screen overflow-x-hidden">
            <Meta />
            <Navigation />
            <div className="relative z-10">
                <Hero />
                <div className={styles.container}>
                    <Featured projects={projects} />
                    <About />
                    <Projects projects={projects} />
                    <Skills skills={skills} />
                    <Contact />
                </div>
            </div>

            {/* Background elements for premium aesthetic */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
            </div>
        </main>
    );
}

export async function getStaticProps() {
    try {
        // Direct file system access for stability
        const projectsPath = path.join(process.cwd(), "data", "projectData", "index.json");
        const skillsPath = path.join(process.cwd(), "data", "skillData", "index.json");

        const projectsJson = fs.readFileSync(projectsPath, "utf-8");
        const skillsJson = fs.readFileSync(skillsPath, "utf-8");

        const projects = JSON.parse(projectsJson);
        const skills = JSON.parse(skillsJson);

        return {
            props: {
                projects: projects || [],
                skills: skills || [],
            },
            revalidate: 3600,
        };
    } catch (error) {
        console.error("BUILD ERROR: Failed to fetch static props in index.jsx", error);
        return {
            props: {
                projects: [],
                skills: [],
            },
        };
    }
}
