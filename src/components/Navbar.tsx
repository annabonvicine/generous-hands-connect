
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "História", path: "/historia" },
    { name: "Importância da Doação", path: "/importancia" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-maos-red flex items-center justify-center">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
              <span className="font-heading font-bold text-xl text-maos-red">
                Mãos Generosas
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-maos-red ${
                  location.pathname === link.path
                    ? "text-maos-red"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-maos-red hover:bg-maos-red/90 text-white px-5 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-md"
            >
              Doe Agora
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-maos-red"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="transition-all" />
              ) : (
                <Menu size={24} className="transition-all" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 h-auto"
            : "opacity-0 -translate-y-4 h-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 px-4 rounded-lg font-medium ${
                location.pathname === link.path
                  ? "bg-maos-sand text-maos-red"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contato"
              className="block w-full text-center bg-maos-red hover:bg-maos-red/90 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Doe Agora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
