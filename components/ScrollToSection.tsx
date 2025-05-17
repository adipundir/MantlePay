'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ScrollToSectionProps {
  targetId: string;
  children: ReactNode;
  className?: string;
  centerInViewport?: boolean;
}

export default function ScrollToSection({ 
  targetId, 
  children, 
  className = '', 
  centerInViewport = false 
}: ScrollToSectionProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get the height of the navbar (assuming it's 4rem or 64px)
      const navbarHeight = 64;
      
      if (centerInViewport || targetId === 'waitlist') {
        // Calculate position to center the element in the viewport
        const windowHeight = window.innerHeight;
        const elementHeight = targetElement.offsetHeight;
        
        // The goal is to position the element so its center is at the center of the viewport
        // But we also account for the navbar at the top
        const targetPosition = 
          targetElement.getBoundingClientRect().top + 
          window.scrollY - 
          (windowHeight / 2) + 
          (elementHeight / 4) - 
          (navbarHeight / 2);
        
        // Scroll to the calculated position
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else {
        // Standard scrolling behavior with offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 24;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <a href={`#${targetId}`} onClick={scrollToSection} className={className}>
      {children}
    </a>
  );
} 