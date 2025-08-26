import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Save, X } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { FormInput } from '../../components/ui/FormInput';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  status: 'published' | 'draft' | 'archived';
  category: string;
  featuredImage: string;
}

interface HomepageSection {
  id: string;
  title: string;
  content: string;
  type: 'hero' | 'features' | 'testimonials' | 'stats';
}

export function Content() {
  const [activeTab, setActiveTab] = useState<'homepage' | 'blog'>('homepage');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const mockBlogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Real Estate Investment Tips for 2024',
      excerpt: 'Discover the latest trends and strategies for successful real estate investments in Nigeria.',
      content: 'Full blog post content here...',
      author: 'Sarah Johnson',
      publishDate: '2024-01-15',
      status: 'published',
      category: 'Investment Tips',
      featuredImage: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg'
    },
    {
      id: 2,
      title: 'Understanding Fractional Ownership',
      excerpt: 'Learn how fractional ownership works and its benefits for Nigerian investors.',
      content: 'Full blog post content here...',
      author: 'Mike Peters',
      publishDate: '2024-02-10',
      status: 'draft',
      category: 'Education',
      featuredImage: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg'
    }
  ];

  const homepageSections: HomepageSection[] = [
    {
      id: 'hero',
      title: 'Hero Section',
      content: 'Invest in Premium Real Estate Across Nigeria with M3 Shelter',
      type: 'hero'
    },
    {
      id: 'features',
      title: 'Features Section',
      content: 'Fractional Ownership, Co-funded Construction, Transparent Investments',
      type: 'features'
    },
    {
      id: 'stats',
      title: 'Statistics Section',
      content: '2,847 Happy Investors, ₦847M+ Investments, 156 Active Projects',
      type: 'stats'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-yellow-100 text-yellow-800',
      archived: 'bg-gray-100 text-gray-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#261C15]">Content Management</h1>
          <p className="text-gray-600">Manage homepage content and blog posts</p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4" />
          Add Content
        </Button>
      </div>

      {/* Tab Navigation */}
      <Card padding="sm">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('homepage')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'homepage'
                ? 'border-b-2 border-[#053DA6] text-[#053DA6]'
                : 'text-gray-600 hover:text-[#261C15]'
            }`}
          >
            Homepage Sections
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'blog'
                ? 'border-b-2 border-[#053DA6] text-[#053DA6]'
                : 'text-gray-600 hover:text-[#261C15]'
            }`}
          >
            Blog Posts
          </button>
        </div>
      </Card>

      {activeTab === 'homepage' && (
        <div className="space-y-4">
          {homepageSections.map((section) => (
            <Card key={section.id}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#261C15] mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.content}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                      Preview
                    </Button>
                  </div>
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {section.type}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'blog' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockBlogPosts.map((post) => (
            <Card key={post.id} hover>
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-[#261C15] line-clamp-2">{post.title}</h3>
                  <span className={getStatusBadge(post.status)}>
                    {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>By {post.author}</span>
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" onClick={() => setEditingPost(post)}>
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Blog Post Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#261C15]">Edit Blog Post</h2>
                <button
                  onClick={() => setEditingPost(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <FormInput
                  label="Title"
                  value={editingPost.title}
                  onChange={() => {}}
                />
                <div>
                  <label className="block text-sm font-medium text-[#261C15] mb-2">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent">
                    <option>Investment Tips</option>
                    <option>Education</option>
                    <option>Market Analysis</option>
                    <option>Company News</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#261C15] mb-2">
                    Excerpt
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent"
                    value={editingPost.excerpt}
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#261C15] mb-2">
                    Content
                  </label>
                  <textarea
                    rows={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent"
                    value={editingPost.content}
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#261C15] mb-2">
                    Status
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-transparent">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setEditingPost(null)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}