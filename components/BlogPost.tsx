import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import Reveal from './Reveal';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-20">
            <h2 className="text-3xl text-gray-900 font-bold mb-4">Article not found</h2>
            <Link to="/blog" className="text-essa-yellow hover:underline">Back to Journal</Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans selection:bg-essa-yellow selection:text-black">
      
      {/* 1. Progress Bar (Optional, simple implementation) */}
      <div className="fixed top-0 left-0 h-1 bg-essa-yellow z-50 w-full origin-left transform scale-x-0 animate-[progress_1s_ease-out_forwards]"></div>

      {/* 2. Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-white"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-4">
            <div className="max-w-4xl mx-auto w-full">
                <Reveal direction="up">
                    <div className="flex items-center gap-4 mb-6 text-sm font-medium">
                        <span className="bg-essa-yellow text-black px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">
                            {post.category}
                        </span>
                        <span className="text-gray-600">{post.date}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{post.readTime}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                        {post.title}
                    </h1>

                    <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-essa-yellow transition-colors group">
                        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Back to Journal
                    </Link>
                </Reveal>
            </div>
        </div>
      </div>

      {/* 3. Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <Reveal delay={0.2} direction="up">
            <div className="prose prose-lg md:prose-xl prose-headings:text-gray-900 prose-a:text-essa-yellow prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-essa-yellow">
                <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed mb-10 border-b border-black/10 pb-10">
                    {post.excerpt}
                </p>
                
                <div className="text-gray-700 font-light leading-loose">
                    {post.content}
                </div>
            </div>
        </Reveal>

        {/* 4. Share / CTA */}
        <div className="mt-20 pt-10 border-t border-black/10">
            <div className="bg-white border border-black/10 rounded-3xl p-8 md:p-12 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to simplify your sale?</h3>
                <p className="text-gray-600 mb-8">Get a fair cash offer for your home in 24 hours. No obligation.</p>
                <Link to="/sell" className="inline-block bg-essa-yellow text-black px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-yellow">
                    Get My Cash Offer
                </Link>
            </div>
        </div>
      </article>

    </div>
  );
};

export default BlogPost;