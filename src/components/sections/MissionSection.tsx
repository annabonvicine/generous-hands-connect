
import { ArrowRight, Heart, Utensils, Users } from "lucide-react";
import { Link } from "react-router-dom";

const MissionSection = () => {
  return (
    <section id="mission" className="section-container py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-maos-red/10 text-maos-red text-sm font-medium">
          Nossa Missão
        </span>
        <h2 className="heading-lg mb-6 text-balance">
          Levando esperança através da alimentação
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
          Acreditamos que o acesso a alimentos é um direito humano básico. 
          Nossa missão é garantir que nenhuma pessoa passe fome em nossas comunidades.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 flex flex-col items-center text-center hover-lift">
          <div className="w-16 h-16 rounded-full bg-maos-red/10 flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-maos-red" />
          </div>
          <h3 className="heading-sm mb-4 text-balance">Solidariedade</h3>
          <p className="text-gray-700 text-balance">
            Trabalhamos com amor e empatia, reconhecendo a dignidade de cada pessoa que atendemos.
          </p>
        </div>
        
        <div className="glass-panel p-8 flex flex-col items-center text-center hover-lift">
          <div className="w-16 h-16 rounded-full bg-maos-yellow/10 flex items-center justify-center mb-6">
            <Utensils className="w-8 h-8 text-maos-yellow" />
          </div>
          <h3 className="heading-sm mb-4 text-balance">Nutrição</h3>
          <p className="text-gray-700 text-balance">
            Fornecemos alimentos nutritivos e de qualidade que promovem a saúde e o bem-estar.
          </p>
        </div>
        
        <div className="glass-panel p-8 flex flex-col items-center text-center hover-lift">
          <div className="w-16 h-16 rounded-full bg-maos-blue/10 flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-maos-blue" />
          </div>
          <h3 className="heading-sm mb-4 text-balance">Comunidade</h3>
          <p className="text-gray-700 text-balance">
            Construímos pontes entre doadores e comunidades, criando uma rede de apoio e solidariedade.
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/historia"
          className="inline-flex items-center gap-2 text-maos-red hover:text-maos-red/80 font-medium transition-all hover:gap-3"
        >
          Conheça nossa história
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default MissionSection;
