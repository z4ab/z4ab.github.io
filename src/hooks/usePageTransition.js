"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function usePageTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);

  const navigateWithTransition = useCallback(
    (href, options = {}) => {
      if (isTransitioning) return;

      // External links or files should not use router navigation.
      if (href.startsWith("http") || href.endsWith(".pdf")) {
        if (options.target === "_blank" || options.newTab) {
          window.open(href, "_blank");
        } else {
          window.location.href = href;
        }
        return;
      }

      // Internal route navigation is immediate to avoid transition deadlocks.
      router.push(href);
    },
    [isTransitioning, router],
  );

  // Kept for API compatibility with existing consumers.
  const completeTransition = useCallback(() => {
    if (pendingRoute?.href) {
      router.push(pendingRoute.href);
    }
    setPendingRoute(null);
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
    resetTransition,
  };
}
