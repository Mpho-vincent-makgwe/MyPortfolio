import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hoverEffect = true }) => {
    return (
        <motion.div
            className={`
                backdrop-blur-xl 
                bg-white/5 
                border border-white/10 
                rounded-2xl 
                shadow-2xl 
                overflow-hidden
                ${hoverEffect ? "hover:bg-white/10 hover:border-white/20 transition-all duration-500" : ""}
                ${className}
            `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
