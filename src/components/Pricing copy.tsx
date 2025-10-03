import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    price: 0,
    credits: '1,000',
    features: [
      '1,000 free verifications',
      'Basic email validation',
      'Web interface access',
      'Email support',
      'Standard API access',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 29,
    credits: '10,000',
    features: [
      '10,000 verifications/month',
      'Advanced validation features',
      'Priority email support',
      'API integration',
      'Detailed analytics',
      'Bulk processing',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    credits: '50,000',
    features: [
      '50,000 verifications/month',
      'All professional features',
      'Dedicated support',
      'Custom integrations',
      'Advanced reporting',
      'SLA guarantee',
      'White-label options',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full flex items-center text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  {plan.price > 0 && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600">{plan.credits} verifications</p>
              </CardHeader>

              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <a href="/register">
                    {plan.price === 0 ? 'Start Free' : 'Get Started'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need more verifications? Contact us for custom pricing.</p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}