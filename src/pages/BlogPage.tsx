import React from 'react';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../config/blogPosts';
import ScrollReveal from '../components/ScrollReveal';

export default function BlogPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Blog - Home Service Tips & Insights"
        description="Expert advice on home cleaning, yard maintenance, and snow removal services in the Greater Toronto Area. Read our latest articles for professional tips and insights."
        keywords="home service blog, cleaning tips GTA, yard maintenance guide, snow removal advice, Toronto home services"
      />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Service Insights</h1>
              <p className="text-xl text-gray-600">
                Expert advice and tips for maintaining your home in the Greater Toronto Area
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}