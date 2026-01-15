import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/icones/lotus 1.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links divididos para o layout centralizado
  const leftLinks = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/services" },
  ];
  const rightLinks = [
    { name: "Sobre", path: "/about" },
    { name: "Contato", path: "/contact" },
  ];

  const linkStyle = `font-inet uppercase tracking-widest text-sm font-semibold transition-colors ${
    scrolled
      ? "text-white hover:text-secondary"
      : "text-gray-600 hover:text-primary"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b ${
        scrolled
          ? "bg-primary border-primary shadow-lg"
          : "bg-white/90 backdrop-blur-md border-gray-100"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[72px] h-20 flex items-center justify-between md:justify-center">
        {/* --- NAV ESQUERDA (Desktop) --- */}
        <nav className="hidden md:flex items-center gap-12">
          {leftLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkStyle}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* --- LOGO CENTRALIZADO COM ESPAÇO --- */}
        {/* Mude mx-12 para mx-20, mx-24 ou mx-32 para aumentar o buraco entre os itens */}
        <Link
          to="/"
          className="flex items-center transition-transform hover:scale-110 mx-24"
        >
          <img
            src={logo}
            alt="Logo"
            className={`w-12 h-12 transition-all ${
              scrolled ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* --- NAV DIREITA (Desktop) --- */}
        <nav className="hidden md:flex items-center gap-12">
          {rightLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkStyle}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* --- BOTÃO MOBILE --- */}
        <button
          className={`md:hidden absolute right-6 transition-colors ${
            scrolled ? "text-white" : "text-primary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ... Menu Mobile mantido ... */}
    </header>
  );
}
