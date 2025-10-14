import { FileUp, ShieldCheck, LineChart, FileDown } from 'lucide-react';

// Data array now holds the icon component itself for more flexibility
const processSteps = [
  {
    number: '01',
    icon: FileUp,
    title: 'Upload Your List',
    description: 'Upload your email list via our web interface, API, or integrate directly with your application.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Real-time Verification',
    description: 'Our advanced algorithms verify each email through multiple validation layers instantly.',
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Get Results',
    description: 'Receive detailed results with status codes, risk levels, and actionable insights.',
  },
  {
    number: '04',
    icon: FileDown,
    title: 'Download Clean List',
    description: 'Export your verified, clean email list and improve your campaign performance.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-blue-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Email Verification Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our simple 4-step process ensures maximum accuracy and efficiency for your email validation needs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {processSteps.map((step) => {
      
            const IconComponent = step.icon;
            
            return (
              <div
                key={step.number}
              
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-md"
              >
               
                <IconComponent 
                  className="absolute -right-8 -top-8 h-32 w-32 text-blue-50" 
                  strokeWidth={1.5} 
                />
                
                {/* Card Content */}
                <div className="relative">
                  <p className="text-5xl font-bold text-blue-600">{step.number}</p>
                  <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;