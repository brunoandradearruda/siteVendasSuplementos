// Define a "forma" que cada produto nosso terá, agora com mais detalhes
export interface Produto {
  id: number;
  nome: string;
  marca: string;
  categoria: 'Proteína' | 'Creatina' | 'Pré-Treino' | 'Aminoácido' | 'Vitamina' | 'Hipercalórico';
  imagemUrl: string;
  pesoEmGramas: number;
  dosePadraoEmGramas: number;
  precoMedioEmReais: number;
  linkAfiliado: string;
}
  
  // CAMPOS ADICIONADOS PARA COMPARAÇÃO:

// Nossa lista de produtos, agora mais completa
export const listaDeProdutos: Produto[] = [
  {
    id: 1,
    nome: 'Whey Protein Concentrado (1kg)',
    marca: 'Growth Supplements',
    categoria: 'Proteína',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/whey_protein_concentrado_1kg_growth_supplements_15_1_20201216182333.jpg',
    pesoEmGramas: 1000,
    dosePadraoEmGramas: 30,
    precoMedioEmReais: 90.00,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
  {
    id: 2,
    nome: 'Creatina Hardcore (300g)',
    marca: 'Integralmédica',
    categoria: 'Creatina',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/creatina_hardcore_300g_integralmedica_131_1_20211013114946.jpg',
    pesoEmGramas: 300,
    dosePadraoEmGramas: 3,
    precoMedioEmReais: 75.00,
    linkAfiliado: 'https://mercadolivre.com/sec/2Jwb3Pj',
  },
  {
    id: 3,
    nome: 'Pré-Treino Égide (300g)',
    marca: 'Max Titanium',
    categoria: 'Pré-Treino',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/pre_treino_egide_300g_max_titanium_217_1_20210311142654.jpg',
    pesoEmGramas: 300,
    dosePadraoEmGramas: 10,
    precoMedioEmReais: 99.90,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
  // --- NOVOS PRODUTOS ADICIONADOS ---
  {
    id: 4,
    nome: 'Multivitamínico (120 caps)',
    marca: 'Growth Supplements',
    categoria: 'Vitamina',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/multivitaminico_120_caps_growth_supplements_25_1_20201216182342.jpg',
    pesoEmGramas: 120, // Peso total em gramas (aprox)
    dosePadraoEmGramas: 1, // Dose em cápsulas, mas usamos 1g como referência
    precoMedioEmReais: 35.00,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
  {
    id: 5,
    nome: 'BCAA 2400 (100 tabs)',
    marca: 'Max Titanium',
    categoria: 'Aminoácido',
    imagemUrl: 'https://images.tcdn.com.br/img/img_prod/755086/bcaa_2400_100_caps_max_titanium_169_1_20210311141756.jpg',
    pesoEmGramas: 150, // Peso total em gramas (aprox)
    dosePadraoEmGramas: 2.4, // Dose em gramas de BCAA
    precoMedioEmReais: 45.00,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
  {
    id: 6,
    nome: 'Glutamina (300g)',
    marca: 'Integralmédica',
    categoria: 'Aminoácido',
    imagemUrl: 'https://integralmedica.vtexassets.com/arquivos/ids/155799/glutamina-300g-integralmedica.png?v=637773229864230000',
    pesoEmGramas: 300,
    dosePadraoEmGramas: 5,
    precoMedioEmReais: 65.00,
    linkAfiliado: 'SEU-LINK-AQUI',
  },
];