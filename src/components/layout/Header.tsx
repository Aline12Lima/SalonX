import { useState, useEffect } from "react"; // Adicionado useEffect
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/icones/lotus 1.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lógica para detectar o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 50px, ativa o estado
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/services" },
    { name: "Sobre", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
        scrolled
          ? "bg-primary border-primary py-2 shadow-lg"
          : "bg-white/90 backdrop-blur-md border-gray-100 py-0"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[72px] h-20 flex items-center justify-between">
        {/* LOGO - Invertemos a cor com filter se estiver scrolled */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className={`w-10 h-10 transition-all ${
              scrolled ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-inet uppercase tracking-widest text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-white hover:text-secondary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-white" : "text-primary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div
          className={`md:hidden border-b animate-in slide-in-from-top duration-300 ${
            scrolled ? "bg-primary border-white/10" : "bg-white border-gray-100"
          }`}
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-inet text-lg uppercase tracking-widest ${
                  scrolled ? "text-white" : "text-gray-600"
                }`}
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
