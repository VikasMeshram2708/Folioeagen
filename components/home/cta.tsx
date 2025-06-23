
import { Button } from "../ui/button";

export default function Cta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-primary rounded-2xl text-foreground">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6 text-muted-foreground">
          Ready to transform your online presence?
        </h2>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Generate your professional portfolio in minutes. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" className="h-14 text-lg px-8" size="lg">
            Get Started Free
          </Button>
          <Button variant="outline" className="h-14 text-lg px-8" size="lg">
            See Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
