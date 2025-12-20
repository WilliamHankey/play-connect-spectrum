import { Shield, Heart, MapPin, Clock, Users, CheckCircle2 } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Designed with your family's wellbeing in mind
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature prioritises safety, comfort, and meaningful connections—because your peace of mind matters as much as your child's happiness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="group p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Safety-first by design</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Private profiles, community verification, and block/report tools built into every interaction. You control what you share, always.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Photo verification for all families
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Secure in-app messaging only
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Report inappropriate behaviour instantly
              </li>
            </ul>
          </article>

          <article className="group p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-secondary/20 text-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Compatibility that respects needs</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Match by sensory preferences, communication styles, interests, and daily routines. No more guessing—just confident connections.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Sensory profile matching
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Communication preference filters
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Interest-based connections
              </li>
            </ul>
          </article>

          <article className="group p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Stress-free coordination</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Share availability, confirm with one tap, and set gentle reminders. Planning becomes simple, not overwhelming.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Flexible scheduling tools
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Automatic reminders (optional)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Easy rescheduling if needed
              </li>
            </ul>
          </article>

          <article className="group p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Sensory-friendly planning</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Discover quiet parks, low-stimulation venues, and activity ideas that work for sensitive children across South Africa.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Curated sensory-friendly venues
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Noise level and crowd indicators
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Activity suggestions by age group
              </li>
            </ul>
          </article>

          <article className="group p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-secondary/20 text-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Supportive community</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Share experiences, celebrate milestones, and grow meaningful friendships with families who truly understand the journey.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Parent support groups
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Share tips and resources
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Celebrate successes together
              </li>
            </ul>
          </article>

          <article className="group p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Designed for accessibility</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Clear language, predictable navigation, and sensory-aware design choices make the app comfortable for neurodivergent users.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Simple, consistent interface
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Reduced motion options
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Screen reader optimised
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Benefits;