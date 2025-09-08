export interface Produto {
  id: number;
  slug: string;
  nome: string;
  marca: string;
  categoria: 'Proteína' | 'Creatina' | 'Pré-Treino' | 'Hipercalórico' | 'BCAA' | 'Albumina';
  categoryId: string;
  imagemUrl: string;
  pontosPositivos: string[];
  pontosNegativos: string[];
  pesoEmGramas: number;
  dosePadraoEmGramas: number;
  precoMedioEmReais: number;
  linkAfiliado: string;
}

export const listaDeProdutos: Produto[] = [
  // --- LISTA FINAL DE PROTEÍNAS ---
  {
    id: 1, slug: 'whey-concentrado-soldiers', nome: 'Whey Protein Concentrado (1kg)', marca: 'Soldiers Nutrition', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_723009-MLA85107863778_052025-F.webp',
    pontosPositivos: ['Custo-benefício excelente para 1kg', 'Proteína concentrada de rápida absorção', 'Ideal para iniciantes e uso diário'],
    pontosNegativos: ['Contém lactose', 'Marca mais nova no mercado'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 30, precoMedioEmReais: 100.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2LZG3E5',
  },
  {
    id: 2, slug: 'whey-pro-max-titanium', nome: 'Whey Pro (1kg)', marca: 'Max Titanium', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_927256-MLA82243737156_022025-F.webp',
    pontosPositivos: ['Marca de grande confiança e respeito no mercado', 'Naturalmente rico em BCAA', 'Sabor cremoso e agradável'],
    pontosNegativos: ['Contém lactose', 'Concentração de proteína um pouco menor que outros'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 40, precoMedioEmReais: 88.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2sKabed',
  },
  {
    id: 8, slug: 'whey-isolado-iso-blend-pretorian', nome: 'Whey Iso Blend Complex (2kg)', marca: 'Pretorian', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_969804-MLU74221449745_012024-O.webp',
    pontosPositivos: ['Embalagem de 2kg com alto rendimento', 'Baixo em carboidratos e gorduras', 'Alta concentração de 25g de proteína por dose'],
    pontosNegativos: ['Por ser um "blend", não é 100% proteína isolada', 'Sabor pode ser um pouco artificial'],
    pesoEmGramas: 2000, dosePadraoEmGramas: 40, precoMedioEmReais: 80.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2LPpbdN',
  },
  {
    id: 9, slug: 'whey-100-dark-lab', nome: '100% Whey (900g)', marca: 'Dark Lab', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_858601-MLU74157320301_012024-O.webp',
    pontosPositivos: ['Marca em ascensão com boa aceitação', 'Textura cremosa e sabores diferenciados', 'Foco em ganho de massa magra e definição'],
    pontosNegativos: ['Contém lactose e um pouco mais de carboidratos', 'Embalagem de 900g, um pouco menor que o padrão'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 150.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2pepgZ9',
  },
  {
    id: 10, slug: 'whey-100-pure-integralmedica', nome: 'Whey 100% Pure (900g)', marca: 'Integralmédica', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_604361-MLU78141575287_082024-O.webp',
    pontosPositivos: ['Marca líder e referência no mercado brasileiro', 'Proteína de rápida absorção e alto valor biológico', 'Versão Pouch (sachê) com ótimo custo-benefício'],
    pontosNegativos: ['Contém lactose', 'Embalagem não é tão prática quanto o pote'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 100.00,
    linkAfiliado: 'https://mercadolivre.com/sec/1g9koLi',
  },
  {
    id: 11, slug: 'whey-100-pure-probiotica', nome: '100% Pure Whey (900g)', marca: 'Probiótica', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_999841-MLU75133310901_032024-F.webp',
    pontosPositivos: ['Marca tradicional e muito confiável', 'Blend de proteína concentrada e isolada', 'Auxilia no ganho e manutenção da massa magra'],
    pontosNegativos: ['Preço pode ser um pouco maior que concorrentes diretos', 'Contém lactose'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 100.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2WPBwp4',
  },

  // --- DEMAIS CATEGORIAS ---
  {
    id: 3, slug: 'creatina-monohidratada-universal', nome: 'Creatina Monohidratada (200g)', marca: 'Universal Nutrition', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/creatina_200g_universal_nutrition_137_1_20210311141756.jpg',
    pontosPositivos: ['Selo de pureza Creapure®', 'Marca com décadas de credibilidade', 'Resultados comprovados em força'], pontosNegativos: ['Pode ser mais cara que outras'],
    pesoEmGramas: 200, dosePadraoEmGramas: 3, precoMedioEmReais: 85.00, linkAfiliado: 'SEU-LINK-CREATINA',
  },
  {
    id: 4, slug: 'pre-treino-egide-max', nome: 'Pré-Treino Égide (300g)', marca: 'Max Titanium', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/pre_treino_egide_300g_max_titanium_217_1_20210311142654.jpg',
    pontosPositivos: ['Fornece energia e foco', 'Melhora o "pump" (vasodilatação)', 'Reduz a percepção de fadiga'], pontosNegativos: ['Pode causar formigamento (beta-alanina)', 'Não indicado para quem treina à noite'],
    pesoEmGramas: 300, dosePadraoEmGramas: 10, precoMedioEmReais: 99.90, linkAfiliado: 'SEU-LINK-PRE-TREINO',
  },
  {
    id: 5, slug: 'hipercalorico-sinister-mass', nome: 'Hipercalórico Sinister Mass (3kg)', marca: 'Integralmédica', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://integralmedica.vtexassets.com/arquivos/ids/157429/sinister-mass-3kg-integralmedica.png?v=637963388092270000',
    pontosPositivos: ['Alto aporte de calorias de qualidade', 'Ajuda no ganho de peso e massa', 'Contém whey e creatina na fórmula'], pontosNegativos: ['Não substitui uma refeição completa'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 160, precoMedioEmReais: 115.00, linkAfiliado: 'SEU-LINK-HIPERCALORICO',
  },
  {
    id: 6, slug: 'bcaa-2400-max', nome: 'BCAA 2400 (100 tabs)', marca: 'Max Titanium', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/bcaa_2400_100_caps_max_titanium_169_1_20210311141756.jpg',
    pontosPositivos: ['Auxilia na recuperação muscular', 'Reduz a fadiga durante o treino', 'Prático em formato de tabletes'], pontosNegativos: ['Benefícios podem ser obtidos via Whey Protein'],
    pesoEmGramas: 150, dosePadraoEmGramas: 2.4, precoMedioEmReais: 45.00, linkAfiliado: 'SEU-LINK-BCAA',
  },
  {
    id: 7, slug: 'albumina-growth', nome: 'Albumina (500g)', marca: 'Growth Supplements', categoria: 'Albumina', categoryId: 'albumina',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/albumina-500g-growth-supplements.jpg',
    pontosPositivos: ['Proteína de absorção lenta', 'Excelente custo-benefício', 'Ideal para usar ao longo do dia ou antes de dormir'], pontosNegativos: ['Sabor e textura podem ser desagradáveis', 'Pode causar gases em algumas pessoas'],
    pesoEmGramas: 500, dosePadraoEmGramas: 30, precoMedioEmReais: 40.00, linkAfiliado: 'SEU-LINK-ALBUMINA',
  }
];