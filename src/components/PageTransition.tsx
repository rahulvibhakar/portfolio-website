import { ReactNode } from "react";
import { motion } from "framer-motion";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
