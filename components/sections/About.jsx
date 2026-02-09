import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
    return (
        <section id="aboutme" className="py-24 relative overflow-hidden">
            <div className="flex flex-row justify-between items-center mb-16 gap-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-3xl laptop:text-5xl font-bold whitespace-nowrap"
                >
                    About Me
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                ></motion.div>
            </div>

            <div className="flex flex-col laptop:flex-row justify-between items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 space-y-6 text-gray-400 text-lg leading-relaxed"
                >
                    <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                        <p>
                            Greetings! I am <span className="text-white font-semibold">Mpho Vincent</span>, and I am passionate about creating digital experiences that leave a lasting impression. My journey began with traditional art, which evolved into a deep fascination with software development and digital design.
                        </p>

                        <p className="mt-4">
                            Currently, I specialize in building modern, clean, and interactive web applications using <span className="text-primary font-bold">Next.js</span>, <span className="text-primary font-bold">React.js</span>, and <span className="text-primary font-bold">Node.js</span>. I bridge the gap between complex backend logic and intuitive frontend aesthetics.
                        </p>

                        <p className="mt-4">
                            My expertise spans across <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Full Stack Development</span>, leveraging languages like <span className="text-white">JavaScript</span>, <span className="text-white">TypeScript</span>, and <span className="text-white">Python</span>. I am constantly exploring new technologies to stay at the forefront of the industry.
                        </p>

                        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/5">Problem Solving</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/5">UI/UX Design</span>
                            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/5">Clean Code</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative w-full laptop:w-[400px] aspect-[2/3] group"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                        <Image
                            src="/About-me-mobile.jpeg"
                            alt="Mpho Vincent - About me"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08001A] via-transparent to-transparent opacity-40"></div>
                    </div>

                    {/* Floating decoration */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 backdrop-blur-3xl border border-white/10 rounded-2xl flex items-center justify-center p-4 shadow-2xl animate-float">
                        <div className="w-full h-full border border-secondary/20 rounded-lg flex items-center justify-center text-[10px] font-black text-secondary leading-none text-center uppercase tracking-tighter">
                            Dev since 2021
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
