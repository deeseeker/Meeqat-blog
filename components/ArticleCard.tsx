'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/types/general';
import Hero from '@/app/assets/hero.svg'

interface ArticleCardProps {
  article: BlogPost;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  // Common classes for the card container
  const cardClasses = "group relative w-full h-[400px] overflow-hidden rounded-2xl cursor-pointer";

  return (
    <Link href={`/articles/${article.id}`} className="block h-full">
      <div className={cardClasses}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Hero ?? Hero}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent/20" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Top Section: Category */}
            <div className="flex items-start justify-between">
                <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {article.categories[0]}
                </span>
            </div>

            {/* Bottom Section: Text & Footer */}
            <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight line-clamp-2 group-hover:text-[#FF9F43] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                  {article.excerpt}
                </p>

                {/* Footer Divider & Info */}
                <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                         <div className="relative w-10 h-10 shrink-0 border border-white/30 rounded-full">
                            <Image
                                src={Hero ?? Hero}
                                alt={article.author.firstName}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">{article.author.firstName} {article.author.lastName}</p>
                            <p className="text-gray-400 text-xs font-medium tracking-wide">
                                {new Date(article.updatedAt).toLocaleDateString("en-US", {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                                }).toUpperCase()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Link>
  );
}