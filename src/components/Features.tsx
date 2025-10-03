import { Shield, Zap, Globe, BarChart3, Lock, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Advanced Validation',
    description: 'Multi-layer verification including syntax, domain, and mailbox validation with 99.9% accuracy.',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Instant email verification with response times under 100ms for optimal user experience.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Verify emails from any country with support for international domains and formats.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Comprehensive reports and insights to track your email list quality and performance.',
  },
  {
    icon: Lock,
    title: 'GDPR Compliant',
    description: 'Fully compliant with data protection regulations. Your data is secure and private.',
  },
  {
    icon: Cpu,
    title: 'API Integration',
    description: 'Easy-to-use REST API with comprehensive documentation and SDKs for popular languages.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Email Verification Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to maintain a clean, high-quality email list and improve your delivery rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}