
import React from 'react';

const ImpactSection = () => {
  return (
    <section id="impact" className="bg-maos-sand py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/40 backdrop-blur-sm text-maos-red text-sm font-medium">
            Nosso Impacto
          </span>
          <h2 className="heading-lg mb-6 text-balance">
            Transformando vidas através da sua generosidade
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
            Com a ajuda de nossos doadores e voluntários, conseguimos fazer a diferença em milhares de vidas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover-lift">
            <div className="text-5xl font-bold text-maos-red mb-2">10+</div>
            <p className="text-gray-700 font-medium">Anos de Atuação</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover-lift">
            <div className="text-5xl font-bold text-maos-red mb-2">50.000+</div>
            <p className="text-gray-700 font-medium">Refeições Distribuídas</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover-lift">
            <div className="text-5xl font-bold text-maos-red mb-2">20+</div>
            <p className="text-gray-700 font-medium">Comunidades Atendidas</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover-lift">
            <div className="text-5xl font-bold text-maos-red mb-2">500+</div>
            <p className="text-gray-700 font-medium">Voluntários Ativos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
