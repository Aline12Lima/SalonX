import makeImg from "../../assets/imagens/makeG.jpg";
import hairImg from "../../assets/imagens/brideHair.jpg";
import nailImg from "../../assets/imagens/nail-art-professional-working-client-nails.jpg";
import colorImg from "../../assets/imagens/colorHair.jpg";

import iconpencel from "../../assets/icones/inclined-makeup-brush.svg";
import iconcomb from "../../assets/icones/hair-comb.png";
import iconnail from "../../assets/icones/finger-with-nail.png";
import iconbody from "../../assets/icones/facial-cream.png"; 

// Exportação Nomeada (recomendado para dados)
export const eleganceServices = [
  {
    id: 1,
    title: "Maquiagem",
    description: "Realce sua beleza natural.",
    image: makeImg, // CORRIGIDO: Sem chaves {} em volta
    icon: iconpencel,
    details: [
      "Noivas",
      "Casuais",
      "Elegante",
      "Profissional",
      "Básica"
    ]
  },
  {
    id: 2,
    title: "Manicure",
    description: "Cuidado e arte para suas mãos.",
    image: nailImg, // CORRIGIDO
    icon: iconnail,
    details: [
      "Unhas em gel",
      "Banho de gel",
      "Manicure clássica",
      "Pedicure",
      "Spa dos pés"
    ]
  },
  {
    id: 3,
    title: "Penteados",
    description: "Tratamentos e cortes exclusivos.",
    image: hairImg, // CORRIGIDO
    icon: iconcomb,
    details: [
      "Penteados de Noivas",
      "Casuais",
      "Elegantes",
      "Tranças",
      "Semi-presos"
    ]
  },
  {
    id: 4,
    title: "Cabelos",
    description: "Bem-estar para o corpo e mente.",
    image: colorImg, // CORRIGIDO
    icon: iconbody,
    
  },
];