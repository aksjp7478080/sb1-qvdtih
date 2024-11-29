import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../config/blogPosts';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    React.useEffect(() => {
      navigate('/blog');
    }, [navigate]);
    return null;
  }

  return (
    <div className="pt-20">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        image={post.imageUrl}
      />
      
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link 
              to="/blog"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  {post.category}
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mb-8 shadow-lg">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="prose prose-emerald max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph.startsWith('#') ? (
                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      {paragraph.replace(/^##\s/, '')}
                    </h2>
                  ) : paragraph.startsWith('-') ? (
                    <ul className="list-disc list-inside mb-4">
                      <li className="text-gray-600">{paragraph.replace(/^-\s/, '')}</li>
                    </ul>
                  ) : paragraph.match(/^\d\./) ? (
                    <ol className="list-decimal list-inside mb-4">
                      <li className="text-gray-600">{paragraph.replace(/^\d\.\s/, '')}</li>
                    </ol>
                  ) : paragraph.trim() !== '' ? (
                    <p className="text-gray-600 mb-4">{paragraph}</p>
                  ) : null}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </div>
  );
}