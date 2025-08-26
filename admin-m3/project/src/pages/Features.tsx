import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Lock, 
  Bell, 
  CreditCard,
  FileText,
  Users,
  BarChart3,
  MapPin,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'All transactions and ownership records are secured on the blockchain for complete transparency and immutability.',
      color: 'primary',
      benefits: [
        'Immutable ownership records',
        'Transparent transaction history',
        'Cryptographically secured',
        'Decentralized verification'
      ]
    },
    {
      icon: Lock,
      title: 'Legal Vault',
      description: 'Access all property documents, deeds, surveys, and legal papers through our secure digital vault.',
      color: 'secondary',
      benefits: [
        'Complete document access',
        'Digital deed storage',
        'Survey and CAD files',
        'Legal compliance tracking'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Monitor your investment performance, property values, and rental income with comprehensive analytics.',
      color: 'green',
      benefits: [
        'Portfolio performance tracking',
        'Market value updates',
        'Rental yield calculations',
        'Investment projections'
      ]
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security including local Nigerian payment gateways.',
      color: 'blue',
      benefits: [
        'Bank transfer integration',
        'Card payment support',
        'Mobile money options',
        'Automated distributions'
      ]
    }
  ];

  const appFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile Dashboard',
      description: 'Comprehensive mobile app to manage all your investments on the go.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Real-time updates on payouts, new opportunities, and market changes.'
    },
    {
      icon: BarChart3,
      title: 'Investment Tracking',
      description: 'Detailed analytics and performance metrics for all your properties.'
    },
    {
      icon: Users,
      title: 'Community Features',
      description: 'Connect with other investors and share investment strategies.'
    },
    {
      icon: MapPin,
      title: 'Property Location',
      description: 'Interactive maps and location details for all investment properties.'
    },
    {
      icon: Globe,
      title: 'Market Insights',
      description: 'Access to real estate market data and investment opportunities.'
    }
  ];

  const securityFeatures = [
    {
      title: 'Bank-Level Encryption',
      description: 'All data is encrypted using 256-bit SSL encryption, the same standard used by banks.'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Additional security layer to protect your account from unauthorized access.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Fully compliant with SEC Nigeria regulations and data protection laws.'
    },
    {
      title: 'Automated Backups',
      description: 'Your data is automatically backed up across multiple secure servers.'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-50',
          icon: 'text-primary-600',
          border: 'border-primary-200'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-50',
          icon: 'text-secondary-600',
          border: 'border-secondary-200'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          icon: 'text-green-600',
          border: 'border-green-200'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          icon: 'text-blue-600',
          border: 'border-blue-200'
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'text-gray-600',
          border: 'border-gray-200'
        };
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
            <h1 className="text-5xl font-bold">Platform Features</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover the powerful features that make M3 Shelter the most secure and user-friendly 
              real estate investment platform in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology to provide the most secure and transparent 
              real estate investment experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${colorClasses.bg} border ${colorClasses.border} rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm`}>
                      <feature.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Mobile App Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your real estate investments, right in your pocket.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Enterprise-Grade Security</h2>
              <p className="text-xl text-gray-600">
                Your investments are protected by multiple layers of security, ensuring your peace of mind 
                and the safety of your funds.
              </p>
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-center space-y-6">
                <Shield className="w-16 h-16 text-primary-600 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Security Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-600">256-bit</div>
                    <div className="text-gray-600 text-sm">SSL Encryption</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-gray-600 text-sm">Uptime</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-secondary-600">24/7</div>
                    <div className="text-gray-600 text-sm">Monitoring</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">ISO</div>
                    <div className="text-gray-600 text-sm">Certified</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Trusted by over 5,000+ investors across Nigeria
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connected to Nigeria's leading financial institutions and payment providers for a smooth experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Nigerian Banks', desc: 'Direct integration with all major banks' },
              { name: 'Payment Gateways', desc: 'Paystack, Flutterwave, and more' },
              { name: 'Mobile Money', desc: 'Support for all mobile payment platforms' },
              { name: 'Blockchain', desc: 'Ethereum and Polygon networks' }
            ].map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-gray-600 text-sm">{integration.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Vault Demo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Legal Vault Preview</h2>
              <p className="text-xl text-gray-600">
                Access all property documents instantly through our blockchain-secured Legal Vault. 
                Complete transparency at your fingertips.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FileText, title: 'Property Deeds', desc: 'Original and certified true copies' },
                  { icon: MapPin, title: 'Survey Plans', desc: 'CAD files and boundary surveys' },
                  { icon: CheckCircle, title: 'Legal Clearance', desc: 'Due diligence reports and clearances' },
                  { icon: Clock, title: 'Version History', desc: 'Complete document timeline and updates' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-6">
                  <Lock className="w-5 h-5 text-secondary-500" />
                  <span className="text-secondary-500 font-medium">Legal Vault</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-green-400" />
                        <div>
                          <div className="font-medium">Property_Deed_Certificate.pdf</div>
                          <div className="text-gray-400 text-sm">Verified • 2.4 MB</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="font-medium">Survey_Plan_2024.dwg</div>
                          <div className="text-gray-400 text-sm">Verified • 1.8 MB</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary-500" />
                        <div>
                          <div className="font-medium">Due_Diligence_Report.pdf</div>
                          <div className="text-gray-400 text-sm">Verified • 5.2 MB</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">All documents blockchain verified</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
            </motion.div>
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
            <h2 className="text-4xl font-bold">Experience All Features</h2>
            <p className="text-xl text-primary-100">
              Download the M3 Shelter app and explore all these powerful features designed to make 
              real estate investment simple, secure, and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>Download App</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;