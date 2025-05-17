'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setFormState('submitting');
    
    // This would be replaced with your actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success state
      setFormState('success');
      
      // Reset form
      setEmail('');
      setCompany('');
      setNewsletter(false);
    } catch (error) {
      setFormState('error');
      setErrorMessage('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 mt-4">
      {formState === 'success' ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 text-center">
          <p className="font-medium">You've been added to our waitlist!</p>
          <p className="text-sm mt-1">We'll notify you when MantlePay is ready for you.</p>
        </div>
      ) : (
        <>
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