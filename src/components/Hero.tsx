import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-playconnect.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle2, Shield, Download } from "lucide-react";

interface HeroProps {
  onJoinWaitlist: (e: React.FormEvent) => void;
}

const Hero = ({ onJoinWaitlist }: HeroProps) => {
  const orbRef = useRef<HTMLDivElement>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handleMove = (e: MouseEvent) => {
      if (prefersReduced) return;
      const x = `${e.clientX}px`;
      const y = `${Math.max(0, e.clientY - 100)}px`;
      if (orbRef.current) {
        orbRef.current.style.setProperty("--x", x);
        orbRef.current.style.setProperty("--y", y);
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReduced]);

  const handleDownloadChecklist = () => {
    toast.success("Sensory-Friendly Playdate Checklist downloaded!");
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead_magnet_download', {
        event_category: 'engagement',
        event_label: 'checklist'
      });
    }
  };

  return (
    <header className="bg-hero border-b">
      <div className="container-tight relative overflow-hidden">
        <div ref={orbRef} className="gradient-orb" aria-hidden="true" />
        
        <nav className="flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2" aria-label="Play Connect Spectrum">
            <div className="h-9 w-9 rounded-md bg-primary/90" />
            <span className="font-semibold text-lg text-foreground">Play Connect Spectrum</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#story" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Our story</a>
            <a href="#how-it-works" className="text-sm text-foreground/80 hover:text-foreground transition-colors">How it works</a>
            <a href="#safety" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Safety</a>
            <a href="#resources" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Resources</a>
            <a href="#faq" className="text-sm text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex"
              onClick={handleDownloadChecklist}
            >
              <Download className="h-4 w-4 mr-2" />
              Free checklist
            </Button>
            <Button variant="hero">Join waitlist</Button>
          </div>
        </nav>

        <main>
          <section className="grid lg:grid-cols-2 gap-12 items-center py-8 sm:py-16">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" />
                <span>Launching across Africa in 2025</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Arrange inclusive playdates with confidence and care
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-prose leading-relaxed">
                Thoughtful matching by interests, communication styles, and sensory needs—so every meet-up feels safe, calm, and fun for your child on the spectrum.
              </p>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic">
                  "Finding the right playmates shouldn't feel overwhelming. We're here to make it gentle, safe, and joyful for every family."
                </p>
              </div>
              
              <form onSubmit={onJoinWaitlist} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
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
              
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" /> 
                  Privacy-first design
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> 
                  Community verified
                </div>
                <div className="text-xs">
                  <strong>500+</strong> families already waiting
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  variant="outline" 
                  onClick={handleDownloadChecklist}
                  className="text-sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download free sensory-friendly playdate checklist
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg blur-xl"></div>
              <img
                src={heroImage}
                alt="African parents and children enjoying an inclusive playdate in a sunny park, with children playing together while parents chat nearby"
                className="relative rounded-lg border shadow-lg w-full h-auto"
                loading="eager"
                width={800}
                height={480}
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-muted-foreground">
                Safe, joyful connections for every child
              </div>
            </div>
          </section>
        </main>
      </div>
    </header>
  );
};

export default Hero;