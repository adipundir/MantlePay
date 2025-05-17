'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
      setIsMobileMenuOpen(false);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur-sm transition-transform duration-300 ${
        visible ? 'translate-y-0 shadow-sm' : '-translate-y-full'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-lg font-semibold">MantlePay</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Documentation
          </Link>
          <Link
            href="/console"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Console
          </Link>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/console">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/console/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Link href="/console/signup" className="mr-4">
            <Button size="sm">Get Started</Button>
          </Link>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-background pt-16 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container py-6">
          <nav className="flex flex-col space-y-6">
            <Link
              href="#features"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/docs"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/console"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Console
            </Link>
            <div className="pt-4 border-t">
              <Link
                href="/console"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 