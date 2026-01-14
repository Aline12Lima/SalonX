import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/icones/lotus 1.svg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variáveis para controlar as cores dinamicamente e deixar o HTML mais limpo
  const textColor = isScrolled ? "text-white" : "text-primary";
  const iconColor = isScrolled ? "text-white" : "text-primary";
  // Filtro para o logo: Se scroll, inverte as cores para branco (brightness-0 invert)
  const logoFilter = isScrolled ? "brightness-0 invert" : "";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-[72px] ${
        isScrolled
          ? "bg-primary py-4 shadow-lg" // Scroll: Fundo Primary, menos altura
          : "bg-transparent py-[40px]" // Topo: Transparente, mais altura
      }`}
    >
      {/* =========================================================
          VERSÃO DESKTOP
         ========================================================= */}

      {/* --- LADO ESQUERDO: Ícones --- */}
      <div
        className={`flex items-center gap-[18px] transition-colors ${iconColor}`}
      >
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Facebook size={24} />
        </a>
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Instagram size={24} />
        </a>
      </div>

      {/* --- LOGO MOBILE (Só aparece no celular) --- */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
        {/* Apliquei o mesmo filtro aqui para garantir */}
        <img
          src={logo}
          alt="Logo Mobile"
          className={`h-10 w-auto transition-all ${logoFilter}`}
        />
      </div>

      {/* --- CENTRO EXATO (DESKTOP) --- */}
      <nav
        className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-[20px] font-medium text-lg transition-colors ${textColor}`}
      >
        <a
          href="#home"
          className="hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Home
        </a>
        <a
          href="#servicos"
          className="hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Serviços
        </a>

        {/* LOGO NO MEIO DA LISTA */}
        <a href="#home" className="hover:scale-105 transition-transform px-4">
          <img
            src={logo}
            alt="Logo Central"
            // brightness-0 invert transforma qualquer imagem em BRANCO puro
            className={`transition-all duration-300 w-auto object-contain ${
              isScrolled ? "h-10" : "h-14"
            } ${logoFilter}`}
          />
        </a>

        <a
          href="#sobre-nos"
          className="hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Sobre Nós
        </a>
        <a
          href="#contato"
          className="hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Contato
        </a>
      </nav>

      {/* --- LADO DIREITO: Botão Mobile --- */}
      <div className="w-[80px] flex justify-end items-center">
        <button
          className={`md:hidden hover:opacity-80 transition-colors ${iconColor}`} // Usa a mesma cor dos ícones sociais
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* =========================================================
          VERSÃO MOBILE (MENU SUSPENSO)
         ========================================================= */}

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 p-6 flex flex-col items-center gap-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <a
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-secondary text-xl font-medium hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#servicos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-secondary text-xl font-medium hover:text-white transition-colors"
          >
            Serviços
          </a>
          <a
            href="#sobre-nos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-secondary text-xl font-medium hover:text-white transition-colors"
          >
            Sobre Nós
          </a>
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-secondary text-xl font-medium hover:text-white transition-colors"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
