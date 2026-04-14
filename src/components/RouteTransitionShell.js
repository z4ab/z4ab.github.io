'use client';

import { usePathname } from 'next/navigation';
import PageTransition from './PageTransition';

export default function RouteTransitionShell({ children }) {
  const pathname = usePathname();

  return <PageTransition pageKey={pathname}>{children}</PageTransition>;
}
