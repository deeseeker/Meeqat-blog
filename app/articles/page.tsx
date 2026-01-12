'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import NewsletterSignup from '@/components/NewsletterSignup';
import { articles, categories } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import { usePosts } from '@/hooks/usePosts';
import { BlogPost } from '@/types/general';

export default function ArticlesPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('Design');
  const {data} = usePosts()
  
  useEffect(() => {
    const categoryParam = searchParams?.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));
    }
  }, [searchParams]);

  const filteredArticles = data?.items.filter((item: BlogPost) => item.categories.includes(selectedCategory))

  return (
    <div className=" mx-auto container min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-white py-4">
        <div className="w-full mx-auto px-4 sm:px-5 lg:px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">All Articles</h1>
          <CategoryFilter 
            categories={['All', ...categories]}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full mx-auto px-4 sm:px-5 lg:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles?.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {filteredArticles?.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-8">
        <div className="mx-auto px-4">
          <div className="bg-gray-50 rounded-[40px] p-6 lg:p-10 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 lg:h-96 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=400&fit=crop&crop=face"
                    alt="Woman working on laptop"
                    className="w-full h-full object-cover rounded-2xl shadow-sm"
                  />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
                    {/* Text Area */}
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#041910] mb-4 leading-tight tracking-tight">
                        Focus on Efficiency and Personalization
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">
                        Effortless Workflow: Build your perfect to-do list.
                        </p>
                    </div>

                    {/* Icon & Button Area */}
                    <div className="flex flex-col items-center gap-4 min-w-[140px]">
                        <div className="text-[#041910]">
                            <svg width="60" height="60" viewBox="0 0 130 142" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-sm">
                                <path d="M61.5699 30.4286C70.073 30.4286 76.9666 23.6169 76.9666 15.2143C76.9666 6.81167 70.073 0 61.5699 0C53.066 0 46.1729 6.81167 46.1729 15.2143C46.1729 23.6169 53.066 30.4286 61.5699 30.4286ZM21.5365 14.7276C13.714 11.4465 4.64883 15.0276 1.27126 22.7332C-2.11795 30.4654 1.50365 39.417 9.3532 42.7094L30.0444 51.3882C32.5721 52.4484 34.2136 54.8992 34.2136 57.6128V78.1656L21.3557 115.065C18.5873 123.01 22.8608 131.668 30.901 134.404C38.9411 137.14 47.7032 132.917 50.4719 124.972L51.4655 122.119C49.16 116.807 47.8838 110.955 47.8838 104.81C47.8838 81.6676 65.9836 62.7031 88.9577 60.9843V57.5986C88.9577 54.885 90.5993 52.4344 93.1271 51.3742L113.785 42.7094C121.634 39.417 125.256 30.4654 121.866 22.7332C118.489 15.0276 109.424 11.4465 101.601 14.7276L90.6116 19.3372C88.2802 20.3151 86.6536 22.1964 85.8571 24.2798C82.1482 33.9785 72.6658 40.8619 61.5692 40.8619C50.4732 40.8619 40.9907 33.9786 37.2815 24.28C36.4847 22.1966 34.8585 20.3154 32.5271 19.3376L21.5365 14.7276ZM130 104.81C130 125.349 113.149 142 92.3634 142C71.5771 142 54.7268 125.349 54.7268 104.81C54.7268 84.2696 71.5771 67.619 92.3634 67.619C113.149 67.619 130 84.2696 130 104.81ZM115.311 88.8947C113.976 87.5748 111.809 87.5748 110.473 88.8947L85.5204 113.552L74.2534 102.419C72.9176 101.099 70.7511 101.099 69.4147 102.419C68.0789 103.739 68.0789 105.88 69.4147 107.201L83.1007 120.724C84.4372 122.044 86.6037 122.044 87.9394 120.724L115.311 93.6767C116.648 92.3561 116.648 90.2153 115.311 88.8947Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <button className="bg-[#1F4D36] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 text-sm whitespace-nowrap">
                          Start Now
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}