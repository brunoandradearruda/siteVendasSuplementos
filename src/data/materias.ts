export interface Materia {
  id: string; // Usaremos um 'slug' (texto amigável para URL) como ID
  titulo: string;
  subtitulo: string;
  produtoId: number; // Para linkar com um produto específico da nossa outra lista
  conteudo: {
    secao: string;
    paragrafos: string[];
  }[];
}

export const listaDeMaterias: Materia[] = [
  {
    id: 'proteina', 
    titulo: 'Whey Protein: O Guia Definitivo',
    subtitulo: 'Tudo o que você precisa saber sobre o suplemento mais popular para ganho de massa muscular.',
    produtoId: 1,
    conteudo: [
        // ... (conteúdo do Whey Protein que já tínhamos) ...
        {
            secao: 'O que é Whey Protein?',
            paragrafos: [
              'O Whey Protein é uma proteína de altíssima qualidade extraída do soro do leite...',
              'Pense nele como uma fonte de proteína pura, de rápida absorção e extremamente conveniente...'
            ]
        },
        {
            secao: 'Tipos de Whey: Concentrado, Isolado ou Hidrolisado?',
            paragrafos: [
              '<strong>Whey Concentrado (WPC):</strong> É a forma mais comum e com o melhor custo-benefício...',
              '<strong>Whey Isolado (WPI):</strong> Passa por um processo de filtragem mais rigoroso...',
              '<strong>Whey Hidrolisado (WPH):</strong> É um whey "pré-digerido"...'
            ]
        },
        {
            secao: 'Como e quando tomar?',
            paragrafos: [
              'O momento mais famoso para tomar é logo após o treino, mas o mais importante é atingir sua meta total de proteína ao longo do dia.'
            ]
        }
    ]
  },
  {
    id: 'creatina',
    titulo: 'Guia Completo sobre Creatina',
    subtitulo: 'Aumente sua força e performance com o suplemento mais estudado do mundo.',
    produtoId: 2,
    conteudo: [
        // ... (conteúdo da Creatina que já tínhamos) ...
        {
            secao: 'O que é Creatina?',
            paragrafos: [
                'A creatina é um composto natural que nosso corpo já produz, fundamental para o fornecimento de energia rápida (ATP)...'
            ]
        },
        {
            secao: 'Principais Benefícios',
            paragrafos: [
                '<strong>Aumento de Força e Potência:</strong> O benefício mais comprovado...',
                '<strong>Ganho de Massa Muscular:</strong> Como consequência de treinos mais intensos...',
                '<strong>Melhora da Recuperação:</strong> Ajuda a reduzir a inflamação...',
                '<strong>Benefícios Cognitivos:</strong> Estudos recentes também apontam melhoras na memória...'
            ]
        },
    ]
  },
  {
    id: 'pre-treino',
    titulo: 'Pré-Treino: Energia Extra para Seus Treinos',
    subtitulo: 'Entenda como funcionam e quando vale a pena usar os suplementos pré-treino.',
    produtoId: 3,
    conteudo: [
        // ... (conteúdo do Pré-Treino que já tínhamos) ...
        {
            secao: 'O que é um Pré-Treino?',
            paragrafos: [
                'É uma fórmula que combina diferentes ingredientes para serem consumidos antes do treino...'
            ]
        },
        {
            secao: 'Como funciona cada ingrediente?',
            paragrafos: [
                '<strong>Cafeína:</strong> O principal estimulante...',
                '<strong>Beta-Alanina:</strong> Causa aquela sensação de formigamento...',
                '<strong>Arginina/Citrulina:</strong> Aminoácidos que promovem a vasodilatação...'
            ]
        }
    ]
  },
  // --- NOVA MATÉRIA ADICIONADA ---
  {
    id: 'vitamina', // Corresponde à categoria 'Vitamina' do nosso produto
    titulo: 'Multivitamínicos: A Base Para a Sua Saúde',
    subtitulo: 'Eles são a garantia de que seu corpo tem todas as ferramentas para funcionar no seu máximo potencial.',
    produtoId: 4, // Corresponde ao ID do Multivitamínico em `produtos.ts`
    conteudo: [
        {
            secao: 'O que são Multivitamínicos?',
            paragrafos: [
                'Um multivitamínico é um suplemento que combina uma variedade de vitaminas e minerais essenciais em uma única dose, geralmente em forma de cápsula ou tablete. Ele funciona como uma "apólice de seguro" nutricional, ajudando a preencher possíveis lacunas na sua dieta.'
            ]
        },
        {
            secao: 'Por que quem treina deveria tomar?',
            paragrafos: [
                'A prática de exercícios intensos aumenta a demanda do corpo por micronutrientes. Vitaminas do complexo B, por exemplo, são cruciais para o metabolismo energético, enquanto minerais como Zinco e Magnésio são vitais para a produção hormonal e recuperação muscular.',
                'Garantir que não haja deficiências é fundamental para uma boa recuperação, para a prevenção de lesões e para que todos os outros suplementos, como Whey e Creatina, possam ser aproveitados ao máximo pelo organismo.'
            ]
        },
        {
            secao: 'Preciso de um Multivitamínico?',
            paragrafos: [
                'Em um mundo ideal, uma dieta perfeitamente balanceada e diversificada supriria todas as suas necessidades. Na prática, isso é muito difícil de alcançar consistentemente. Um multivitamínico de boa qualidade é um investimento de baixo custo e alto benefício para garantir a base da sua saúde e otimizar seus resultados.'
            ]
        }
    ]
  },
];