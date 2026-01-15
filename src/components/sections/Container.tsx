import { Link } from "react-router-dom";

export default function Container() {
  return (
    // ALTERAÇÃO: Trocamos 'pt-64 pb-20' por 'py-12 md:pt-64 md:pb-20'
    // No mobile ele usará 48px de padding (py-12). No desktop volta aos 256px (pt-64).
    <section className="w-full py-12 md:pt-64 md:pb-20 bg-footer flex flex-col items-center justify-center text-center px-4 border-t border-primary/10">
      <h2 className="font-imperial text-primary text-5xl md:text-7xl mb-6">
        Descubra sua melhor versão
      </h2>

      <p className="font-inet text-gray-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Conheça nossos serviços e desfrute de tratamentos exclusivos, pensados
        para realçar sua beleza com sofisticação e cuidado.
      </p>

      <Link
        to="/services"
        className="px-10 py-4 bg-primary text-white font-inet font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all hover:scale-105 shadow-xl rounded-sm"
      >
        Ver Nossos Serviços
      </Link>
    </section>
  );
}
