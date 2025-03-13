
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionSection from "../components/sections/MissionSection";
import ImpactSection from "../components/sections/ImpactSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CallToActionSection from "../components/sections/CallToActionSection";

const Index = () => {
  return (
    <div className="page-transition-container">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        title="Transformando Vidas Com Amor e Solidariedade"
        subtitle="A ONG Mãos Generosas tem como missão combater a fome e proporcionar dignidade a comunidades necessitadas através da distribuição de alimentos e apoio social."
        buttonText="Conheça Nosso Trabalho"
        isHomepage={true}
      />
      
      {/* Mission and Values */}
      <MissionSection />
      
      {/* Impact Numbers */}
      <ImpactSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Call to Action */}
      <CallToActionSection />
      
      <Footer />
    </div>
  );
};

export default Index;
