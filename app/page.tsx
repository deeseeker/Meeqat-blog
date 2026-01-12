import { Metadata } from 'next';
import HomeTemplate from '@/components/templates/HomeTemplate';

export const metadata: Metadata = {
  title: 'Meeqat Blog - Insights & Articles on Tech & Design',
  description: 'Explore the latest insights on technology, design, and development at Meeqat Blog. Stay up to date with our curated articles.',
  openGraph: {
    title: 'Meeqat Blog - Insights & Articles on Tech & Design',
    description: 'Explore the latest insights on technology, design, and development at Meeqat Blog.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeqat Blog - Insights & Articles',
    description: 'Explore the latest insights on technology, design, and development at Meeqat Blog.',
  },
};

export default function Home() {
  return <HomeTemplate />;
}