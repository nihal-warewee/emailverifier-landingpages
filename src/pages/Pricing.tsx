import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingPage = () => {
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
        'Email support',
        'Standard accuracy'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      highlight: false
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
        'API integration',
        'Custom webhooks',
        '99.9% accuracy guarantee'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      highlight: true,
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
        'Dedicated account manager',
        'SLA guarantee',
        'Custom reporting',
        'White-label options'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      highlight: false
    }
  ];

  const additionalPlans = [
    {
      name: 'Pay-as-you-go',
      price: '$0.001',
      period: '/verification',
      description: 'Perfect for variable usage',
      minPrice: 'No monthly commitment'
    },
    {
      name: 'High Volume',
      price: 'Custom',
      period: '',
      description: 'For enterprise-scale needs',
      minPrice: '1M+ verifications/month'
    }
  ];

  const features = [
    {
      category: 'Verification Features',
      items: [
        { name: 'Syntax validation', starter: true, pro: true, enterprise: true },
        { name: 'Domain validation', starter: true, pro: true, enterprise: true },
        { name: 'Mailbox validation', starter: false, pro: true, enterprise: true },
        { name: 'Disposable email detection', starter: false, pro: true, enterprise: true },
        { name: 'Role account detection', starter: false, pro: true, enterprise: true },
        { name: 'Catch-all detection', starter: false, pro: true, enterprise: true },
        { name: 'Typo detection', starter: false, pro: true, enterprise: true },
        { name: 'Spam trap detection', starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: 'API & Integration',
      items: [
        { name: 'REST API access', starter: true, pro: true, enterprise: true },
        { name: 'Bulk verification', starter: false, pro: true, enterprise: true },
        { name: 'Real-time verification', starter: true, pro: true, enterprise: true },
        { name: 'Webhooks', starter: false, pro: true, enterprise: true },
        { name: 'Custom integrations', starter: false, pro: false, enterprise: true },
        { name: 'White-label API', starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: 'Support & SLA',
      items: [
        { name: 'Email support', starter: true, pro: true, enterprise: true },
        { name: 'Priority support', starter: false, pro: true, enterprise: true },
        { name: '24/7 phone support', starter: false, pro: false, enterprise: true },
        { name: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
        { name: '99.9% uptime SLA', starter: false, pro: true, enterprise: true },
        { name: 'Custom SLA', starter: false, pro: false, enterprise: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for
            <span className="text-blue-600"> Your Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free plan and scale as you grow. All plans include our core 
            verification features with no hidden fees or setup costs.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
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
        </div>
      </section>

      {/* Additional Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Options
            </h2>
            <p className="text-gray-600">
              Flexible pricing for every use case
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-4">{plan.minPrice}</p>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-lg text-gray-600">
              See what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td colSpan={4} className="py-6 px-6">
                        <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-b border-gray-100">
                        <td className="py-3 px-6 text-gray-700">{item.name}</td>
                        <td className="py-3 px-6 text-center">
                          {item.starter ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {item.pro ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {item.enterprise ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing adjustments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What happens if I exceed my monthly limit?
              </h3>
              <p className="text-gray-600">
                If you exceed your monthly verification limit, you can either upgrade your plan or 
                purchase additional verifications at our pay-as-you-go rate.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, 
                contact us for a full refund.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600">
                No, there are no setup fees or hidden costs. You only pay for the plan you choose.
              </p>
            </div>
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
            Join thousands of businesses improving their email deliverability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;