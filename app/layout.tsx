import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Meeqat Blog - Insights & Articles',
    template: '%s | Meeqat Blog',
  },
  description: 'A beautiful, modern blog with the latest insights on technology, design, and development.',
  keywords: ['blog', 'technology', 'design', 'development', 'articles', 'insights'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Meeqat Blog',
    title: 'Meeqat Blog - Insights & Articles',
    description: 'A beautiful, modern blog with the latest insights on technology, design, and development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeqat Blog - Insights & Articles',
    description: 'A beautiful, modern blog with the latest insights on technology, design, and development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}