
import DonateButton from "../DonateButton";

const CallToActionSection = () => {
  return (
    <section id="home" className="bg-maos-red py-20">
      <div className="section-container text-center">
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
          Faça Parte
        </span>
        <h2 className="heading-lg mb-6 text-white text-balance">
          Sua ajuda pode transformar vidas
        </h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 text-balance">
          Existem diversas formas de contribuir com nossa causa. Cada doação faz uma enorme diferença.
        </p>
        
        <div className="flex justify-center">
          <DonateButton variant="secondary" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
