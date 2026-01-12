'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/types/general';
import Hero from '@/app/assets/hero.svg'

// Mock Article type for demo
interface Author {
  name: string;
  avatar: string;
  date: string;
}


interface ArticleCardProps {
  article: BlogPost;
  featured?: boolean;
}

export default function SpecialCard({ article, featured = false }: ArticleCardProps) {
  const cardClasses = featured
    ? "group cursor-pointer block h-full"
    : "group cursor-pointer block h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100";

  return (
    <Link href={`/articles/${article.id}`} className={cardClasses}>
      <div className="relative h-[360px] w-full overflow-hidden rounded-xl">
        {/* Background Image using Next/Image for optimization and hover effect */}
        <Image
          src={Hero}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={featured}
        />
        
        {/* Modern Gradient Overlay: Clearer top, readable bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

        {/* Category Badge - Glassmorphism */}
        <div className="absolute top-4 left-4 z-10">
          <span className="backdrop-blur-md bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
            {article.categories[0]}
          </span>
        </div>

        {/* Content Container */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10 flex flex-col justify-end h-full">
          
          <div className="mt-auto transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
            <h3 className={`font-bold mb-2 text-white leading-snug group-hover:text-[#FF9F43] transition-colors duration-300 ${
              featured ? 'text-3xl' : 'text-xl'
            }`}>
              {article.title}
            </h3>
            
            <p className={`text-gray-200 line-clamp-2 mb-4 font-light leading-relaxed ${
               featured ? 'text-base opacity-90' : 'text-sm opacity-80'
            }`}>
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-2">
               {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/50">
                   <Image
                      src={Hero}
                      alt={article.authorId}
                      fill
                      className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white tracking-wide">{article.author.firstName} {article.author.lastName}</span>
                  <span className="text-[10px] text-gray-300 uppercase tracking-wider">{new Date(article.updatedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                </div>
              </div>
              
              {/* Arrow Icon that appears/moves on hover */}
               <div className="bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#FF9F43]" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}