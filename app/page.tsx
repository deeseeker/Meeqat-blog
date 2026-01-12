'use client'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import HeroSection from '@/components/HeroSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArticlesPage from './articles';
import { usePosts } from '@/hooks/usePosts';
import { BlogPost } from '@/types/general';

export default function Home() {
  const { data, isPending } = usePosts()
  const featured = data ? data.items[0] : {} as BlogPost
  return (
    <div className="min-h-screen px-4 sm:px-5 lg:px-6 pb-6">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-5 lg:px-6 py-4">
        <div className="gap-8 items-center">
          <div>
            {isPending ? <div className="bg-gray-200 rounded-2xl h-80 animate-pulse"></div> :
            <HeroSection article={featured} featured={true} />}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="container mx-auto px-4 sm:px-5 lg:px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Recent Articles</h2>
            <p className="text-gray-600">Stay informed with our latest insight</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.items?.slice(0, 1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <ArticlesPage />

      <NewsletterSignup />
      <Footer />
    </div>
  );
}