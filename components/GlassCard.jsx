import styled from "styled-components";
import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hoverEffect = true }) => {
    return (
        <motion.div
            className={`
        backdrop-blur-md 
        bg-white/10 
        border border-white/20 
        rounded-xl 
        shadow-lg 
        p-6 
        ${hoverEffect ? "hover:bg-white/20 hover:scale-[1.02] transition-all duration-300" : ""}
        ${className}
      `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
