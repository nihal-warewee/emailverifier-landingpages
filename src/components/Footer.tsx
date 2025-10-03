import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Email Verifier</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional email verification service trusted by thousands of businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <div className="space-y-3">
              <a href="/features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="/pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="/api-docs" className="block text-gray-400 hover:text-white transition-colors">API Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Status Page</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Press Kit</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Support</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">support@emailverifier.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Email Verifier. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}