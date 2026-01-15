import { Instagram } from "lucide-react";
import { instagramPosts } from "../utils/insta";

// 1. Definimos a função normalmente
function InstagramContent() {
  return (
    <section className="w-full bg-white pt-0 pb-0 flex flex-col items-center">
      {/* 1. CABEÇALHO */}
      <div className="text-center mb-12 px-4 mt-8">
        <h2 className="font-abhaya text-primary text-4xl md:text-5xl font-bold mb-4">
          Nos sigam no instagram
        </h2>

        <a
          href="https://www.instagram.com/seu_perfil_aqui"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-inet uppercase tracking-widest font-bold text-sm md:text-base mt-2"
        >
          <Instagram size={24} />
          @BeautySalon
        </a>
      </div>

      {/* 2. GRID DE FOTOS */}
      <div className="w-full max-w-[1440px] grid grid-cols-2 md:grid-cols-5">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full h-[288px] overflow-hidden"
          >
            <img
              src={post.image}
              alt="Resultado do Salão"
              // OTIMIZAÇÕES DE PERFORMANCE AQUI:
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu will-change-transform"
            />

            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white w-10 h-10 drop-shadow-md" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// 2. Exportamos o componente envolvido pelo memo
export default InstagramContent;
