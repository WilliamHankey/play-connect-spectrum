import { Star, Heart, Users, Smile } from "lucide-react";

const UseCases = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Real families, meaningful connections
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every child is unique, and every playdate story is different. Here are some ways families are already planning to use Play Connect Spectrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">First playdate after diagnosis</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              "I was nervous about arranging playdates after Liam's autism diagnosis. This app helped me find a family who understood sensory needs. Our first meetup was at a quiet library—perfect for both boys."
            </p>
            <div className="text-xs text-muted-foreground">
              — Priya, mother of 5-year-old, Johannesburg
            </div>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-semibold">Sensitive to noise and crowds</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              "Aisha gets overwhelmed in busy playgrounds. Through the app, we found families who prefer quiet nature walks. Now she has three close friends who love exploring gardens together."
            </p>
            <div className="text-xs text-muted-foreground">
              — Fatima, mother of 7-year-old, Cape Town
            </div>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
                <Smile className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold">Nonverbal communicators</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              "Finding families who communicate with sign language felt impossible. The app's communication filters helped us connect with another signing family. The children bonded instantly."
            </p>
            <div className="text-xs text-muted-foreground">
              — David, father of 6-year-old, Durban
            </div>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Siblings welcome</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              "My neurotypical daughter wanted to include her autistic brother in playdates. We matched with families who have mixed-neurotype siblings. Both children feel included now."
            </p>
            <div className="text-xs text-muted-foreground">
              — Sarah, mother of two, Pretoria
            </div>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-semibold">Special interests</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              "Ethan is obsessed with trains. The app connected us with other train-loving families. Now they have monthly train museum visits and share their collections."
            </p>
            <div className="text-xs text-muted-foreground">
              — Michael, father of 8-year-old, Port Elizabeth
            </div>
          </article>

          <article className="p-6 rounded-lg border bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold">Building confidence</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              "Maya was shy about social situations. Starting with one-on-one playdates through the app helped build her confidence. She now enjoys small group activities too."
            </p>
            <div className="text-xs text-muted-foreground">
              — Thandie, mother of 6-year-old, Bloemfontein
            </div>
          </article>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-xl mb-4">What will your story be?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every family's journey is unique. We're here to support yours with understanding, care, and the right connections for your child.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">#AutismAcceptance</span>
            <span className="px-3 py-1 bg-secondary/20 text-foreground rounded-full">#InclusivePlay</span>
            <span className="px-3 py-1 bg-accent/15 text-accent rounded-full">#SouthAfricanFamilies</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">#NeurodiverseFriendships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;