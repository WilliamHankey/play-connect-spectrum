const Story = () => {
  return (
    <section id="story" className="py-16 bg-muted/30">
      <div className="container-tight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            If playdates feel unpredictable, you're not alone
          </h2>
          
          <div className="mt-8 grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <div className="text-6xl font-light text-primary/60">01</div>
              <h3 className="font-semibold text-lg">The uncertainty</h3>
              <p className="text-muted-foreground">
                "Will this environment be too overwhelming? Will the other children understand my child's needs? Will the parents be patient and kind?"
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl font-light text-primary/60">02</div>
              <h3 className="font-semibold text-lg">The isolation</h3>
              <p className="text-muted-foreground">
                Many families tell us the hardest part isn't finding children nearby—it's finding families who truly understand neurodivergent needs and embrace differences.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl font-light text-primary/60">03</div>
              <h3 className="font-semibold text-lg">The hope</h3>
              <p className="text-muted-foreground">
                We believe every child deserves meaningful friendships. That's why we're building a community where understanding comes first, and connections happen naturally.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg border shadow-sm">
            <blockquote className="text-lg italic text-muted-foreground">
              "After my daughter's autism diagnosis, I felt lost about how to help her make friends. I wished there was a way to connect with other families who would understand and embrace her exactly as she is."
            </blockquote>
            <footer className="mt-4 text-sm text-muted-foreground">
              — Sarah, mother of 6-year-old, Cape Town
            </footer>
          </div>

          <div className="mt-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just connecting families—we're building a movement of understanding, acceptance, and joy. 
              Because when children can be themselves, beautiful friendships flourish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;