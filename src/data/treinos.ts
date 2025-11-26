export interface Exercicio {
  nome: string;
  series: string;
  repeticoes: string;
  descanso: string;
}

export interface DiaTreino {
  titulo: string;
  foco: string;
  exercicios: Exercicio[];
  suplementoIndicado: string;
  linkCategoria: string;
}

export interface RotinaTreino {
  id: string;
  nome: string;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  objetivo: string;
  descricao: string;
  dias: DiaTreino[];
}

export const listaDeTreinos: RotinaTreino[] = [
  {
    id: 'iniciante',
    nome: 'Adaptação (Full Body)',
    nivel: 'Iniciante',
    objetivo: 'Aprender movimentos e condicionamento',
    descricao: 'Ideal para quem está começando ou voltando agora. Trabalha o corpo todo em uma única sessão, 3 vezes na semana.',
    dias: [
      {
        titulo: 'Treino A (Seg/Qua/Sex)',
        foco: 'Corpo Todo',
        suplementoIndicado: 'Creatina para força e recuperação',
        linkCategoria: '/categoria/creatina',
        exercicios: [
          { nome: 'Supino Reto (Máquina ou Halter)', series: '3', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Puxada Frontal Alta', series: '3', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Leg Press 45º', series: '3', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Elevação Lateral', series: '3', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Rosca Direta', series: '3', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Tríceps Pulley', series: '3', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Abdominal Supra', series: '3', repeticoes: '15-20', descanso: '60s' },
        ]
      }
    ]
  },
  {
    id: 'hipertrofia',
    nome: 'Divisão ABC (Push/Pull/Legs)',
    nivel: 'Intermediário',
    objetivo: 'Ganho de Massa Muscular',
    descricao: 'A divisão mais famosa do mundo. Separa os músculos por função (Empurrar, Puxar e Pernas). Frequência ideal: 5 a 6x na semana.',
    dias: [
      {
        titulo: 'Treino A - Empurrar',
        foco: 'Peito, Ombros e Tríceps',
        suplementoIndicado: 'Pré-treino para energia extra',
        linkCategoria: '/categoria/pre-treino',
        exercicios: [
          { nome: 'Supino Inclinado com Halteres', series: '4', repeticoes: '8-12', descanso: '90s' },
          { nome: 'Supino Reto com Barra', series: '3', repeticoes: '8-12', descanso: '90s' },
          { nome: 'Desenvolvimento Militar', series: '4', repeticoes: '8-12', descanso: '90s' },
          { nome: 'Elevação Lateral', series: '4', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Tríceps Testa', series: '3', repeticoes: '10-12', descanso: '60s' },
          { nome: 'Tríceps Corda', series: '3', repeticoes: '12-15', descanso: '60s' },
        ]
      },
      {
        titulo: 'Treino B - Puxar',
        foco: 'Costas, Trapézio e Bíceps',
        suplementoIndicado: 'Creatina para volume muscular',
        linkCategoria: '/categoria/creatina',
        exercicios: [
          { nome: 'Puxada Alta Aberta', series: '4', repeticoes: '8-12', descanso: '90s' },
          { nome: 'Remada Curvada', series: '4', repeticoes: '8-12', descanso: '90s' },
          { nome: 'Remada Baixa Triângulo', series: '3', repeticoes: '10-12', descanso: '90s' },
          { nome: 'Encolhimento de Ombros', series: '4', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Rosca Direta Barra W', series: '3', repeticoes: '10-12', descanso: '60s' },
          { nome: 'Rosca Martelo', series: '3', repeticoes: '10-12', descanso: '60s' },
        ]
      },
      {
        titulo: 'Treino C - Pernas',
        foco: 'Quadríceps, Posterior e Panturrilha',
        suplementoIndicado: 'Whey Protein para recuperação rápida',
        linkCategoria: '/categoria/proteina',
        exercicios: [
          { nome: 'Agachamento Livre', series: '4', repeticoes: '8-10', descanso: '120s' },
          { nome: 'Leg Press 45º', series: '4', repeticoes: '10-12', descanso: '90s' },
          { nome: 'Cadeira Extensora', series: '3', repeticoes: '12-15', descanso: '60s' },
          { nome: 'Mesa Flexora', series: '4', repeticoes: '10-12', descanso: '60s' },
          { nome: 'Stiff com Halteres', series: '3', repeticoes: '10-12', descanso: '90s' },
          { nome: 'Panturrilha no Leg ou Sentado', series: '5', repeticoes: '15-20', descanso: '45s' },
        ]
      }
    ]
  },
  {
    id: 'emagrecimento',
    nome: 'Circuito Metabólico',
    nivel: 'Todos',
    objetivo: 'Queima de Gordura',
    descricao: 'Treino com pouco descanso para manter a frequência cardíaca alta e maximizar o gasto calórico.',
    dias: [
      {
        titulo: 'Treino Único (Repetir 3 a 4x na semana)',
        foco: 'Gasto Calórico e Resistência',
        suplementoIndicado: 'Pré-treino ou Termogênico',
        linkCategoria: '/categoria/pre-treino',
        exercicios: [
          { nome: 'Agachamento com Peso Corporal', series: '3', repeticoes: '20', descanso: '30s' },
          { nome: 'Flexão de Braço (ou joelhos)', series: '3', repeticoes: '15', descanso: '30s' },
          { nome: 'Polichinelos', series: '3', repeticoes: '50', descanso: '30s' },
          { nome: 'Afundo (Passada)', series: '3', repeticoes: '15 cada perna', descanso: '30s' },
          { nome: 'Remada com Elástico ou Halter', series: '3', repeticoes: '15', descanso: '30s' },
          { nome: 'Prancha Abdominal', series: '3', repeticoes: '45 seg', descanso: '30s' },
          { nome: 'Corrida Estacionária (joelho alto)', series: '3', repeticoes: '60 seg', descanso: '60s' },
        ]
      }
    ]
  }
];