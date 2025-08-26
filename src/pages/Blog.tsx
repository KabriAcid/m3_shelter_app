import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Building2,
  DollarSign,
  BarChart,
  Clock,
  Eye,
  Share
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'real-estate', label: 'Real Estate' },
    { key: 'investment', label: 'Investment Tips' },
    { key: 'market-analysis', label: 'Market Analysis' },
    { key: 'success-stories', label: 'Success Stories' },
    { key: 'company-news', label: 'Company News' }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Ultimate Guide to Real Estate Investment in Nigeria 2025',
    excerpt: 'Everything you need to know about investing in Nigerian real estate, from market analysis to choosing the right properties for maximum returns.',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    author: 'David Okafor',
    date: '2025-01-15',
    readTime: '12 min read',
    category: 'Investment Tips',
    views: '2.5K',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Lagos Property Market Analysis Q4 2024: What Investors Need to Know',
      excerpt: 'A comprehensive analysis of the Lagos property market performance in Q4 2024, including price trends, demand patterns, and investment opportunities.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      author: 'Kemi Adebayo',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Market Analysis',
      views: '1.8K'
    },
    {
      id: 3,
      title: 'How Sarah Made ₦500K in 6 Months Through Fractional Real Estate',
      excerpt: 'Meet Sarah Okonkwo, a Lagos-based teacher who transformed her savings into a growing real estate portfolio using M3 Shelter\'s fractional ownership model.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      author: 'Abdullahi Mohammed',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Success Stories',
      views: '3.2K'
    },
    {
      id: 4,
      title: 'Understanding Rental Yields: A Beginner\'s Guide to Property ROI',
      excerpt: 'Learn how to calculate and understand rental yields, the key metric every real estate investor should know to make informed investment decisions.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      author: 'Aisha Garba',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Investment Tips',
      views: '2.1K'
    },
    {
      id: 5,
      title: 'M3 Shelter Reaches 5,000 Active Investors Milestone',
      excerpt: 'We\'re excited to announce that M3 Shelter has reached a major milestone with over 5,000 active investors and ₦2.5 billion in managed properties.',
      image: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      author: 'M3 Shelter Team',
      date: '2025-01-03',
      readTime: '4 min read',
      category: 'Company News',
      views: '1.5K'
    },
    {
      id: 6,
      title: 'Abuja vs Lagos: Where Should You Invest in 2025?',
      excerpt: 'A detailed comparison of investment opportunities in Nigeria\'s two major cities, analyzing factors like growth potential, rental yields, and market stability.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      author: 'David Okafor',
      date: '2024-12-28',
      readTime: '9 min read',
      category: 'Market Analysis',
      views: '2.7K'
    },
    {
      id: 7,
      title: 'The Psychology of Real Estate Investment: Managing Risk and Fear',
      excerpt: 'Explore the psychological aspects of real estate investment and learn strategies to overcome common fears and biases that can impact investment decisions.',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
      author: 'Dr. Folake Adeyemi',
      date: '2024-12-25',
      readTime: '7 min read',
      category: 'Investment Tips',
      views: '1.9K'
    }
  ];

  const allPosts = [featuredPost, ...blogPosts];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    return matchesSearch && matchesCategory && !post.featured;
  });

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'investment tips': return 'bg-green-100 text-green-600';
      case 'market analysis': return 'bg-blue-100 text-blue-600';
      case 'success stories': return 'bg-purple-100 text-purple-600';
      case 'company news': return 'bg-secondary-100 text-secondary-600';
      case 'real estate': return 'bg-primary-100 text-primary-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold">M3 Shelter Blog</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay informed with the latest insights, tips, and news about real estate investment 
              in Nigeria. Learn from experts and discover success stories from our community.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-8 py-4 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">250+</div>
                  <div className="text-primary-200 text-sm">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-primary-200 text-sm">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Weekly</div>
                  <div className="text-primary-200 text-sm">New Content</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.key
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-500">{new Date(featuredPost.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1">
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Stay Updated</h2>
            <p className="text-xl text-primary-100">
              Subscribe to our newsletter and get the latest real estate investment insights, 
              market analysis, and success stories delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="bg-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-primary-200 text-sm mt-3">
                Join 10,000+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Popular Topics</h2>
            <p className="text-lg text-gray-600">Explore our most popular content categories</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Market Trends', count: '45 articles' },
              { icon: Building2, title: 'Property Analysis', count: '38 articles' },
              { icon: DollarSign, title: 'Investment Tips', count: '67 articles' },
              { icon: BarChart, title: 'Performance Reports', count: '29 articles' }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;