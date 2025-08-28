import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center animate-fade-in">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-primary">Déléguez l’opérationnel tout en gardant le contrôle</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8 tracking-tight leading-[1.1]">
            Ayez la {" "}
            <span className="text-gradient relative">
              meilleure gestion
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary-hover/20 blur-xl -z-10 rounded-lg"></div>
            </span>
            <br />
            de votre entreprise.
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Gérez vos réservations et votre stock sans effort, gagnez du temps chaque jour et offrez à vos clients une expérience irréprochable.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
              onClick={() => {
                const contactEl = document.querySelector('#contact');
                if (contactEl) {
                  (contactEl as HTMLElement).scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.hash = '#contact';
                }
              }}
            >
              <span
                className="underline decoration-transparent hover:decoration-white/70"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    'https://calendly.com/ton-lien-calendly',
                    'Calendly',
                    'width=800,height=700,scrollbars=yes,resizable=yes'
                  );
                }}
              >
                Commencez
              </span>
              &nbsp;maintenant
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-text-secondary/20 bg-white/80 hover:bg-white text-text-primary px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
              asChild
            >
              <a href="#features">
                <Play size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                Je veux une démo
              </a>
            </Button>
          </div>
          
          {/* Hero Image Placeholder */}
<div className="max-w-5xl mx-auto animate-slide-up">
  <div className="rounded-2xl overflow-hidden">
    <iframe 
      width="100%" 
      height="600" 
      src="https://www.youtube.com/embed/m1oUVf2bQpk" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  </div>
</div>


          
          {/* Client Logos */}
          <div className="mt-20">
            <p className="text-sm text-text-secondary mb-8 font-medium">
              Compatible avec les outils que vous utilisez déjà au quotidien.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity">
              {["Make", "Word", "Excel", "Pdf", "Google", "Gmail", "Google Drive"].map((logo) => (
                <div key={logo} className="text-lg font-semibold text-text-secondary hover:text-primary transition-colors cursor-pointer">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;