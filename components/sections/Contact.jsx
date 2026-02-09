import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import GlassCard from "../GlassCard";

function Contact() {
    return (
        <section id="getintouch" className="py-24 relative overflow-hidden">
            <div className="flex flex-row justify-between items-center mb-16 gap-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-3xl laptop:text-5xl font-bold whitespace-nowrap"
                >
                    Get In Touch
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                ></motion.div>
            </div>

            <div className="flex flex-col laptop:flex-row gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1"
                >
                    <GlassCard className="h-full" hoverEffect={false}>
                        <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Build Something Together</h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I&apos;m currently open to new opportunities and interesting collaborations. Whether you have a question or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <ContactItem
                                icon={<MailIcon className="text-primary" />}
                                label="Email"
                                value="Makgwe44@gmail.com"
                                href="mailto:Makgwe44@gmail.com"
                            />
                            <ContactItem
                                icon={<LinkedInIcon className="text-primary" />}
                                label="LinkedIn"
                                value="Mpho Vincent Makgwe"
                                href="https://www.linkedin.com/in/mpho-vincent-makgwe-1ab386199/"
                            />
                        </div>
                    </GlassCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="laptop:w-1/3 space-y-8"
                >
                    <div className="flex flex-col gap-6">
                        <h4 className="text-sm font-black text-gray-600 uppercase tracking-[0.3em]">Social Universe</h4>
                        <div className="grid grid-cols-1 gap-4">
                            <SocialButton
                                href="https://github.com/Mpho-vincent-makgwe"
                                icon={<GitHubIcon fontSize="small" />}
                                label="GitHub"
                                subtitle="@Mpho-vincent-makgwe"
                            />
                            <SocialButton
                                href="https://www.instagram.com/king_vince014_rsa/"
                                icon={<InstagramIcon fontSize="small" />}
                                label="Instagram"
                                subtitle="@king_vince014_rsa"
                            />
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                            Built with passion by Mpho Vincent Makgwe
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value, href }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                {icon}
            </div>
            <div>
                <span className="block text-[10px] uppercase tracking-widest text-gray-600 font-black">{label}</span>
                <span className="text-white font-medium group-hover:text-primary transition-colors">{value}</span>
            </div>
        </a>
    );
}

function SocialButton({ href, icon, label, subtitle }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
            <div className="flex items-center gap-4">
                <div className="text-gray-400 group-hover:text-white transition-colors">
                    {icon}
                </div>
                <div>
                    <span className="block text-sm font-bold text-white">{label}</span>
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">{subtitle}</span>
                </div>
            </div>
            <span className="text-gray-600 group-hover:translate-x-1 transition-transform">→</span>
        </a>
    );
}

export default Contact;
