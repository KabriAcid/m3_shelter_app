import React from "react";
import ceoImg from "../assets/img/ceo-m3-innovative.jpg";
import deputyManagerImg from "../assets/img/deputy-manager-marketing.jpg";
import financeDirectorImg from "../assets/img/director-of-finance.jpg";
import marketingDirectorImg from "../assets/img/marketing-director.jpg";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Award,
  Shield,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Heart,
  TrendingUp,
  Building2,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Marafa Muhammad Mustapha",
      position: "Founder & CEO",
      bio: "Experienced fintech entrepreneur with over 10 years in financial services and real estate.",
      image: ceoImg,
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Ahmad Jikamshi",
      position: "Deputy Manager, Marketing",
      bio: "Marketing strategist with a strong background in digital campaigns and brand growth.",
      image: deputyManagerImg,
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Aliyu Umar",
      position: "Director of Finance & Contracts",
      bio: "Finance expert with 8+ years in property development and investment management.",
      image: financeDirectorImg,
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Muhammad Nasir Salihu",
      position: "Marketing Director",
      bio: "Specialist in real estate marketing and investor relations.",
      image: marketingDirectorImg,
      linkedin: "#",
      twitter: "#",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency with all investment information, legal documentation, and blockchain verification.",
    },
    {
      icon: Users,
      title: "Democratization",
      description:
        "Making real estate investment accessible to every Nigerian, regardless of their financial background.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "Contributing to solving Nigeria's housing deficit while creating wealth for our investors.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Delivering exceptional service and maintaining the highest standards in everything we do.",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description:
        "M3 Shelter was established with a vision to democratize real estate investment in Nigeria.",
    },
    {
      year: "2022",
      title: "SEC Registration",
      description:
        "Obtained regulatory approval from the Securities and Exchange Commission, Nigeria.",
    },
    {
      year: "2023",
      title: "First Property Launch",
      description:
        "Successfully funded our first property in Lekki, Lagos with over 200 investors.",
    },
    {
      year: "2024",
      title: "Platform Expansion",
      description:
        "Launched mobile app and expanded to Abuja and Port Harcourt markets.",
    },
    {
      year: "2025",
      title: "Growth Milestone",
      description:
        "5,000+ active investors and ₦2.5B+ in properties under management.",
    },
  ];

  const stats = [
    { label: "Properties Funded", value: "127", icon: Building2 },
    { label: "Active Investors", value: "5,247", icon: Users },
    { label: "Total Investment Value", value: "₦2.5B+", icon: TrendingUp },
    { label: "Average Returns", value: "18.2%", icon: Award },
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
            <h1 className="text-5xl font-bold">About M3 Shelter</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're on a mission to democratize real estate investment in
              Nigeria, making property ownership accessible to every Nigerian
              while contributing to solving the housing deficit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize real estate investment in Nigeria by leveraging
                blockchain technology and fractional ownership, enabling every
                Nigerian to build wealth through property investment regardless
                of their initial capital.
              </p>
              <div className="space-y-3">
                {[
                  "Make real estate investment accessible to all Nigerians",
                  "Provide transparent and secure investment opportunities",
                  "Contribute to solving Nigeria's housing deficit",
                  "Create sustainable wealth for our community",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become Africa's leading real estate investment platform,
                transforming how people invest in property across the continent
                while fostering economic growth and financial inclusion.
              </p>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2030 Goals
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">
                      50,000+
                    </div>
                    <div className="text-gray-600 text-sm">
                      Active Investors
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">
                      ₦50B+
                    </div>
                    <div className="text-gray-600 text-sm">
                      Properties Funded
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">
                      10,000+
                    </div>
                    <div className="text-gray-600 text-sm">Units Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">
                      15
                    </div>
                    <div className="text-gray-600 text-sm">States Covered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Building a track record of success and trust
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-3 bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at M3 Shelter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-primary-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The experts behind M3 Shelter's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="text-xl text-primary-100">
                Have questions about investing with M3 Shelter? We'd love to
                hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-primary-200">hello@m3shelter.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-primary-200">+234 800 M3 SHELTER</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-primary-200">Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-secondary-500 text-white py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
