'use client';

import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/app/assets/hero.svg'
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/types/general';


// Mock Article type for demo
interface ArticleCardProps {
  article: BlogPost;
  featured?: boolean;
}

export default function HeroSection({ article, featured = false }: ArticleCardProps) {
  
  return (
    <Link href={`/articles/${article?.id}`} className="group block">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="relative w-full lg:w-3/5 overflow-hidden rounded-2xl">
            <Image 
              src={Hero} 
              alt={article?.title ?? 'Article Image'}
              width={800}
              height={500}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block bg-[#FF9F43] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                New!
              </span>
            </div>
          
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 group-hover:text-[#FF9F43] transition-colors leading-tight">
            {article?.title}
          </h1>
          
          <p className="text-gray-500 text-base lg:text-lg mb-8 leading-relaxed line-clamp-3">
            {article?.excerpt}
          </p>
          
          <div className="flex items-center text-[#FF9F43] font-bold text-lg hover:text-orange-600 transition-colors group">
            <span>Read More</span>
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
