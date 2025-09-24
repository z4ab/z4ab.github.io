'use client';
import { createContext, useContext } from 'react';
import { usePageTransition } from '../hooks/usePageTransition';

const PageTransitionContext = createContext();

export function PageTransitionProvider({ children }) {
  const transitionState = usePageTransition();
  
  return (
    <PageTransitionContext.Provider value={transitionState}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransitionContext() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransitionContext must be used within a PageTransitionProvider');
  }
  return context;
}