import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import Link from "next/link";

function Projects({ projects }) {

    // for the sake of fratured projects, only show 3 of them
    const visibleProjects = projects.slice(0, 3);

    return (
        <section id="projects">
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-row justify-between items-center mt-[7rem] mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[3rem] desktop:text-[3rem] font-bold w-[100%]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline text-white"
                    >
                        Featured projects
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="h-[2px] mobile:w-[25%] tablet:w-[30%] laptop:w-[50%] desktop:w-[50%] inline-block bg-secondary"
                    ></motion.div>
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap gap-6 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]">
                    {visibleProjects?.map((project, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 1 }}
                            transition={{ duration: 0.5, delay: i / 10 }}
                            key={i}
                        >
                            <ProjectCard
                                title={project.name} // Updated prop name from title to name based on lib/github.js
                                slug={project.name} // Updated slug to name
                                stack={project.topics || []} // GitHub API returns topics
                                overview={project.overview}
                                links={project.links}
                                key={i}
                            />
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        className="flex flex-row justify-center items-center border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 py-3 px-10 rounded-full font-bold"
                        href={"/projects"}
                    >
                        See all
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
