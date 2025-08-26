import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Users, 
  Building2, 
  Lock, 
  Smartphone,
  CheckCircle,
  Star,
  Play
} from 'lucide-react';

const Homepage = () => {
  const stats = [
    { label: 'Properties Listed', value: '₦2.5B+', icon: Building2 },
    { label: 'Active Investors', value: '5,000+', icon: Users },
    { label: 'Average Returns', value: '18%', icon: TrendingUp },
    { label: 'Years Experience', value: '3+', icon: Star },
  ];

  const features = [
    {
      icon: Users,
      title: 'Co-Own Model',
      description: 'Invest in income-generating properties with fractional ownership starting from ₦50,000.'
    },
    {
      icon: Building2,
      title: 'Co-Build Model',
      description: 'Pool funds with other investors to construct new properties and share the profits.'
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'All transactions and ownership records are secured on the blockchain for transparency.'
    },
    {
      icon: Lock,
      title: 'Legal Vault',
      description: 'Access all property documents and legal papers securely through our digital vault.'
    }
  ];

  const testimonials = [
    {
      name: 'Adebayo Ogundimu',
      location: 'Lagos, Nigeria',
      text: 'I never thought I could own property in Lagos with just ₦100,000. M3 Shelter made my dream a reality.',
      rating: 5
    },
    {
      name: 'Fatima Abdullahi',
      location: 'Abuja, Nigeria', 
      text: 'The returns have been incredible. 20% in my first year, and I can track everything on my phone.',
      rating: 5
    },
    {
      name: 'Chinedu Okwu',
      location: 'Port Harcourt, Nigeria',
      text: 'The transparency and security features give me confidence in my investments. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Own Real Estate in Nigeria
                <span className="block text-secondary-500">Starting from ₦50,000</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Join thousands of Nigerians building wealth through fractional real estate ownership. 
                Invest, earn passive income, and help solve Nigeria's housing deficit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/download"
                  className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Download App</span>
                </Link>
                <Link
                  to="/how-it-works"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>How It Works</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Start Investing Today</h3>
                  <p className="text-gray-200">Join over 5,000+ investors already earning passive income</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-400">18% Average Returns</div>
                    <div className="text-green-200">Annual rental yield</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">How M3 Shelter Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two innovative investment models designed to democratize real estate ownership in Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Start Investing in 3 Simple Steps</h2>
            <p className="text-xl text-gray-600">Get started with real estate investment in minutes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Download & Sign Up',
                description: 'Download the M3 Shelter app and create your account with bank verification.'
              },
              {
                step: '02', 
                title: 'Browse Properties',
                description: 'Explore available properties, review returns, and choose your investment amount.'
              },
              {
                step: '03',
                title: 'Invest & Earn',
                description: 'Make your investment and start earning passive income from rental returns.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">What Our Investors Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied investors across Nigeria</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Your Investment is Secure</h2>
              <p className="text-xl text-primary-100">
                We use cutting-edge blockchain technology and are regulated by the Securities and Exchange Commission, Nigeria.
              </p>
              <div className="space-y-4">
                {[
                  'Blockchain-secured transactions',
                  'SEC Nigeria regulated platform',
                  'Bank-level security encryption',
                  'Full legal documentation access'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="text-center space-y-6">
                <Shield className="w-16 h-16 text-secondary-500 mx-auto" />
                <h3 className="text-2xl font-bold">SEC Regulated</h3>
                <p className="text-primary-100">
                  M3 Shelter operates under the regulatory oversight of the Securities and Exchange Commission, 
                  Nigeria, ensuring compliance with all investment regulations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Start Building Wealth?
            </h2>
            <p className="text-xl text-orange-100">
              Join thousands of Nigerians already earning passive income through real estate investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Smartphone className="w-5 h-5" />
                <span>Download App Now</span>
              </Link>
              <Link
                to="/investments"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Properties</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;