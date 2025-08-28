import { Zap } from "lucide-react";

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
            
            {/* Quote Icon */}
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>

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
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                </div>
                
                {/* Verification Badge */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Client Details */}
              <div className="text-center sm:text-left">
                <div className="font-semibold text-text-primary text-lg mb-1">
                  Catherine Fasang
                </div>
                <div className="text-text-secondary">
                  Co-présidente</div>
                <div className="flex items-center justify-center sm:justify-start space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Logo */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">T</span>
                </div>
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
