import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qu'est-ce que SimplAizer ?",
      answer: "SimplAizer est un SaaS européen, 100% fondé en Europe par Hassan et Nathan, avec pour mission de faciliter la gestion des restaurants. L’objectif est de rendre la gestion d’un établissement aussi simple que possible, qu’il s’agisse des stocks, des réservations en ligne ou du suivi des opérations quotidiennes."
    },
    {
      question: "Quels produits propose SimplAizer ?",
      answer: "SimplAizer propose des solutions logicielles innovantes pour les restaurateurs : un module de gestion des stocks précis et intuitif, ainsi qu’un système de réservation en ligne performant qui améliore l’efficacité et la réactivité face aux demandes des clients."
    },
    {
      question: "C’est quoi un SaaS ?",
      answer: "SaaS signifie ‘Software as a Service’ (logiciel en tant que service). Au lieu d’acheter et d’installer un logiciel sur un ordinateur, vous y accédez via internet. Cela permet d’avoir des mises à jour automatiques, aucune installation compliquée et une accessibilité depuis n’importe quel appareil."
    },
    {
      question: "Quels sont les avantages de choisir SimplAizer ?",
      answer: "SimplAizer offre de nombreux avantages aux restaurateurs : un gain de temps considérable grâce à l’automatisation des tâches, une gestion centralisée de toutes les opérations, une meilleure réactivité aux réservations en ligne, et une interface claire et simple qui ne nécessite aucune expertise technique. C’est une solution pensée pour alléger la charge des gérants et améliorer la satisfaction des clients."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Questions <span className="text-gradient">fréquemment</span> <span className="text-gradient">posées</span> <br /> 
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Vous avez des questions sur SimplAizer ? Nous avons les réponses. 
            Découvrez les questions les plus courantes posées par nos utilisateurs.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-slide-up">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-border card-shadow overflow-hidden"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 text-primary transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-border pt-4">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Still have questions? */}
          <div className="text-center mt-12 p-8 bg-muted/30 rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-4">
              Our support team is here to help you 24/7
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover font-medium transition-colors"
            >
              <span>Contact Support</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;