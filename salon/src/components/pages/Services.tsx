import { useState, useRef, useEffect } from "react";
import PageHeader from "../layout/PageHeader"; // Verifique se o caminho está certo
import { eleganceServices } from "../utils/elegance";
import { X } from "lucide-react";

import servicosBg from "../../assets/imagens/woman-getting-her-hair-done-japanese-hairdressers.jpg";
import textureBg from "../../assets/imagens/pinknail.jpg";
import imgServicoBG from "../../assets/imagens/cutHair.jpg";

export default function Services() {
  // 1. CORREÇÃO: Inicializa já verificando a tela (Lazy Initialization)
  // Isso evita carregar a imagem grande primeiro
  const [currentBg, setCurrentBg] = useState(() =>
    window.innerWidth < 768 ? imgServicoBG : servicosBg
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentBg(imgServicoBG);
      } else {
        setCurrentBg(servicosBg);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- LÓGICA DE CARDS (Mantida igual) ---
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const activeService = eleganceServices.find((s) => s.id === activeServiceId);

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
    <main className="bg-white">
      {/* O PageHeader atualizado vai resolver o problema do zoom */}
      <PageHeader
        title="Nossos Serviços"
        subtitle="Experiências exclusivas para realçar sua essência"
        bgImage={currentBg}
      />

      <section
        className="relative w-full py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${textureBg})` }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-[72px]">
          <div className="text-center mb-16">
            <h2 className="font-abhaya text-primary text-4xl md:text-5xl font-bold mb-4">
              Menu de Tratamentos
            </h2>
            <p className="font-inet text-gray-600 text-lg">
              Toque em um serviço para ver detalhes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center mb-12">
            {eleganceServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`
                  group relative w-full max-w-[306px] h-[320px] md:h-[420px]
                  overflow-hidden rounded-sm cursor-pointer shadow-lg 
                  transition-all duration-300 border-2 bg-white
                  ${
                    activeServiceId === service.id
                      ? "border-primary scale-105"
                      : "border-white hover:-translate-y-2"
                  }
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 transform-gpu"
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-4 z-20 pointer-events-none pr-2">
                  <div className="flex items-center justify-center w-[64px] h-[64px] bg-white rounded-full shadow-lg flex-shrink-0">
                    <img
                      src={service.icon}
                      alt="icone"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h4 className="font-abhaya text-white text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {activeService && (
            <div
              ref={detailsRef}
              className="hidden md:block w-full animate-in fade-in slide-in-from-top-4 duration-500 mt-12 scroll-mt-32"
            >
              <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-100 relative flex gap-12 items-start max-w-6xl mx-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveServiceId(null);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors"
                >
                  <span className="text-3xl leading-none">&times;</span>
                </button>
                <div className="w-1/2 h-[450px]">
                  <img
                    src={activeService.image}
                    className="w-full h-full object-cover rounded shadow-md"
                    alt={activeService.title}
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center h-full space-y-6 py-4">
                  <h3 className="font-abhaya text-primary text-5xl font-bold border-b-2 border-primary/20 pb-4">
                    {activeService.title}
                  </h3>
                  <p className="font-inet text-gray-500 text-lg">
                    {activeService.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {activeService.details?.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 font-inet text-gray-700 text-lg"
                      >
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 px-8 py-3 bg-primary text-white font-inet font-bold uppercase hover:bg-opacity-90 transition w-fit shadow-lg">
                    Agendar Horário
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MODAL MOBILE */}
      {activeService && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white w-full max-w-sm rounded-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setActiveServiceId(null)}
              className="absolute top-3 right-3 bg-white/80 p-2 rounded-full text-primary z-20"
            >
              <X size={24} />
            </button>
            <div className="h-48 w-full relative">
              <img
                src={activeService.image}
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 font-abhaya text-white text-3xl font-bold">
                {activeService.title}
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {activeService.details?.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-inet text-gray-700 border-b border-gray-100 pb-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>{" "}
                    {d}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-primary text-white font-bold uppercase rounded">
                Agendar Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
