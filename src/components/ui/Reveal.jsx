import { motion, useReducedMotion } from "motion/react";

export default function Reveal({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
