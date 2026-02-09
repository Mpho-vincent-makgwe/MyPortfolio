import React from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/index.module.css";
import Meta from "@/components/Meta";

// Dynamically import all sections with SSR disabled to identify the offending component
const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const Featured = dynamic(() => import("@/components/sections/Featured"), { ssr: false });
const Idea = dynamic(() => import("@/components/Logo/Idea"), { ssr: false });
const Link = dynamic(() => import("next/link"), { ssr: false });

export default function Home({ projects = [], skills = [] }) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{ background: "#08001A", height: "100vh" }}></div>;
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
                <footer className="w-full h-full flex flex-row justify-center items-center pt-10">
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
    return {
        props: {
            projects: [],
            skills: [],
        },
    };
}
