// Define a "forma" que cada produto nosso terá, agora com mais detalhes
export interface Produto {
  id: number;
  nome: string;
  marca: string;
  categoria: 'Proteína' | 'Creatina' | 'Pré-Treino';
  imagemUrl: string;
  
  // CAMPOS ADICIONADOS PARA COMPARAÇÃO:
  pesoEmGramas: number;
  dosePadraoEmGramas: number;
  precoMedioEmReais: number;
  
  linkAfiliado: string;
}

// Nossa lista de produtos, agora com os novos dados
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
];