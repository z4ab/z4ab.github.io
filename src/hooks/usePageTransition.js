'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export function usePageTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);

  const navigateWithTransition = useCallback((href, options = {}) => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    // For external links or files, navigate immediately
    if (href.startsWith('http') || href.endsWith('.pdf')) {
      if (options.target === '_blank' || options.newTab) {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
      return;
    }

    setIsTransitioning(true);
    setPendingRoute({ href, options });
  }, [isTransitioning]);

  const completeTransition = useCallback(() => {
    if (pendingRoute) {
      router.push(pendingRoute.href);
      setPendingRoute(null);
    }
    setIsTransitioning(false);
  }, [router, pendingRoute]);

  const resetTransition = useCallback(() => {
    setIsTransitioning(false);
    setPendingRoute(null);
  }, []);

  return {
    isTransitioning,
    pendingRoute,
    navigateWithTransition,
    completeTransition,
    resetTransition
  };
}