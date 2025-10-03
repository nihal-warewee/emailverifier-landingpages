import React from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Email Verifier</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/features" className={`transition-colors ${isActive('/features') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Features</a>
            <a href="/pricing" className={`transition-colors ${isActive('/pricing') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Pricing</a>
            <a href="/api" className={`transition-colors ${isActive('/api') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>API</a>
            <a href="/blog" className={`transition-colors ${isActive('/blog') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Blog</a>
            <a href="/about" className={`transition-colors ${isActive('/about') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
            <a href="/contact" className={`transition-colors ${isActive('/contact') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="/features" className={`${isActive('/features') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Features</a>
              <a href="/pricing" className={`${isActive('/pricing') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Pricing</a>
              <a href="/api" className={`${isActive('/api') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>API</a>
              <a href="/blog" className={`${isActive('/blog') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Blog</a>
              <a href="/about" className={`${isActive('/about') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
              <a href="/contact" className={`${isActive('/contact') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
              <div className="pt-4 border-t border-gray-100">
                <button className="text-gray-600 hover:text-gray-900 mb-2 block">Sign In</button>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg w-full">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;