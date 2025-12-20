import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Smartphone, Calendar, Heart } from "lucide-react";

interface FooterCTAProps {
  onJoinWaitlist: (e: React.FormEvent) => void;
}

const FooterCTA = ({ onJoinWaitlist }: FooterCTAProps) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b">
      <div className="container-tight text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Ready to transform your child's social world?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of South African families who are already preparing for more meaningful, 
          stress-free playdates. Be among the first to experience the difference.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Peace of mind</h3>
            <p className="text-sm text-muted-foreground">
              Every family verified, every venue vetted, every interaction designed for your child's comfort.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-foreground" />
            </div>
            <h3 className="font-semibold mb-2">Time savings</h3>
            <p className="text-sm text-muted-foreground">
              No more endless searching or awkward conversations. Just thoughtful matches and easy planning.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-accent/15 flex items-center justify-center mb-4">
              <Smartphone className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Simple to use</h3>
            <p className="text-sm text-muted-foreground">
              Designed for busy parents with clear navigation, helpful prompts, and sensory-aware design.
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto mb-8">
          <form onSubmit={onJoinWaitlist} className="flex flex-col sm:flex-row gap-3">
            <Input
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="h-12 text-base"
            />
            <Button type="submit" size="lg" variant="accent" className="h-12 px-8 whitespace-nowrap">
              Join the waitlist
            </Button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            ✓ Free to join
          </div>
          <div className="flex items-center gap-2">
            ✓ Early access updates
          </div>
          <div className="flex items-center gap-2">
            ✓ Priority support
          </div>
          <div className="flex items-center gap-2">
            ✓ Exclusive resources
          </div>
        </div>

        <div className="mt-8 p-4 bg-card rounded-lg border max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <strong>Launching Q2 2025:</strong> Starting in Cape Town, Johannesburg, and Durban. 
            Join the waitlist to be notified when we expand to your area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;