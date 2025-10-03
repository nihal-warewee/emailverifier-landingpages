'use client';

import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2" onClick={() => window.location.href = '/'}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Email Verifier</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            {/* <a href="/api-docs" className="text-gray-600 hover:text-blue-600 transition-colors">API</a> */}
            <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="https://app.emailverifier.io/signin">Sign In</a>
            </Button>
            <Button asChild>
              <a href="https://app.emailverifier.io/register">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="/api-docs" className="text-gray-600 hover:text-blue-600 transition-colors">API</a>
              <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start" asChild>
                  <a href="/signin">Sign In</a>
                </Button>
                <Button className="justify-start" asChild>
                  <a href="/register">Get Started</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}