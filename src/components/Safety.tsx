import { Shield, Eye, Lock, UserCheck, AlertTriangle, Heart } from "lucide-react";

const Safety = () => {
  return (
    <section id="safety" className="py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Your family's safety is our highest priority
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built comprehensive safeguards into every interaction, because peace of mind should never be optional when it comes to your children.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <article className="flex gap-4 p-6 rounded-lg border bg-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Identity verification</h3>
                <p className="text-muted-foreground text-sm">
                  Every family completes photo verification and phone number confirmation before joining our community. We manually review all profiles.
                </p>
              </div>
            </article>

            <article className="flex gap-4 p-6 rounded-lg border bg-card">
              <div className="h-10 w-10 rounded-lg bg-secondary/20 text-foreground flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Privacy controls</h3>
                <p className="text-muted-foreground text-sm">
                  You control exactly what information you share and when. Photos, location details, and personal information are never public by default.
                </p>
              </div>
            </article>

            <article className="flex gap-4 p-6 rounded-lg border bg-card">
              <div className="h-10 w-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secure messaging</h3>
                <p className="text-muted-foreground text-sm">
                  All conversations happen within our secure platform. We monitor for inappropriate content and personal information is never shared externally.
                </p>
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article className="flex gap-4 p-6 rounded-lg border bg-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Community standards</h3>
                <p className="text-muted-foreground text-sm">
                  Clear guidelines ensure respectful, inclusive interactions. Our community self-regulates with rating systems and peer feedback.
                </p>
              </div>
            </article>

            <article className="flex gap-4 p-6 rounded-lg border bg-card">
              <div className="h-10 w-10 rounded-lg bg-secondary/20 text-foreground flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Report & block tools</h3>
                <p className="text-muted-foreground text-sm">
                  One-tap reporting for any concerning behaviour. Immediate blocking prevents further contact. Our team responds to reports within 24 hours.
                </p>
              </div>
            </article>

            <article className="flex gap-4 p-6 rounded-lg border bg-card">
              <div className="h-10 w-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Professional oversight</h3>
                <p className="text-muted-foreground text-sm">
                  Child safety experts and autism specialists help guide our safety protocols and community guidelines. Regular safety audits ensure best practices.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 border">
          <h3 className="font-semibold text-xl mb-4 text-center">Our safety pledge to you</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="font-medium text-primary mb-2">Data protection</div>
              <p className="text-muted-foreground">
                We never sell your data. Your information is encrypted and stored securely. You can delete your account anytime.
              </p>
            </div>
            <div className="text-center">
              <div className="font-medium text-primary mb-2">Transparent policies</div>
              <p className="text-muted-foreground">
                Clear, jargon-free privacy and safety policies. Regular updates when anything changes. You'll always know how your data is used.
              </p>
            </div>
            <div className="text-center">
              <div className="font-medium text-primary mb-2">24/7 support</div>
              <p className="text-muted-foreground">
                Our safety team is available around the clock. Emergency support for urgent safety concerns. Multiple ways to reach us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;