import googleLogo from '/logos/google.png';
import microsoftLogo from '/logos/microsoft.png';
import slackLogo from '/logos/slack.png';
import deepmindLogo from '/logos/deepmind.png';
import zohoLogo from '/logos/zoho.png';


const logos = [
  { src: googleLogo, alt: 'Google' },
  { src: microsoftLogo, alt: 'Microsoft' },
  { src: slackLogo, alt: 'Slack' },
  { src: deepmindLogo, alt: 'DeepMind' },
  { src: zohoLogo, alt: 'Zoho' },
  // Duplicate logos if you have few and want more visible without scrolling
  { src: googleLogo, alt: 'Google' },
  { src: microsoftLogo, alt: 'Microsoft' },
  { src: slackLogo, alt: 'Slack' },
  { src: deepmindLogo, alt: 'DeepMind' },
  { src: zohoLogo, alt: 'Zoho' },
];

export default function LogoCloud() {
  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
          Integrate with Trusted Platforms
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:animation-pause">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="h-10 mx-8" />
          ))}
        </div>
        <div className="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:animation-pause" aria-hidden="true">
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo.src} alt={logo.alt} className="h-10 mx-8" />
          ))}
        </div>
      </div>
    </section>
  );
}