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
      <div className="max-w-[1440px] mx-auto px-6 md:px-[72px] h-20 flex items-center justify-between md:justify-center relative">
        {/* --- NAV ESQUERDA (Desktop) --- */}
        <nav className="hidden md:flex items-center gap-12 absolute left-[72px]">
          {leftLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkStyle}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* --- LOGO CENTRALIZADO --- */}
        <Link
          to="/"
          className="flex items-center transition-transform hover:scale-110"
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
        <nav className="hidden md:flex items-center gap-12 absolute right-[72px]">
          {rightLinks.map((link) => (
            <Link key={link.name} to={link.path} className={linkStyle}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* --- BOTÃO MOBILE (Lado Direito no Mobile) --- */}
        <button
          className={`md:hidden absolute right-6 transition-colors ${
            scrolled ? "text-white" : "text-primary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* --- MENU MOBILE --- */}
      {isOpen && (
        <div
          className={`md:hidden border-b animate-in slide-in-from-top duration-300 ${
            scrolled ? "bg-primary border-white/10" : "bg-white border-gray-100"
          }`}
        >
          <nav className="flex flex-col p-6 gap-6 text-center">
            {[...leftLinks, ...rightLinks].map((link) => (
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
