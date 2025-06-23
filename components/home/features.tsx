import { BadgeCheck, FileInput, LayoutTemplate, Linkedin, RefreshCw, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Instant Generation",
      description: "Get a professional portfolio in minutes, not hours.",
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      title: "LinkedIn Integration",
      description: "Pull all your data directly from your LinkedIn profile.",
    },
    {
      icon: <FileInput className="h-8 w-8" />,
      title: "Resume Upload",
      description: "Upload your resume and we'll extract all the important details.",
    },
    {
      icon: <LayoutTemplate className="h-8 w-8" />,
      title: "Multiple Templates",
      description: "Choose from modern, professional designs that fit your style.",
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "No Coding Needed",
      description: "Everything is handled automatically - no technical skills required.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Export Options",
      description: "Get your portfolio as HTML, PDF, or a full website package.",
    },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-2xl shadow-sm">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          How Folioeagen works
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Three simple steps to your perfect portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-2xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Connect Data</h3>
          <p className="mt-2 text-gray-600">
            Provide your LinkedIn URL or upload your resume. We extract all your professional details.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-2xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Customize Design</h3>
          <p className="mt-2 text-gray-600">
            Choose from beautiful templates and adjust colors, layouts, and content.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-2xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Publish & Share</h3>
          <p className="mt-2 text-gray-600">
            Download or publish your portfolio with one click. Share your professional story.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Powerful features for your career
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
