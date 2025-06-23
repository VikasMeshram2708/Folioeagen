import { ArrowRight } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your professional portfolio,
          {" "}
          <span className="text-primary">automagically</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Folioeagen transforms your LinkedIn profile or resume into a stunning portfolio website in minutes. No design skills needed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="h-14 text-lg" size="lg">
            Get Started
            <ArrowRight />
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Trusted by 10,000+ professionals worldwide
        </p>
      </div>
    </section>
  );
}
