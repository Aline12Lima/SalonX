import { useState, useRef, useEffect } from "react";
import { eleganceServices } from "../utils/elegance";

export default function Elegance() {
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const activeService = eleganceServices.find((s) => s.id === activeServiceId);

  // Scroll automático APENAS para Desktop
  useEffect(() => {
    if (
      activeServiceId !== null &&
      detailsRef.current &&
      window.innerWidth >= 768
    ) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [activeServiceId]);

  return (
    <section className="w-full bg-white pt-8 pb-20 px-6 md:px-[72px] relative z-10">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto relative z-20">
        <h2 className="font-abhaya text-primary text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          A elegância vem de ser tão <br /> belo por dentro quanto por fora
        </h2>
        <p className="font-inet text-gray-500 text-lg md:text-base max-w-2xl mt-4 leading-relaxed">
          Nossos serviços são desenhados para não apenas transformar sua
          aparência, mas renovar sua autoconfiança.
        </p>
      </div>

      {/* --- GRID DE CARDS (Performance Otimizada) --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center mb-12 relative z-20">
        {eleganceServices.map((service) => (
          <div
            key={service.id}
            onClick={() => setActiveServiceId(service.id)}
            className={`
              group relative w-full max-w-[306px] 
              h-[320px] md:h-[420px]
              overflow-hidden rounded-sm cursor-pointer shadow-lg 
              transition-all duration-300 border-2
              ${
                activeServiceId === service.id
                  ? "border-primary transform md:-translate-y-2"
                  : "border-transparent hover:shadow-xl"
              }
            `}
          >
            {/* 1. IMAGEM DE FUNDO */}
            {/* transform-gpu: Evita travadas usando a placa de vídeo */}
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-0 transform-gpu will-change-transform"
            />

            {/* 2. CONTEÚDO (Ícone + Título) */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4 z-10 pointer-events-none pr-2">
              {/* Círculo do Ícone */}
              <div className="flex items-center justify-center w-[64px] h-[64px] bg-white rounded-full shadow-lg flex-shrink-0">
                <img
                  src={service.icon}
                  alt="icone"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Título */}
              <h4 className="font-abhaya text-white text-2xl font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                {service.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* =======================================================
          VERSÃO DESKTOP (EXPANDIR)
         ======================================================= */}
      <div className="hidden md:block relative z-20">
        {activeService && (
          <div
            ref={detailsRef}
            className="w-full animate-in fade-in slide-in-from-top-4 duration-500 ease-out scroll-mt-24"
          >
            <div className="flex flex-row items-start justify-center gap-12 bg-gray-50 p-8 rounded-lg relative border border-gray-100 shadow-inner">
              {/* Botão Fechar */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveServiceId(null);
                }}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-white hover:text-primary transition-all z-10 shadow-sm"
              >
                <span className="text-3xl leading-none font-bold pb-1">
                  &times;
                </span>
              </button>

              {/* Imagem Grande */}
              <div className="w-[550px] h-[494px] flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover transform-gpu"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-center h-full w-full max-w-[500px] space-y-6 mt-12">
                <h3 className="font-abhaya text-primary text-5xl font-bold border-b-2 border-primary/20 pb-4">
                  Tipos de {activeService.title}
                </h3>
                <ul className="space-y-4">
                  {activeService.details?.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 font-inet text-gray-600 text-xl"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-8 py-3 bg-primary text-white font-inet font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-colors w-fit shadow-md">
                  Agendar Horário
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =======================================================
          VERSÃO MOBILE (POP-UP)
         ======================================================= */}
      <div className="md:hidden">
        {activeService && (
          <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
              <button
                onClick={() => setActiveServiceId(null)}
                className="absolute top-3 right-3 bg-white/80 w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-white z-20 shadow-sm"
              >
                <span className="text-3xl leading-none font-bold pb-1">
                  &times;
                </span>
              </button>

              <div className="h-[250px] w-full relative">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 font-abhaya text-white text-3xl font-bold">
                  {activeService.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="font-inet text-gray-500 mb-4 text-sm uppercase tracking-wide">
                  Serviços Disponíveis
                </p>
                <ul className="space-y-3 mb-6">
                  {activeService.details?.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 font-inet text-gray-700 text-lg border-b border-gray-100 pb-2 last:border-0"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-primary text-white font-inet font-bold uppercase rounded shadow hover:bg-primary/90">
                  Agendar Agora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
