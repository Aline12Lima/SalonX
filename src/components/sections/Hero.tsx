import lotus from "../../assets/icones/lotus 1.svg";
import heroBg from "../../assets/imagens/brunette-woman-getting-her-hair-done.jpg";

export function Hero() {
  return (
    // ALTERAÇÃO: 'h-auto' no mobile para colapsar o espaço branco. 'md:h-[95vh]' no desktop.
    // 'mt-20' fixo para dar espaço ao Header, removendo o conflito de margens.
    <section className="h-auto md:h-[150vh] w-full flex flex-col bg-white pt-24 md:pt-[120px]">
      {/* CONTEÚDO */}
      <div className="relative flex flex-col items-center mb-8 md:mb-12 justify-center px-4">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 select-none">
          <img
            src={lotus}
            alt=""
            className="w-[120px] md:w-[250px] lg:w-[300px] h-auto"
          />
        </div>

        <div className="z-10 text-center">
          <h1 className="text-primary text-6xl md:text-8xl lg:text-9xl font-imperial">
            Beauty Salon
          </h1>
          <p className="text-gray-600 mt-2 md:mt-4 text-xs md:text-lg tracking-widest uppercase">
            Excelência em Estética
          </p>
        </div>
      </div>

      {/* IMAGEM: h-64 no mobile (menor) e flex-1 no desktop para preencher a tela */}
      <div className="h-64 md:flex-1 w-full overflow-hidden relative">
        <img
          src={heroBg}
          alt="Ambiente do Salon"
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-900"
        />
      </div>
    </section>
  );
}
export default Hero;
