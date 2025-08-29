export interface Categoria {
  id: string; // 'proteina', 'creatina', etc.
  nome: string; // Ex: "Proteínas"
  descricao: string;
  perguntasFrequentes: {
    pergunta: string;
    resposta: string;
  }[];
}

export const listaDeCategorias: Categoria[] = [
  {
    id: 'proteina',
    nome: 'Proteínas',
    descricao: 'As proteínas são os blocos de construção dos músculos. Suplementos como Whey Protein e Albumina ajudam você a atingir sua meta diária de proteína, essencial para a recuperação e o crescimento muscular. Compare abaixo as melhores opções que analisamos.',
    perguntasFrequentes: [
      { pergunta: 'Preciso tomar proteína logo após o treino?', resposta: 'Não necessariamente. O mais importante é o consumo total de proteína ao longo do dia, mas o pós-treino é um momento conveniente.' },
      { pergunta: 'Whey Protein engorda?', resposta: 'Nenhum alimento isoladamente engorda. O que leva ao ganho de peso é o excesso de calorias na dieta. Whey é uma ferramenta para atingir suas metas de proteína de forma controlada.' },
    ]
  },
  {
    id: 'creatina',
    nome: 'Creatinas',
    descricao: 'A creatina é o rei dos suplementos para aumento de força e performance. Ela ajuda a regenerar a energia (ATP) dos músculos, permitindo treinos mais intensos. Veja as opções mais puras e confiáveis do mercado.',
    perguntasFrequentes: [
        { pergunta: 'Creatina retém líquidos?', resposta: 'Sim, mas é uma retenção intramuscular (dentro do músculo), o que é benéfico e dá a aparência de músculos mais cheios, não um inchaço subcutâneo.' },
        { pergunta: 'Devo tomar creatina nos dias de descanso?', resposta: 'Sim. A creatina funciona por saturação, então o uso contínuo é fundamental para manter os estoques musculares cheios.' },
    ]
  },
  // Adicione outras categorias aqui
];