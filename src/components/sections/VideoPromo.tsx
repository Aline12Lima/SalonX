// Importe seu vídeo corretamente
import VideoPro from "../../assets/videos/resulthair.mp4";
import { promoFeatures } from "../utils/promo";

export default function VideoPromo() {
  return (
    <section className="w-full flex flex-col">
      {/* =================================================
          PARTE 1: VÍDEO
      ================================================= */}
      <div className="relative w-full h-[50vh] md:h-[695px] group overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={VideoPro}
        />
      </div>

      {/* =================================================
          PARTE 2: CARDS INFERIORES
      ================================================= */}
      <div className="w-full bg-footer py-16 md:py-0 md:h-[269px] flex items-center justify-center">
        <div className="w-full max-w-[1440px] px-6 md:px-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {promoFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center px-4"
              >
                {/* ÍCONE (Correção aqui) */}
                <div className="mb-6">
                  {/* Antes era <feature.icon />, agora usamos <img> */}
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 object-contain opacity-80"
                  />
                </div>

                {/* Título */}
                <h3 className="font-abhaya text-primary text-3xl font-bold mb-3">
                  {feature.title}
                </h3>

                {/* Texto */}
                <p className="font-inet text-gray-500 text-sm md:text-base max-w-[240px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
