"use client";

import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";
import { usePageTransitionContext } from "../context/PageTransitionContext";

export default function RouteTransitionShell({ children }) {
  const pathname = usePathname();
  const { direction } = usePageTransitionContext();

  return (
    <PageTransition pageKey={pathname} direction={direction}>
      {children}
    </PageTransition>
  );
}
