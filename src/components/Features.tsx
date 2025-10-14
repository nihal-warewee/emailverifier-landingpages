import { Shield, Zap, Globe, BarChart3, Lock, Cpu } from 'lucide-react';

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

        <div className="flex flex-col gap-20 lg:gap-28">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`lg:max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-7 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full h-80 relative shadow-[-2px_5px_10px_rgba(0,0,0,0.2)] rounded-lg">
                <div
                  className={`absolute bg-blue-200/80 p-4 rounded-lg z-10 ${
                    index % 2 !== 0 ? 'top-0 right-0' : 'top-0 left-0'
                  }`}
                >
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div
                  className={`absolute bg-[#D9D9D9] ${
                    index % 2 !== 0
                      ? 'top-8 left-8 bottom-0 right-0 rounded-br-lg'
                      : 'top-8 right-8 bottom-0 left-0 rounded-bl-lg'
                  }`}
                ></div>
              </div>

              <div className="w-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-ms">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}