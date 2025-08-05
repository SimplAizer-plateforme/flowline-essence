import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Zap } from "lucide-react";

const SaveHoursSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            SimplAizer transforme <span className="text-gradient">la façon</span> dont les restaurants travaillent.
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto">
            Depuis des années, les restaurateurs jonglent entre carnets de réservation, fichiers Excel, appels de fournisseurs et tâches répétitives qui prennent un temps fou. Nous avons créé Simplizer avec une idée simple : rendre la gestion d’un restaurant aussi fluide qu’un service en salle parfaitement orchestré.
          </p>
        
          
          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SaveHoursSection;