const TestimonialSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        
        {/* ✅ Titre & description gardés */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Ce que les clients <span className="text-gradient">disent</span> de nous.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            SimplAizer, c’est plus qu’un simple outil, c’est un copilote intelligent conçu pour simplifier, automatiser et optimiser les opérations de gestion des restaurateurs et artisans.
          </p>
        </div>

        {/* ✅ Bloc Testimonial à la place du grid */}
        <div className="max-w-4xl mx-auto bg-muted/30 rounded-xl border border-border p-8 lg:p-12">
          <div className="text-center animate-fade-in">

            {/* Testimonial Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-text-primary mb-8 leading-relaxed italic">
  "Très beau boulot réalisé avec Nathan.  
  Cela colle parfaitement à ce qu’on voulait, du sur mesure ! Merci à vous pour votre{" "}
  <span className="text-gradient font-bold">implication</span>, votre{" "}
  <span className="text-gradient font-bold">professionnalisme</span> et votre{" "}
  <span className="text-gradient font-bold">sérieux</span>."
</blockquote>


            {/* Client Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              
              {/* Client Photo */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full" />
              </div>

              {/* Client Details */}
              <div className="text-center sm:text-left">
                <div className="font-semibold text-text-primary text-lg mb-1">
                  Catherine Fasang
                </div>
                <div className="text-text-secondary">Co-présidente</div>
              </div>
            </div>

            {/* Company Logo */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-center text-text-secondary">
                <span className="font-medium">Restaurant chromosome Saint-Etienne</span>
              </div>
            </div>
          </div>
        </div>

        {/* ❌ Ancien CTA supprimé (Request Integration) car on ne fait plus de grid */}
      </div>
    </section>
  );
};

export default TestimonialSection;
