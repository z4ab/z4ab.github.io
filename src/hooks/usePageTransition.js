"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTE_ORDER = ["/", "/about", "/projects", "/contact"];

function getRouteIndex(route) {
  return ROUTE_ORDER.indexOf(route);
}

function getDirection(from, to) {
  const fromIndex = getRouteIndex(from);
  const toIndex = getRouteIndex(to);

  // Fallback to forward direction if either route is not in the ordered list.
  if (fromIndex === -1 || toIndex === -1) return 1;

  if (toIndex > fromIndex) return 1; // forward
  if (toIndex < fromIndex) return -1; // backward
  return 1;
}

export function usePageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);
  const [direction, setDirection] = useState(1);

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

      // Compute direction based on nav tab order before navigating.
      const nextDirection = getDirection(pathname, href);
      setDirection(nextDirection);

      // Internal route navigation is immediate.
      router.push(href);
    },
    [isTransitioning, pathname, router],
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
    setDirection(1);
  }, []);

  return {
    isTransitioning,
    pendingRoute,
    direction,
    navigateWithTransition,
    completeTransition,
    resetTransition,
  };
}
