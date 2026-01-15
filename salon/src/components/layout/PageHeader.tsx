interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  bgVideo?: string;
}

export default function PageHeader({
  title,
  subtitle,
  bgImage,
  bgVideo,
}: PageHeaderProps) {
  return (
    // 1. ALTERADO: h-[300px] no mobile (menor) e md:h-[500px] no desktop
    <section className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden mt-[80px]">
      <div className="absolute inset-0 z-0">
        {bgVideo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={bgVideo}
          />
        ) : (
          <div
            // 2. ALTERADO: bg-scroll no mobile (fixa o zoom) e md:bg-fixed (parallax só no PC)
            // 3. ADICIONADO: bg-top para focar no rosto/topo da imagem
            className="w-full h-full bg-cover bg-top bg-scroll md:bg-fixed transition-all duration-500"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="font-imperial text-white text-5xl md:text-7xl mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="font-inet text-white/90 text-sm md:text-xl uppercase tracking-widest max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
