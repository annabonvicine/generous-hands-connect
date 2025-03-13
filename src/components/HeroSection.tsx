
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  buttonText?: string;
  buttonLink?: string;
  isHomepage?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  imageSrc = "https://images.unsplash.com/photo-1593113598332-cd59a93c5762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  buttonText = "Saiba mais",
  buttonLink = "/historia",
  isHomepage = false,
}: HeroSectionProps) => {
  return (
    <div className={`relative overflow-hidden ${isHomepage ? 'min-h-screen' : 'min-h-[50vh]'} flex items-center`}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-black/40 z-10"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <img
          src={imageSrc}
          alt="Mãos Generosas"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium animate-fade-in-down">
            ONG Mãos Generosas
          </span>
          <h1 className="heading-xl mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up delay-150 text-balance">
            {subtitle}
          </p>
          {buttonText && (
            <div className="animate-fade-in-up delay-300">
              <Link
                to={buttonLink}
                className="inline-flex items-center gap-2 bg-maos-red hover:bg-maos-red/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:gap-3"
              >
                {buttonText}
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-maos-cream/80 to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
