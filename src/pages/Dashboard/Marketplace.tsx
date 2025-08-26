import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square,
  Heart,
  TrendingUp,
  Calendar,
  Users
} from 'lucide-react';

// Mock data for marketplace properties
const marketplaceProperties = [
  {
    id: 1,
    name: "Azure Bay Villas",
    location: "Victoria Island, Lagos",
    price: 580670,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2450,
    totalShares: 100,
    availableShares: 25,
    pricePerShare: 5807,
    roi: 8.5,
    category: "Villa"
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
    totalShares: 100,
    availableShares: 15,
    pricePerShare: 5342,
    roi: 9.2,
    category: "Villa"
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
    totalShares: 100,
    availableShares: 8,
    pricePerShare: 7502,
    roi: 10.1,
    category: "Villa"
  },
  {
    id: 4,
    name: "Urban Heights Apartments",
    location: "Ikeja GRA, Lagos",
    price: 425000,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    totalShares: 100,
    availableShares: 45,
    pricePerShare: 4250,
    roi: 7.8,
    category: "Apartment"
  },
  {
    id: 5,
    name: "Luxury Penthouse Suite",
    location: "Victoria Island, Lagos",
    price: 950000,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    totalShares: 100,
    availableShares: 12,
    pricePerShare: 9500,
    roi: 11.5,
    category: "Penthouse"
  },
  {
    id: 6,
    name: "Garden View Estates",
    location: "Ajah, Lagos",
    price: 380000,
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    totalShares: 100,
    availableShares: 35,
    pricePerShare: 3800,
    roi: 6.9,
    category: "House"
  }
];

const categories = ["All", "Villa", "Apartment", "House", "Penthouse"];

export const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = marketplaceProperties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || property.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F7F7F2] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#261C15] mb-2">Property Marketplace</h1>
          <p className="text-gray-600">Discover and invest in fractional real estate opportunities</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <FormInput
                  label=""
                  type="text"
                  placeholder="Search properties by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={<Search className="h-5 w-5" />}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#053DA6] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProperties.map((property, index) => (
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
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {property.roi}% ROI
                    </div>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#053DA6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ₦{property.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#FB7F00]/10 text-[#FB7F00] px-2 py-1 rounded-full text-xs font-medium">
                      {property.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>{property.roi}%</span>
                    </div>
                  </div>

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

                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Available Shares</span>
                      <span className="font-semibold text-[#053DA6]">
                        {property.availableShares}/{property.totalShares}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#053DA6] h-2 rounded-full" 
                        style={{ width: `${((property.totalShares - property.availableShares) / property.totalShares) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-600">Price per share</span>
                      <span className="font-semibold text-[#261C15]">₦{property.pricePerShare.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Users className="h-4 w-4 mr-1" />
                      Invest Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};