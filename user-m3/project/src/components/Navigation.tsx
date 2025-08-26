import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-[#053DA6]" />
              <span className="text-xl font-bold text-[#261C15]">M3 Shelter</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#261C15] hover:text-[#053DA6] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[#261C15] hover:text-[#053DA6] transition-colors">
              About
            </Link>
            <Link to="/features" className="text-[#261C15] hover:text-[#053DA6] transition-colors">
              Features
            </Link>
            <Link to="/investments" className="text-[#261C15] hover:text-[#053DA6] transition-colors">
              Investments
            </Link>
            <Link to="/blog" className="text-[#261C15] hover:text-[#053DA6] transition-colors">
              Blog
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-[#053DA6] hover:text-[#042f85] transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-[#053DA6] hover:bg-[#042f85] text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#261C15] hover:text-[#053DA6]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="block px-3 py-2 text-[#261C15] hover:text-[#053DA6]">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-[#261C15] hover:text-[#053DA6]">
              About
            </Link>
            <Link to="/features" className="block px-3 py-2 text-[#261C15] hover:text-[#053DA6]">
              Features
            </Link>
            <Link to="/investments" className="block px-3 py-2 text-[#261C15] hover:text-[#053DA6]">
              Investments
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-[#261C15] hover:text-[#053DA6]">
              Blog
            </Link>
            <Link to="/login" className="block px-3 py-2 text-[#053DA6] hover:text-[#042f85]">
              Login
            </Link>
            <Link to="/register" className="block px-3 py-2 bg-[#053DA6] text-white rounded-lg mx-3">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};