import styles from "@/styles/index.module.css";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Meta from "@/components/Meta";
import Featured from "@/components/sections/Featured";
import Idea from "@/components/Logo/Idea";
import Link from "next/link";
import { getGitHubProjects } from "../lib/github";

export default function Home({ projects, skills }) {
    return (
        <main className="bg-[#08001A]">
            <Meta />
            <Navigation />
            <Hero />
            <div className={styles.container}>
                <Featured />
                <About />
                <Projects projects={projects} />
                <Skills skills={skills} />
                <Contact />
                <footer className="w-full h-full flex flex-row justify-center items-center pt-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold">Read my latest blogs at</div>
                        <Link href={"/blogs"}>
                            <Idea />
                        </Link>
                    </div>
                </footer>
            </div>
        </main>
    );
}

export async function getStaticProps() {
    try {
        const projects = await getGitHubProjects();
        return {
            props: {
                projects: projects || [],
                skills: [], // Placeholder for skills
            },
            revalidate: 3600,
        };
    } catch (error) {
        console.error("CRITICAL: Error in Home getStaticProps:", {
            message: error.message,
            stack: error.stack,
            time: new Date().toISOString()
        });
        return {
            props: {
                projects: [],
                skills: [],
            },
            revalidate: 60, // Revisit sooner if failed
        };
    }
}