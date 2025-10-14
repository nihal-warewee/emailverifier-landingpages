import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';


export default function Hero() {

  return (
    <section className="relative overflow-hidden bg-white isolate">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-2 items-center relative px-10 2xl:px-44 py-10 xl:py-20 2xl:py-24">
          {/* dotted background */}

          <div
            aria-hidden
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(209,226,255,1) 2px, transparent 2px), linear-gradient(180deg, rgba(59,130,246,0.03), rgba(99,102,241,0.01))",
              backgroundSize: "40px 40px, 100% 100%",
              backgroundPosition: "0 0, 0 0",
            }}
          />
          {/* LEFT: heading and CTAs */}
          <div className="space-y-4 lg:pr-4">
            {/* top badges */}
            <div className="flex items-center gap-3">
              <img src="/assets/productHunt.png" alt="Product Hunt" className="h-6" />
              <img src="/assets/trustPilot.png" alt="Trustpilot" className="h-6" />
            </div>

            {/* main heading */}
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              <span className="inline-block mr-3 text-blue-600 align-middle relative">#1
                <svg width="59" height="8" viewBox="0 0 59 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.66382 6.88859C1.99342 6.76873 2.32302 6.64887 4.47793 6.01781C6.63284 5.38675 10.6031 4.24812 15.9893 3.36192C21.3756 2.47571 28.0575 1.87643 34.234 1.72502C40.4104 1.57361 45.8788 1.88824 49.6023 2.28253C53.3258 2.67683 55.1386 3.14127 56.2148 3.44046C57.291 3.73965 57.5756 3.8595 57.8689 4.02839" stroke="#FFE100" strokeWidth="2" strokeLinecap="round" />
                </svg>

              </span>
              <span className="align-middle">Email Validator Tool</span>
            </h1>

            {/* subtext */}
            <p className="text-lg text-gray-600 max-w-2xl">
              Clean your email list instantly. Protect your sender reputation and improve deliverability with real-time verification.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                size="lg"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-900 hover:bg-blue-600 text-white
                 px-6 py-3 shadow-md hover:from-blue-700 hover:to-indigo-700"
                asChild
              >
                <a href="/register">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-6 py-3 text-blue-800 border border-blue-500 bg-white hover:bg-blue-50"
                asChild
              >
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>

            {/* micro-features row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-800 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-800 flex-shrink-0" />
                <span>1,000 Free Verifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-800 flex-shrink-0" />
                <span>No Setup Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-800 flex-shrink-0" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/*container with faint shadow */}
              <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(16,24,40,0.06)] overflow-hidden
              pt-8">
                <div className="grid grid-cols-12">
                  {/* left panel*/}
                  <div className="col-span-9 lg:col-span-6 bg-white px-4 pb-6">
                    <div className="text-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div>
                          <div className="text-lg text-black font-bold">Try it Free</div>
                          <h3 className="text-md font-semibold text-gray-900 mt-2">Verify an email address instantly</h3>
                          <p className='text-xs text-slate-600'>Validate email addresses in real-time with our powerful API. Reduce bounce rates and improve deliverability.</p>
                        </div>
                      </div>

                      {/*CTA */}
                      <div>
                        <Button
                          className="px-5 py-2 min-w-[120px] whitespace-nowrap bg-blue-800 hover:bg-blue-900 text-white"
                        >
                          Get Started for Free
                        </Button>
                        <div className="text-xs text-gray-500 mt-2">No registration required • Instant results</div>
                      </div>

                      {/* avatars + happy users */}
                      <div className="flex items-center justify-center gap-3 mt-5">
                        <div className="flex -space-x-2 drop-shadow-md">
                          <img src="/assets/avatar1.png" alt="u1" className="w-8 h-8 rounded-full ring-2 ring-white" />
                          <img src="/assets/avatar2.png" alt="u2" className="w-8 h-8 rounded-full ring-2 ring-white" />
                          <img src="/assets/avatar3.png" alt="u3" className="w-8 h-8 rounded-full ring-2 ring-white" />
                        </div>
                        <div className="text-xs text-gray-800">100+ Happy Users</div>
                      </div>
                    </div>
                  </div>

                  {/* right panel */}
                  <div className="col-span-3 lg:col-span-6 bg-[#77777726] p-8 flex items-center justify-center rounded-tl-2xl">

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Brands row */}
        <div className='my-10 border-t border-transparent'>
          <p className='text-xl lg:text-2xl text-center font-semibold'>Leading Brands and Agencies Using emailverifier.io</p>
          <div className="mt-6 flex justify-center items-center gap-10 flex-wrap *:aspect-auto *:w-36">
            <img src="/logos/wareweeLogo.png" alt="Warewe" />
            <img src="/logos/redserpLogo.png" alt="RedSorp" />
            <img src="/logos/paperboatLogo.png" alt="Paperbot AI" />
            <img src="/logos/saasyogiLogo.png" alt="SaaS Yogi" />
          </div>
        </div>
    </section>
  );
}
