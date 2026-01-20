import Hero from "@/Components/Hero";
import LogoCloud from "@/Components/LogoCloud";
import Features from "@/Components/Features";
import HowItWorks from "@/Components/HowItWorks";
import Testimonials from "@/Components/Testimonials";
import Pricing from "@/Components/Pricing";
import CTA from "@/Components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}