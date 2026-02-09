import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import GlassCard from "./GlassCard";

function ProjectCard({ title, slug, overview, stack, links }) {
    return (
        <GlassCard className="flex flex-col justify-between items-stretch w-full tablet:w-[20rem] h-[18rem] hover:-translate-y-2">
            <Link href={`/projects/${slug}`} className="group">
                <div className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-4">{title}</div>
                <div className="text-sm font-medium text-gray-300 line-clamp-4 leading-relaxed">
                    {overview || "No description available."}
                </div>
            </Link>

            <div className="flex flex-col gap-4 mt-4 border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-2">
                    {stack?.slice(0, 3).map((item, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-accent border border-white/10">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex flex-row justify-end items-center gap-4 text-white/80">
                    {links?.github && (
                        <a
                            target="_blank"
                            href={links.github}
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <GitHubIcon />
                        </a>
                    )}
                    {links?.hosted && (
                        <a
                            target="_blank"
                            href={links.hosted}
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <LinkIcon />
                        </a>
                    )}
                </div>
            </div>
        </GlassCard>
    );
}

export default ProjectCard;
