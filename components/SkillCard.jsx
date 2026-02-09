import React from "react";
import SkillCardBlock from "./SkillCardBlock";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

function SkillCard({ title, skills }) {
    return (
        <GlassCard className="flex flex-col gap-8 h-full p-10" hoverEffect={false}>
            <div className="text-xl font-bold text-white mb-2">{title}</div>
            <div className="flex flex-wrap gap-4">
                {skills?.map((skill, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        key={i}
                    >
                        <SkillCardBlock icon={skill.icon} name={skill.name} />
                    </motion.div>
                ))}
            </div>
        </GlassCard>
    );
}

export default SkillCard;
