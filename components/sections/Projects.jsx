import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import Link from "next/link";

function Projects({ projects }) {
    const visibleProjects = Array.isArray(projects) ? projects.slice(0, 3) : [];

    return (
        <section id="projects" className="py-24">
            <div className="flex flex-col gap-16">
                <div className="flex flex-row justify-between items-center gap-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-3xl laptop:text-5xl font-bold whitespace-nowrap"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
                    {visibleProjects.map((project, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            key={project.repo_name || project.name || i}
                        >
                            <ProjectCard
                                title={project.title || project.name}
                                slug={project.repo_name || project.name}
                                stack={project.stack || project.topics || []}
                                overview={project.overview}
                                links={project.links || {}}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Link
                        className="group flex items-center gap-3 px-10 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-primary transition-all shadow-xl hover:shadow-primary/20 active:scale-95"
                        href={"/projects"}
                    >
                        See All Projects
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
