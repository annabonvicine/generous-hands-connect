
import { ArrowRight, Heart, MapPin, Users, Utensils } from "lucide-react";
import HeroSection from "../components/HeroSection";
import TestimonialCard from "../components/TestimonialCard";
import DonateButton from "../components/DonateButton";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      
      {/* Impact Numbers */}
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
      
      {/* Testimonials */}
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
      
      {/* Call to Action */}
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
      
      <Footer />
    </div>
  );
};

export default Index;
