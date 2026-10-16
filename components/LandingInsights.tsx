import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FadeUp } from './landing-motion';
import WordHighlight from './WordHighlight';
import { blogPosts } from './blogData';

/** The three latest articles from the blog, as image cards. */
export default function LandingInsights() {
  const posts = blogPosts.slice(0, 3);
  return <section className="lp-section" aria-labelledby="insights-title">
    <div className="lp-container">
      <div className="lp-split-head">
        <FadeUp><h2 id="insights-title">Insights for <WordHighlight>Ohio homeowners</WordHighlight></h2></FadeUp>
        <FadeUp delay={.06}><Link to="/blog" className="lp-pill-btn lp-pill-btn-dark">View all articles <span className="lp-pill-btn-arrow"><ArrowUpRight aria-hidden="true" /></span></Link></FadeUp>
      </div>
      <div className="lp-insights">
        {posts.map((post, index) => <FadeUp key={post.id} delay={index * .1} y={30}>
          <Link to={`/blog/${post.id}`} className="lp-insight">
            <span className="lp-insight-media"><img src={post.image} alt="" loading="lazy" /><span className="lp-tag">{post.category}</span></span>
            <span className="lp-insight-meta">{post.date} · {post.readTime}</span>
            <span className="lp-insight-title">{post.title}</span>
          </Link>
        </FadeUp>)}
      </div>
    </div>
  </section>;
}
