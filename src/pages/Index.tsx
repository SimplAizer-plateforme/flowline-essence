import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SaveHoursSection from "@/components/SaveHoursSection";
import OffersSection from "@/components/OffersSection";
import ToolsSection from "@/components/Avisclients";
import PricingSection from "@/components/PricingSection";
import StepsSection from "@/components/StepsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import bgImage from "@/assets/bg.png";

const Index = () => {
  return (
    <div 
      id="top"
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <HeroSection />
      <SaveHoursSection />
      <OffersSection />
      <ToolsSection />
      <PricingSection />
      <StepsSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
