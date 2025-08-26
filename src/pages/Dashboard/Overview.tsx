import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { 
  Home, 
  TrendingUp, 
  Wallet, 
  Users, 
  MapPin, 
  Bed, 
  Bath, 
  Square,
  Heart,
  Eye,
  Calendar
} from 'lucide-react';

// Mock data for properties
const featuredProperties = [
  {
    id: 1,
    name: "Azure Bay Villas",
    location: "Victoria Island, Lagos",
    price: 580670,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2450,
    shares: 100,
    availableShares: 25
  },
  {
    id: 2,
    name: "Golden Sands Villas",
    location: "Lekki Phase 1, Lagos",
    price: 534220,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3210,
    shares: 100,
    availableShares: 15
  },
  {
    id: 3,
    name: "Serene Heights Villas",
    location: "Ikoyi, Lagos",
    price: 750200,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2470,
    shares: 100,
    availableShares: 8
  }
];

const userStats = {
  totalInvestment: 2450000,
  activeProperties: 5,
  monthlyReturns: 185000,
  portfolioGrowth: 12.5
};

export const Overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F2] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-[#053DA6] to-[#042f85] rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <Home className="h-8 w-8" />
                <span className="text-sm opacity-90">Welcome Back</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Hello, Welcome Back </h1>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#053DA6]/10 rounded-lg">
                <Wallet className="h-5 w-5 text-[#053DA6]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Investment</p>
                <p className="font-bold text-[#261C15]">₦{userStats.totalInvestment.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FB7F00]/10 rounded-lg">
                <Home className="h-5 w-5 text-[#FB7F00]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Properties</p>
                <p className="font-bold text-[#261C15]">{userStats.activeProperties}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Returns</p>
                <p className="font-bold text-[#261C15]">₦{userStats.monthlyReturns.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Portfolio Growth</p>
                <p className="font-bold text-green-600">+{userStats.portfolioGrowth}%</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Featured Listings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#261C15]">Featured Listings</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card hover className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Heart className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-[#053DA6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ₦{property.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-[#261C15] mb-1">{property.name}</h3>
                    <div className="flex items-center gap-1 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="text-gray-600">Available Shares: </span>
                        <span className="font-semibold text-[#053DA6]">{property.availableShares}/{property.shares}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Eye className="h-4 w-4" />
                        <span>View Detail</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Invest Now</Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#261C15] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Home className="h-4 w-4 mr-2" />
                Browse Properties
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Portfolio
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Wallet className="h-4 w-4 mr-2" />
                Add Funds
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#261C15] mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Investment completed</p>
                  <p className="text-xs text-gray-600">Azure Bay Villas - 5 shares</p>
                </div>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Dividend received</p>
                  <p className="text-xs text-gray-600">₦25,000 from Golden Sands</p>
                </div>
                <span className="text-xs text-gray-500">1d ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New property listed</p>
                  <p className="text-xs text-gray-600">Serene Heights Villas</p>
                </div>
                <span className="text-xs text-gray-500">3d ago</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};