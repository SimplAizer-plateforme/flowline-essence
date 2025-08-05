import { useEffect, useRef, useState } from "react";

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Prendre contact",
      description:
        "Un appel ou une rencontre pour découvrir Simplizer. Nous présentons la plateforme et vérifions qu’elle répond vraiment à vos besoins.",
      color: "from-blue-500 to-primary",
    },
    {
      number: 2,
      title: "Génération de vos accès",
      description:
        "Nous créons votre compte, générons vos identifiants et préparons votre espace personnalisé pour que tout soit prêt rapidement.",
      color: "from-primary to-purple-500",
    },
    {
      number: 3,
      title: "Prise en main",
      description:
        "En moins de 5 jours, vous recevez vos accès. Il ne vous reste plus qu’à vous connecter et commencer à gérer vos réservations et stocks simplement.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const grayLineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);

  // ✅ Calcule la largeur de la ligne grise dès le départ + resize
  useEffect(() => {
    if (grayLineRef.current) {
      setLineWidth(grayLineRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (grayLineRef.current) {
        setLineWidth(grayLineRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Calcule la progression de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalHeight = rect.height + windowHeight;
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / totalHeight)
        );
        setProgress(scrollProgress);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-padding">
      <div className="container-max" ref={sectionRef}>
        {/* ✅ TITRE */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            <span className="text-gradient">Lancez-vous </span> en seulement 3 étapes.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Un processus simple, clair et rapide : en moins de 5 jours, vous êtes prêt à utiliser SimplAizer sans stress ni perte de temps.
          </p>
        </div>

        {/* ✅ CONTAINER DES STEPS */}
        <div className="relative max-w-5xl mx-auto">
          {/* ✅ Ligne grise */}
          <div
            ref={grayLineRef}
            className="hidden md:block absolute top-10 h-1 bg-gray-200 rounded-full"
            style={{
              left: "calc(16.66% + 40px)",
              right: "calc(16.66% + 40px)",
            }}
          ></div>

          {/* ✅ Ligne colorée – suit EXACTEMENT la ligne grise */}
          <div
            className="hidden md:block absolute top-10 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 origin-left"
            style={{
              left: "calc(16.66% + 40px)",
              width: `${Math.min(progress * lineWidth, lineWidth)}px`, // ✅ pile la même largeur que la grise
              maxWidth: `${lineWidth}px`, // ✅ impossible de dépasser
            }}
          ></div>

          {/* ✅ STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* ✅ Cercle */}
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-full mb-6 shadow-lg hover:scale-110 transition-transform duration-300`}
                  style={{
                    boxShadow: "0 0 15px rgba(100, 100, 255, 0.4)",
                  }}
                >
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* ✅ Texte */}
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
