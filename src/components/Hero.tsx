'use client';

import { useState } from 'react';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (!email) return;
    setIsVerifying(true);
    // Simulate verification
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsVerifying(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              99.9% Accuracy Guaranteed
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Verify Email Addresses
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Instantly
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reduce bounce rates by up to 98% with our advanced email validation service.
              Protect your sender reputation and improve deliverability with real-time verification.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 ease-in" asChild>
                <a href="/register">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border hover:border-blue-600 transition-colors duration-300 ease-in" asChild>
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No Setup Required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                API Integration
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                GDPR Compliant
              </div>
            </div>
          </div>

          {/* Right Content - Demo */}
          <div className="relative">
            <Card className="p-8 shadow-softer bg-white/80 backdrop-blur-sm border-0">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Try it Free</h3>
                <p className="text-gray-600">Verify an email address instantly</p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleVerify}
                    disabled={isVerifying || !email}
                    className="px-6"
                  >
                    {isVerifying ? 'Verifying...' : 'Verify'}
                  </Button>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  No registration required • Instant results
                </div>
              </div>
            </Card>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs opacity-90">Bounce Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}