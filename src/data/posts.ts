export interface Post {
  id: string;
  titulo: string;
  resumo: string;
  imagemUrl: string;
  data: string;
  autor: string;
  conteudo: string[]; // Parágrafos do texto
  produtoRelacionadoSlug?: string; // Para exibir um card de compra no meio do texto
}

export const listaDePosts: Post[] = [
  {
    id: 'creatina-mitos-verdades',
    titulo: 'Creatina: Engorda? Causa Pedra no Rim? Descubra a Verdade',
    resumo: 'Desvendamos os principais mitos sobre o suplemento mais estudado do mundo e te ensinamos como tomar corretamente.',
    imagemUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    data: '26 de Outubro, 2025',
    autor: 'Equipe SuplementosPRO',
    produtoRelacionadoSlug: 'creatina-soldiers-500g',
    conteudo: [
      'A creatina é, sem dúvidas, o suplemento mais popular nas academias. Mas junto com a popularidade, vêm os mitos. Será que ela realmente retém líquido a ponto de atrapalhar a definição? Será que faz mal aos rins?',
      '<strong>O Mito da Retenção:</strong> Sim, a creatina retém líquido, mas essa água vai para DENTRO da célula muscular (intramuscular), e não para baixo da pele (subcutânea). O resultado visual é um músculo mais cheio e denso, não inchado.',
      '<strong>A Questão Renal:</strong> Dezenas de estudos comprovam que, em indivíduos saudáveis, o uso de creatina nas doses recomendadas (3g a 5g por dia) é totalmente seguro e não sobrecarrega os rins.',
      'Se você busca um suplemento com custo-benefício imbatível para começar, recomendamos a Creatina da Soldiers Nutrition, que é 100% pura e tem matéria-prima importada.'
    ]
  },
  {
    id: 'whey-concentrado-isolado-diferenca',
    titulo: 'Whey Concentrado vs Isolado: Qual escolher?',
    resumo: 'Não gaste dinheiro a mais sem necessidade. Entenda qual tipo de proteína é ideal para o seu objetivo e seu bolso.',
    imagemUrl: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1000&auto=format&fit=crop',
    data: '25 de Outubro, 2025',
    autor: 'Equipe SuplementosPRO',
    produtoRelacionadoSlug: 'whey-growth-80',
    conteudo: [
      'Você chega na loja e vê dois potes: um custa R$ 100 e o outro R$ 200. A diferença? Um é concentrado, o outro isolado. Mas será que você precisa pagar o dobro?',
      '<strong>Whey Concentrado:</strong> Passa por uma filtragem padrão. Mantém cerca de 80% de proteína e tem um pouco de carboidratos e gorduras. É a melhor escolha para 90% das pessoas, pois tem o melhor custo-benefício.',
      '<strong>Whey Isolado:</strong> Passa por uma filtragem extra que remove quase toda a lactose e gordura. É indicado APENAS para quem tem intolerância severa à lactose ou atletas em dieta restrita pré-competição.',
      'Resumo: Se você não tem problemas com lactose, vá de Concentrado e economize. A Growth Supplements oferece uma das melhores opções do mercado nacional.'
    ]
  },
  {
    id: 'como-tomar-pre-treino',
    titulo: 'Pré-Treino: O Segredo para não faltar na academia',
    resumo: 'Acordou sem ânimo? Descubra como os pré-treinos funcionam no seu cérebro e como evitar os efeitos colaterais.',
    imagemUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
    data: '20 de Outubro, 2025',
    autor: 'Equipe SuplementosPRO',
    produtoRelacionadoSlug: 'diabo-verde-ftw-300g',
    conteudo: [
      'Sabe aquele dia que você trabalhou muito e a última coisa que quer ver é um peso? É aí que o pré-treino brilha. Ele é composto basicamente por estimulantes (cafeína) e vasodilatadores.',
      'A cafeína bloqueia os receptores de adenosina no cérebro (que causam sono), enquanto a beta-alanina ajuda a reduzir a queimação muscular durante o exercício.',
      'Para quem está começando e não quer gastar muito, opções como o Diabo Verde da FTW entregam uma energia rápida e eficiente por um preço muito acessível.'
    ]
  }
];