
import { Shield, Zap, Globe, BarChart3, Lock, Cpu } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Advanced Validation',
    description:
      'Smart checks for syntax, domain, and mailbox accuracy.',
    card: "/assets/featuresCard/FeatureValidation.svg",
    id: "advanced-validation"
  },
  {
    icon: Zap,
    title: 'Spam Trap Detection',
    description:
      'Catch hidden traps before they hurt your deliverability.',
    card: "/assets/featuresCard/FeatureThreat.svg",
    id: "spam-trap-detection"
  },
  {
    icon: Globe,
    title: 'Disposable Email Check',
    description:
      'Filter out throwaway or fake signups.',
    card: "/assets/featuresCard/FeatureDisposable.svg",
    id: "disposable-email-check"
  },
  {
    icon: BarChart3,
    title: 'Catch-All Detection',
    description:
      'Identify risky “accept-all” domains.',
    card: "/assets/featuresCard/FeatureCatchAll.svg",
    id: "catch-all-detection"
  },
  {
    icon: Cpu,
    title: 'Real-Time API',
    description:
      'Verify emails instantly right inside your app.',
    card: "/assets/featuresCard/FeatureApi.svg",
    id: "real-time-api"
  },
  {
    icon: Lock,
    title: 'Bulk Cleaning',
    description:
      'Upload and clean thousands of emails fast.',
    card: "/assets/featuresCard/FeatureCompliance.svg",
    id: "bulk-cleaning"
  },
  {
    icon: Lock,
    title: 'Role-Based Filtering',
    description:
      'Skip generic inboxes like info@ or sales@.',
    card: "/assets/featuresCard/FeatureCompliance.svg",
    id: "role-based-filtering"
  },
  {
    icon: Lock,
    title: 'GDPR & CCPA Compliant',
    description:
      'Your data stays safe, private, and protected - and automatically deletes your files 30 days after upload.',
    card: "/assets/featuresCard/FeatureCompliance.svg",
    id: "gdpr-compliant"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features That Just Work
          </h2>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-16 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              id={feature.id}
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
