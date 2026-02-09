import React from "react";
import { motion } from "framer-motion";
import Idea from "../Logo/Idea";
import Link from "next/link";

function Featured() {
    return (
        <section id="featured" className="py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden p-8 px-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-row justify-between items-center gap-10 shadow-2xl"
            >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-10 -mt-10"></div>

                <div className="relative z-10 flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white text-2xl font-bold mb-2 flex items-center gap-3"
                    >
                        Stay Updated <span className="text-secondary opacity-50 text-base font-normal">| Latest Insights</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-400 max-w-lg"
                    >
                        I regularly share my thoughts on software engineering, modern web technologies, and the future of full-stack development.
                    </motion.p>
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                >
                    <Link href={"/blogs"} className="group flex flex-col items-center gap-2">
                        <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all border border-white/5 shadow-inner">
                            <Idea className="scale-150 tablet:scale-[200%] laptop:scale-[250%]" />
                        </div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                            View Blogs
                        </span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Featured;
