import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-playconnect.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle2, Shield, HeartHandshake, MapPin, Clock, Users } from "lucide-react";

const Index = () => {
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

  const onJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("You're on the waitlist! We'll be in touch soon.");
    form.reset();
  };

  return (
    <div>
      <header className="bg-hero border-b">
        <div className="container-tight relative overflow-hidden">
          <div ref={orbRef} className="gradient-orb" aria-hidden="true" />
          <nav className="flex items-center justify-between py-6">
            <a href="#" className="flex items-center gap-2" aria-label="Play Connect Spectrum">
              <div className="h-9 w-9 rounded-md bg-primary/90" />
              <span className="font-semibold text-lg text-foreground">Play Connect Spectrum</span>
            </a>
            <div className="hidden sm:flex items-center gap-3">
              <a href="#features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Features</a>
              <a href="#how" className="text-sm text-foreground/80 hover:text-foreground transition-colors">How it works</a>
              <a href="#faq" className="text-sm text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="hidden sm:inline-flex">Get the app</Button>
              <Button variant="hero">Join waitlist</Button>
            </div>
          </nav>

          <main>
            <section className="grid lg:grid-cols-2 gap-10 items-center py-8 sm:py-16">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Arrange inclusive playdates with confidence
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-prose">
                  A gentle app that helps parents of children on the spectrum find nearby, compatible playmates —
                  by interests, sensory needs, and availability.
                </p>
                <form onSubmit={onJoinWaitlist} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
                  <Input
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Your email"
                    aria-label="Email address"
                    className="h-12"
                  />
                  <Button type="submit" size="lg" variant="accent" className="h-12 px-6">
                    Join the waitlist
                  </Button>
                </form>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Privacy-first</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Community vetted</div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={heroImage}
                  alt="Parents and children enjoying a friendly, inclusive playdate in a sunny park"
                  className="rounded-lg border shadow-md w-full h-auto"
                  loading="lazy"
                  width={800}
                  height={480}
                />
              </div>
            </section>
          </main>
        </div>
      </header>

      <section id="features" className="py-16">
        <div className="container-tight">
          <h2 className="text-3xl sm:text-4xl font-semibold font-display text-foreground">Made for real families</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">Thoughtful features that prioritize safety, comfort, and connection.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Smart matching</h3>
              <p className="mt-2 text-muted-foreground">Connect by age, interests, communication styles, and sensory preferences.</p>
            </article>

            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-10 w-10 rounded-md bg-secondary/20 text-foreground flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Nearby & flexible</h3>
              <p className="mt-2 text-muted-foreground">Find families close by and choose neutral, sensory-friendly spots.</p>
            </article>

            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-10 w-10 rounded-md bg-accent/15 text-accent flex items-center justify-center mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Stress-free scheduling</h3>
              <p className="mt-2 text-muted-foreground">Share availability, confirm with one tap, and set gentle reminders.</p>
            </article>

            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Safety-first</h3>
              <p className="mt-2 text-muted-foreground">Private profiles, block & report, and verified community guidelines.</p>
            </article>

            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-10 w-10 rounded-md bg-secondary/20 text-foreground flex items-center justify-center mb-4">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Supportive community</h3>
              <p className="mt-2 text-muted-foreground">Share tips, celebrate wins, and grow meaningful friendships.</p>
            </article>

            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="h-10 w-10 rounded-md bg-accent/15 text-accent flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">Designed for accessibility</h3>
              <p className="mt-2 text-muted-foreground">Clear language, predictable flows, and sensory-aware design choices.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="how" className="py-16 bg-muted/40 border-t border-b">
        <div className="container-tight">
          <h2 className="text-3xl sm:text-4xl font-semibold font-display text-foreground">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="text-sm text-muted-foreground">Step 1</div>
              <h3 className="mt-1 font-semibold">Create your family profile</h3>
              <p className="mt-2 text-muted-foreground">Share interests, comfort needs, and preferred activities.</p>
            </article>
            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="text-sm text-muted-foreground">Step 2</div>
              <h3 className="mt-1 font-semibold">Match and message</h3>
              <p className="mt-2 text-muted-foreground">See compatible families nearby and chat to coordinate.</p>
            </article>
            <article className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="text-sm text-muted-foreground">Step 3</div>
              <h3 className="mt-1 font-semibold">Enjoy the playdate</h3>
              <p className="mt-2 text-muted-foreground">Pick a sensory-friendly spot and make memories together.</p>
            </article>
          </div>
          <div className="mt-8">
            <Button variant="hero" size="lg">Get updates</Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container-tight">
          <h2 className="text-3xl sm:text-4xl font-semibold font-display text-foreground">Frequently asked questions</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <details className="p-6 rounded-lg border bg-card">
              <summary className="font-medium cursor-pointer">Is my data private?</summary>
              <p className="mt-2 text-muted-foreground">Yes. We never sell your data. Profiles are private and only shared when you match or choose to connect.</p>
            </details>
            <details className="p-6 rounded-lg border bg-card">
              <summary className="font-medium cursor-pointer">Is it only for autistic children?</summary>
              <p className="mt-2 text-muted-foreground">Our focus is autistic children and families who value sensory-aware, inclusive play. Siblings and friends are welcome too.</p>
            </details>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Play Connect Spectrum</p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-foreground/80 hover:text-foreground">Privacy</a>
            <a href="#" className="text-sm text-foreground/80 hover:text-foreground">Terms</a>
            <a href="#" className="text-sm text-foreground/80 hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
