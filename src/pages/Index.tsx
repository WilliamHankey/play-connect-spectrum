import { toast } from "sonner";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Safety from "@/components/Safety";
import UseCases from "@/components/UseCases";
import SocialProof from "@/components/SocialProof";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  const onJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    toast.success("Welcome to our community! We'll be in touch with exclusive updates soon.");
    form.reset();
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'waitlist_signup', {
        event_category: 'engagement',
        event_label: 'hero_form'
      });
    }
  };

  return (
    <div>
      <Hero onJoinWaitlist={onJoinWaitlist} />
      <Story />
      <Benefits />
      <HowItWorks />
      <Safety />
      <UseCases />
      <SocialProof />
      <LeadMagnet />
      <Resources />
      <FAQ />
      <FooterCTA onJoinWaitlist={onJoinWaitlist} />
      
      <footer className="py-10 border-t bg-muted/30">
        <div className="container-tight">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-primary/90" />
                <span className="font-semibold text-foreground">Play Connect Spectrum</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Connecting South African families with autistic children through thoughtful, safe, and joyful playdates.
              </p>
              <div className="text-xs text-muted-foreground">
                🇿🇦 Proudly South African
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a></li>
                <li><a href="#safety" className="hover:text-foreground transition-colors">Safety</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#resources" className="hover:text-foreground transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help centre</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Accessibility</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press kit</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Play Connect Spectrum. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
