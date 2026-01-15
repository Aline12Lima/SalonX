import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* =========================================================
          1. MAPA DO GOOGLE (Corrigido)
      ========================================================= */}
      <section className="w-full h-[50vh] min-h-[400px] mt-[80px] relative shadow-lg z-0">
        <iframe
          title="Localização Beauty Salon"
          // AQUI ESTAVA O ERRO: Coloque APENAS o link, não a tag <iframe> inteira
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106696296366!2d-46.65456862375176!3d-23.56462416170685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa363%3A0x4e2b1fbb4e975e2e!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1709228000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          // Efeito preto e branco que fica colorido ao passar o mouse
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

      {/* =========================================================
          2. CONTAINER DE INFORMAÇÕES
      ========================================================= */}

      <section className="w-full flex justify-center -mt-20 mb-20 px-4 relative z-10">
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-sm p-8 md:p-16 border-t-4 border-primary">
          {/* Título Principal */}
          <div className="text-center mb-12">
            <h1 className="font-imperial text-primary text-5xl md:text-6xl mb-4">
              Agende seu horário
            </h1>
            <p className="font-inet text-gray-500 uppercase tracking-widest text-sm md:text-base">
              E venha nos visitar para um café
            </p>
          </div>

          {/* Grid de Informações (3 Colunas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-primary/10 text-center">
            {/* Bloco 1: Endereço */}
            <div className="flex flex-col items-center px-4 pt-4 md:pt-0">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-6 text-primary">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-abhaya text-2xl font-bold text-primary mb-3">
                Endereço
              </h3>
              <p className="font-inet text-gray-600 leading-relaxed">
                Av. Paulista, 1000 <br />
                Bela Vista, São Paulo - SP <br />
                CEP: 01310-100
              </p>
            </div>

            {/* Bloco 2: Contato */}
            <div className="flex flex-col items-center px-4 pt-4 md:pt-0">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-6 text-primary">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-abhaya text-2xl font-bold text-primary mb-3">
                Contato
              </h3>
              <div className="font-inet text-gray-600 flex flex-col gap-2">
                <a
                  href="tel:+5511999999999"
                  className="hover:text-primary transition-colors"
                >
                  (11) 99999-9999
                </a>
                <a
                  href="mailto:contato@beautysalon.com"
                  className="hover:text-primary transition-colors"
                >
                  contato@beautysalon.com
                </a>
              </div>
            </div>

            {/* Bloco 3: Horários */}
            <div className="flex flex-col items-center px-4 pt-4 md:pt-0">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-6 text-primary">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-abhaya text-2xl font-bold text-primary mb-3">
                Horário
              </h3>
              <p className="font-inet text-gray-600 leading-relaxed">
                Terça a Sexta: 09h às 20h <br />
                Sábado: 09h às 18h <br />
                Domingo e Segunda: Fechado
              </p>
            </div>
          </div>

          {/* Botão de WhatsApp Extra */}
          <div className="mt-16 text-center">
            <button className="px-10 py-4 bg-primary text-white font-inet font-bold uppercase tracking-widest hover:bg-opacity-90 transition shadow-lg rounded-sm cursor-pointer">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
