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
    id: 1, slug: 'whey-concentrado-soldiers', nome: 'Whey Protein Concentrado (1kg)', marca: 'Soldiers Nutrition', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_605822-MLB51439221888_092022-O.webp',
    pontosPositivos: ['Custo-benefício excelente para 1kg', 'Proteína concentrada de rápida absorção', 'Ideal para iniciantes e uso diário'],
    pontosNegativos: ['Contém lactose', 'Marca mais nova no mercado'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 30, precoMedioEmReais: 100.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2LZG3E5',
  },
  {
    id: 2, slug: 'whey-pro-max-titanium', nome: 'Whey Pro (1kg)', marca: 'Max Titanium', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_752562-MLU72603230279_112023-O.webp',
    pontosPositivos: ['Marca de grande confiança e respeito no mercado', 'Naturalmente rico em BCAA', 'Sabor cremoso e agradável'],
    pontosNegativos: ['Contém lactose', 'Concentração de proteína um pouco menor que outros'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 40, precoMedioEmReais: 88.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2sKabed',
  },
  {
    id: 8, slug: 'whey-isolado-iso-blend-pretorian', nome: 'Whey Iso Blend Complex (2kg)', marca: 'Pretorian', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_665324-MLB70438131390_072023-O.webp',
    pontosPositivos: ['Embalagem de 2kg com alto rendimento', 'Baixo em carboidratos e gorduras', 'Alta concentração de 25g de proteína por dose'],
    pontosNegativos: ['Por ser um "blend", não é 100% proteína isolada', 'Sabor pode ser um pouco artificial'],
    pesoEmGramas: 2000, dosePadraoEmGramas: 40, precoMedioEmReais: 169.90,
    linkAfiliado: 'https://mercadolivre.com/sec/2LPpbdN',
  },
  {
    id: 9, slug: 'whey-100-dark-lab', nome: '100% Whey (900g)', marca: 'Dark Lab', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_935269-MLU72729096931_112023-O.webp',
    pontosPositivos: ['Marca em ascensão com boa aceitação', 'Textura cremosa e sabores diferenciados', 'Foco em ganho de massa magra e definição'],
    pontosNegativos: ['Contém lactose e um pouco mais de carboidratos', 'Embalagem de 900g, um pouco menor que o padrão'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 150.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2pepgZ9',
  },
  {
    id: 10, slug: 'whey-100-pure-integralmedica', nome: 'Whey 100% Pure Pouch (900g)', marca: 'Integralmédica', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_827725-MLU72777979129_112023-O.webp',
    pontosPositivos: ['Marca líder e referência no mercado brasileiro', 'Proteína de rápida absorção e alto valor biológico', 'Versão Pouch (sachê) com ótimo custo-benefício'],
    pontosNegativos: ['Contém lactose', 'Embalagem não é tão prática quanto o pote'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 100.00,
    linkAfiliado: 'https://mercadolivre.com/sec/1g9koLi',
  },
  {
    id: 11, slug: 'whey-100-pure-probiotica', nome: '100% Pure Whey (900g)', marca: 'Probiótica', categoria: 'Proteína', categoryId: 'proteina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_634535-MLU72640767960_112023-O.webp',
    pontosPositivos: ['Marca tradicional e muito confiável', 'Blend de proteína concentrada e isolada', 'Auxilia no ganho e manutenção da massa magra'],
    pontosNegativos: ['Preço pode ser um pouco maior que concorrentes diretos', 'Contém lactose'],
    pesoEmGramas: 900, dosePadraoEmGramas: 30, precoMedioEmReais: 100.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2WPBwp4',
  },

  // =========================================
  // CATEGORIA: CREATINA
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
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_956233-MLU72672256332_112023-O.webp',
    pontosPositivos: ['Embalagem econômica (saco pouch)', 'Excelente custo por dose', '100% Pura sem carboidratos'],
    pontosNegativos: ['Embalagem de saco exige cuidado ao fechar', 'Scoop pode ser difícil de achar'],
    pesoEmGramas: 500, dosePadraoEmGramas: 3, precoMedioEmReais: 39.90,
    linkAfiliado: 'https://mercadolivre.com/sec/2PH4WrW',
  },
  {
    id: 22, slug: 'creatina-soldiers-1kg', nome: 'Creatina Monohidratada 100% Pura (1Kg)', marca: 'Soldiers Nutrition', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_769249-MLU72654336756_112023-O.webp',
    pontosPositivos: ['A opção mais econômica a longo prazo', 'Dura quase 1 ano (333 doses)', 'Mesma qualidade Soldiers em pacote gigante'],
    pontosNegativos: ['Embalagem grande e pesada', 'Alto investimento inicial'],
    pesoEmGramas: 1000, dosePadraoEmGramas: 3, precoMedioEmReais: 70.29,
    linkAfiliado: 'https://mercadolivre.com/sec/2Hw8sDG',
  },
  {
    id: 23, slug: 'creatina-dark-lab-500g', nome: 'Creatina Monohidratada Pura (500g)', marca: 'Dark Lab', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_620659-MLU72652922324_112023-O.webp',
    pontosPositivos: ['Preço extremamente competitivo', '500g garantem estoque por 5 meses', 'Marca nacional com boa reputação'],
    pontosNegativos: ['Embalagem refil (saco)', 'Textura pode variar ligeiramente'],
    pesoEmGramas: 500, dosePadraoEmGramas: 3, precoMedioEmReais: 41.24,
    linkAfiliado: 'https://mercadolivre.com/sec/2iu7fDZ',
  },
  {
    id: 24, slug: 'creatina-dark-lab-300g', nome: 'Creatina Monohidratada Pura (300g)', marca: 'Dark Lab', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_792652-MLU72647337394_112023-O.webp',
    pontosPositivos: ['Opção de entrada da Dark Lab', '100% Pura', 'Boa solubilidade'],
    pontosNegativos: ['Preço por kg mais alto que a versão de 500g'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 89.90,
    linkAfiliado: 'https://mercadolivre.com/sec/2wNzeTy',
  },
  {
    id: 25, slug: 'creatina-ronnie-coleman-300g', nome: 'Creatina Ronnie Coleman (300g)', marca: 'Ronnie Coleman', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_973789-MLU73323207793_122023-O.webp',
    pontosPositivos: ['Marca importada de prestígio mundial', 'Série Signature do Mr. Olympia', 'Qualidade garantida'],
    pontosNegativos: ['Preço premium devido à marca', 'Pote menor (300g)'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 45.54,
    linkAfiliado: 'https://mercadolivre.com/sec/127EYCX',
  },
  {
    id: 26, slug: 'creatina-ronnie-coleman-525g', nome: 'Creatina Ronnie Coleman XS (525g)', marca: 'Ronnie Coleman', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_792778-MLU73323739659_122023-O.webp',
    pontosPositivos: ['Pote com 25g extras (525g total)', 'Alto rendimento (175 doses)', 'Sabor Neutro ideal para misturar'],
    pontosNegativos: ['Valor de investimento mais alto', 'Disponibilidade pode variar'],
    pesoEmGramas: 525, dosePadraoEmGramas: 3, precoMedioEmReais: 74.76,
    linkAfiliado: 'https://mercadolivre.com/sec/1WZBTRf',
  },
  {
    id: 27, slug: 'creatina-max-titanium-300g', nome: 'Creatina Monohidratada (300g)', marca: 'Max Titanium', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_963733-MLU74343724021_012024-O.webp',
    pontosPositivos: ['Marca líder nacional', '0% Sódio e 0% Glúten', 'Tecnologia de micronização para absorção'],
    pontosNegativos: ['Preço levemente acima das marcas de entrada'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 49.37,
    linkAfiliado: 'https://mercadolivre.com/sec/1ARohwR',
  },
  {
    id: 28, slug: 'creatina-integralmedica-hardcore', nome: 'Creatina Hardcore (300g)', marca: 'Integralmédica', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_623928-MLU74330705291_012024-O.webp',
    pontosPositivos: ['Linha Hardcore focada em performance', 'Marca mais tradicional do Brasil', 'Excelente pureza'],
    pontosNegativos: ['Embalagem padrão, sem grandes diferenciais', 'Preço médio'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 42.00,
    linkAfiliado: 'https://mercadolivre.com/sec/17GQMLZ',
  },
  {
    id: 29, slug: 'creatina-nutrify-300g', nome: '100% Creatine (300g)', marca: 'Nutrify', categoria: 'Creatina', categoryId: 'creatina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_737493-MLU74022868746_012024-O.webp',
    pontosPositivos: ['Foco em pureza e "Clean Label"', 'Vegana e livre de alergênicos', 'Embalagem premium e sustentável'],
    pontosNegativos: ['Preço mais alto da categoria por grama', 'Público mais específico'],
    pesoEmGramas: 300, dosePadraoEmGramas: 3, precoMedioEmReais: 51.56,
    linkAfiliado: 'https://mercadolivre.com/sec/2fbPDDa',
  },

  // =========================================
  // DEMAIS CATEGORIAS
  // =========================================
  {
    id: 4, slug: 'pre-treino-egide-max', nome: 'Pré-Treino Égide (300g)', marca: 'Max Titanium', categoria: 'Pré-Treino', categoryId: 'pre-treino',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_976299-MLU73616334731_122023-O.webp',
    pontosPositivos: ['Fornece energia e foco', 'Melhora o "pump" (vasodilatação)', 'Reduz a percepção de fadiga'],
    pontosNegativos: ['Pode causar formigamento (beta-alanina)', 'Não indicado para quem treina à noite'],
    pesoEmGramas: 300, dosePadraoEmGramas: 10, precoMedioEmReais: 99.90,
    linkAfiliado: 'SEU-LINK-PRE-TREINO',
  },
  {
    id: 5, slug: 'hipercalorico-sinister-mass', nome: 'Hipercalórico Sinister Mass (3kg)', marca: 'Integralmédica', categoria: 'Hipercalórico', categoryId: 'hipercalorico',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_678323-MLU74894534123_032024-O.webp',
    pontosPositivos: ['Alto aporte de calorias de qualidade', 'Ajuda no ganho de peso e massa', 'Contém whey e creatina na fórmula'],
    pontosNegativos: ['Não substitui uma refeição completa'],
    pesoEmGramas: 3000, dosePadraoEmGramas: 160, precoMedioEmReais: 115.00,
    linkAfiliado: 'SEU-LINK-HIPERCALORICO',
  },
  {
    id: 6, slug: 'bcaa-2400-max', nome: 'BCAA 2400 (100 tabs)', marca: 'Max Titanium', categoria: 'BCAA', categoryId: 'bcaa',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_733660-MLU72642824763_112023-O.webp',
    pontosPositivos: ['Auxilia na recuperação muscular', 'Reduz a fadiga durante o treino', 'Prático em formato de tabletes'],
    pontosNegativos: ['Benefícios podem ser obtidos via Whey Protein'],
    pesoEmGramas: 150, dosePadraoEmGramas: 2.4, precoMedioEmReais: 45.00,
    linkAfiliado: 'SEU-LINK-BCAA',
  },
  {
    id: 7, slug: 'albumina-growth', nome: 'Albumina (500g)', marca: 'Growth Supplements', categoria: 'Albumina', categoryId: 'albumina',
    imagemUrl: 'https://http2.mlstatic.com/D_NQ_NP_832359-MLU72709203591_112023-O.webp',
    pontosPositivos: ['Proteína de absorção lenta', 'Excelente custo-benefício', 'Ideal para usar ao longo do dia ou antes de dormir'],
    pontosNegativos: ['Sabor e textura podem ser desagradáveis', 'Pode causar gases em algumas pessoas'],
    pesoEmGramas: 500, dosePadraoEmGramas: 30, precoMedioEmReais: 40.00,
    linkAfiliado: 'SEU-LINK-ALBUMINA',
  }
];