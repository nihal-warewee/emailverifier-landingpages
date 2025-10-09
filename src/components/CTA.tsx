import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Improve Your Email Deliverability?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using Email Verifier to maintain clean email lists 
            and achieve better campaign results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-3
            transition-colors duration-300 ease-in" asChild>
              <a href="/register">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg"
            className="border-white border-2 hover:bg-blue-500 hover:border-blue-400 text-white text-lg px-8 py-3
            transition-colors duration-300 ease-in" asChild>
              <a href="/contact">Schedule Demo</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              1,000 Free Verifications
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              No Setup Required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Cancel Anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}