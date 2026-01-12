import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Hero from '@/app/assets/hero.svg'

interface ArticlePageProps {
  params: {
    id: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function generateStaticParams() {
  try {
    const res = await fetch(`${BASE_URL}/posts`);
    if (!res.ok) return [];
    const articles = await res.json();
    return articles.items.map((article: any) => ({
      id: article.id,
    }));
  } catch (error) {
    console.error('Error fetching posts for static params:', error);
    return [];
  }
}


export default async function ArticlePage({ params }: ArticlePageProps) {
  
  let article;
  try {
    const res = await fetch(`${BASE_URL}/posts/${params.id}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error('Failed to fetch article');
    }
    article = await res.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-5 lg:px-6 pb-6">
      <Header />
      
      <article className="px-4 mt-4">
        <div className="">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="">
              {/* Article Header */}
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={Hero ?? Hero}
                    alt="Image"
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <div className='flex items-center gap-1'>
                    <p className="font-medium text-gray-900">{article.author?.firstName}</p>
                    <p>{new Date(article.updatedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>

                <Image
                  src={Hero}
                  alt={article.title}
                  width={800}
                  height={400}
                  className="w-full h-56 sm:h-72 object-cover rounded-xl mb-6"
                />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                 {/* Article Content */}
              <div className="prose col-span-2 prose-lg max-w-none">
                {article.content ? (
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {article.content.split('\n\n').map((paragraph: any, index: any) => {
                      if (paragraph.startsWith('##')) {
                        return (
                          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      return (
                        <p key={index} className="text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="text-lg mb-6">{article.excerpt}</p>
                    <p className="text-lg">
                      {article.content}
                    </p>
                  </div>
                )}
              </div>
                <div className="lg:col-span-1">
                  <Sidebar />
                </div>

              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}