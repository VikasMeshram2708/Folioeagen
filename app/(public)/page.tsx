import Cta from "@/components/home/cta";
import Faqs from "@/components/home/faqs";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <div className="max-w-screen mx-auto px-4 py-6">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <Faqs />

        {/* CTA */}
        <Cta />
      </div>
    </div>

  );
}
