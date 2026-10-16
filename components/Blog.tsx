import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { blogPosts } from './blogData';

const Blog: React.FC = () => {
  const featuredPost = blogPosts.find(p => p.featured);
  const gridPosts = blogPosts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-essa-yellow/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <Reveal direction="down">
                <span className="inline-block py-1 px-3 rounded-full bg-essa-yellow/10 border border-essa-yellow/20 text-essa-yellow text-xs font-bold uppercase tracking-widest mb-6 hover:bg-essa-yellow hover:text-black transition-colors duration-300">
                    The Journal
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                    Insights & <span className="text-gray-900">Updates.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                    Expert advice on home selling, market trends, and sustainable living in Ohio.
                </p>
            </Reveal>
        </div>

        {/* Featured Post */}
        {featuredPost && (
            <div className="mb-20">
                <Reveal direction="up">
                    <Link to={`/blog/${featuredPost.id}`} className="group relative grid lg:grid-cols-2 gap-0 bg-white border border-black/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-sm hover:border-essa-yellow/30 hover:shadow-[0_20px_40px_-15px_rgba(255,215,0,0.15)] hover:-translate-y-1 block">
                        <div className="relative h-[400px] lg:h-auto overflow-hidden">
                            <img 
                                src={featuredPost.image} 
                                alt={featuredPost.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <i className="fa-solid fa-bookmark text-8xl text-gray-900"></i>
                            </div>
                            <div className="flex items-center gap-4 mb-6 text-sm">
                                <span className="text-essa-yellow font-bold uppercase tracking-wider">{featuredPost.category}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-500">{featuredPost.date}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-essa-yellow transition-colors duration-300">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <span className="inline-flex items-center gap-2 text-gray-900 font-bold uppercase tracking-wide border-b border-black/10 pb-1 group-hover:border-essa-yellow group-hover:text-essa-yellow transition-all w-fit group/btn">
                                Read Article <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                            </span>
                        </div>
                    </Link>
                </Reveal>
            </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post, index) => (
                <Reveal key={post.id} delay={index * 0.1} direction="up">
                    <Link to={`/blog/${post.id}`} className="group h-full flex flex-col bg-white border border-black/5 rounded-3xl overflow-hidden hover:border-essa-yellow/30 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(255,215,0,0.1)]">
                        <div className="relative h-60 overflow-hidden">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 text-xs font-bold text-gray-900 uppercase tracking-wider group-hover:bg-essa-yellow group-hover:text-black transition-colors duration-300">
                                {post.category}
                            </div>
                        </div>
                        
                        <div className="p-8 flex-grow flex flex-col">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-essa-yellow transition-colors duration-300">
                                {post.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 group-hover:text-gray-800 transition-colors">
                                {post.excerpt}
                            </p>
                            
                            <div className="pt-6 border-t border-black/5 mt-auto group-hover:border-essa-yellow/20 transition-colors">
                                <span className="text-sm font-bold text-gray-900 flex items-center gap-2 group/link hover:text-essa-yellow transition-colors">
                                    Read More 
                                    <i className="fa-solid fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform text-essa-yellow"></i>
                                </span>
                            </div>
                        </div>
                    </Link>
                </Reveal>
            ))}
        </div>

        {/* Newsletter CTA */}
        <Reveal direction="up" delay={0.3}>
            <div className="mt-24 relative rounded-[2.5rem] p-12 overflow-hidden border border-black/10 text-center group bg-white shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-essa-yellow/10 to-blue-900/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <i className="fa-regular fa-paper-plane text-4xl text-essa-yellow mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 block"></i>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay in the loop.</h2>
                    <p className="text-gray-600 mb-8">Join our newsletter for the latest market updates and renovation tips delivered to your inbox.</p>
                    
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-grow bg-gray-50 border border-black/10 rounded-xl px-6 py-4 text-gray-900 focus:border-essa-yellow outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                        />
                        <button className="bg-essa-yellow text-black font-bold px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-yellow hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Reveal>

      </div>
    </div>
  );
};

export default Blog;