
import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maos-sand py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-maos-red flex items-center justify-center">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
              <span className="font-heading font-bold text-xl text-maos-red">
                Mãos Generosas
              </span>
            </Link>
            <p className="text-gray-700 mb-4">
              Ajudando comunidades necessitadas a terem acesso a alimentos e uma vida digna.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-maos-red flex items-center justify-center text-white transition-all hover:bg-maos-red/90"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-maos-red flex items-center justify-center text-white transition-all hover:bg-maos-red/90"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-maos-red flex items-center justify-center text-white transition-all hover:bg-maos-red/90"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-xl mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-maos-red transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  className="text-gray-700 hover:text-maos-red transition-colors"
                >
                  História
                </Link>
              </li>
              <li>
                <Link
                  to="/importancia"
                  className="text-gray-700 hover:text-maos-red transition-colors"
                >
                  Importância da Doação
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-700 hover:text-maos-red transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-xl mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-maos-red shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Rua das Flores, 123, Centro<br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-maos-red shrink-0" />
                <span className="text-gray-700">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-maos-red shrink-0" />
                <span className="text-gray-700">contato@maosgenerosas.org</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <h3 className="font-heading font-semibold text-xl mb-4">Assine Nossa Newsletter</h3>
            <p className="text-gray-700 mb-4">
              Receba atualizações sobre nossas ações e eventos.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-maos-red focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-maos-red hover:bg-maos-red/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-md"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2023 Mãos Generosas. Todos os direitos reservados.
            </p>
            <div className="flex items-center">
              <span className="text-gray-600 text-sm">Feito com</span>
              <Heart className="h-4 w-4 mx-1 text-maos-red" />
              <span className="text-gray-600 text-sm">para um mundo melhor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
