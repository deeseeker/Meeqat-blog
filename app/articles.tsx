'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CategoryFilter from '@/components/CategoryFilter';
import { Article, articles, categories, featuredArticle } from '@/lib/data';
import SpecialCard from '@/components/SpecialCard';
import { usePosts } from '@/hooks/usePosts';
import { BlogPost } from '@/types/general';

export default function ArticlesPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const {data, isPending} = usePosts()
  
useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const normalized = categoryParam
        .toLowerCase()
        .replace(/ & /g, '-')
        .replace(/ /g, '-')
        .replace(/[^a-z\-]/g, '');
      setSelectedCategory(normalized);
    }
  }, [searchParams, selectedCategory]);

//   const filteredArticles = data?.items.filter((item: any) =>
//   // Check if we are NOT filtering by 'all'
//   selectedCategory.toLowerCase() !== 'all' 
//     ? item.categories.includes(selectedCategory) 
//     : true // Returning 'true' in a filter includes all items when selectedCategory is 'all'
// );

const allItems = data?.items || [];

const filteredArticles = selectedCategory.toLowerCase() === 'all'
  ? allItems
  : allItems.filter((item: any) => 
      item.categories.includes(selectedCategory.toLowerCase())
    );

  return (
    <div className=" mx-auto container min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">All Articles</h1>
          <CategoryFilter 
            categories={['All', ...categories]}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          { isPending ? (
            // Skeleton loaders
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-300 rounded-2xl h-80 animate-pulse"></div>
            ))
          ) : (
            filteredArticles?.map((article: BlogPost) => (
              <SpecialCard key={article.id} article={article} />
            ))
          )}
        </div>

        {filteredArticles ?.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}