import lotus from "../../assets/icones/lotus 1.svg"; // Seu logo/icone lotus
import heroBg from "../../assets/imagens/brunette-woman-getting-her-hair-done.jpg"; // Substitua pela sua imagem de fundo

export function Hero() {
  return (
    // h-screen garante que a section ocupe EXATAMENTE 100% da altura da tela
    <section className="h-[95vh] w-full flex-1 flex-col bg-white  sm:pt-[120px] mt-12">
      {/* BLOCO 1: CONTEÚDO (LOTUS + TEXTO)
        flex-1: Faz este container ocupar todo o espaço disponível que sobra, empurrando a imagem para baixo.
        relative: Para podermos posicionar o Lotus "absolute" atrás do texto.
      */}
      <div className="flex-1 relative flex flex-col items-center mb-12 justify-center px-4 max-h-[250px] sm:max-h-[256px]">
        {/* Camada de Fundo: O Lótus (Atrás do texto) */}
        {/* w-[300px] ou mais define o tamanho do "fantasma" do lótus */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 select-none">
          <img
            src={lotus}
            alt=""
            className="w-[150px] md:w-[250px] lg:w-[300px] h-auto"
          />
        </div>

        {/* Camada da Frente: O Texto */}
        <div className="z-10 text-center">
          {/* Se quiser uma fonte mais elegante, importe uma Serif no seu index.css */}
          <h1 className="text-primary text-7xl md:text-6xl lg:text-9xl font-imperial">
            Beauty Salon
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-lg tracking-widest uppercase">
            Excelência em Estética
          </p>
        </div>
      </div>

      {/* BLOCO 2: SECTION IMAGEM (Rodapé da Hero)
        h-[35%] (ou h-[30vh]): Define a altura fixa da imagem. 
        Ajuste essa porcentagem conforme o gosto visual.
      */}
      <div className="h-[50%] sm:h-[100%] w-full overflow-hidden relative">
        {/* Overlay opcional para escurecer um pouco a imagem */}

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
