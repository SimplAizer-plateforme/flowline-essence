import { useState } from "react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses starting with AI automation.",
      monthlyPrice: 37,
      annualPrice: 370,
      featured: false,
      buttonText: "Choose this plan",
      ctaLink: "https://calendly.com/ton-calendly/starter",  // ✅ lien CTA Starter
      features: [
        "Basic workflow automation",
        "AI-powered personal assistant", 
        "Standard analytics & reporting",
        "Email & chat support",
        "Up to 3 AI integrations"
      ]
    },
    {
      name: "Professional",
      description: "Perfect for small businesses starting with AI automation.",
      monthlyPrice: 75,
      annualPrice: 750,
      featured: true,
      buttonText: "Choose this plan",
      ctaLink: "https://calendly.com/ton-calendly/professional",  // ✅ lien CTA Professional
      features: [
        "Advanced workflow automation",
        "AI-driven sales & marketing tools",
        "Enhanced data analytics & insights", 
        "Priority customer support",
        "Up to 10 AI integrations"
      ]
    },
    {
      name: "Enterprise",
      description: "Perfect for small businesses starting with AI automation.",
      monthlyPrice: "Custom",
      annualPrice: "Custom", 
      featured: false,
      buttonText: "Schedule a call",
      ctaLink: "https://calendly.com/ton-calendly/enterprise",  // ✅ lien CTA Enterprise
      features: [
        "Fully customizable AI automation",
        "Dedicated AI business consultant",
        "Enterprise-grade compliance",
        "24/7 VIP support",
        "Unlimited AI integrations"
      ]
    }
  ];

  return (
    <section style={{ 
      paddingTop: '70px', 
      paddingBottom: '70px',
      width: '100vw',
      maxWidth: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      position: 'relative'
    }}>
      <div className="container-max">
        
        {/* ✅ Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#161b22] mb-6 tracking-tight">
            The Best <span style={{ color: '#124CFA' }}>AI Automation</span>,<br />
            at the Right Price
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto mb-9 leading-relaxed">
            Choose a plan that fits your business needs and start automating with AI
          </p>
        </div>

        {/* ✅ Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-10 text-base">
          <span 
            className={`${!isAnnual ? 'font-bold text-primary' : 'text-black font-normal'} cursor-pointer`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>
          <label className="relative inline-block w-12 h-7 cursor-pointer">
            <input 
              type="checkbox" 
              className="opacity-0 w-0 h-0"
              checked={isAnnual}
              onChange={(e) => setIsAnnual(e.target.checked)}
            />
            <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full border-2 transition-all duration-300 ${
              isAnnual ? 'bg-[#124CFA] border-[#124CFA]' : 'bg-[#e3e8f7] border-[#124CFA]'
            }`}>
              <span className={`absolute content-[''] h-5 w-5 left-1 top-0.5 bg-white transition-all duration-300 rounded-full shadow-sm transform ${
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              }`}></span>
            </span>
          </label>
          <span 
            className={`${isAnnual ? 'font-bold text-primary' : 'text-black font-normal'} cursor-pointer`}
            onClick={() => setIsAnnual(true)}
          >
            Annually
          </span>
        </div>

        {/* ✅ Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:scale-105 flex flex-col justify-start ${
                plan.featured
                  ? 'bg-[#124CFA] border-[#124CFA] text-white shadow-xl'
                  : 'bg-white/65 border-[rgba(18,76,250,0.13)] text-[#161b22] backdrop-blur-sm shadow-lg hover:shadow-xl'
              }`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                {plan.name}
                {plan.featured && (
                  <span className="bg-white text-[#124CFA] px-2 py-1 text-xs rounded-full ml-2">
                    Popular
                  </span>
                )}
              </h3>
              
              {/* ✅ Prix */}
              <p className={`text-4xl font-bold mb-2 ${plan.featured ? 'text-white' : ''}`}>
                {typeof plan.monthlyPrice === 'number' 
                  ? `$${isAnnual ? plan.annualPrice : plan.monthlyPrice}`
                  : plan.monthlyPrice
                }
                <span className={`text-base font-normal ml-1 ${plan.featured ? 'text-white/90' : 'text-black'}`}>
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </p>
              
              {/* ✅ Description */}
              <p className={`mb-6 min-h-[36px] ${plan.featured ? 'text-white' : 'text-black'}`}>
                {plan.description}
              </p>
              
              {/* ✅ CTA BUTTON AVEC LIEN */}
              <a 
                href={plan.ctaLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className={`rounded-full mb-6 font-medium transition-all duration-300 w-full ${
                    plan.featured 
                      ? 'bg-white text-[#222] hover:bg-gray-100' 
                      : 'bg-[#27272a] text-white hover:bg-[#3f3f46]'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </a>
              
              {/* ✅ Liste des features */}
              <ul className={`text-left text-sm mt-4 space-y-2 flex-grow ${plan.featured ? 'text-white' : 'text-black'}`}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className={`mr-2 ${plan.featured ? 'text-white' : 'text-green-500'}`}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}   
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
