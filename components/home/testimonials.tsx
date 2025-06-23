import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      quote: "Folioeagen saved me hours of work. My portfolio was ready before I finished my coffee!",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      quote: "As a developer, I appreciate the clean code output. But the best part is I didn't have to write any!",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Professional",
      quote: "Finally a portfolio that matches my LinkedIn without all the manual updates.",
    },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Loved by professionals
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands who've transformed their online presence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <CardContent className="p-0">
              <p className="text-lg italic text-gray-600 mb-6">
                "
                {testimonial.quote}
                "
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
