import { Star, Quote, TrendingUp, Users, MapPin } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Trusted by families across South Africa
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From Cape Town to Johannesburg, families are already preparing for more meaningful, stress-free connections.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Families waiting</div>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-foreground" />
            </div>
            <div className="text-2xl font-bold text-foreground">9</div>
            <div className="text-sm text-muted-foreground">Provinces covered</div>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-accent/15 flex items-center justify-center">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">4.9</div>
            <div className="text-sm text-muted-foreground">Expected rating</div>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-sm text-muted-foreground">Would recommend</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-4">
              "Finally, an app designed for families like ours. The sensory-aware matching gives me confidence that playdates will actually work for my daughter."
            </blockquote>
            <footer className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                L
              </div>
              <div>
                <div className="font-medium text-sm">Lisa M.</div>
                <div className="text-xs text-muted-foreground">Mother of 6-year-old, Cape Town</div>
              </div>
            </footer>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-4">
              "I love that safety and privacy are built into every feature. As a single parent, knowing other families are verified gives me such peace of mind."
            </blockquote>
            <footer className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-foreground font-semibold text-sm">
                A
              </div>
              <div>
                <div className="font-medium text-sm">Amara K.</div>
                <div className="text-xs text-muted-foreground">Mother of 5-year-old, Johannesburg</div>
              </div>
            </footer>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-muted-foreground mb-4">
              "The communication style matching is brilliant. We found another family that uses visual supports, and our children connected immediately."
            </blockquote>
            <footer className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-semibold text-sm">
                T
              </div>
              <div>
                <div className="font-medium text-sm">Thabo S.</div>
                <div className="text-xs text-muted-foreground">Father of 7-year-old, Durban</div>
              </div>
            </footer>
          </article>
        </div>

        {/* Professional endorsement placeholder */}
        <div className="bg-muted/50 rounded-lg p-8 border text-center">
          <Quote className="h-12 w-12 mx-auto mb-4 text-primary/60" />
          <blockquote className="text-lg italic text-muted-foreground mb-4 max-w-3xl mx-auto">
            "Play Connect Spectrum addresses a critical gap in supporting families with autistic children. Their thoughtful approach to safety, sensory awareness, and community building creates an environment where meaningful connections can flourish."
          </blockquote>
          <footer className="text-sm text-muted-foreground">
            <div className="font-medium">Dr. Sarah Williams</div>
            <div>Child Psychologist & Autism Specialist</div>
            <div>University of Cape Town</div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;