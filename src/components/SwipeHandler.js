'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function SwipeHandler({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  // Define page order for navigation
  const pageOrder = ['/', '/about', '/projects'];
  
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isScrolling = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e) => {
      if (!startX || !startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      
      const diffX = startX - currentX;
      const diffY = startY - currentY;

      // Determine if user is scrolling vertically
      if (Math.abs(diffY) > Math.abs(diffX)) {
        isScrolling = true;
        return;
      }

      // Prevent default only for horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!startX || !startY || isScrolling) {
        startX = 0;
        startY = 0;
        return;
      }

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only proceed if horizontal swipe is dominant
      if (Math.abs(diffX) < Math.abs(diffY)) {
        startX = 0;
        startY = 0;
        return;
      }

      const minSwipeDistance = 50; // Minimum distance for swipe
      const currentIndex = pageOrder.indexOf(pathname);

      if (Math.abs(diffX) > minSwipeDistance) {
        if (diffX > 0) {
          // Swipe left (next page)
          if (currentIndex < pageOrder.length - 1) {
            router.push(pageOrder[currentIndex + 1]);
          }
        } else {
          // Swipe right (previous page)
          if (currentIndex > 0) {
            router.push(pageOrder[currentIndex - 1]);
          }
        }
      }

      startX = 0;
      startY = 0;
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Cleanup
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [router, pathname, pageOrder]);

  return <>{children}</>;
}