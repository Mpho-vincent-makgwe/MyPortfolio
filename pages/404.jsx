import React from "react";
import Meta from "@/components/Meta";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
    return (
        <main className="bg-[#08001A] min-h-screen flex items-center justify-center px-4 overflow-hidden relative">
            <Meta title="404 - Page Not Found | VinceTek Solutions" />

            {/* Background elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-lg p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl text-center"
            >
                <motion.div
                    initial={{ rotate: -20, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20"
                >
                    <span className="text-4xl font-black text-white">404</span>
                </motion.div>

                <h1 className="text-4xl font-bold text-white mb-4">
                    Dimension Not Found
                </h1>

                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    The route you&apos;re looking for doesn&apos;t exist or has been moved to another coordinate in the universe.
                </p>

                <div className="flex flex-col tablet:flex-row gap-4 justify-center">
                    <Link
                        href="/home"
                        className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/25 active:scale-95 text-sm"
                    >
                        Back to Universe
                    </Link>
                    <Link
                        href="/projects"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all active:scale-95 text-sm"
                    >
                        Explore Projects
                    </Link>
                </div>
            </motion.div>

            {/* Floating decoration */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-32 h-32 border border-white/5 rounded-full pointer-events-none opacity-20"
            ></motion.div>
        </main>
    );
}
