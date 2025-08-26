import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Apple,
  Download as DownloadIcon,
  Star,
  Shield,
  TrendingUp,
  Users,
  Bell,
  Lock,
  QrCode,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Download = () => {
  const appFeatures = [
    {
      icon: Shield,
      title: "Secure Investment",
      description:
        "Bank-level security with blockchain verification for all transactions.",
    },
    {
      icon: TrendingUp,
      title: "Track Performance",
      description: "Real-time investment tracking and performance analytics.",
    },
    {
      icon: Users,
      title: "Fractional Ownership",
      description: "Own shares in premium properties starting from ₦50,000.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Get instant updates on payouts and new investment opportunities.",
    },
    {
      icon: Lock,
      title: "Legal Vault",
      description: "Access all property documents and legal papers instantly.",
    },
  ];

  const screenshots = [
    "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
  ];

  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      location: "Lagos",
      text: "The app is incredibly user-friendly. I invested ₦100k and I'm already seeing great returns!",
      rating: 5,
    },
    {
      name: "Fatima Abdullahi",
      location: "Abuja",
      text: "Finally, a way for regular Nigerians to own real estate. The transparency is amazing.",
      rating: 5,
    },
    {
      name: "Chinedu Okwu",
      location: "Port Harcourt",
      text: "Best investment decision I made in 2024. The returns are consistent and reliable.",
      rating: 5,
    },
  ];

  const stats = [
    { label: "App Downloads", value: "50,000+" },
    { label: "Active Investors", value: "5,247" },
    { label: "App Store Rating", value: "4.8★" },
    { label: "Investment Volume", value: "₦2.5B+" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold leading-tight">
                Download M3 Concepts App
                <span className="block text-secondary-500">
                  Start Investing Today
                </span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Join thousands of Nigerians building wealth through real estate
                investment. Get started with as little as ₦50,000 and earn up to
                20% returns annually.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center text-sm font-bold">
                    GP
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>4.8 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DownloadIcon className="w-5 h-5" />
                  <span>50,000+ Downloads</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-6">
                    Scan QR Code
                  </h3>
                  <div className="bg-white rounded-2xl p-8 mb-6">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-center text-primary-200">
                    Scan with your phone camera to download instantly
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose M3 Concepts App?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced real estate investment platform
              designed specifically for Nigerians
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {appFeatures.slice(3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              See the App in Action
            </h2>
            <p className="text-xl text-gray-600">
              Simple, intuitive design that makes investing effortless
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-gray-100 rounded-2xl aspect-[9/16] overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`App Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real investors using the M3 Concepts app
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Your Money is Safe</h2>
              <p className="text-xl text-primary-100">
                Built with enterprise-grade security and regulated by the
                Securities and Exchange Commission, Nigeria.
              </p>
              <div className="space-y-4">
                {[
                  "Bank-level 256-bit SSL encryption",
                  "Two-factor authentication",
                  "Blockchain transaction verification",
                  "SEC Nigeria regulatory compliance",
                  "Regular security audits",
                  "Insurance-backed investments",
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
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="text-center space-y-6">
                <Shield className="w-16 h-16 text-secondary-500 mx-auto" />
                <h3 className="text-2xl font-bold">Security Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">256-bit</div>
                    <div className="text-primary-200 text-sm">
                      SSL Encryption
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">ISO</div>
                    <div className="text-primary-200 text-sm">
                      27001 Certified
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">PCI</div>
                    <div className="text-primary-200 text-sm">
                      DSS Compliant
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">SEC</div>
                    <div className="text-primary-200 text-sm">Regulated</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Start Building Wealth Today
            </h2>
            <p className="text-xl text-orange-100">
              Download the M3 Concepts app now and join thousands of Nigerians
              already earning passive income through real estate investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3">
                <div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center text-sm font-bold">
                  GP
                </div>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-orange-200 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <DownloadIcon className="w-5 h-5" />
                <span>50,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>5,247 Active Investors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Download;
