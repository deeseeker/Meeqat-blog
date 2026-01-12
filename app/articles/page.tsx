import { Metadata } from 'next';
import ArticlesTemplate from '@/components/templates/ArticlesTemplate';

export const metadata: Metadata = {
  title: 'All Articles - Meeqat Blog',
  description: 'Browse our complete collection of articles. Filter by category to find exactly what you are looking for.',
  openGraph: {
    title: 'All Articles - Meeqat Blog',
    description: 'Browse our complete collection of articles.',
  },
};

export default function ArticlesPage() {
  return <ArticlesTemplate />;
}