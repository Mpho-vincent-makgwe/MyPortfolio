import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import GlassCard from "./GlassCard";

function ProjectCard({ title, slug, overview, stack, links }) {
    return (
        <GlassCard className="flex flex-col justify-between h-full min-h-[18rem] group p-0" hoverEffect={true}>
            <Link href={`/projects/${slug}`} className="flex-1 p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <LinkIcon className="text-primary scale-75" />
                    </div>
                </div>

                <p className="text-sm text-gray-400 line-clamp-4 leading-relaxed flex-1">
                    {overview || "No description available."}
                </p>
            </Link>

            <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                    {stack?.slice(0, 3).map((item, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5 font-bold">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex flex-row justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Project Detail</span>
                    <div className="flex gap-4">
                        {links?.github && (
                            <a
                                target="_blank"
                                href={links.github}
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-white transition-colors p-1"
                            >
                                <GitHubIcon fontSize="small" />
                            </a>
                        )}
                        {links?.hosted && (
                            <a
                                target="_blank"
                                href={links.hosted}
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-primary transition-colors p-1"
                            >
                                <LinkIcon fontSize="small" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </GlassCard>
    );
}

export default ProjectCard;
