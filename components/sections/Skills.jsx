import React from "react";
import SkillCard from "../SkillCard";
import { motion } from "framer-motion";

function Skills({ skills }) {
    return (
        <section id="skills" className="py-24">
            <div className="flex flex-col gap-16">
                <div className="flex flex-row justify-between items-center gap-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-3xl laptop:text-5xl font-bold whitespace-nowrap"
                    >
                        My Technical Arsenal
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
                    {skills?.map((skill, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            key={skill.title || i}
                        >
                            <SkillCard
                                title={skill.title}
                                skills={skill.skills}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
