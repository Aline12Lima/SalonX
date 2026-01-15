import PageHeader from "../layout/PageHeader";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { teamMembers, brands } from "../utils/aboutData"; // Certifique-se que o nome do arquivo está certo (aboutData ou about_data)

import aboutHeroBg from "../../assets/imagens/stang.jpg";
import spaceImg from "../../assets/imagens/client.jpg";

export default function About() {
  return (
    <main className="bg-white">
      {/* 1. HERO */}
      <PageHeader
        title="Sobre Nós"
        subtitle="Conheça nossa história e quem faz a mágica acontecer"
        bgImage={aboutHeroBg}
      />

      {/* 2. TEXTO E FOTO */}
      <section className="w-full flex justify-center pb-20 px-4 mt-16">
        <div className="w-full max-w-[1393px] flex flex-col md:flex-row items-center gap-8 md:gap-0">
          <div className="w-full md:w-[856px] h-[372px] flex-shrink-0">
            <img
              src={spaceImg}
              alt="Nosso Espaço"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          <div className="w-full md:flex-1 h-auto md:h-[372px] bg-secondary flex flex-col justify-center p-8 md:pl-12 text-left">
            <h2 className="font-abhaya text-primary text-4xl md:text-5xl mb-6">
              <span className="font-imperial text-6xl">
                Estilo <br />
              </span>
              e atendimento de outro mundo.
            </h2>
            <p className="font-inet text-primary/80 text-base leading-relaxed max-w-md mb-8">
              Priorizamos o profissionalismo e a excelência em cada detalhe para
              garantir que você tenha uma experiência inesquecível.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CARROSSEL DE MARCAS (CORRIGIDO AQUI) */}
      <section className="w-full bg-[#FDF6F3] py-12 overflow-hidden border-y border-primary/5">
        <div className="max-w-[1440px] mx-auto h-[120px] flex items-center">
          {/* Animação Marquee */}
          <div className="flex gap-16 animate-marquee whitespace-nowrap px-4">
            {/* Repetimos 4x para o loop ser infinito e suave */}
            {[...brands, ...brands, ...brands, ...brands].map(
              (brandLogo, index) => (
                <img
                  key={index}
                  src={brandLogo} // Aqui puxa a imagem que você importou
                  alt="Logo Parceiro"
                  // Classes: altura fixa, escala de cinza, fica colorido no hover
                  className="h-12 md:h-16 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* 4. EQUIPE */}
      <section className="w-full py-24 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="font-imperial text-primary text-5xl md:text-6xl mb-4">
            Nossa Equipe
          </h2>
          <p className="font-inet text-gray-500 uppercase tracking-widest text-sm">
            Conheça nossos profissionais
          </p>
        </div>

        <div className="w-full max-w-[1700px] px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col items-center">
              <div className="w-full max-w-[416px] h-[416px] overflow-hidden relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm flex justify-center gap-4">
                  <Instagram
                    size={20}
                    className="text-primary hover:scale-110 cursor-pointer"
                  />
                  <Facebook
                    size={20}
                    className="text-primary hover:scale-110 cursor-pointer"
                  />
                  <Twitter
                    size={20}
                    className="text-primary hover:scale-110 cursor-pointer"
                  />
                </div>
              </div>
              <div className="text-center h-[104px]">
                <h3 className="font-abhaya text-primary text-3xl font-bold">
                  {member.name}
                </h3>
                <p className="font-inet text-secondary-foreground/60 text-sm uppercase tracking-wider mt-2">
                  {member.role}
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="w-2 h-2 rounded-full bg-primary/20"></span>
                  <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                  <span className="w-2 h-2 rounded-full bg-primary/20"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
