// 1. IMPORTAÇÃO DOS ÍCONES (Ajuste os caminhos conforme seus arquivos)
import lotusIcon from "../../assets/icones/lotus 1.svg"; // O mesmo usado no Hero
import facebookIcon from "../../assets/icones/facebook.svg"; // Seu ícone do Face
import instagramIcon from "../../assets/icones/instagram.png"; // Seu ícone do Insta
import whatsappIcon from "../../assets/icones/Frame 90.png"; // Seu ícone do Whats

// Se tiver ícones de pagamento (Visa, Master), importe aqui também, ou use texto/lucide

export default function Footer() {
  return (
    <footer className="w-full bg-secondary relative flex flex-col items-center justify-center overflow-hidden">
      {/* ==============================================
          1. FUNDO (LOTUS GIGANTE E CLARO)
          1440 x 380 (Altura definida no mobile e desktop)
      ============================================== */}
      <div className="w-full h-[380px] relative flex items-center justify-center">
        {/* Imagem de Fundo (Lotus Fantasma) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {/* Opacity-5 ou 10 deixa ele bem clarinho como no print */}
          <img
            src={lotusIcon}
            alt=""
            className="w-[300px] md:w-[400px] opacity-10 blur-[1px]"
          />
        </div>

        {/* ==============================================
            2. CONTAINER CENTRAL (434 x 213)
        ============================================== */}
        <div className="relative z-10 w-full max-w-[434px] flex flex-col items-center text-center px-4">
          {/* BLOCO TÍTULO (434 x 80) */}
          <div className="mb-4 flex flex-col items-center">
            {/* Pequeno ícone de lótus em cima do título */}
            <img
              src={lotusIcon}
              alt="Logo"
              className="w-8 h-8 mb-2 text-primary"
            />

            <h1 className="font-imperial text-primary text-5xl md:text-6xl whitespace-nowrap">
              Beauty Salon
            </h1>
          </div>

          {/* BLOCO TEXTO (418 x 57) */}
          <p className="font-inet text-primary/80 text-sm md:text-base leading-relaxed mb-6 max-w-[418px]">
            Somos referencia em beleza e bem-estar, oferecendo serviços
            personalizados para realçar sua beleza natural.
          </p>

          {/* BLOCO REDES SOCIAIS (116 x 20) */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>

            {/* Instagram (Destaque ou normal) */}
            <a href="#" className="hover:scale-110 transition-transform">
              {/* Se o seu icone for preto, e quiser mudar a cor via CSS filter, ou use o svg direto */}
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>

            <a href="#" className="hover:scale-110 transition-transform">
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* ==============================================
            3. BARRA RODAPÉ (COPYRIGHT E PAGAMENTOS)
            Baseado no print image_402c6f.png
        ============================================== */}
        <div className="absolute bottom-6 w-full px-6 md:px-[72px] flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-primary/60 font-inet uppercase tracking-widest gap-4 md:gap-0">
          <p>© Copyright Beauty Salon 2026. Design by Aline.</p>

          <div className="flex gap-4 opacity-70">
            {/* Simulando ícones de pagamento com texto ou placeholders */}
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
