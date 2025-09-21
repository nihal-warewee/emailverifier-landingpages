import React from 'react';
import { Shield, Zap, Globe, BarChart3, Lock, CheckCircle, Mail, Users, Clock, Award } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: '99.9% Accuracy',
      description: 'Industry-leading accuracy with advanced validation algorithms and real-time verification.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Verify emails in milliseconds with our optimized global infrastructure.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Support for all international email providers and domains worldwide.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive reports and insights to optimize your email campaigns.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'GDPR compliant with enterprise-grade security and data protection.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: CheckCircle,
      title: 'Easy Integration',
      description: 'Simple REST API with SDKs for all major programming languages.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const additionalFeatures = [
    {
      icon: Mail,
      title: 'Bulk Verification',
      description: 'Upload CSV files and verify thousands of emails at once.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share verification results and manage team access controls.'
    },
    {
      icon: Clock,
      title: 'Real-time Validation',
      description: 'Instant verification as users type in your forms.'
    },
    {
      icon: Award,
      title: 'Quality Scoring',
      description: 'Get detailed quality scores for each email address.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Advanced Email Verification</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-blue-600"> Email Verification</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the advanced features that make our email verification service 
            the most accurate and reliable solution for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Even More Powerful Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to maintain clean email lists and improve deliverability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our email verification service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;