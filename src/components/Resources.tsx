import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, FileText, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <section id="resources" className="py-16 bg-muted/30">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Resources & support for your journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond connecting families, we're building a comprehensive support network with practical tools, expert guidance, and community wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <article className="p-6 rounded-lg border bg-card shadow-sm group hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Expert articles</h3>
            <p className="text-muted-foreground mb-4">
              Practical guidance from autism specialists, child psychologists, and experienced parents on topics that matter to your family.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Sensory-friendly activity ideas</li>
              <li>• Communication strategies</li>
              <li>• Managing meltdowns in social settings</li>
              <li>• Building confidence in children</li>
            </ul>
            <Button variant="outline" className="w-full">
              Browse articles
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm group hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-lg bg-secondary/20 text-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Parent community</h3>
            <p className="text-muted-foreground mb-4">
              Connect with other South African parents for support, advice, and friendship. Share experiences and learn from families who understand.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Weekly discussion topics</li>
              <li>• Regional parent meetups</li>
              <li>• Success story sharing</li>
              <li>• Q&A with specialists</li>
            </ul>
            <Button variant="outline" className="w-full">
              Join community
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm group hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Local events</h3>
            <p className="text-muted-foreground mb-4">
              Discover autism-friendly events, workshops, and activities happening in your area. From sensory-friendly cinema to support groups.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Sensory-friendly movie screenings</li>
              <li>• Parent workshops and training</li>
              <li>• Community fundraising events</li>
              <li>• Holiday activity programs</li>
            </ul>
            <Button variant="outline" className="w-full">
              View events
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </article>
        </div>

        <div className="bg-card rounded-lg border p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                South African autism resources
              </h3>
              <p className="text-muted-foreground mb-6">
                Curated directory of local support services, specialists, and organisations across South Africa. From Cape Town to Johannesburg, find the help your family needs.
              </p>
              <Button variant="hero">
                <FileText className="h-4 w-4 mr-2" />
                Access resource directory
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-sm">Therapy services</div>
                  <div className="text-xs text-muted-foreground">120+ verified practitioners</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="h-10 w-10 rounded-lg bg-secondary/20 text-foreground flex items-center justify-center">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-sm">Educational support</div>
                  <div className="text-xs text-muted-foreground">50+ inclusive schools</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="h-10 w-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-sm">Support groups</div>
                  <div className="text-xs text-muted-foreground">30+ active communities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;