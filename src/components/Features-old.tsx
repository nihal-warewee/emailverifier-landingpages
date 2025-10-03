import React from 'react';
import { Shield, Zap, Globe, BarChart3, Lock, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: '99.9% Accuracy',
      description: 'Industry-leading accuracy with advanced validation algorithms and real-time verification.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Verify emails in milliseconds with our optimized global infrastructure.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Support for all international email providers and domains worldwide.'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive reports and insights to optimize your email campaigns.'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'GDPR compliant with enterprise-grade security and data protection.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Integration',
      description: 'Simple REST API with SDKs for all major programming languages.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Email Verifier?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you maintain clean email lists and improve deliverability rates.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;