/*
 * Dados da programação do Webinar (módulo Node — usado pelo servidor Express).
 * ---------------------------------------------------------------------------
 * Para preencher o conteúdo real, edite APENAS os campos "bio", "resumo" e
 * "topicos" de cada item (procure pelo prefixo PLACEHOLDER).
 *
 * Campos:
 *   id       -> slug usado na URL (/painel/SLUG). Não repetir.
 *   numero   -> rótulo do nó na timeline (só faz sentido para painéis).
 *   hora     -> horário exibido.
 *   titulo   -> título do painel / atividade.
 *   autor    -> nome do palestrante (vazio se não houver).
 *   cargo    -> afiliação / cargo do palestrante.
 *   foto     -> caminho da foto (dentro de ./files). Vazio usa inicial/ícone.
 *   tipo     -> "abertura" | "painel" | "intervalo" | "encerramento".
 *   bio      -> texto sobre o palestrante (aparece na página de detalhe).
 *   resumo   -> resumo do painel (aparece na página de detalhe).
 *   topicos  -> lista de tópicos abordados (aparece na página de detalhe).
 *
 * Só itens com "autor" e tipo "abertura"/"painel" geram página de detalhe
 * (/painel/:id). "intervalo" e "encerramento" são apenas marcadores visuais.
 */
const PROGRAMA = [
  {
    id: "abertura",
    numero: "",
    hora: "14h00",
    titulo: "Abertura",
    autor: "Prof. Bruno H. Dias (UFJF)\nProf. Bárbara Teruel (Unicamp)\nProf. Bruno W. França (UFF)",
    cargo: "",
    foto: "files/fabricio.png",
    fotos: [
      "files/bruno.jpeg",
      "files/barbara.jpeg",
      "files/bruno_franca.jpg"
    ],
    tipo: "abertura",
    bio: "PLACEHOLDER — Breve biografia de Fabrício Campos: formação, área de atuação, cargos e principais contribuições.",
    resumo: "PLACEHOLDER — Resumo da abertura do webinar: boas-vindas, contextualização do tema da transição energética no setor de transportes e apresentação da programação.",
    topicos: [
      "PLACEHOLDER — tópico 1",
      "PLACEHOLDER — tópico 2"
    ]
  },
  {
    id: "fabricio-painel1",
    numero: "01",
    hora: "14h10",
    titulo: "Painel 1: Lei dos Combustíveis do Futuro — Programa Nacional de Combustível Sustentável da Aviação",
    autor: "Prof. Fabrício Campos",
    cargo: "Pró-Reitor de Inovação da Universidade Federal de Juiz de Fora (UFJF)",
    foto: "files/fabricio.png",
    tipo: "painel",
    bio: "PLACEHOLDER — Breve biografia de Fabrício Campos: formação, área de atuação, cargos e principais contribuições.",
    resumo: "PLACEHOLDER — Resumo do Painel 1: contexto da Lei dos Combustíveis do Futuro e do Programa Nacional de Combustível Sustentável da Aviação, principais objetivos e impactos esperados.",
    topicos: [
      "PLACEHOLDER — tópico 1",
      "PLACEHOLDER — tópico 2",
      "PLACEHOLDER — tópico 3"
    ]
  },
  {
    id: "leonardo-silva-painel2",
    numero: "02",
    hora: "14h40",
    titulo: "Painel 2: Veículos Elétricos e a Rede de Distribuição: Impactos Locais",
    autor: "Leonardo Francisco da Silva",
    cargo: "Mestre em Engenharia Elétrica (LEMT/COPPE/UFRJ)",
    foto: "files/Leonardo-Da-Silva-36.jpg",
    tipo: "painel",
    bio: "PLACEHOLDER — Breve biografia de Leonardo Francisco da Silva: formação, área de atuação e principais contribuições.",
    resumo: "PLACEHOLDER — Resumo do Painel 2: impactos locais da inserção de veículos elétricos na rede de distribuição, desafios técnicos e possíveis soluções.",
    topicos: [
      "PLACEHOLDER — tópico 1",
      "PLACEHOLDER — tópico 2",
      "PLACEHOLDER — tópico 3"
    ]
  },
  {
    id: "annelys-painel4",
    numero: "03",
    hora: "15h10",
    titulo: "Painel 3: Análise de Ciclo de Vida de Veículos Leves",
    autor: "Annelys Machado Schetinger",
    cargo: "Pesquisadora no Laboratório de Fontes Alternativas de Energia (LAFAE/UFRJ)",
    foto: "files/annelys.jpg",
    tipo: "painel",
    bio: "PLACEHOLDER — Breve biografia de Annelys Machado Schetinger: formação, área de atuação e principais contribuições.",
    resumo: "PLACEHOLDER — Resumo do Painel 3: metodologia de análise de ciclo de vida aplicada a veículos leves, comparativos e conclusões principais.",
    topicos: [
      "PLACEHOLDER — tópico 1",
      "PLACEHOLDER — tópico 2",
      "PLACEHOLDER — tópico 3"
    ]
  },
  {
    id: "intervalo",
    numero: "",
    hora: "",
    titulo: "☕ Intervalo — 10 minutos",
    autor: "",
    cargo: "",
    foto: "",
    tipo: "intervalo",
    bio: "",
    resumo: "",
    topicos: []
  },
  {
    id: "leonardo-bitencourt-painel5",
    numero: "04",
    hora: "15h50",
    titulo: "Painel 4: Planejamento Energético Considerando Veículos Elétricos",
    autor: "Leonardo de Arruda Bitencourt",
    cargo: "Professor no Departamento de Engenharia Elétrica — Universidade do Estado do Rio de Janeiro (UERJ)",
    foto: "files/leonardo.jpg",
    tipo: "painel",
    bio: "PLACEHOLDER — Breve biografia de Leonardo de Arruda Bitencourt: formação, área de atuação e principais contribuições.",
    resumo: "PLACEHOLDER — Resumo do Painel 4: planejamento energético considerando a expansão da frota de veículos elétricos, cenários e recomendações.",
    topicos: [
      "PLACEHOLDER — tópico 1",
      "PLACEHOLDER — tópico 2",
      "PLACEHOLDER — tópico 3"
    ]
  },
  {
    id: "gustavo-painel6",
    numero: "05",
    hora: "16h10",
    titulo: "Painel 5: A Transição Energética sob a Perspectiva do Transportador — Barreiras, Investimentos e Oportunidades",
    autor: "Sr. Gustavo Willy",
    cargo: "Coordenador do Programa DESPOLUIR e Projetos Especiais, Sistema Transporte — CNT-SEST SENAT-ITL",
    foto: "files/gustavo.jpg",
    tipo: "painel",
    bio: "PLACEHOLDER — Breve biografia de Gustavo Willy: formação, área de atuação e principais contribuições.",
    resumo: "PLACEHOLDER — Resumo do Painel 6: a transição energética sob a perspectiva do transportador, barreiras, necessidades de investimento e oportunidades de negócio.",
    topicos: [
      "PLACEHOLDER — tópico 1",
      "PLACEHOLDER — tópico 2",
      "PLACEHOLDER — tópico 3"
    ]
  },
  {
    id: "encerramento",
    numero: "06",
    hora: "16h40",
    titulo: "Abertura para Discussões e Encerramento",
    autor: "",
    cargo: "",
    foto: "",
    tipo: "encerramento",
    bio: "",
    resumo: "",
    topicos: []
  }
];

module.exports = PROGRAMA;
