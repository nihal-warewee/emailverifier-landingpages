import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';


export default function Hero() {

  return (
    <section className="relative overflow-hidden bg-white isolate">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-2 items-center relative px-4 lg:px-10 2xl:px-44 py-10 xl:py-20 2xl:py-24">
        {/* dotted background */}

        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(209,226,255,1) 2px, transparent 2px), linear-gradient(180deg, rgba(59,130,246,0.03), rgba(99,102,241,0.01))",
            backgroundSize: "50px 50px, 100% 100%",
            backgroundPosition: "0 0, 0 0",
          }}
        />
        {/* LEFT: heading and CTAs */}
        <div className="flex-1">
          {/* top badges */}
          <div className="flex items-center gap-3">
            <img src="/assets/productHunt.svg" alt="Product Hunt" className="h-8" />
            <img src="/assets/trustPilot.svg" alt="Trustpilot" className="h-8" />
          </div>

          {/* main heading */}
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mt-4">
            <span className="inline-block mr-3 text-blue-600 align-middle relative">#1
              <svg className='scale-75 lg:scale-100 absolute' width="59" height="8" viewBox="0 0 59 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66382 6.88859C1.99342 6.76873 2.32302 6.64887 4.47793 6.01781C6.63284 5.38675 10.6031 4.24812 15.9893 3.36192C21.3756 2.47571 28.0575 1.87643 34.234 1.72502C40.4104 1.57361 45.8788 1.88824 49.6023 2.28253C53.3258 2.67683 55.1386 3.14127 56.2148 3.44046C57.291 3.73965 57.5756 3.8595 57.8689 4.02839" stroke="#FFE100" strokeWidth="2" strokeLinecap="round" />
              </svg>

            </span>
            <span className="align-middle">Email Verification Tool</span>
          </h1>

          {/* subtext */}
          <p className="text-lg lg:text-2xl text-gray-600 max-w-2xl mt-3">
            Clean your email list in seconds. Protect your reputation and make sure your messages reach real people.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white
              px-6 lg:px-16 py-3 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              asChild
            >
              <a href="https://app.emailverifier.io/register">
                Try It Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* micro-features row */}
          <div className="flex flex-wrap items-center gap-6 text-sm lg:text-md text-blue-800 mt-5">
            Get 100 free verifications - no setup, no credit card, no stress.
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-end max-w-lg 2xl:max-w-2xl">
          <img src="assets/heroImage.png" alt="hero image" />
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
