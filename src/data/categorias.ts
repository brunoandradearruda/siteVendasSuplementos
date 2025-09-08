export interface Categoria {
  id: string; // 'proteina', 'creatina', etc.
  nome: string;
  descricao: string;
  // CAMPO ADICIONADO DE VOLTA:
  perguntasFrequentes: {
    pergunta: string;
    resposta: string;
  }[];
}

export const listaDeCategorias: Categoria[] = [
  {
    id: 'proteina',
    nome: 'Whey Protein',
    descricao: 'Essencial para a recuperação e construção muscular. É a base da suplementação para quem busca hipertrofia.',
    perguntasFrequentes: [
      { pergunta: 'Preciso tomar proteína logo após o treino?', resposta: 'Não necessariamente. O mais importante é o consumo total de proteína ao longo do dia, mas o pós-treino é um momento conveniente.' },
      { pergunta: 'Whey Protein engorda?', resposta: 'Nenhum alimento isoladamente engorda. O que leva ao ganho de peso é o excesso de calorias na dieta. Whey é uma ferramenta para atingir suas metas de proteína de forma controlada.' },
    ]
  },
  {
    id: 'creatina',
    nome: 'Creatina',
    descricao: 'O suplemento mais estudado para aumento de força e performance, permitindo treinos mais intensos e eficazes.',
    perguntasFrequentes: [
      { pergunta: 'Creatina retém líquidos?', resposta: 'Sim, mas é uma retenção intramuscular (dentro do músculo), o que é benéfico e dá a aparência de músculos mais cheios, não um inchaço subcutâneo.' },
      { pergunta: 'Devo tomar creatina nos dias de descanso?', resposta: 'Sim. A creatina funciona por saturação, então o uso contínuo é fundamental para manter os estoques musculares cheios.' },
    ]
  },
  {
    id: 'pre-treino',
    nome: 'Pré-treino',
    descricao: 'Formulado para fornecer um pico de energia, foco e vasodilatação, ideal para maximizar o rendimento nos seus treinos.',
    perguntasFrequentes: [
        { pergunta: 'O formigamento do pré-treino é normal?', resposta: 'Sim, é um efeito colateral comum e inofensivo da Beta-Alanina, um dos principais ingredientes. O efeito diminui com o uso contínuo.'},
        { pergunta: 'Posso tomar pré-treino e treinar à noite?', resposta: 'Não é recomendado. A maioria contém alta dose de cafeína, o que pode atrapalhar seriamente a qualidade do seu sono.'},
    ]
  },
  {
    id: 'hipercalorico',
    nome: 'Hipercalórico',
    descricao: 'Perfeito para quem tem dificuldade em ganhar peso. Fornece uma alta dose de calorias e nutrientes de qualidade.',
    perguntasFrequentes: [
        { pergunta: 'Hipercalórico substitui uma refeição?', resposta: 'Não. Ele deve ser usado para complementar a sua dieta e te ajudar a bater a meta de calorias, mas não substitui os micronutrientes de uma refeição completa.'},
        { pergunta: 'Qual o melhor horário para tomar?', resposta: 'Pode ser tomado entre as refeições ou em momentos que você não conseguiria fazer uma refeição sólida, mas evite tomá-lo muito perto das refeições principais para não atrapalhar o apetite.'},
    ]
  },
  {
    id: 'bcaa',
    nome: 'BCAA',
    descricao: 'Aminoácidos de cadeia ramificada que auxiliam na redução da fadiga e na recuperação muscular pós-treino.',
    perguntasFrequentes: [
        { pergunta: 'Preciso tomar BCAA se já tomo Whey?', resposta: 'Geralmente não. O Whey Protein já é naturalmente rico em BCAAs. A suplementação isolada de BCAA é mais indicada para atletas de endurance ou em situações muito específicas.'},
        { pergunta: 'Qual a proporção ideal?', resposta: 'A maioria dos produtos foca em uma proporção maior de Leucina, como 2:1:1 (Leucina:Isoleucina:Valina), pois a Leucina é o principal aminoácido ligado à síntese proteica.'},
    ]
  },
  {
    id: 'albumina',
    nome: 'Albumina',
    descricao: 'Uma proteína de absorção lenta e de ótimo custo-benefício, extraída da clara do ovo. Ideal para complementar a dieta.',
    perguntasFrequentes: [
        { pergunta: 'Qual a diferença entre Albumina e Whey?', resposta: 'A principal diferença é a velocidade de absorção. O Whey é rápido, ideal para o pós-treino. A Albumina é lenta, ótima para ser consumida antes de dormir ou entre refeições longas.'},
        { pergunta: 'Albumina causa gases?', resposta: 'É um efeito colateral comum para algumas pessoas devido à digestão da proteína do ovo. Começar com doses menores pode ajudar na adaptação.'},
    ]
  }
];