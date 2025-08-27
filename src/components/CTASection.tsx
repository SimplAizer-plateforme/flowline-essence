import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Sans engagement",
    "Audit gratuit",
  ];

  // Fonction pour ouvrir Calendly en pop-up
  const openCalendly = () => {
    window.open(
      "https://calendly.com/ton-lien-calendly", // 🔗 Mets ton lien Calendly ici
      "Calendly",
      "width=800,height=700,scrollbars=yes,resizable=yes"
    );
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto bg-muted/30 rounded-xl border border-border p-8 lg:p-12 text-center animate-fade-in">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary"> Prêt à travailler intelligemment ?</span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            <span className="text-gradient">Contactez-nous</span>
          </h2>

          {/* Paragraphe principal - ajusté */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed max-w-xl mx-auto">
            Un simple message suffit pour démarrer l’aventure SimplAizer ! 
            Découvrons ensemble comment nous pouvons simplifier la gestion de votre restaurant, 
            sans engagement.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-text-secondary">
                <CheckCircle size={18} className="text-green-500" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Bouton Calendly */}
            <Button 
              size="lg" 
              onClick={openCalendly}
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
            >
              Lancez-vous maintenant
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Bouton appel téléphonique */}
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-primary/30 bg-white/80 hover:bg-white text-primary px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <a href="tel:+33123456789">Appelez-nous</a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-text-secondary mb-4">
              Plateforme verifiée par plusieurs restaurants
            </p>
            <div className="flex justify-center items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-text-secondary ml-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
