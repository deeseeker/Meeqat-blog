'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-gray-50 container mx-auto rounded-3xl mb-6 py-6">
      <div className="text-center px-4 w-fit mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          Get the best newsletters in your inbox
        </h2>
        
        <form onSubmit={handleSubmit} className="mt-4 w-full">
          <div className="flex flex-col gap-4 w-full mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border text-center border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9F43] focus:border-transparent"
              required
            />
            <Button 
              type="submit" 
              className="bg-[#FF9F43] hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {isSubmitted ? 'Subscribed!' : 'SUBSCRIBE'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}