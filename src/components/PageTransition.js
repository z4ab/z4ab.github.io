"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const pageVariants = {
  initial: (direction) => ({
    x: direction >= 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  in: {
    x: "0%",
    opacity: 1,
    scale: 1,
  },
  out: (direction) => ({
    x: direction >= 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.95,
  }),
};

const pageTransition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.8,
};

export default function PageTransition({ children, pageKey, direction = 1 }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.add("is-transitioning");
    body.classList.add("is-transitioning");

    return () => {
      html.classList.remove("is-transitioning");
      body.classList.remove("is-transitioning");
    };
  }, [pageKey]);

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={pageKey}
        custom={direction}
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
