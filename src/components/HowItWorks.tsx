import { Upload, Cog, CheckCircle, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your List',
    description: 'Upload your email list via our web interface, API, or integrate directly with your application.',
  },
  {
    icon: Cog,
    title: 'Real-time Verification',
    description: 'Our advanced algorithms verify each email through multiple validation layers instantly.',
  },
  {
    icon: CheckCircle,
    title: 'Get Results',
    description: 'Receive detailed results with status codes, risk levels, and actionable insights.',
  },
  {
    icon: Download,
    title: 'Download Clean List',
    description: 'Export your verified, clean email list and improve your campaign performance.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Email Verification Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process ensures maximum accuracy and efficiency for your email validation needs.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 relative z-10 group hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}