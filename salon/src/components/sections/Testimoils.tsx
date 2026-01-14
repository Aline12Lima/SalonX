import { useState } from "react";
import iconeCard from "../../assets/icones/“ (1).svg";
import iconeCard2 from "../../assets/icones/“.svg";
import { testimonialsData } from "../utils/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Pega os dados do cliente ativo
  const activeTestimonial = testimonialsData[activeIndex];

  return (
    // CONTAINER TOTAL: ~654px de altura visual (controlado pelo conteudo + padding)
    <section className="w-full bg-gray-100 relative">
      {/* 1. CONTAINER FUNDO COLORIDO (TOP) - 1440 x 372 */}
      {/* pt-16 para dar espaço ao título */}
      <div className="w-full h-[372px] bg-footer flex flex-col items-center pt-12 md:pt-16 text-center px-4">
        {/* TÍTULO E TEXTO (Fora do card branco) */}
        <h2 className="font-abhaya text-primary text-5xl md:text-6xl font-bold mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="font-inet text-gray-600 max-w-2xl text-sm md:text-base mb-8">
          Confira o que nossos clientes satisfeitos têm a dizer sobre nossos
          serviços excepcionais e atendimento personalizado.
        </p>
      </div>

      {/* 2. CONTAINER TRANSPARENTE (WRAPPER) - 929 x 432 */}
      {/* Usamos margem negativa (-mt) para puxar ele para cima, ficando metade no bege, metade no branco */}
      <div className="relative w-full max-w-[929px] mx-auto -mt-[170px] py-4 px-4 md:px-0">
        {/* --- ASPAS GIGANTES (DECORAÇÃO) --- */}
        {/* Canto Superior Esquerdo */}
        <div className="absolute -top-10 -left-4 md:-left-12 text-primary text-9xl font-serif hidden md:block">
          <img src={iconeCard} alt="aspas" />
        </div>

        {/* Canto Inferior Direito */}
        <div className="absolute -bottom-10 -right-4 md:-right-12 text-primary text-9xl font-serif hidden md:block">
          <img src={iconeCard2} alt="aspas" />
        </div>

        {/* 3. CONTAINER BRANCO (CARD PRINCIPAL) - 856 x 372 */}
        <div className="bg-white rounded-lg shadow-xl w-full max-w-[856px] mx-auto h-auto md:h-[372px] flex flex-col md:flex-row items-center p-8 md:p-0 overflow-hidden relative z-10">
          {/* LADO ESQUERDO: SELETOR DE FOTOS (AS "BOLINHAS") */}
          <div className="w-full md:w-[40%] h-full flex flex-col justify-center items-center relative gap-6 md:gap-0 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0">
            {/* Linha tracejada decorativa (só no desktop para conectar as fotos) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-px border-l-2 border-dashed border-secondary hidden md:block z-0"></div>
            <h4 className="text-gray-500 font-inet text-sm md:text-base mb-4">
              clique nas imagens
            </h4>
            {testimonialsData.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative z-10 cursor-pointer transition-all duration-500 ease-in-out
                  ${
                    index === activeIndex
                      ? "scale-125 border-4 border-secondary shadow-lg z-20 my-4" // Foto Ativa (Maior)
                      : "scale-90 opacity-60 hover:opacity-100 hover:scale-100 my-1 grayscale" // Fotos Inativas
                  }
                  rounded-full overflow-hidden
                `}
                // Estilo inline para dar a sensação de "empilhado" verticalmente se necessário,
                // mas flex-col gap resolve bem.
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* LADO DIREITO: CONTEÚDO DO TEXTO */}
          <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-6 md:px-12 py-6 animate-in fade-in slide-in-from-right-4 duration-500 key={activeIndex}">
            {/* Título e Cargo */}
            <div className="mb-6">
              <h3 className="font-abhaya text-primary text-3xl md:text-4xl font-bold">
                {activeTestimonial.name}
              </h3>
              <span className="font-inet text-gray-400 text-sm uppercase tracking-wider">
                {activeTestimonial.role}
              </span>
            </div>

            {/* Texto do Depoimento */}
            <p className="font-inet text-gray-600 text-lg leading-relaxed italic relative">
              {/* Linha decorativa ao lado do texto igual ao print */}
              <span className="hidden md:block absolute -left-6 top-2 w-1 h-full bg-secondary/30 rounded-full"></span>
              "{activeTestimonial.text}"
            </p>
          </div>
        </div>
      </div>

      {/* Espaço extra em baixo para completar a altura total de 654px se precisar */}
      <div className="h-[142px] bg-white w-full"></div>
    </section>
  );
}
