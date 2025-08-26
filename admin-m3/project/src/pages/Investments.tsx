import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  TrendingUp, 
  Users, 
  Calendar,
  Building,
  CheckCircle,
  Filter,
  Search,
  ArrowRight,
  Star,
  Shield
} from 'lucide-react';

const Investments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: 'Lekki Phase 1 Apartment Complex',
      location: 'Lekki Phase 1, Lagos',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      price: '₦45,000,000',
      minInvestment: '₦50,000',
      expectedReturn: '18%',
      fundingProgress: 75,
      investors: 234,
      timeLeft: '12 days',
      type: 'co-own',
      status: 'funding',
      features: ['3-bedroom units', 'Swimming pool', 'Gym facility', 'Security', 'Parking'],
      description: 'Modern apartment complex in the heart of Lekki Phase 1, featuring luxury amenities and high rental demand.',
      riskLevel: 'Low',
      constructionStart: 'Q2 2024',
      estimatedCompletion: 'Q4 2025'
    },
    {
      id: 2,
      title: 'Abuja Estate Development',
      location: 'Gwarinpa, Abuja',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      price: '₦80,000,000',
      minInvestment: '₦100,000',
      expectedReturn: '25%',
      fundingProgress: 45,
      investors: 156,
      timeLeft: '25 days',
      type: 'co-build',
      status: 'funding',
      features: ['4-bedroom duplexes', 'Solar power', 'Water treatment', 'Garden', 'Playground'],
      description: 'New residential estate development in Gwarinpa with modern infrastructure and family-friendly amenities.',
      riskLevel: 'Medium',
      constructionStart: 'Q1 2024',
      estimatedCompletion: 'Q3 2025'
    },
    {
      id: 3,
      title: 'Port Harcourt Shopping Mall',
      location: 'GRA, Port Harcourt',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      price: '₦120,000,000',
      minInvestment: '₦75,000',
      expectedReturn: '22%',
      fundingProgress: 90,
      investors: 445,
      timeLeft: '5 days',
      type: 'co-own',
      status: 'almost-funded',
      features: ['50 retail units', 'Food court', 'Cinema', 'Parking garage', '24/7 security'],
      description: 'Prime commercial property in Port Harcourt\'s business district with high foot traffic and established tenants.',
      riskLevel: 'Low',
      constructionStart: 'Completed',
      estimatedCompletion: 'Generating Income'
    },
    {
      id: 4,
      title: 'Ikeja Office Complex',
      location: 'Victoria Island, Lagos',
      image: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg',
      price: '₦200,000,000',
      minInvestment: '₦150,000',
      expectedReturn: '20%',
      fundingProgress: 30,
      investors: 89,
      timeLeft: '45 days',
      type: 'co-build',
      status: 'funding',
      features: ['20-floor tower', 'Conference facilities', 'Rooftop terrace', 'High-speed elevators', 'Backup power'],
      description: 'Premium office complex in Victoria Island targeting multinational companies and tech startups.',
      riskLevel: 'Medium',
      constructionStart: 'Q3 2024',
      estimatedCompletion: 'Q1 2026'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Properties' },
    { key: 'co-own', label: 'Co-Own Model' },
    { key: 'co-build', label: 'Co-Build Model' },
    { key: 'funding', label: 'Currently Funding' },
    { key: 'almost-funded', label: 'Almost Funded' }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         property.type === selectedFilter || 
                         property.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'funding': return 'text-blue-600 bg-blue-100';
      case 'almost-funded': return 'text-orange-600 bg-orange-100';
      case 'funded': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
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
            <h1 className="text-5xl font-bold">Investment Properties</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover carefully vetted real estate investment opportunities across Nigeria. 
              Start building your portfolio with fractional ownership from ₦50,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">₦2.5B+</div>
                <div className="text-primary-200 text-sm">Property Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-primary-200 text-sm">Active Investors</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">18%</div>
                <div className="text-primary-200 text-sm">Avg. Returns</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedFilter === filter.key
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      property.type === 'co-own' ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                    }`}>
                      {property.type === 'co-own' ? 'Co-Own' : 'Co-Build'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(property.riskLevel)}`}>
                      {property.riskLevel} Risk
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                      {property.status === 'almost-funded' ? 'Almost Funded' : 
                       property.status === 'funding' ? 'Funding' : 'Funded'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{property.expectedReturn}</div>
                      <div className="text-sm text-gray-600">Expected Return</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                  
                  {/* Funding Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Funding Progress</span>
                      <span>{property.fundingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${property.fundingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Property Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{property.price}</div>
                      <div className="text-xs text-gray-600">Total Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{property.minInvestment}</div>
                      <div className="text-xs text-gray-600">Min. Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{property.investors}</div>
                      <div className="text-xs text-gray-600">Investors</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {property.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{property.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                      Invest Now
                    </button>
                    <button 
                      onClick={() => setSelectedProperty(property)}
                      className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      View Details
                    </button>
                  </div>
                  
                  {/* Time Left */}
                  {property.status === 'funding' && (
                    <div className="mt-4 flex items-center justify-center text-sm text-orange-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{property.timeLeft} left to fund</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Investment Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Investment Performance</h2>
            <p className="text-lg text-gray-600">Track record of successful investments and satisfied investors</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Properties Funded', value: '127', icon: Building },
              { label: 'Total Invested', value: '₦2.5B', icon: TrendingUp },
              { label: 'Active Investors', value: '5,247', icon: Users },
              { label: 'Avg. Return Rate', value: '18.2%', icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Start Investing?</h2>
            <p className="text-xl text-primary-100">
              Join thousands of investors building wealth through Nigerian real estate. 
              Download the app and start with as little as ₦50,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200">
                Download M3 Shelter App
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Learn How It Works</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Detail Modal - Basic structure */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProperty.title}</h3>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-gray-600">{selectedProperty.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">{selectedProperty.expectedReturn}</div>
                  <div className="text-lg font-semibold text-gray-900">{selectedProperty.minInvestment} min</div>
                </div>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investments;