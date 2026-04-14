"use client";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    x: "100%",
    opacity: 0,
    scale: 0.95,
  },
  in: {
    x: "0%",
    opacity: 1,
    scale: 1,
  },
  out: {
    x: "-100%",
    opacity: 0,
    scale: 0.95,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.8,
};

export default function PageTransition({ children, pageKey }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pageKey}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full h-full justify-center items-center flex"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
