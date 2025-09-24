'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePageTransitionContext } from '../context/PageTransitionContext';

const pageVariants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  in: {
    x: "0%",
    opacity: 1,
  },
  out: {
    x: '-100%',
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3,
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const { isTransitioning, pendingRoute, completeTransition } = usePageTransitionContext();
  const [animationState, setAnimationState] = useState('in');

  // Handle the transition sequence
  useEffect(() => {
    if (isTransitioning && pendingRoute) {
      // Start exit animation
      //setAnimationState('out');
      
      // After exit animation completes, navigate to new page
      completeTransition();
      
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