
import TestimonialCard from "../TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-container py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-maos-red/10 text-maos-red text-sm font-medium">
          Depoimentos
        </span>
        <h2 className="heading-lg mb-6 text-balance">
          O que dizem sobre nós
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
          Estas são algumas das histórias das pessoas que foram impactadas pelo nosso trabalho.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="Graças à Mãos Generosas, minha família teve acesso a alimentos de qualidade em um momento muito difícil. Só tenho a agradecer por essa iniciativa maravilhosa."
          name="Maria Silva"
          role="Beneficiária"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
        />
        
        <TestimonialCard 
          quote="Ser voluntário na Mãos Generosas transformou minha visão de mundo. É gratificante ver o impacto que podemos causar na vida de tantas pessoas."
          name="João Pereira"
          role="Voluntário"
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
        />
        
        <TestimonialCard 
          quote="Como empresa parceira, temos orgulho de contribuir com essa causa tão nobre. Ver o trabalho sério e dedicado da equipe nos motiva a continuar apoiando."
          name="Ana Ferreira"
          role="Empresa Doadora"
          image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
