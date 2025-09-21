import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to Email Deliverability in 2024",
    excerpt: "Learn the latest best practices for ensuring your emails reach the inbox, including new authentication requirements and reputation management strategies.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Best Practices",
    image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const blogPosts = [
    {
      title: "Understanding Email Bounce Types and How to Handle Them",
      excerpt: "A comprehensive breakdown of hard bounces, soft bounces, and how to manage them effectively to maintain your sender reputation.",
      author: "Mike Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Technical",
      image: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "GDPR and Email Verification: What You Need to Know",
      excerpt: "Navigate the complexities of GDPR compliance while maintaining effective email verification practices for your business.",
      author: "Emma Wilson",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Compliance",
      image: "https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "API Integration Best Practices for Email Verification",
      excerpt: "Learn how to integrate email verification APIs efficiently with proper error handling, rate limiting, and performance optimization.",
      author: "David Rodriguez",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Email List Hygiene: Maintaining Clean Subscriber Lists",
      excerpt: "Discover proven strategies for keeping your email lists clean, engaged, and compliant with industry standards.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Marketing",
      image: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "The ROI of Email Verification: Cost vs. Benefits Analysis",
      excerpt: "Calculate the real return on investment of email verification services and understand the hidden costs of poor email hygiene.",
      author: "Robert Kim",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Business",
      image: "https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Common Email Validation Mistakes and How to Avoid Them",
      excerpt: "Identify and prevent the most common pitfalls in email validation that could be hurting your deliverability rates.",
      author: "Jennifer Lee",
      date: "March 1, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = ["All", "Best Practices", "Technical", "Compliance", "Development", "Marketing", "Business"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Email Verification
            <span className="text-blue-600"> Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, best practices, and industry trends 
            in email verification and deliverability.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest email verification insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;