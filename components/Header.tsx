'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Logo from '@/app/assets/logo.svg'


export default function Header() {
  return (
    <header className="bg-white border-b py-2 border-gray-100">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={Logo} 
              alt="Meeqat Logo"
              className="w-full h-auto"
            />

          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 rounded-full pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F43] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}