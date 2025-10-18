import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-20 bg-gray-900 relative isolate">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,250,250,0.1) 2px, transparent 2px), linear-gradient(180deg, rgba(59,130,246,0.03), rgba(99,102,241,0.01))",
          backgroundSize: "40px 40px, 100% 100%",
          backgroundPosition: "0 0, 0 0",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-5">
            Ready to Improve Your <span className='text-blue-600'>Email Deliverability</span>
          </h2>
          <p className="text-xl text-blue-50 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses using Email Verifier to maintain clean email lists
            and achieve better campaign results.
          </p>

          <div className="flex flex-col gap-4 items-center *:w-full *:max-w-xs mb-10">
            <Button size="sm" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:opacity-90  text-xl px-8 py-3
            transition-opacity duration-300 ease-in font-normal" asChild>
              <a href="/register">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg"
              className="bg-white hover:bg-blue-100 text-blue-800 font-medium text-xl px-8 py-3
            transition-colors duration-300 ease-in" asChild>
              <a href="/contact">Schedule Demo</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-white">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              100 Free Verifications
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              No Setup Required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              No Credit Card Required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}