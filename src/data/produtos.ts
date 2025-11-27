export interface Produto {
  id: number;
  slug: string;
  nome: string;
  marca: string;
  categoria: 'Proteína' | 'Creatina' | 'Pré-Treino' | 'Hipercalórico' | 'BCAA' | 'Albumina';
  categoryId: string;
  mlId?: string;
  imagemUrl: string;
  pontosPositivos: string[];
  pontosNegativos: string[];
  pesoEmGramas: number;
  dosePadraoEmGramas: number;
  precoMedioEmReais: number;
  linkAfiliado: string;
}

export const listaDeProdutos: Produto[] = [
  // =========================================
  // CATEGORIA: PROTEÍNA (WHEY)
  // =========================================
  {
    id: 1, slug: 'whey-dux-concentrado', nome: 'Whey Protein Concentrado (900g)', marca: 'Dux Nutrition', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_683350-MLA95701763954_102025-F.webp',
    pontosPositivos: ['Sabor considerado um dos melhores do mercado', 'Matéria-prima premium de alta qualidade', 'Perfil de aminoácidos completo'],
    pontosNegativos: ['Preço mais elevado que a média', 'Embalagem de 900g (padrão, mas acaba rápido)'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 161.41,
    linkAfiliado: 'https://mercadolivre.com/sec/2nMsavq',
  },
  {
    id: 2, slug: 'whey-soldiers-mocaccino', nome: 'Whey Protein Concentrado (1kg)', marca: 'Soldiers Nutrition', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_915017-MLA96151338681_102025-F.webp',
    pontosPositivos: ['Sabor diferenciado (Mocaccino)', 'Embalagem de 1kg (rende mais que as de 900g)', 'Excelente custo-benefício'],
    pontosNegativos: ['Embalagem pouch (saco) exige cuidado ao fechar', 'Contém lactose'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 30, precoMedioEmReais: 104.50,
    linkAfiliado: 'https://mercadolivre.com/sec/2NJz5KB',
  },
  {
    id: 3, slug: 'whey-max-titanium-pro', nome: 'Whey Pro (1kg)', marca: 'Max Titanium', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_760225-MLA96144741165_102025-F.webp',
    pontosPositivos: ['Marca líder de mercado e confiança', 'Preço de entrada muito acessível', 'Boa solubilidade'],
    pontosNegativos: ['Concentração de proteína menor que a linha "Top Whey"', 'Contém carboidratos na fórmula'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 40, precoMedioEmReais: 89.90,
    linkAfiliado: 'https://mercadolivre.com/sec/1mnWtjc',
  },
  {
    id: 4, slug: 'whey-growth-80', nome: 'Whey Protein 80% (1kg)', marca: 'Growth Supplements', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_810392-MLA98296434364_112025-F.webp',
    pontosPositivos: ['Alta concentração (80% de pureza)', 'Referência em custo-benefício no Brasil', 'Embalagem de 1kg'],
    pontosNegativos: ['Sabor é bom, mas inferior a marcas gourmet', 'Vendido por revendedores no ML (preço varia)'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 30, precoMedioEmReais: 149.90,
    linkAfiliado: 'https://mercadolivre.com/sec/1L9Dbqr',
  },
  {
    id: 5, slug: 'whey-dark-lab-refil', nome: '100% Whey Refil (900g)', marca: 'Dark Lab', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_659809-MLA96135273193_102025-F.webp',
    pontosPositivos: ['Preço extremamente agressivo', 'Boa opção para quem quer economizar', 'Embalagem refil prática'],
    pontosNegativos: ['Marca menos tradicional que as gigantes', 'Teor de carboidratos médio'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 89.91,
    linkAfiliado: 'https://mercadolivre.com/sec/34hvTh1',
  },
  {
    id: 6, slug: 'whey-pretorian-2kg', nome: 'Iso Protein Blend Complex (2kg)', marca: 'Pretorian', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_724794-MLA96129982505_102025-F.webp',
    pontosPositivos: ['Pote Gigante de 2kg', 'Melhor preço por quilo da lista', 'Blend de proteínas'],
    pontosNegativos: ['Não é Whey Puro (é um blend com outras proteínas)', 'Sabor pode ser mais artificial'],
    pesoEmGramas: 2000, dosePadraoEmGramas: 40, precoMedioEmReais: 76.59,
    linkAfiliado: 'https://mercadolivre.com/sec/2ZAXrH3',
  },
  {
    id: 7, slug: 'nutri-whey-integral', nome: 'Nutri Whey Protein (900g)', marca: 'Integralmédica', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_945730-MLA98801101691_112025-F.webp',
    pontosPositivos: ['Preço muito baixo', 'Marca de extrema confiança', 'Bom sabor'],
    pontosNegativos: ['É um hipercalórico/blend (tem bastante carboidrato)', 'Menor concentração de proteína por dose'],
    pesoEmGramas: 900, dosePadraoEmGramas: 40, precoMedioEmReais: 50.14,
    linkAfiliado: 'https://mercadolivre.com/sec/1WBmfj4',
  },
  {
    id: 8, slug: 'tasty-whey-adaptogen', nome: 'Tasty Whey Gourmet (900g)', marca: 'Adaptogen', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_742712-MLA96139088739_102025-F.webp',
    pontosPositivos: ['Considerado o Whey mais saboroso do mundo', 'Textura de milkshake', 'Qualidade internacional'],
    pontosNegativos: ['Preço premium', 'Acaba muito rápido por ser gostoso'],
    pesoEmGramas: 900, dosePadraoEmGramas: 35, precoMedioEmReais: 144.39,
    linkAfiliado: 'https://mercadolivre.com/sec/1t6q23w',
  },
  {
    id: 9, slug: 'whey-ftw-refil', nome: '100% Whey Refil (900g)', marca: 'FTW', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_699489-MLA96134308781_102025-F.webp',
    pontosPositivos: ['Ótimo custo-benefício em refil', 'Variedade de sabores interessantes', 'Bom perfil de aminoácidos'],
    pontosNegativos: ['Embalagem refil simples', 'Solubilidade média'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 74.98,
    linkAfiliado: 'https://mercadolivre.com/sec/1A4QMhT',
  },

  // =========================================
  // CATEGORIA: CREATINA (CORRIGIDA)
  // =========================================
  {
    id: 20, slug: 'creatina-soldiers-300g', nome: 'Creatina Monohidratada 100% Pura (300g)', marca: 'Soldiers Nutrition', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_849628-MLA95693176090_102025-F.webp',
    pontosPositivos: ['Melhor preço de entrada do mercado', 'Matéria-prima importada', 'Ideal para quem quer testar creatina pela primeira vez'],
    pontosNegativos: ['Pote pequeno, acaba em 3 meses', 'Acompanha scoop que pode vir no fundo'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 34.40,
    linkAfiliado: 'https://mercadolivre.com/sec/1kYDbqU',
  },
  {
    id: 21, slug: 'creatina-soldiers-500g', nome: 'Creatina Monohidratada 100% Pura (500g)', marca: 'Soldiers Nutrition', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_629094-MLA96126326501_102025-F.webp',
    pontosPositivos: ['Embalagem econômica (saco pouch)', 'Excelente custo por dose', '100% Pura sem carboidratos'],
    pontosNegativos: ['Embalagem de saco exige cuidado ao fechar', 'Scoop pode ser difícil de achar'],
    pesoEmGramas: 500, dosePadraoEmGramas: 3, precoMedioEmReais: 39.90,
    linkAfiliado: 'https://mercadolivre.com/sec/2PH4WrW',
  },
  {
    id: 22, slug: 'creatina-soldiers-1kg', nome: 'Creatina Monohidratada 100% Pura (1Kg)', marca: 'Soldiers Nutrition', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_775646-MLA89077289622_082025-F.webp',
    pontosPositivos: ['A opção mais econômica a longo prazo', 'Dura quase 1 ano (333 doses)', 'Mesma qualidade Soldiers em pacote gigante'],
    pontosNegativos: ['Embalagem grande e pesada', 'Alto investimento inicial'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 3, precoMedioEmReais: 70.29,
    linkAfiliado: 'https://mercadolivre.com/sec/2Hw8sDG',
  },
  {
    id: 23, slug: 'creatina-dark-lab-500g', nome: 'Creatina Monohidratada Pura (500g)', marca: 'Dark Lab', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_818366-MLA96099109077_102025-F.webp',
    pontosPositivos: ['Preço extremamente competitivo', '500g garantem estoque por 5 meses', 'Marca nacional com boa reputação'],
    pontosNegativos: ['Embalagem refil (saco)', 'Textura pode variar ligeiramente'],
    pesoEmGramas: 500, dosePadraoEmGramas: 3, precoMedioEmReais: 41.24,
    linkAfiliado: 'https://mercadolivre.com/sec/2iu7fDZ',
  },
  {
    id: 24, slug: 'creatina-dark-lab-300g', nome: 'Creatina Monohidratada Pura (300g)', marca: 'Dark Lab', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_622415-MLA96118484745_102025-F.webp',
    pontosPositivos: ['Melhor preço do mercado (R$ 32,00)', 'Embalagem em Pote (mais prática)', '100% Pura'],
    pontosNegativos: ['Acompanha scoop, mas pode vir no fundo'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 32.31,
    linkAfiliado: 'https://mercadolivre.com/sec/1TuMeYk',
  },
  {
    id: 25, slug: 'creatina-ronnie-coleman-300g', nome: 'Creatina Ronnie Coleman (300g)', marca: 'Ronnie Coleman', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_833623-MLA96118026035_102025-F.webp',
    pontosPositivos: ['Marca importada de prestígio mundial', 'Série Signature do Mr. Olympia', 'Qualidade garantida'],
    pontosNegativos: ['Preço premium devido à marca', 'Pote menor (300g)'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 45.54,
    linkAfiliado: 'https://mercadolivre.com/sec/127EYCX',
  },
  {
    id: 26, slug: 'creatina-ronnie-coleman-525g', nome: 'Creatina Ronnie Coleman XS (525g)', marca: 'Ronnie Coleman', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_618670-MLA96152883179_102025-F.webp',
    pontosPositivos: ['Pote com 25g extras (525g total)', 'Alto rendimento (175 doses)', 'Sabor Neutro ideal para misturar'],
    pontosNegativos: ['Valor de investimento mais alto', 'Disponibilidade pode variar'],
    pesoEmGramas: 525, dosePadraoEmGramas: 3, precoMedioEmReais: 74.76,
    linkAfiliado: 'https://mercadolivre.com/sec/1WZBTRf',
  },
  {
    id: 27, slug: 'creatina-max-titanium-300g', nome: 'Creatina Monohidratada (300g)', marca: 'Max Titanium', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_698461-MLA97093693332_112025-F.webp',
    pontosPositivos: ['Marca líder nacional', '0% Sódio e 0% Glúten', 'Tecnologia de micronização para absorção'],
    pontosNegativos: ['Preço levemente acima das marcas de entrada'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 49.37,
    linkAfiliado: 'https://mercadolivre.com/sec/1ARohwR',
  },
  {
    id: 28, slug: 'creatina-integralmedica-hardcore', nome: 'Creatina Hardcore (300g)', marca: 'Integralmédica', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_817136-MLA99512131069_112025-F.webp',
    pontosPositivos: ['Linha Hardcore focada em performance', 'Marca mais tradicional do Brasil', 'Excelente pureza'],
    pontosNegativos: ['Embalagem padrão, sem grandes diferenciais', 'Preço médio'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 42.00,
    linkAfiliado: 'https://mercadolivre.com/sec/17GQMLZ',
  },
  {
    id: 29, slug: 'creatina-nutrify-300g', nome: '100% Creatine (300g)', marca: 'Nutrify', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_990803-MLA99033712460_112025-F.webp',
    pontosPositivos: ['Foco em pureza e "Clean Label"', 'Vegana e livre de alergênicos', 'Embalagem premium e sustentável'],
    pontosNegativos: ['Preço mais alto da categoria por grama', 'Público mais específico'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 51.56,
    linkAfiliado: 'https://mercadolivre.com/sec/2fbPDDa',
  },

  // =========================================
  // CATEGORIA: PRÉ-TREINO
  // =========================================
  {
    id: 40, slug: 'prohibido-3vs-360g', nome: 'Prohibido Pré-Treino (360g)', marca: '3VS Nutrition', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_814469-MLA95659622384_102025-F.webp',
    pontosPositivos: ['Fórmula completa com 2000mg de Beta Alanina e 1000mg de Arginina', 'Sabor elogiado (Strawberry Margarita)', 'Energia intensa e foco'],
    pontosNegativos: ['Dose pode ser forte para iniciantes', 'Contém corantes'],
    pesoEmGramas: 360, dosePadraoEmGramas: 15, precoMedioEmReais: 71.50,
    linkAfiliado: 'https://mercadolivre.com/sec/1hGBD9j',
  },
  {
    id: 41, slug: 'diabo-verde-ftw-300g', nome: 'Diabo Verde Pre-Workout (300g)', marca: 'FTW', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_619941-MLA96118095947_102025-F.webp',
    pontosPositivos: ['Um dos pré-treinos mais vendidos e econômicos', 'Foco em energia rápida (cafeína + taurina)', 'Pote de 300g com ótimo rendimento'],
    pontosNegativos: ['Fórmula mais básica focada em estimulantes', 'Pode causar taquicardia em sensíveis'],
    pesoEmGramas: 300, dosePadraoEmGramas: 10, precoMedioEmReais: 48.29,
    linkAfiliado: 'https://mercadolivre.com/sec/17BdffL',
  },
  {
    id: 42, slug: 'evolution-soldiers-300g', nome: 'Evolution Pre-Workout (300g)', marca: 'Soldiers Nutrition', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_695908-MLA96107851853_102025-F.webp',
    pontosPositivos: ['Custo-benefício imbatível da Soldiers', 'Fórmula equilibrada para o dia a dia', 'Sabor Melancia refrescante'],
    pontosNegativos: ['Menos concentrado que versões "hardcore"', 'Embalagem simples'],
    pesoEmGramas: 300, dosePadraoEmGramas: 10, precoMedioEmReais: 40.90,
    linkAfiliado: 'https://mercadolivre.com/sec/227sduf',
  },
  {
    id: 43, slug: 'venom-dark-lab-300g', nome: 'Venom Underground (300g)', marca: 'Dark Lab', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_875246-MLA95696644570_102025-F.webp',
    pontosPositivos: ['Fórmula "Underground" muito potente', 'Alta dose de cafeína para energia extrema', 'Embalagem e design agressivos'],
    pontosNegativos: ['Não recomendado para iniciantes ou sensíveis', 'Sabor pode ser forte'],
    pesoEmGramas: 300, dosePadraoEmGramas: 10, precoMedioEmReais: 89.82,
    linkAfiliado: 'https://mercadolivre.com/sec/17hFZyx',
  },
  {
    id: 44, slug: 'pre-workout-dux-300g', nome: 'Pre Workout Original (300g)', marca: 'Dux Nutrition', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_792440-MLA96104468445_102025-F.webp',
    pontosPositivos: ['Qualidade Dux: sem corantes artificiais', 'Fórmula limpa e inteligente', 'Energia sustentada sem "crash" depois'],
    pontosNegativos: ['Preço premium', 'Menos estimulante para quem busca "tremedeira"'],
    pesoEmGramas: 300, dosePadraoEmGramas: 10, precoMedioEmReais: 109.90,
    linkAfiliado: 'https://mercadolivre.com/sec/1RkuhyP',
  },
  {
    id: 45, slug: 'psychotic-demon-black-300g', nome: 'Psychotic Demon Black (300g)', marca: 'Demons Lab', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_683793-MLA92634829514_092025-F.webp',
    pontosPositivos: ['Focado em psicofoco e termogênese', 'Sabor Ponche de Frutas', 'Preço competitivo para um importado/nacional'],
    pontosNegativos: ['Estimulantes pesados', 'Rótulo pode variar'],
    pesoEmGramas: 300, dosePadraoEmGramas: 5, precoMedioEmReais: 89.80,
    linkAfiliado: 'https://mercadolivre.com/sec/1xtLCk8',
  },
  {
    id: 46, slug: 'horus-max-titanium-300g', nome: 'Hórus Pré-Treino (300g)', marca: 'Max Titanium', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_637013-MLA95634225408_102025-F.webp',
    pontosPositivos: ['Primeiro pré-treino brasileiro aprovado pela ANVISA', 'Fórmula segura e eficiente', 'Marca líder de mercado'],
    pontosNegativos: ['Dose de Beta-alanina moderada (2g)', 'Sabor Cotton Candy pode ser doce demais para alguns'],
    pesoEmGramas: 300, dosePadraoEmGramas: 8.4, precoMedioEmReais: 109.90,
    linkAfiliado: 'https://mercadolivre.com/sec/31KN7kF',
  },
  {
    id: 47, slug: 'dilabol-pump-ftw-300g', nome: 'Dilabol Pump Sem Cafeína (300g)', marca: 'FTW', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_708266-MLA95703694414_102025-F.webp',
    pontosPositivos: ['100% Sem Cafeína: ideal para treinar à noite', 'Foco total em vasodilatação ("Pump")', 'Não atrapalha o sono'],
    pontosNegativos: ['Não dá o "pique" de energia dos estimulantes', 'Pode empedrar se pegar umidade'],
    pesoEmGramas: 300, dosePadraoEmGramas: 10, precoMedioEmReais: 99.90,
    linkAfiliado: 'https://mercadolivre.com/sec/2JKLfE6',
  },
  {
    id: 48, slug: 'psychotic-demon-red-300g', nome: 'Psychotic Demon Red (150g)', marca: 'Demons Lab', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_783690-MLA96151548397_102025-F.webp',
    pontosPositivos: ['Versão concentrada em pote menor', 'Fórmula agressiva para energia rápida', 'Custo inicial baixo'],
    pontosNegativos: ['Pote de 150g acaba rápido', 'Sabor artificial'],
    pesoEmGramas: 150, dosePadraoEmGramas: 5, precoMedioEmReais: 56.15,
    linkAfiliado: 'https://mercadolivre.com/sec/2NJ7vr7',
  },

  // =========================================
  // CATEGORIA: HIPERCALÓRICO
  // =========================================
  {
    id: 60, slug: 'massive-mass-ftw-2-5kg', nome: 'Massive Mass #DiaboVerde (2,5kg)', marca: 'FTW', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_778211-MLA96146509897_102025-F.webp',
    pontosPositivos: ['Linha famosa "Diabo Verde"', '2,5kg com preço de entrada', '15g de proteína por dose'],
    pontosNegativos: ['Embalagem pouch (saco) pode ser menos prática'],
    pesoEmGramas: 2500, dosePadraoEmGramas: 160, precoMedioEmReais: 54.91,
    linkAfiliado: 'https://mercadolivre.com/sec/1JeeY7a',
  },
  {
    id: 61, slug: 'delicious-mass-ftw-3kg', nome: 'Delicious Mass Chocolate Maltado (3kg)', marca: 'FTW', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_703538-MLA95531849236_102025-F.webp',
    pontosPositivos: ['Focado na experiência de sabor (Chocolate Maltado)', 'Embalagem econômica de 3kg', 'Preço muito competitivo'],
    pontosNegativos: ['Fórmula rica em carboidratos simples'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 160, precoMedioEmReais: 77.79,
    linkAfiliado: 'https://mercadolivre.com/sec/1wUb9Q2',
  },
  {
    id: 62, slug: 'dark-mass-dark-lab-3kg', nome: 'Dark Mass Premium (3kg)', marca: 'Dark Lab', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_767965-MLA95671103092_102025-F.webp',
    pontosPositivos: ['Contém Creatina e Waxy Maize na fórmula', '3kg garantem bom rendimento', 'Marca com estética "hardcore"'],
    pontosNegativos: ['Sabor Baunilha pode ser enjoativo para alguns'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 160, precoMedioEmReais: 78.90,
    linkAfiliado: 'https://mercadolivre.com/sec/1ECF9YU',
  },
  {
    id: 63, slug: 'mass-titanium-17500-3kg', nome: 'Mass Titanium 17500 (3kg)', marca: 'Max Titanium', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_841619-MLA96052972430_102025-F.webp',
    pontosPositivos: ['O hipercalórico mais clássico e confiável do Brasil', 'Contém colágeno e albumina', 'Sabor Chocolate aprovado por muitos'],
    pontosNegativos: ['Preço um pouco acima das marcas de entrada', 'Dose sugerida é grande'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 160, precoMedioEmReais: 112.90,
    linkAfiliado: 'https://mercadolivre.com/sec/17gQSPz',
  },
  {
    id: 64, slug: 'giant-mass-bodybuilders-3kg', nome: 'Giant Mass (3kg)', marca: 'Bodybuilders', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_972488-MLA95675186482_102025-F.webp',
    pontosPositivos: ['Um dos menores preços por kg do mercado', 'Pote rígido (não é saco)', 'Ideal para quem tem orçamento apertado'],
    pontosNegativos: ['Teor de proteína pode ser menor comparado a tops de linha', 'Marca de entrada'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 160, precoMedioEmReais: 64.48,
    linkAfiliado: 'https://mercadolivre.com/sec/2q8Mm5s',
  },
  {
    id: 65, slug: 'creamass-integralmedica-3kg', nome: 'Creamass com Creatina (3kg)', marca: 'Integralmédica', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_611348-MLA95701671698_102025-F.webp',
    pontosPositivos: ['Diferencial: Creatina já inclusa na dose', 'Marca líder de mercado', 'Base de Waxy Maize para energia'],
    pontosNegativos: ['Embalagem pouch', 'Preço intermediário'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 160, precoMedioEmReais: 85.78,
    linkAfiliado: 'https://mercadolivre.com/sec/2U4jjrh',
  },
  {
    id: 66, slug: 'anabolic-mass-profit-3kg', nome: 'Anabolic Mass 28500 (3kg)', marca: 'Profit', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_894714-MLA95657282050_102025-F.webp',
    pontosPositivos: ['Promete 32g de proteína na dose (com leite)', 'Preço muito acessível', 'Mistura de proteínas (Whey, Albumina, Colágeno)'],
    pontosNegativos: ['Marca focada em baixo custo', 'Sabor chocolate pode ser doce'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 150, precoMedioEmReais: 68.90,
    linkAfiliado: 'https://mercadolivre.com/sec/2aiR9TN',
  },
  {
    id: 67, slug: 'hipercalorico-growth-1kg', nome: 'Hipercalórico Sabor Chocolate (1kg)', marca: 'Growth Supplements', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_675853-MLA96129238605_102025-F.webp',
    pontosPositivos: ['Qualidade Growth garantida', 'Embalagem de 1kg ideal para testar', 'Sem adição de soja na proteína'],
    pontosNegativos: ['Pacote menor (acaba rápido se usar dose cheia)', 'Vendido por revenda no ML'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 160, precoMedioEmReais: 71.99,
    linkAfiliado: 'https://mercadolivre.com/sec/338mHfF', 
  },
  {
    id: 68, slug: 'big-size-mass-brn-6kg', nome: 'Big Size Mass 72.700 (6kg)', marca: 'BRN Foods', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_673517-MLA96071687895_102025-F.webp',
    pontosPositivos: ['Balde GIGANTE de 6kg: estoque para muito tempo', 'Melhor custo por kg da lista', 'Ideal para "bulking" agressivo'],
    pontosNegativos: ['Ocupa muito espaço', 'Sabor pode enjoar antes de acabar o balde'],
    pesoEmGramas: 6000, dosePadraoEmGramas: 160, precoMedioEmReais: 107.91,
    linkAfiliado: 'https://mercadolivre.com/sec/1yhnkNp',
  },

  // =========================================
  // CATEGORIA: BCAA
  // =========================================
  {
    id: 80, slug: 'bcaa-2400-max-titanium', nome: 'BCAA 2400 (100 caps)', marca: 'Max Titanium', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_672705-MLA97540412689_112025-F.webp',
    pontosPositivos: ['Clássico da Max Titanium', 'Cápsulas fáceis de engolir', 'Bom para recuperação leve'],
    pontosNegativos: ['Dose efetiva exige muitas cápsulas'],
    pesoEmGramas: 100, dosePadraoEmGramas: 2.4, precoMedioEmReais: 89.90,
    linkAfiliado: 'https://mercadolivre.com/sec/1EtLHZm',
  },
  {
    id: 81, slug: 'bcaa-1-5g-profit', nome: 'BCAA 1.5g Super Pump (60 caps)', marca: 'Profit', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_861173-MLA95839748085_102025-F.webp',
    pontosPositivos: ['Preço de entrada baixíssimo', 'Enriquecido com Vitamina B6', 'Promessa de "Super Pump"'],
    pontosNegativos: ['Pote pequeno (60 cápsulas)', 'Concentração menor por cápsula'],
    pesoEmGramas: 60, dosePadraoEmGramas: 3, precoMedioEmReais: 21.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2CmMe5C',
  },
  {
    id: 82, slug: 'bcaa-10-1-1-3vs', nome: 'BCAA 10:1:1 em Pó (250g)', marca: '3VS Nutrition', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_635143-MLA95974197139_102025-F.webp',
    pontosPositivos: ['Versão em pó: absorção mais rápida', 'Proporção 10:1:1 (10x mais Leucina)', 'Sabor Natural'],
    pontosNegativos: ['Sabor natural de BCAA pode ser amargo para alguns', 'Exige preparo (misturar)'],
    pesoEmGramas: 250, dosePadraoEmGramas: 5, precoMedioEmReais: 50.81,
    linkAfiliado: 'https://mercadolivre.com/sec/2HtzNHS',
  },
  {
    id: 83, slug: 'bcaa-2-1-1-growth', nome: 'BCAA 2:1:1 (120 caps)', marca: 'Growth Supplements', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_868799-MLA95712609222_102025-F.webp',
    pontosPositivos: ['Padrão ouro da Growth', 'Proporção clássica 2:1:1', 'Custo-benefício excelente'],
    pontosNegativos: ['Venda por revenda no ML', 'Cápsulas padrão'],
    pesoEmGramas: 120, dosePadraoEmGramas: 3, precoMedioEmReais: 35.26,
    linkAfiliado: 'https://mercadolivre.com/sec/27zi2P3',
  },
  {
    id: 84, slug: 'bcaa-2044-integralmedica', nome: 'BCAA 2044mg (90 caps)', marca: 'Integralmédica', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_876904-MLA96124111529_102025-F.webp',
    pontosPositivos: ['Alta concentração por cápsula', 'Marca líder', 'Bom para quem não quer tomar muitas pílulas'],
    pontosNegativos: ['Preço intermediário'],
    pesoEmGramas: 90, dosePadraoEmGramas: 2, precoMedioEmReais: 40.94,
    linkAfiliado: 'https://mercadolivre.com/sec/2C9rirp',
  },
  {
    id: 85, slug: 'bcaa-top-integralmedica', nome: 'BCAA Top (120 caps)', marca: 'Integralmédica', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_954631-MLA95696715140_102025-F.webp',
    pontosPositivos: ['Linha "Top" da Integral', 'Embalagem maior (120 caps)', 'Fórmula otimizada'],
    pontosNegativos: ['Custo um pouco maior que a versão padrão'],
    pesoEmGramas: 120, dosePadraoEmGramas: 3.8, precoMedioEmReais: 42.39,
    linkAfiliado: 'https://mercadolivre.com/sec/1VHbK9b',
  },

  // =========================================
  // CATEGORIA: ALBUMINA
  // =========================================
  {
    id: 90, slug: 'albumina-naturovos-morango', nome: 'Albumina Sabor Morango (1kg)', marca: 'Naturovos', categoria: 'Albumina', categoryId: 'albumina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_942342-MLA95404958134_102025-F.webp',
    pontosPositivos: ['Referência absoluta em Albumina no Brasil', 'Sabor Morango ajuda a mascarar o gosto do ovo', 'Alta proteína (22g/dose)'],
    pontosNegativos: ['Espuma bastante ao bater', 'Pode causar gases'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 28, precoMedioEmReais: 56.43,
    linkAfiliado: 'https://mercadolivre.com/sec/2GBeefJ',
  },
  {
    id: 91, slug: 'albumina-uevo-moranguinho', nome: 'Albumina Uêvo Moranguinho (1kg)', marca: 'Uêvo (Naturovos)', categoria: 'Albumina', categoryId: 'albumina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_722374-MLA95839683981_102025-F.webp',
    pontosPositivos: ['Nova linha da Naturovos com sabor melhorado', 'Zero Lactose e Glúten', 'Embalagem moderna'],
    pontosNegativos: ['Preço um pouco acima da linha tradicional'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 28, precoMedioEmReais: 60.23,
    linkAfiliado: 'https://mercadolivre.com/sec/2tvvAps',
  },
  {
    id: 92, slug: 'albumina-xlab-morango-banana', nome: 'Albumina Morango c/ Banana (1kg)', marca: 'X-Lab', categoria: 'Albumina', categoryId: 'albumina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_707726-MLA96122978257_102025-F.webp',
    pontosPositivos: ['Sabor diferenciado (Morango com Banana)', 'Preço acessível', 'Rápida absorção (segundo fabricante)'],
    pontosNegativos: ['Marca menos conhecida que Naturovos'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 30, precoMedioEmReais: 63.90,
    linkAfiliado: 'https://mercadolivre.com/sec/1WbugkR',
  },
{
    id: 93, 
    slug: 'kit-albumina-egg-pro-abacaxi', 
    nome: 'Kit 3x Albumina Egg Pro (1,5kg) - Abacaxi com Hortelã', 
    marca: 'Egg Pro', 
    categoria: 'Albumina', 
    categoryId: 'albumina',
    // IMPORTANTE: Copie o endereço da imagem do anúncio no ML e cole aqui
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_921688-MLB89091375749_082025-F-kit-albumina-desidratada-500g-3-unidades-proteina-pura.webp', 
    pontosPositivos: ['Sabor refrescante e exclusivo (Abacaxi com Hortelã)', 'Kit econômico com 1,5kg (3 pacotes)', 'Ótimo para quem enjoou de chocolate/morango'],
    pontosNegativos: ['Sabor exótico pode não agradar a todos', 'Dose padrão um pouco maior (39g)'],
    pesoEmGramas: 1500, 
    dosePadraoEmGramas: 39, 
    precoMedioEmReais: 110.00,
    linkAfiliado: 'https://mercadolivre.com/sec/26s8BY4',
  },
  {
    id: 94, slug: 'albumina-cpovos-natural', nome: 'Albumina 80% Natural (500g)', marca: 'CP Ovos', categoria: 'Albumina', categoryId: 'albumina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_974697-MLA95669383588_102025-F.webp',
    pontosPositivos: ['80% de concentração proteica', '100% Natural e Pura', 'Opção em pacote menor (500g)'],
    pontosNegativos: ['Sabor natural (gosto de ovo forte)', 'Exige mistura com suco ou fruta'],
    pesoEmGramas: 500, dosePadraoEmGramas: 30, precoMedioEmReais: 47.24,
    linkAfiliado: 'https://mercadolivre.com/sec/1qjQ3Wp',
  },
  {
    id: 95, slug: 'albumina-xlab-cookies', nome: 'Albumina Cookies and Cream (1kg)', marca: 'X-Lab', categoria: 'Albumina', categoryId: 'albumina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_798283-MLA96314655474_102025-F.webp',
    pontosPositivos: ['Sabor inovador (Cookies)', 'Ajuda a variar a dieta', 'Bom perfil nutricional'],
    pontosNegativos: ['Sabor cookies em albumina pode ser enjoativo para alguns'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 30, precoMedioEmReais: 63.90,
    linkAfiliado: 'https://mercadolivre.com/sec/2rB8c7F',
  }
];