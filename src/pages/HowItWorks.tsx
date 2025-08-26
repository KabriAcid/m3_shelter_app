import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building2, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  FileText,
  Smartphone
} from 'lucide-react';

const HowItWorks = () => {
  const models = [
    {
      icon: Users,
      title: 'Co-Own Model',
      subtitle: 'Fractional Property Ownership',
      description: 'Invest in income-generating properties alongside other investors and earn regular rental income.',
      color: 'primary',
      features: [
        'Minimum investment: ₦50,000',
        'Earn 15-20% annual rental yield',
        'Own verified property shares',
        'Monthly rental distributions',
        'Sell shares anytime on marketplace'
      ],
      process: [
        { step: '1', text: 'Browse available properties' },
        { step: '2', text: 'Choose investment amount' },
        { step: '3', text: 'Purchase fractional shares' },
        { step: '4', text: 'Earn monthly rental income' }
      ]
    },
    {
      icon: Building2,
      title: 'Co-Build Model',
      subtitle: 'Collaborative Construction',
      description: 'Pool funds with other investors to construct new properties from scratch and share the profits.',
      color: 'secondary',
      features: [
        'Minimum investment: ₦100,000',
        'Higher potential returns: 25-35%',
        'Participate in construction decisions',
        'Track building progress in real-time',
        'Share profits from property sale/rent'
      ],
      process: [
        { step: '1', text: 'Join construction project' },
        { step: '2', text: 'Contribute to building fund' },
        { step: '3', text: 'Monitor construction progress' },
        { step: '4', text: 'Share profits upon completion' }
      ]
    }
  ];

  const investmentProcess = [
    {
      icon: Smartphone,
      title: 'Download & Register',
      description: 'Get the M3 Shelter app and create your account with BVN verification for security.'
    },
    {
      icon: Building2,
      title: 'Explore Properties',
      description: 'Browse curated properties with detailed information, location, and projected returns.'
    },
    {
      icon: DollarSign,
      title: 'Make Investment',
      description: 'Choose your investment amount and purchase fractional shares through secure payment.'
    },
    {
      icon: FileText,
      title: 'Access Legal Vault',
      description: 'Get instant access to all property documents and legal papers through blockchain security.'
    },
    {
      icon: TrendingUp,
      title: 'Earn Returns',
      description: 'Receive regular rental income and track your investment performance in real-time.'
    }
  ];

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
            <h1 className="text-5xl font-bold">How M3 Shelter Works</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Two innovative investment models designed to make real estate ownership accessible to every Nigerian, 
              starting from as little as ₦50,000.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {models.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${model.color === 'primary' ? 'bg-primary-100' : 'bg-secondary-100'} rounded-lg flex items-center justify-center`}>
                      <model.icon className={`w-6 h-6 ${model.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'}`} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{model.title}</h2>
                      <p className={`text-lg ${model.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'} font-medium`}>
                        {model.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">{model.description}</p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <ul className="space-y-2">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${model.color === 'primary' ? 'from-primary-50 to-primary-100' : 'from-secondary-50 to-secondary-100'} rounded-2xl p-8`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Process</h3>
                    <div className="space-y-4">
                      {model.process.map((step, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <div className={`w-10 h-10 ${model.color === 'primary' ? 'bg-primary-600' : 'bg-secondary-600'} text-white rounded-full flex items-center justify-center font-bold`}>
                            {step.step}
                          </div>
                          <p className="text-gray-700 font-medium">{step.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Investment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Complete Investment Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From download to earning returns, here's your complete journey with M3 Shelter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {investmentProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < investmentProcess.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Transparency */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Built on Trust & Transparency</h2>
              <p className="text-xl text-gray-600">
                Every investment is backed by blockchain technology and regulatory compliance to ensure 
                maximum security and transparency for our investors.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Blockchain Security',
                    description: 'All transactions and ownership records are immutably stored on the blockchain.'
                  },
                  {
                    title: 'Legal Documentation', 
                    description: 'Complete access to property deeds, surveys, and legal papers through our Legal Vault.'
                  },
                  {
                    title: 'Regulatory Compliance',
                    description: 'Fully regulated by the Securities and Exchange Commission, Nigeria.'
                  },
                  {
                    title: 'Real-time Tracking',
                    description: 'Monitor your investments, returns, and property performance 24/7.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
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
                <h3 className="text-2xl font-bold text-gray-900">Your Investment is Protected</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600">₦2.5B+</div>
                    <div className="text-gray-600">Secured Investment Value</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary-600">100%</div>
                    <div className="text-gray-600">Blockchain Verification</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-secondary-600">SEC</div>
                    <div className="text-gray-600">Regulated Platform</div>
                  </div>
                </div>
              </div>
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
            <h2 className="text-4xl font-bold">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-primary-100">
              Join thousands of Nigerians building wealth through real estate. Start with as little as ₦50,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200">
                Download App Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                View Investment Properties
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;