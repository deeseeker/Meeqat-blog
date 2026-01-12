'use client';

import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              selectedCategory === category
                ? 'bg-[#FF9F43] text-white border-[#FF9F43] shadow-md transform scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#FF9F43] hover:text-[#FF9F43] hover:shadow-sm'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}