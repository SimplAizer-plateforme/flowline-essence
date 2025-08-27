import { Button } from "@/components/ui/button";

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: "Plateforme de gestion de réservations",
      highlight: "réservations",
      description: "Avec SimplAizer, centralisez toutes vos réservations et visualisez-les en temps réel. Comparez vos performances jour après jour, semaine après semaine, et offrez à vos clients un accueil toujours plus fluide et professionnel.",
      benefits: [
        "Réduction de no-show",
        "Moins d’appels, moins d’erreurs",
        "Tableau de bord visuel et intuitif",
        "Statistiques et performances en temps réel",
        "Connexion CRM automatique"
      ],
      ctaText: "Voir la démo",
      ctaLink: "https://youtube.com/ta_video_reservation", // ✅ Lien CTA YouTube
      imagePosition: "left",
      imageSrc: "simpleBook.jpg"
    },
    {
      id: 2,
      title: "Plateforme de gestion des stocks",
      highlight: "stocks",
      description: "SimplAizer suit automatiquement vos entrées et sorties, vous alerte quand un produit manque et fournit des statistiques claires. Comparez vos consommations d’un mois à l’autre et planifiez vos commandes intelligemment.",
      benefits: [
        "Alertes automatiques par seuil",
        "Formulaire simple d’entrée et de sortie",
        "Suivi en temps réel des stocks",
        "Réduction du gaspillage produit",
        "Organisation claire et automatisée"
      ],
      ctaText: "Voir la démo",
      ctaLink: "https://youtube.com/ta_video_stock", // ✅ Lien CTA YouTube
      imagePosition: "right",
      imageSrc: "simplestock.jpg"
    },
  ];

  // ✅ Image mockup clean
  const MockupImage = ({ src }: { src: string }) => (
    <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 h-[400px] flex items-center justify-center">
      <img 
        src={src} 
        alt="Offer mockup" 
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );

  return (
    <section>
      {offers.map((offer) => (
        <div 
          key={offer.id}
          className="section-padding bg-transparent"
          id={offer.id === 1 ? "features" : undefined}
        >
          <div className="container-max">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${
              offer.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* ✅ IMAGE */}
              <div className={`animate-slide-up ${
                offer.imagePosition === 'right' ? 'lg:col-start-2' : ''
              }`}>
                <MockupImage src={offer.imageSrc} />
              </div>
              
              {/* ✅ TEXTE */}
              <div className={`animate-fade-in ${
                offer.imagePosition === 'right' ? 'lg:col-start-1' : ''
              }`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
                  {offer.title.split(offer.highlight)[0]}
                  <span className="text-gradient">{offer.highlight}</span>
                  {offer.title.split(offer.highlight)[1]}
                </h2>
                
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  {offer.description}
                </p>
                
                {/* ✅ LISTE DES AVANTAGES */}
                <div className="space-y-4 mb-8">
                  {offer.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-text-secondary font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* ✅ CTA avec lien YouTube */}
                <a 
                  href={offer.ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-hover text-primary-foreground px-7 py-4 text-base font-semibold rounded-xl transition-all duration-200"
                  >
                    {offer.ctaText}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OffersSection;
