'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { addToWaitlist, type WaitlistFormData } from '@/lib/actions/waitlist';

export default function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error' | 'already_exists'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setFormState('submitting');
    
    try {
      const formData: WaitlistFormData = {
        name,
        email,
        company,
      };
      
      const response = await addToWaitlist(formData);
      
      if (!response.success) {
        // Check if it's specifically a duplicate email error
        if (response.message.includes('already exists')) {
          setFormState('already_exists');
          // Reset form
          setName('');
          setEmail('');
          setCompany('');
          setNewsletter(false);
          return;
        }
        
        throw new Error(response.message || 'Something went wrong');
      }
      
      // Success state
      setFormState('success');
      
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setNewsletter(false);
    } catch (error) {
      setFormState('error');
      setErrorMessage(error instanceof Error ? error.message : 'There was an error submitting your request. Please try again.');
    }
  };

  const renderSuccessBanner = () => {
    const isAlreadyExists = formState === 'already_exists';
    
    return (
      <div className="rounded-md p-6 border border-border/30 bg-card/50 backdrop-blur-sm shadow-sm">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">
            {isAlreadyExists 
              ? "You're already on our waitlist" 
              : "You've been added to our waitlist!"}
          </h3>
          <p className="text-muted-foreground">
            {isAlreadyExists 
              ? "Thank you for your continued interest in MantlePay." 
              : "We'll notify you when MantlePay is ready for you."}
          </p>
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 mt-4">
      {formState === 'success' || formState === 'already_exists' ? (
        renderSuccessBanner()
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-left">
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="flex h-12 w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex h-12 w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm font-medium text-left">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your Company"
              className="flex h-12 w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox" 
              id="newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="h-4 w-4 rounded border-input bg-card text-primary focus:ring-primary"
            />
            <label htmlFor="newsletter" className="text-sm text-muted-foreground">
              Subscribe to our newsletter for updates
            </label>
          </div>
          
          {formState === 'error' && (
            <div className="text-red-500 text-sm">
              {errorMessage}
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full h-12" 
            size="lg"
            disabled={formState === 'submitting'}
          >
            {formState === 'submitting' ? 'Submitting...' : 'Join Waitlist'}
          </Button>
          
          <p className="text-xs text-muted-foreground pt-2">
            By signing up, you agree to our <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">Terms of Service</Link> and <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">Privacy Policy</Link>.
          </p>
        </>
      )}
    </form>
  );
} 