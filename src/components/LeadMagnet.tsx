import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Download, CheckCircle2, FileText } from "lucide-react";

const LeadMagnet = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    setIsDownloaded(true);
    toast.success("Checklist downloaded! Check your email for the PDF.");
    form.reset();
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead_magnet_download', {
        event_category: 'engagement',
        event_label: 'sensory_friendly_checklist'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container-tight">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            Free resource for parents
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Download your free sensory-friendly playdate checklist
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            A practical guide to planning successful playdates that respect your child's sensory needs. 
            Includes venue suggestions, activity ideas, and conversation starters—all tailored for South African families.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4 text-left">
              <h3 className="font-semibold text-lg">What's inside:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">15 sensory-friendly venues across major SA cities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Age-appropriate activity suggestions (3-12 years)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Communication scripts for introducing yourself</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Sensory accommodation checklist</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Emergency strategies for overwhelming situations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Post-playdate reflection questions</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border p-6 shadow-sm">
              {!isDownloaded ? (
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <Input
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="Your email address"
                      aria-label="Email address for checklist download"
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" variant="accent" className="w-full h-12">
                    <Download className="h-5 w-5 mr-2" />
                    Download free checklist
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe anytime. No spam, ever.
                  </p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Success!</h3>
                  <p className="text-muted-foreground">
                    Your checklist is on its way to your inbox. While you wait, why not join our waitlist for early access to the app?
                  </p>
                  <Button variant="hero" className="mt-4">
                    Join waitlist too
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Instant PDF download
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Created by autism specialists
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;