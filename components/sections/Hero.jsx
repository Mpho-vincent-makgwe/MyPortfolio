import React from "react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative h-full min-h-[90vh] flex flex-col justify-center py-20 px-4 laptop:px-20 overflow-hidden">
            <div className="flex flex-col laptop:flex-row items-center justify-between gap-12">
                <div className="flex-1 flex flex-col items-center laptop:items-start text-center laptop:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6"
                    >
                        Welcome to my universe
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl tablet:text-5xl laptop:text-7xl font-extrabold text-white leading-tight mb-4"
                    >
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">Mpho Vincent</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg tablet:text-2xl laptop:text-3xl font-medium text-gray-400 mb-8"
                    >
                        Crafting <span className="text-white">exceptional</span> digital experiences
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-500 max-w-lg mb-10 text-lg leading-relaxed shadow-sm"
                    >
                        A dedicated Full Stack Developer specializing in building high-performance, scalable web applications with a focus on modern user experience.
                    </motion.p>

                    <div className="flex flex-col tablet:flex-row items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Link
                                href="mailto:mpho.makgwe@vincetek.co.za"
                                className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/25 active:scale-95"
                            >
                                Get In Touch
                            </Link>
                        </motion.div>

                        <div className="flex items-center gap-4">
                            <SocialIcon href="https://github.com/Mpho-vincent-makgwe" icon={<GitHubIcon />} delay={0.6} />
                            <SocialIcon href="https://www.linkedin.com/in/mpho-vincent-makgwe-1ab386199/" icon={<LinkedInIcon />} delay={0.7} />
                            <SocialIcon href="https://www.instagram.com/king_vince014_rsa/" icon={<InstagramIcon />} delay={0.8} />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-12"
                    >
                        <Link
                            href="/M.V Makgwe_Resume(J-Full-Stack-202601).pdf"
                            target="_blank"
                            className="text-gray-400 hover:text-white text-sm font-medium border-b border-gray-800 hover:border-white transition-all pb-1"
                        >
                            Download Resume
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
                    className="relative flex-1 hidden laptop:flex justify-center items-center"
                >
                    <div className="relative w-80 h-80 desktop:w-96 desktop:h-96">
                        {/* Abstract premium shape */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="absolute inset-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] rotate-6"></div>
                        <div className="absolute inset-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] -rotate-3 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-white/10 text-9xl font-black select-none tracking-tighter">VT</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden laptop:flex flex-col items-center gap-2 text-gray-600"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-800 to-transparent"></div>
            </motion.div>
        </section>
    );
}

function SocialIcon({ href, icon, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay, type: "spring" }}
        >
            <Link
                href={href}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-white/10 transition-all active:scale-90"
            >
                {icon}
            </Link>
        </motion.div>
    );
}

export default Hero;
