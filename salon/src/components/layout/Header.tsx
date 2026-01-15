import { useState } from "react";
import { Link } from "react-router-dom"; // 1. Importe o Link
import { Menu, X } from "lucide-react";
import logo from "../../assets/icones/lotus 1.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/services" },
    { name: "Sobre", path: "/about" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[72px] h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-inet text-gray-600 hover:text-primary uppercase tracking-widest text-sm font-semibold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-2 rounded-sm font-inet uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all"
          >
            Agendar
          </Link>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                className="font-inet text-gray-600 text-lg uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
