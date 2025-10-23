
import { Shield, Zap, Globe, BarChart3, Lock, Cpu } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Advanced Validation',
    id: 'feature-advanced-validation',
    description:
      'Multi-layer verification including syntax, domain, and mailbox validation with 99.9% accuracy.',
    card: "/assets/featuresCard/FeatureValidation.svg",
  },
  {
    icon: Zap,
    title: 'Spam Trap Detection',
    id: 'feature-spam-trap-detection',
    description:
      'Detects and removes spam traps to protect your sender reputation and ensure safe email delivery.',
    card: "/assets/featuresCard/FeatureThreat.svg",
  },
  {
    icon: Globe,
    title: 'Disposable Email Check',
    id: 'feature-disposable-email-check',
    description:
      'Identifies temporary or one-time use emails to keep your mailing list clean and reliable.',
    card: "/assets/featuresCard/FeatureDisposable.svg",
  },
  {
    icon: BarChart3,
    title: 'Catch All Email Check',
    id: 'feature-catch-all-email-check',
    description:
      'Detects domains that accept all emails, helping you avoid risky or unverifiable addresses.',
    card: "/assets/featuresCard/FeatureCatchAll.svg",
  },
  {
    icon: Lock,
    title: 'GDPR Compliant',
    id: 'feature-gdpr-compliant',
    description:
      'Fully compliant with data protection regulations. Your data is secure and private.',
    card: "/assets/featuresCard/FeatureCompliance.svg",
  },
  {
    icon: Cpu,
    title: 'API Integration',
    id: 'feature-api-integration',
    description:
      'Easy-to-use REST API with comprehensive documentation and SDKs for popular languages.',
    card: "/assets/featuresCard/FeatureApi.svg",
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to maintain a clean, high-quality email list and improve your delivery rates.
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-16 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={feature.id}
              className={`flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
            >

              <div className="lg:w-[55%] flex justify-center">
                <img
                  src={feature.card}
                  alt={feature.title}
                  className="w-full h-auto"
                />
              </div>


              <div className="flex-1 flex items-start gap-4  px-2">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <span className="p-4 bg-blue-100 rounded-lg text-blue-900">
                    <feature.icon className="w-6 h-6" />
                  </span>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
