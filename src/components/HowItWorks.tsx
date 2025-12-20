import { Button } from "@/components/ui/button";
import { ArrowRight, UserCheck, MessageCircle, Calendar, MapPin } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-muted/40 border-t border-b">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            From profile to playdate in four gentle steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We've designed every step to feel natural and pressure-free, so you can focus on what matters—your child's happiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <article className="relative group">
            <div className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6" />
              </div>
              <div className="text-sm text-primary font-medium mb-2">Step 1</div>
              <h3 className="font-semibold text-lg mb-3">Create your family profile</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Share your child's interests, sensory preferences, communication style, and your family values. This helps us find the perfect matches.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30">
              <ArrowRight className="h-6 w-6" />
            </div>
          </article>

          <article className="relative group">
            <div className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-secondary/20 text-foreground flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="text-sm text-primary font-medium mb-2">Step 2</div>
              <h3 className="font-semibold text-lg mb-3">Discover compatible families</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Browse families nearby who match your preferences. Start conversations with guided prompts that make introductions comfortable.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30">
              <ArrowRight className="h-6 w-6" />
            </div>
          </article>

          <article className="relative group">
            <div className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="text-sm text-primary font-medium mb-2">Step 3</div>
              <h3 className="font-semibold text-lg mb-3">Plan together</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Share availability and choose from suggested sensory-friendly venues. Confirm details with one tap—no back-and-forth stress.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30">
              <ArrowRight className="h-6 w-6" />
            </div>
          </article>

          <article className="group">
            <div className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-sm text-primary font-medium mb-2">Step 4</div>
              <h3 className="font-semibold text-lg mb-3">Enjoy meaningful connections</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Meet at your chosen location and watch beautiful friendships bloom. Share feedback to help improve future matches.
              </p>
            </div>
          </article>
        </div>

        <div className="bg-card rounded-lg border p-8 text-center">
          <h3 className="font-semibold text-xl mb-4">Ready to see how it works?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our waitlist to be among the first families to experience stress-free playdate planning. 
            We'll send you exclusive previews and early access when we launch in your area.
          </p>
          <Button variant="hero" size="lg" className="mr-4">
            Join the waitlist
          </Button>
          <Button variant="outline" size="lg">
            Watch demo video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;