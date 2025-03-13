
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import DonateButton from "../components/DonateButton";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="page-transition-container">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        title="Nossa História"
        subtitle="Conheça a trajetória da ONG Mãos Generosas e como surgiu nossa missão de combater a fome e levar dignidade às comunidades."
        imageSrc="https://images.unsplash.com/photo-1624029763091-6e2ee5168e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        buttonText="Apoie Nossa Causa"
        buttonLink="/contato"
      />
      
      {/* Our Story */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-maos-red/10 text-maos-red text-sm font-medium">
              Como Tudo Começou
            </span>
            <h2 className="heading-lg mb-6 text-balance">
              Um pequeno gesto que se transformou em uma grande missão
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-balance">
              A ONG Mãos Generosas nasceu em 2010, quando um grupo de amigos decidiu preparar refeições para distribuir às pessoas em situação de rua. O que começou como uma pequena ação de caridade se transformou em um movimento que hoje atende milhares de pessoas em diversas comunidades.
            </p>
            <p className="text-lg text-gray-700 text-balance">
              Fundada por Maria Oliveira, uma professora aposentada que sempre se sensibilizou com a questão da fome, a ONG cresceu rapidamente graças ao apoio de voluntários e parceiros que acreditaram na causa.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Fundação da ONG" 
              className="rounded-2xl shadow-lg w-full h-auto"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-soft">
              <span className="font-bold text-2xl text-maos-red">2010</span>
              <p className="text-gray-700">Ano de fundação</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="bg-maos-sand py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/40 backdrop-blur-sm text-maos-red text-sm font-medium">
              Nossa Trajetória
            </span>
            <h2 className="heading-lg mb-6 text-balance">
              Uma década de impacto social
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
              Ao longo dos anos, a Mãos Generosas cresceu e expandiu seu impacto, sempre mantendo o compromisso com a dignidade humana.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="glass-panel p-8 md:p-10 transition-all hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-maos-red/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-maos-red" />
                  </div>
                  <div className="hidden md:block mt-4 w-0.5 h-32 bg-maos-red/20 mx-auto"></div>
                </div>
                
                <div>
                  <span className="text-xl font-bold text-maos-red mb-2 block">2010</span>
                  <h3 className="text-2xl font-semibold mb-4">O início</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    Maria Oliveira e um grupo de amigos começam a distribuir refeições para pessoas em situação de rua nos finais de semana. A iniciativa ganha popularidade rapidamente e mais voluntários se juntam à causa.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1593113598332-cd59a93c5762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Início da ONG" 
                    className="w-full h-64 object-cover rounded-xl mt-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 md:p-10 transition-all hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-maos-yellow/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-maos-yellow" />
                  </div>
                  <div className="hidden md:block mt-4 w-0.5 h-32 bg-maos-yellow/20 mx-auto"></div>
                </div>
                
                <div>
                  <span className="text-xl font-bold text-maos-yellow mb-2 block">2013</span>
                  <h3 className="text-2xl font-semibold mb-4">Formalização e crescimento</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    A iniciativa se torna oficialmente uma ONG, com registro formal e sede própria. Parcerias com empresas locais permitem expandir o atendimento para comunidades carentes da periferia.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Formalização da ONG" 
                    className="w-full h-64 object-cover rounded-xl mt-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 md:p-10 transition-all hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-maos-blue/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-maos-blue" />
                  </div>
                  <div className="hidden md:block mt-4 w-0.5 h-32 bg-maos-blue/20 mx-auto"></div>
                </div>
                
                <div>
                  <span className="text-xl font-bold text-maos-blue mb-2 block">2017</span>
                  <h3 className="text-2xl font-semibold mb-4">Expansão e novos projetos</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    A ONG expande suas atividades para além da distribuição de alimentos, iniciando projetos de hortas comunitárias e capacitação profissional. Neste ano, também recebemos o prêmio de Organização Social do Ano.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1526366340739-015416212046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Expansão da ONG" 
                    className="w-full h-64 object-cover rounded-xl mt-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 md:p-10 transition-all hover:shadow-xl">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-maos-red/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-maos-red" />
                  </div>
                </div>
                
                <div>
                  <span className="text-xl font-bold text-maos-red mb-2 block">2020 - Atualmente</span>
                  <h3 className="text-2xl font-semibold mb-4">Impacto nacional</h3>
                  <p className="text-gray-700 mb-4 text-balance">
                    Durante a pandemia, ampliamos nossa atuação para atender à crescente demanda. Hoje, a Mãos Generosas possui projetos em diversas cidades, com uma rede de mais de 500 voluntários ativos e parcerias com empresas de todo o país.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Impacto nacional" 
                    className="w-full h-64 object-cover rounded-xl mt-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Message */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                alt="Maria Oliveira" 
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-xl shadow-soft">
                <p className="font-medium text-gray-700">Fundadora</p>
                <span className="font-bold text-xl text-maos-red">Maria Oliveira</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-maos-red/10 text-maos-red text-sm font-medium">
              Mensagem da Fundadora
            </span>
            <h2 className="heading-lg mb-6 text-balance">
              "Alimentar não é apenas nutrir o corpo, mas também a esperança"
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Quando comecei a distribuir refeições nas ruas da nossa cidade, não imaginava que essa pequena ação se transformaria em algo tão grande. A fome é uma realidade cruel que afeta milhões de brasileiros, mas também é um problema que podemos resolver juntos.
              </p>
              <p>
                Ao longo desses anos, vi histórias de desespero se transformarem em histórias de esperança. Vi comunidades inteiras se mobilizarem para ajudar umas às outras. E, acima de tudo, aprendi que a solidariedade é a maior força que temos para transformar o mundo.
              </p>
              <p>
                Meu sonho é que um dia a Mãos Generosas não seja mais necessária, que todos tenham acesso a alimentos de qualidade e possam viver com dignidade. Até lá, seguiremos trabalhando incansavelmente, e convido você a fazer parte dessa missão.
              </p>
              <p>
                Cada doação, cada hora de voluntariado, cada compartilhamento sobre nosso trabalho faz diferença. Juntos, podemos mudar realidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-maos-red py-20">
        <div className="section-container text-center">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
            Faça Parte da Nossa História
          </span>
          <h2 className="heading-lg mb-6 text-white text-balance">
            Junte-se a nós nessa missão
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 text-balance">
            A história da Mãos Generosas continua sendo escrita todos os dias, com a ajuda de pessoas como você. Venha fazer parte desse movimento de solidariedade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DonateButton variant="secondary" size="lg" />
            <Link
              to="/importancia"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-medium py-4 px-8 rounded-full transition-all duration-300 hover:shadow-md hover:bg-white/10 hover:gap-3"
            >
              Saiba Mais
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default History;
