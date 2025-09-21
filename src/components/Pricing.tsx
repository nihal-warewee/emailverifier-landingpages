import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for testing and small projects',
      features: [
        '100 verifications/month',
        'Basic email validation',
        'API access',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 verifications/month',
        'Advanced validation',
        'Bulk verification',
        'Priority support',
        'Analytics dashboard',
        'API integration'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        '100,000 verifications/month',
        'Premium validation',
        'Custom integrations',
        '24/7 phone support',
        'Advanced analytics',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your email verification needs. All plans include our core features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need more verifications? Contact us for custom enterprise pricing.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;