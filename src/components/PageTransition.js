'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePageTransitionContext } from '../context/PageTransitionContext';

const pageVariants = {
  initial: {
    x: '100%',
    opacity: 0,
    scale: 0.95,
  },
  in: {
    x: "0%",
    opacity: 1,
    scale: 1,
  },
  out: {
    x: '-100%',
    opacity: 0,
    scale: 0.95,
  },
};

const pageTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 26,
  mass: 0.8,
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const { isTransitioning, pendingRoute, completeTransition } = usePageTransitionContext();
  const [animationState, setAnimationState] = useState('in');

  // Handle the transition sequence
  useEffect(() => {
    if (isTransitioning && pendingRoute) {
      // Start exit animation
      setAnimationState('out');
      
      // After exit animation completes, navigate to new page
      // Timeout accounts for spring physics settling time
      const timer = setTimeout(() => {
        completeTransition();
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      // Reset to normal state when not transitioning
      setAnimationState('in');
    }
  }, [isTransitioning, pendingRoute, completeTransition]);

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate={animationState}
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full justify-center items-center flex"
    >
      {children}
    </motion.div>
  );
}