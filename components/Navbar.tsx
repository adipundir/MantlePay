'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith('/docs');
  const isConsolePage = pathname.startsWith('/console');
  const hideOnSubpages = isDocsPage || isConsolePage;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // If we're at the very top, always show the navbar
      if (currentScrollPos <= 10) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }
      
      // Determine scroll direction and visibility
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const scrollDelta = Math.abs(currentScrollPos - prevScrollPos);
      
      // Only change visibility state if scrolled enough (prevents tiny movements from triggering)
      if (scrollDelta > 10) {
        setVisible(!isScrollingDown);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when navbar hides
  useEffect(() => {
    if (!visible && isMobileMenuOpen) {
      handleCloseMobileMenu();
    }
  }, [visible, isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle transition end to complete menu closing
  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    
    const handleTransitionEnd = () => {
      if (isMenuClosing) {
        setIsMobileMenuOpen(false);
        setIsMenuClosing(false);
      }
    };
    
    if (mobileMenu) {
      mobileMenu.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        mobileMenu.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [isMenuClosing]);

  const handleCloseMobileMenu = () => {
    setIsMenuClosing(true);
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setIsMenuClosing(false);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen || isMenuClosing) {
      handleCloseMobileMenu();
    } else {
      handleOpenMobileMenu();
    }
  };

  // Don't render navbar on docs or console pages
  if (hideOnSubpages) {
    return null;
  }

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => {
    // Check if it's an anchor link
    const isAnchor = href.startsWith('#');
    
    if (isAnchor) {
      return (
        <a 
          href={href} 
          className={`${isMobile 
            ? "text-lg font-medium transition-colors hover:text-primary" 
            : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          }`}
          onClick={isMobile ? handleCloseMobileMenu : undefined}
        >
          {label}
        </a>
      );
    }
    
    return (
      <Link
        href={href}
        className={`${isMobile 
          ? "text-lg font-medium transition-colors hover:text-primary" 
          : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        }`}
        onClick={isMobile ? handleCloseMobileMenu : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur-sm transition-transform duration-300 ${
        visible ? 'translate-y-0 shadow-sm' : '-translate-y-full'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-lg font-semibold">MantlePay</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          <NavLink href="#features" label="Features" />
          <NavLink href="#how-it-works" label="How It Works" />
          <NavLink href="#pricing" label="Pricing" />
          {/* <NavLink href="/docs" label="Docs" /> */}
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden items-center md:flex">
          <Link href="#waitlist">
            <Button 
              size="sm" 
              variant="outline" 
              className="border-black bg-white text-black hover:bg-gray-100"
            >
              Join Waitlist
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Link href="#waitlist" className="mr-4">
            <Button 
              size="sm" 
              variant="outline" 
              className="border-black bg-white text-black hover:bg-gray-100"
            >
              Join Waitlist
            </Button>
          </Link>
          <Button 
            variant={isMobileMenuOpen || isMenuClosing ? "default" : "outline"}
            size="icon"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen || isMenuClosing}
            className="z-[60] relative"
          >
            {isMobileMenuOpen || isMenuClosing ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Backdrop */}
      {(isMobileMenuOpen || isMenuClosing) && (
        <div 
          className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            isMenuClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleCloseMobileMenu}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed inset-x-0 top-16 z-50 bg-background border-t transform transition-all duration-300 ease-in-out md:hidden ${
          isMenuClosing 
            ? 'translate-y-[-100%] opacity-0' 
            : isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-[-100%] opacity-0 pointer-events-none'
        }`}
      >
        <div className="container py-6">
          <nav className="flex flex-col space-y-6">
            <NavLink href="#features" label="Features" isMobile />
            <NavLink href="#how-it-works" label="How It Works" isMobile />
            <NavLink href="#pricing" label="Pricing" isMobile />
            {/* <NavLink href="/docs" label="Docs" isMobile /> */}
            <div className="pt-6 mt-2 border-t">
              <Link
                href="#waitlist"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={handleCloseMobileMenu}
              >
                Join Waitlist
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 