export interface Produto {
  id: number;
  slug: string; // Ex: 'whey-concentrado-growth' (para a URL)
  nome: string;
  marca: string;
  categoria: 'Proteína' | 'Creatina' | 'Pré-Treino' | 'Aminoácido' | 'Vitamina';
  imagemUrl: string;
  // Detalhes para a página de produto
  pontosPositivos: string[];
  pontosNegativos: string[];
  // Campos para a tabela comparativa
  pesoEmGramas: number;
  dosePadraoEmGramas: number;
  precoMedioEmReais: number;
  linkAfiliado: string;
}

export const listaDeProdutos: Produto[] = [
  {
    id: 1,
    slug: 'whey-concentrado-growth',
    nome: 'Whey Protein Concentrado (1kg)',
    marca: 'Growth Supplements',
    categoria: 'Proteína',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/whey_protein_concentrado_1kg_growth_supplements_15_1_20201216182333.jpg',
    pontosPositivos: ['Melhor custo-benefício do mercado', 'Alta concentração de proteína por dose', 'Sabor agradável'],
    pontosNegativos: ['Contém lactose', 'Pode dissolver com um pouco de dificuldade'],
    pesoEmGramas: 1000,
    dosePadraoEmGramas: 30,
    precoMedioEmReais: 90.00,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
  // NOVO PRODUTO NA MESMA CATEGORIA
  {
    id: 2,
    slug: 'whey-isolado-dux',
    nome: 'Whey Protein Isolado (900g)',
    marca: 'Dux Nutrition',
    categoria: 'Proteína',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/whey_protein_isolado_900g_dux_nutrition_235_1_20210311143243.jpg',
    pontosPositivos: ['Zero carboidratos e gorduras', 'Ideal para intolerantes à lactose', 'Dissolução instantânea'],
    pontosNegativos: ['Preço mais elevado'],
    pesoEmGramas: 900,
    dosePadraoEmGramas: 30,
    precoMedioEmReais: 199.00,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
  {
    id: 3,
    slug: 'creatina-monohidratada-universal',
    nome: 'Creatina Monohidratada (200g)',
    marca: 'Universal Nutrition',
    categoria: 'Creatina',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/creatina_200g_universal_nutrition_137_1_20210311141756.jpg',
    pontosPositivos: ['Selo de pureza Creapure®', 'Marca com décadas de credibilidade', 'Resultados comprovados em força'],
    pontosNegativos: ['Pode ser mais cara que outras creatinas'],
    pesoEmGramas: 200,
    dosePadraoEmGramas: 3,
    precoMedioEmReais: 85.00,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
  // Adicione outros produtos aqui...
];