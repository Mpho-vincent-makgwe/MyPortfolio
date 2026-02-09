import React from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/index.module.css";
import Meta from "@/components/Meta";
import Link from "next/link";
import Idea from "@/components/Logo/Idea";

// Dynamically import complex sections with SSR enabled, but we still guard them with 'mounted'
// to avoid any hydration mismatches during development and production.
const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const Featured = dynamic(() => import("@/components/sections/Featured"), { ssr: false });

export default function Home({ projects = [], skills = [] }) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // According to ChatGPT and Next.js best practices, returning 'null' during SSR/SSG 
    // can cause 500 errors in production. We return a minimal shell instead.
    if (!mounted) {
        return (
            <main className="bg-[#08001A] min-h-screen">
                <Meta />
                {/* Minimal shell to prevent SSR collapse */}
            </main>
        );
    }

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
                <footer className="w-full h-full flex flex-row justify-center items-center pt-10 pb-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold text-white">Read my latest blogs at</div>
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
    // Keep it empty for now to test stability
    return {
        props: {
            projects: [],
            skills: [],
        },
    };
}
