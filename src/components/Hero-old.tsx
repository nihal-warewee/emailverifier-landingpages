import React, { useState } from 'react';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsVerifying(true);
    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false);
      alert('Email verification complete! (This is a demo)');
    }, 2000);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Accuracy Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">99.9% Accuracy Guaranteed</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Verify Email Addresses{' '}
              <span className="text-blue-600">Instantly</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reduce bounce rates by up to 98% with our advanced email validation service. 
              Protect your sender reputation and improve deliverability with real-time verification.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Pricing
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No Setup Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>API Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Content - Verification Form */}
          <div className="lg:pl-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Bounce Reduction Badge */}
              <div className="absolute -top-4 right-8 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
                98% Bounce Reduction
              </div>

              {/* Email Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              {/* Form Title */}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Try it Free
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Verify an email address instantly
              </p>

              {/* Verification Form */}
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address..."
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full bg-gray-600 text-white py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? 'Verifying...' : 'Verify'}
                </button>
              </form>

              {/* Form Footer */}
              <p className="text-center text-sm text-gray-500 mt-4">
                No registration required • Instant results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;