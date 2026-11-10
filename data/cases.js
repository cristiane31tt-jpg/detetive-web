/* ============================================================
   DETETIVE — RESOLVA O CASO | Dados dos casos
   Todos os nomes, instituições, lugares, datas e valores são
   fictícios. Cada caso possui solução definida e coerente com
   as evidências, depoimentos e linha do tempo.
   ============================================================ */

var CasesData = (function () {

  var CATEGORIES = [
    {
      id: "roubos",
      label: "Roubos",
      short: "Roubo",
      desc: "Objetos desaparecidos, invasões fictícias, furtos e suspeitos com diferentes graus de oportunidade.",
      icon: "robbery"
    },
    {
      id: "desaparecimentos",
      label: "Desaparecimentos",
      short: "Desaparecimento",
      desc: "Pessoas fictícias cujo paradeiro precisa ser esclarecido. Nem todo desaparecimento é um crime.",
      icon: "disappearance"
    },
    {
      id: "fraudes",
      label: "Fraudes",
      short: "Fraude",
      desc: "Documentos, registros financeiros, falsificações e declarações contraditórias.",
      icon: "fraud"
    },
    {
      id: "assassinatos",
      label: "Assassinatos",
      short: "Assassinato",
      desc: "Investigações fictícias de homicídios focadas na análise de oportunidade, motivação e dedução lógica.",
      icon: "murder"
    }
  ];

  var LEVELS = [
    { level: 1, name: "Detetive iniciante", desc: "Poucos suspeitos, pistas diretas, histórias curtas e contradições fáceis de identificar." },
    { level: 2, name: "Investigador", desc: "Mais suspeitos, álibis diferentes, depoimentos conflitantes e comparação de horários." },
    { level: 3, name: "Detetive experiente", desc: "Casos em várias etapas, pistas indiretas, linha do tempo extensa e cruzamento de informações." },
    { level: 4, name: "Investigador especial", desc: "Casos extensos, várias hipóteses plausíveis, pistas sutis e contradições complexas." }
  ];

  function cat(catId) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].id === catId) return CATEGORIES[i];
    }
    return CATEGORIES[0];
  }
/* ============================================================
     CASO 1 — ROUBO, NÍVEL 1
     ============================================================ */
  var C1 = {
    id: "r01",
    code: "R-01",
    title: "O Quadro de Vila Nova",
    category: "roubos",
    difficulty: 1,
    brief: "Na sexta-feira, durante a inauguração da exposição \"Noites do Cais\", a pintura \"Maré Alta\", avaliada em R$ 1,2 milhão, desapareceu do salão principal da Galeria Aurora. A moldura foi encontrada vazia atrás de um biombo na sala de manutenção. Ninguém percebeu a falta até o encerramento do evento, às 23h.",
    context: "A Galeria Aurora ocupa um casarão de dois pavimentos na Rua das Oficinas, no bairro histórico de Vila Nova. O salão principal fica no térreo, com acesso pelas portas frontal e de serviço (nos fundos). A porta de serviço fica trancada por dentro durante o evento e só abre com chave própria.",
    date: "Sexta-feira, 21 de março · evento das 21h às 23h · blecaute de 4 minutos às 21h10",
    suspects: [
      {
        id: "eduardo",
        name: "Eduardo Sartori",
        role: "Segurança noturno da galeria",
        age: 41,
        profile: [
          "Trabalha há 5 anos na galeria; é responsável pela ronda e pelas chaves da porta de serviço.",
          "Conhece todo o circuito de câmeras e o quadro elétrico do prédio."
        ],
        behavior: "Durante o reconto de convidados, parecia nervoso e evitou o salão principal. Era conhecido por dívidas de jogo.",
        alibi: "De 21h10 a 21h15 afirma que fazia a ronda no pavimento superior, sem parar."
      },
      {
        id: "julia",
        name: "Júlia Prado",
        role: "Assistente de curadoria",
        age: 29,
        profile: [
          "Auxiliava na montagem e organização da exposição; trabalhou até as 20h45 nos refletores.",
          "Tem chave da porta de serviço, fornecida para tarefas de logística."
        ],
        behavior: "Ficou abalada com a suspeita e cooperou com a polícia mostrando as notas de conferência da montagem.",
        alibi: "Durante o blecaute, disse que estava na sala técnica conferindo os equipamentos."
      },
      {
        id: "teresa",
        name: "Teresa Molina",
        role: "Restauradora convidada",
        age: 36,
        profile: [
          "Veio da capital para restaurar duas obras da exposição; não possui chave da galeria.",
          "Conhecia a \"Maré Alta\" por catálogos e nunca havia visitado o casarão."
        ],
        behavior: "Conversou com convidados durante quase todo o evento; três testemunhas confirmam sua presença no salão.",
        alibi: "No salão, com convidados, das 21h às 23h, sem interrupções."
      }
    ],
    testimonies: [
      {
        id: "t_ricardo",
        person: "Ricardo Almada",
        role: "Dono e curador da galeria",
        text: "A obra estava na parede quando abrimos, às 20h50. Eu mesmo coloquei o lacre de segurança. Fui ao escritório às 21h18 e só voltei ao salão às 22h50. Quando cheguei, o vão vazio e o lacre cortado com cuidado. Eu confiava em Eduardo, mas ele parecia transtornado quando fomos procurar a tela."
      },
      {
        id: "t_julia",
        person: "Júlia Prado",
        role: "Assistente de curadoria",
        text: "Entre 21h05 e 21h15 eu não saí da sala técnica. As luzes caíram e eu conferi os nobreaks. Assim que a energia voltou, voltei ao salão e comecei a anotar os nomes. Não vi ninguém sair com o quadro. Se quer saber, além do Ricardo, só eu e o Eduardo temos chave da porta de serviço."
      },
      {
        id: "t_eduardo",
        person: "Eduardo Sartori",
        role: "Segurança noturno",
        text: "Às 21h10 comecei minha ronda no pavimento superior. São oito minutos de vistoria, sem parar, até as 21h15, quando desci. Se o quadro sumiu, foi naquele apagão, mas eu estava lá em cima. Sobre o cabo: deve ter rompido sozinho, a tubulação é antiga. O alicate do kit é só ferramenta padrão."
      },
      {
        id: "t_teresa",
        person: "Teresa Molina",
        role: "Restauradora convidada",
        text: "Fiquei no salão o tempo todo conversando com a vereadora, o arquiteto Neves e a senhora Dulce. Ninguém com uma tela daquele tamanho passaria despercebido. Não conheço o segurança. Me chamem de teimosa, mas sou a pessoa mais improvável dessa lista."
      }
    ],
timeline: [
      { time: "20h40", event: "A equipe encerra os preparativos. A porta de serviço é trancada por dentro." },
      { time: "20h50", event: "Ricardo confere a obra pessoalmente e fixa o lacre de segurança no quadro." },
      { time: "21h00", event: "Início do evento, com cerca de 80 convidados no salão principal." },
      { time: "21h10", event: "Blecaute no bairro. As câmeras perdem o sinal; só a sala técnica tem nobreak." },
      { time: "21h13", event: "A câmera do corredor do térreo volta a gravar." },
      { time: "21h15", event: "A câmera da escada registra Eduardo descendo do pavimento superior." },
      { time: "23h00", event: "Término do evento e despedida dos convidados." },
      { time: "23h40", event: "Ricardo percebe a ausência da tela e aciona a polícia." }
    ],
    evidence: [
      {
        id: "ev_cable",
        title: "Cabo de energia cortado",
        type: "Perícia",
        icon: "electric",
        summary: "Cabo de alimentação do quarteirão cortado com alicate, junto ao muro da galeria.",
        description: "A perícia constatou um corte limpo e reto no cabo principal que abastece o quarteirão, a poucos metros do muro lateral da galeria. Cabos que rompem por desgaste apresentam marcas de estiramento, e não um corte reto e intencional.",
        significance: "O apagão pode ter sido provocado de propósito, exatamente no horário em que as câmeras ficaram cegas."
      },
      {
        id: "ev_footprint",
        title: "Pegada com tinta azul",
        type: "Vestígio",
        icon: "foot",
        summary: "Pegada de sola lisa com resíduo de tinta azul-marinho sob a parede do quadro.",
        description: "A marca ficou impressa no piso encerado, no vão exato onde a tela ficava. A tinta é quimicamente idêntica à usada no chão da sala de manutenção, que passou por um reparo na semana anterior. Sapatos de sola lisa fazem parte do uniforme dos seguranças.",
        significance: "Alguém que passou pela sala de manutenção esteve no local exato do furto."
      },
      {
        id: "ev_upcam",
        title: "Câmera do pavimento superior",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Mostra Eduardo saindo da escada às 21h09 e voltando apenas às 21h15.",
        description: "A gravação contraria a explicação da ronda contínua: entre 21h09 e 21h15 Eduardo não aparece em nenhum cômodo do pavimento superior. A escada de serviço dá acesso direto ao corredor do salão principal, no térreo.",
        significance: "O momento em que Eduardo não estava onde afirmou coincide com o blecaute e com o furto."
      },
      {
        id: "ev_techcam",
        title: "Câmera da sala técnica",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Protegida por nobreak, mostra Júlia na sala entre 21h10 e 21h12.",
        description: "A sala técnica possui câmera própria, alimentada por nobreak. As imagens exibem Júlia conferindo equipamentos e iluminando o painel com a lanterna do celular. Ela sai da sala às 21h12.",
        significance: "O álibi de Júlia é consistente com a gravação independente."
      },
      {
        id: "ev_keys",
        title: "Registro de chaves",
        type: "Documento",
        icon: "key",
        summary: "Somente Ricardo, Júlia e Eduardo possuem chave da porta de serviço.",
        description: "O livro de controle mostra apenas três chaves emitidas. A porta não apresenta sinais de arrombamento e o mecanismo interno estava trancado quando o sumiço foi descoberto. Quem levou a tela pelo serviço precisava de chave.",
        significance: "O círculo de pessoas capazes de sair sem ser notado é restrito."
      },
      {
        id: "ev_pliers",
        title: "Alicate do kit de segurança",
        type: "Objeto apreendido",
        icon: "tool",
        summary: "Alicate de corte encontrado no kit de Eduardo, com resíduo de cobre no fio.",
        description: "O kit fica no posto da segurança. A análise de resíduos encontrou partículas de cobre no fio, compatíveis com o condutor de um cabo elétrico. Eduardo afirma que o alicate é apenas ferramenta padrão do posto.",
        significance: "O instrumento que causou o corte do cabo pode ter sido este alicate, usado por quem tinha acesso ao posto."
      }
    ],
    contradictions: [
      {
        id: "c_rota",
        title: "Ronda de 8 minutos x imagens",
        type: "contradiction",
        between: "Depoimento de Eduardo Sartori x Câmera do pavimento superior",
        analysis: "Eduardo afirmou ter feito a ronda completa do andar de cima entre 21h10 e 21h15. A câmera mostra que ele não estava no pavimento superior nesse intervalo: saiu da escada às 21h09 e só retornou às 21h15. Ele usou o apagão para outra coisa — e o corredor da escada dá acesso direto ao salão."
      },
      {
        id: "c_cabo",
        title: "Apagão acidental x corte intencional",
        type: "contradiction",
        between: "Justificativa de falha elétrica x Perícia do cabo",
        analysis: "O corte limpo e reto indica que o blecaute foi provocado para interromper o monitoramento durante o furto. Provocar o corte exige acesso ao quarteirão e ferramenta adequada — possível para o segurança noturno."
      },
      {
        id: "c_julia",
        title: "Depoimento de Júlia confirmado",
        type: "confirmation",
        between: "Depoimento de Júlia Prado x Câmera da sala técnica",
        analysis: "A câmera da sala técnica, alimentada por nobreak, confirma que Júlia permaneceu lá durante o blecaute. Esse registro reforça a inocência da assistente de curadoria."
      }
    ],
    hints: [
      "Preste atenção no apagão: o corte do cabo veio do desgaste ou foi intencional? Relacione a perícia do cabo com os horários das câmeras no térreo.",
      "Compare o depoimento do segurança com a câmera do pavimento superior. Ele disse que fez uma ronda de oito minutos sem parar — as imagens contam outra história.",
      "As evidências decisivas fecham um círculo: o cabo cortado propositalmente, a ausência de Eduardo nas câmeras durante o blecaute e a pegada com tinta da sala de manutenção no local do furto."
    ],
    answerOptions: [
      { id: "sus:eduardo", label: "Eduardo Sartori", sub: "Segurança noturno" },
      { id: "sus:julia", label: "Júlia Prado", sub: "Assistente de curadoria" },
      { id: "sus:teresa", label: "Teresa Molina", sub: "Restauradora convidada" },
      { id: "concl:fora", label: "Ladrão de fora", sub: "Sem relação com a galeria" }
    ],
    solution: {
      correctAnswer: "sus:eduardo",
      title: "Eduardo Sartori, o segurança",
      motive: "Eduardo acumulava dívidas de jogo e tinha uma negociação alinhavada para vender a \"Maré Alta\" em um leilão paralelo no fim de semana seguinte. Conhecia o circuito de câmeras e tinha chave da porta de serviço.",
      sequence: [
        "Dias antes, Eduardo identifica que a única forma de furtar sem ser visto é apagar as luzes e as câmeras ao mesmo tempo.",
        "No dia do evento, ele corta o cabo de energia com o alicate do kit, em um ponto fora do alcance das câmeras.",
        "O blecaute derruba as câmeras às 21h10; Eduardo sai da ronda no pavimento superior às 21h09 e desce pelo corredor de serviço.",
        "Abre o salão com a chave, corta o lacre, retira o quadro e o esconde na sala de manutenção.",
        "Volta à rota de ronda às 21h15, como se nada tivesse acontecido, para retirar a tela dali mais tarde."
      ],
      decisiveEvidence: ["ev_cable", "ev_upcam", "ev_footprint"],
      reasoning: "A única pessoa que tinha, ao mesmo tempo, a chave da porta de serviço, o conhecimento do circuito elétrico, a ferramenta para cortar o cabo e a liberdade de circular sem despertar atenção era o segurança. A pegada com tinta azul da sala de manutenção o liga ao local exato do furto; a câmera do pavimento superior mostra que ele não estava onde afirmou durante o blecaute; e o cabo cortado de forma intencional revela o método: provocar o apagão para tirar as câmeras de cena no momento exato em que a tela sumia. A cadeia de horários fecha com Eduardo Sartori.",
      exclusions: [
        { who: "Júlia Prado", why: "A câmera da sala técnica, protegida por nobreak, a mostra no local durante todo o blecaute. Possuir a chave, sozinha, não sustenta a acusação." },
        { who: "Teresa Molina", why: "Três testemunhas independentes a viram no salão durante todo o evento. Ela também não tem chave da porta de serviço, que estava trancada por dentro." },
        { who: "Ladrão de fora", why: "A porta de serviço não apresenta sinais de arrombamento, e a câmera que voltou a gravar às 21h13 não registra ninguém estranho no corredor." }
      ]
    }
  };
/* ============================================================
     CASO 2 — ROUBO, NÍVEL 2
     ============================================================ */
  var C2 = {
    id: "r02",
    code: "R-02",
    title: "O Cofre da Cooperativa Cordilheira",
    category: "roubos",
    difficulty: 2,
    brief: "Na manhã de sábado, o gerente Valdir Castro encontrou o cofre da Cooperativa de Crédito Cordilheira aberto e vazio. Os R$ 40 mil reservados para o pagamento de fornecedores na segunda-feira desapareceram. O cofre exige duas ações simultâneas: a chave-mestra e a senha numérica, que só o gerente e a caixa autorizada conhecem.",
    context: "A cooperativa funciona em um escritório térreo na Avenida das Acácias. Na sexta-feira, o técnico de alarmes foi agendado para manutenção à tarde. O cofre fica na sala de gerência, ao lado do guichê de atendimento.",
    date: "Sexta-feira, 12 de abril · manutenção do alarme às 14h50 · furto descoberto no sábado às 8h20",
    suspects: [
      {
        id: "renato",
        name: "Renato Ignácio",
        role: "Técnico de manutenção de alarmes",
        age: 33,
        profile: [
          "Contratado da empresa que monitora o alarme da cooperativa; faz a manutenção semestral.",
          "Trabalhou no painel elétrico do alarme, no saguão, na sexta à tarde."
        ],
        behavior: "Saiu do prédio apressado, segundo a recepção. Não deixou outro contato além do fixo da empresa.",
        alibi: "Afirma que deixou a cooperativa logo depois do almoço, por volta das 15h10."
      },
      {
        id: "valdir",
        name: "Valdir Castro",
        role: "Gerente da cooperativa",
        age: 47,
        profile: [
          "Único com a chave-mestra do cofre e com permissão para alterar as configurações.",
          "Costuma anotar a senha em um cartão que guarda na gaveta da mesa."
        ],
        behavior: "Encontrou o cofre aberto na manhã de sábado e acionou a polícia imediatamente. Colaborou mostrando os registros.",
        alibi: "Reunião externa na associação comercial das 15h às 17h, confirmada por participantes e pela catraca."
      },
      {
        id: "amanda",
        name: "Amanda Ruiz",
        role: "Caixa",
        age: 31,
        profile: [
          "Tem autorização para abrir o cofre com a senha, mas não possui a chave-mestra.",
          "Era a única funcionária no guichê na tarde de sexta."
        ],
        behavior: "Permaneceu no guichê durante todo o expediente. As câmeras internas confirmam o atendimento contínuo.",
        alibi: "Atendendo no guichê entre 14h50 e 16h50, com intervalo curto de almoço às 13h."
      },
      {
        id: "beatriz",
        name: "Beatriz Almeida",
        role: "Auxiliar administrativa",
        age: 26,
        profile: [
          "Trabalhava na sala ao lado da gerência e conhecia a rotina do cofre.",
          "Não possui senha nem chave-mestra."
        ],
        behavior: "Saiu às 15h da sexta. A catraca registra a saída dela no horário.",
        alibi: "Fora do prédio desde as 15h, segundo a catraca e o cartão de ponto."
      }
    ],
    testimonies: [
      {
        id: "t_silvia",
        person: "Silvia Ramos",
        role: "Recepcionista",
        text: "Na sexta à tarde estava só eu, a Amanda e a Beatriz. O técnico chegou por volta das 14h50, com uma maleta de ferramentas, e foi direto ao saguão onde fica o painel do alarme. Ele ficou algum tempo e saiu apressado. Não me lembro da hora exata, mas foi depois das 16h, porque eu já estava fechando a agenda."
      },
      {
        id: "t_renato",
        person: "Renato Ignácio",
        role: "Técnico de alarmes",
        text: "Cheguei às 14h50, fiz o teste do sistema em dez minutos e fui embora, por volta das 15h10. Só trabalhei no painel do alarme, no saguão. Nunca encostei no cofre — aquilo é área do banco. Não sei quem mexeu no horário dele; o cofre é do gerente, não é serviço da minha empresa."
      },
      {
        id: "t_valdir",
        person: "Valdir Castro",
        role: "Gerente",
        text: "Eu saí às 14h45 para a reunião da associação. A chave-mestra fica na minha gaveta, sempre trancada. Quanto à senha, eu tenho guardada sim, para não esquecer — mas quem poderia achar aquele cartão no lixo e entender o que era? Na segunda eu pagaria os fornecedores. Isso foi um golpe planejado."
      },
      {
        id: "t_amanda",
        person: "Amanda Ruiz",
        role: "Caixa",
        text: "Fiquei no guichê a tarde inteira, posso provar pela fila de atendimento. O técnico circulou pelo saguão e depois pediu para ver a sala da gerência porque o quadro de força ficava perto do painel do alarme. Eu deixei entrar, achei normal. Ele saiu de lá com a maleta, mas não vi o que fez aqui dentro."
      },
      {
        id: "t_beatriz",
        person: "Beatriz Almeida",
        role: "Auxiliar administrativa",
        text: "Saí às 15h em ponto, como sempre. No estacionamento, vi o técnico conversando no portão com alguém num carro prata. Só prestei atenção porque ele saiu tão rápido que parecia ter esquecido alguma coisa lá dentro."
      },
      {
        id: "t_tec",
        person: "Perito da fábrica do cofre",
        role: "Especialista chamado após o furto",
        text: "Quando conectei o cofre ao computador, identifiquei um ajuste de 42 minutos no relógio interno, feito pelo menu de manutenção — que exige a chave-mestra e a senha do gerente. Depois desse ajuste, qualquer abertura ficou registrada com o horário errado, adiantado."
      }
    ],
timeline: [
      { time: "13h30", event: "Valdir confere o cofre e a programação de pagamentos da semana." },
      { time: "14h45", event: "Valdir sai para a reunião na associação comercial." },
      { time: "14h50", event: "Renato chega para a manutenção do alarme; Amanda o encontra no saguão." },
      { time: "15h00", event: "Beatriz encerra o expediente e a catraca registra a saída dela." },
      { time: "15h22", event: "O painel do alarme entra em \"modo manutenção\" (alarme desativado)." },
      { time: "15h30", event: "Abertura real do cofre (horário obtido após corrigir o relógio adiantado em 42 minutos)." },
      { time: "16h12", event: "Registro adulterado do cofre: horário fictício gerado pelo relógio adiantado." },
      { time: "16h28", event: "A câmera do estacionamento registra o carro de Renato deixando o prédio." },
      { time: "08h20", event: "Sábado: Valdir encontra o cofre aberto e vazio e aciona a polícia." }
    ],
    evidence: [
      {
        id: "ev_log",
        title: "Relógio do cofre adulterado",
        type: "Registro",
        icon: "clock",
        summary: "O cofre registrava abertura às 16h12, mas o relógio interno estava 42 minutos adiantado.",
        description: "O perito da fábrica identificou um ajuste de 42 minutos no relógio interno, pelo menu de manutenção — que exige a chave-mestra e a senha do gerente. Corrigindo o relógio, a verdadeira abertura ocorreu às 15h30, e não às 16h12.",
        significance: "O horário foi manipulado de propósito: com o registro mostrando 16h12, pareceria que o furto ocorreu depois que o técnico já tinha saído do prédio."
      },
      {
        id: "ev_fp",
        title: "Impressão digital na porta do cofre",
        type: "Vestígio",
        icon: "fingerprint",
        summary: "Impressão digital de Renato Ignácio na parte interna da porta do cofre.",
        description: "O técnico trabalhou apenas no painel do alarme, no saguão. Ainda assim, a impressão dele foi encontrada na superfície interna da porta do cofre — área que só é tocada por quem abre o compartimento e manuseia o interior.",
        significance: "A presença de Renato dentro do cofre contradiz frontalmente a função que ele afirma ter executado."
      },
      {
        id: "ev_car",
        title: "Câmera do estacionamento",
        type: "Registro de imagem",
        icon: "camera",
        summary: "O carro prata de Renato deixou o estacionamento às 16h28, não às 15h10.",
        description: "A câmera do estacionamento da cooperativa registra a saída do veículo prata às 16h28 de sexta-feira. Em depoimento, o técnico afirmou ter ido embora por volta das 15h10.",
        significance: "O técnico permaneceu no prédio mais de uma hora além do horário que declarou."
      },
      {
        id: "ev_postit",
        title: "Cartão com a senha",
        type: "Objeto apreendido",
        icon: "doc",
        summary: "Cartão manuscrito com os dígitos da senha encontrado no lixo da gerência.",
        description: "No lixo da sala de gerência foi encontrado um cartão com a sequência de dígitos da senha do cofre. Valdir admite que costuma anotá-la, mas jura ter descartado o cartão na semana anterior. A gaveta onde a chave-mestra fica guardada estava destravada.",
        significance: "A \"dúpla segurança\" enfraquece quando a senha existe por escrito e a chave está acessível a quem entra na sala."
      },
      {
        id: "ev_alarm",
        title: "Painel em modo manutenção",
        type: "Registro",
        icon: "alarm",
        summary: "Alarme desativado das 15h22 às 16h30, muito além dos 10 minutos declarados.",
        description: "A central de monitoramento registrou \"modo manutenção\" das 15h22 às 16h30 de sexta. Renato declarou que o teste durou 10 minutos, às 14h50. O intervalo coincide exatamente com o horário real do furto.",
        significance: "O alarme foi propositalmente desativado para que a abertura do cofre não gerasse alerta."
      },
      {
        id: "ev_guiche",
        title: "Câmera do guichê",
        type: "Registro de imagem",
        icon: "screen",
        summary: "Mostra Amanda atendendo continuamente entre 14h50 e 16h50.",
        description: "A câmera do guichê registra Amanda no atendimento ao público de forma contínua na tarde de sexta. O intervalo do almoço, das 13h às 13h30, ocorreu antes da manutenção.",
        significance: "O álibi da caixa é consistente; ela não esteve na sala de gerência no horário do furto."
      },
      {
        id: "ev_meeting",
        title: "Registro de reunião externa",
        type: "Documento",
        icon: "calendar",
        summary: "Valdir esteve fora do prédio das 15h às 17h, confirmado pela catraca e por participantes.",
        description: "O registro da associação comercial lista Valdir presente das 15h às 17h. Dois participantes confirmam. A catraca do prédio não registra entrada dele antes das 17h10.",
        significance: "O gerente não estava no prédio no horário real da abertura do cofre."
      }
    ],
    contradictions: [
      {
        id: "c_relogio",
        title: "Horário do cofre x horário real",
        type: "contradiction",
        between: "Registro do cofre (16h12) x Relógio interno corrigido",
        analysis: "O relógio do cofre foi adiantado em 42 minutos. O furto real ocorreu às 15h30 — quando o técnico ainda estava no prédio, exatamente o contrário da cena montada para que parecesse ocorrer após a saída dele."
      },
      {
        id: "c_saida",
        title: "Saída às 15h10 x câmera",
        type: "contradiction",
        between: "Depoimento de Renato Ignácio x Câmera do estacionamento",
        analysis: "Renato afirmou ter ido embora por volta das 15h10, mas o carro dele deixou o estacionamento às 16h28. Ele passou o horário real do furto dentro do prédio."
      },
      {
        id: "c_alarme",
        title: "Teste de 10 minutos x painel",
        type: "contradiction",
        between: "Depoimento de Renato x Central de monitoramento",
        analysis: "Renato disse que o teste durou 10 minutos às 14h50. A central registra \"modo manutenção\" das 15h22 às 16h30 — justamente o intervalo do furto, com o alarme propositalmente desligado."
      },
      {
        id: "c_beatriz",
        title: "Expediente de Beatriz",
        type: "confirmation",
        between: "Depoimento de Beatriz x Catraca",
        analysis: "A catraca registra a saída de Beatriz às 15h. Ela não teve acesso à sala da gerência no horário do furto e não possui senha nem chave-mestra."
      }
    ],
    hints: [
      "O cofre \"diz\" um horário, mas o relógio interno conta outra história. O que significa alguém adiantar o relógio de um cofre em 42 minutos?",
      "Compare a declaração do técnico sobre a hora em que saiu com a câmera do estacionamento e com o registro da central de alarmes. Ele esteve onde e quando?",
      "As evidências decisivas formam a cadeia: o relógio do cofre adulterado, a impressão digital de Renato na parte interna da porta e o carro dele deixando o estacionamento às 16h28."
    ],
    answerOptions: [
      { id: "sus:renato", label: "Renato Ignácio", sub: "Técnico de alarmes" },
      { id: "sus:valdir", label: "Valdir Castro", sub: "Gerente da cooperativa" },
      { id: "sus:amanda", label: "Amanda Ruiz", sub: "Caixa" },
      { id: "sus:beatriz", label: "Beatriz Almeida", sub: "Auxiliar administrativa" }
    ],
    solution: {
      correctAnswer: "sus:renato",
      title: "Renato Ignácio, o técnico de manutenção",
      motive: "Renato soube, por contatos do ramo, que na segunda-feira a cooperativa faria um grande pagamento a fornecedores. Antes disso, o escritório contava apenas com o alarme — que ele mesmo faria manutenção. O furto de R$ 40 mil era o alvo, e ele tinha a desculpa perfeita para estar no prédio e na sala da gerência.",
      sequence: [
        "Renato chega às 14h50 e, durante a \"manutenção\", localiza o cartão da senha no lixo da gerência e a chave-mestra na gaveta destravada.",
        "Ele deixa o alarme em modo manutenção às 15h22, para que o início da abertura do cofre não dispare alerta.",
        "Abre o cofre às 15h30, retira o dinheiro e ajusta o relógio interno em 42 minutos adiantados.",
        "Concluída a manobra, devolve a chave-mestra, sai às 16h28 e finge que tinha ido embora às 15h10.",
        "Se a polícia desconfiasse, o registro \"mostraria\" o furto às 16h12 — horário em que ninguém vinculado ao cofre estaria no prédio."
      ],
      decisiveEvidence: ["ev_log", "ev_fp", "ev_car"],
      reasoning: "O relógio do cofre foi adiantado em 42 minutos — alteração que só pode ser feita com a chave-mestra e a senha, mas com um detalhe: quem fez isso precisava estar na sala de gerência naquela tarde. A impressão digital de Renato na parte interna da porta o coloca como o operador da abertura, e a câmera do estacionamento prova que ele continuou no prédio às 16h28, contradizendo o álibi. A manipulação do relógio explica por que o registro \"apontava\" para um horário em que ele já teria saído. A queda de emendas e horários aponta, de forma única e coerente, para Renato Ignácio.",
      exclusions: [
        { who: "Valdir Castro", why: "A catraca e dois participantes confirmam que ele esteve das 15h às 17h fora do prédio, em uma reunião. Não pôde estar na sala no horário real da abertura." },
        { who: "Amanda Ruiz", why: "A câmera do guichê a mostra atendendo continuamente entre 14h50 e 16h50. Ela também não possui a chave-mestra para ajustar o relógio." },
        { who: "Beatriz Almeida", why: "Saiu às 15h (catraca) e não têm senha nem chave-mestra; não teve acesso à sala no momento do furto." }
      ]
    }
  };
/* ============================================================
     CASO 3 — DESAPARECIMENTO, NÍVEL 1
     ============================================================ */
  var C3 = {
    id: "d01",
    code: "D-01",
    title: "O Desaparecimento de Helena Vilela",
    category: "desaparecimentos",
    difficulty: 1,
    brief: "Helena Vilela, 34 anos, contadora, não apareceu para trabalhar na quinta-feira. O irmão Carlos registrou o desaparecimento na noite de quarta. O carro dela está na garagem do condomínio, o celular ficou em casa e não há sinais de luta no apartamento.",
    context: "Helena mora sozinha em um apartamento no Condomínio Jardins do Vale. Trabalha em um escritório de contabilidade no centro da cidade fictícia de Nova Esperança. Separou-se de Otávio há oito meses e tem dois filhos que vivem com o pai.",
    date: "Desaparecimento percebido na quinta-feira, 12 de junho · últimos registros na quarta-feira",
    suspects: [
      {
        id: "otavio",
        name: "Otávio Vilela",
        role: "Ex-marido de Helena",
        age: 39,
        profile: [
          "Separado há oito meses; pai dos dois filhos de Helena.",
          "Em depoimento afirmou que não mantém contato com a ex-mulher desde a separação."
        ],
        behavior: "Pareceu contrariado pelo registro do sumiço e insistiu que \"cada um seguiu seu caminho\".",
        alibi: "Diz que passou a noite em casa, sozinho, o que não pôde comprovar."
      },
      {
        id: "carlos",
        name: "Carlos Vilela",
        role: "Irmão de Helena",
        age: 31,
        profile: [
          "Mora a duas quadras do condomínio de Helena; registrou o desaparecimento.",
          "Descreveu a irmã como organizada e apegada aos filhos."
        ],
        behavior: "Procurou a polícia nas primeiras horas; forneceu fotos e contatos rapidamente.",
        alibi: "Trabalhou na quarta à noite, confirmado pelo cartão de ponto da padaria onde é gerente."
      },
      {
        id: "paula",
        name: "Paula Mendes",
        role: "Colega de trabalho",
        age: 35,
        profile: [
          "Trabalha na mesma mesa que Helena no escritório de contabilidade.",
          "Foi a primeira a estranhar a falta de Helena na quinta."
        ],
        behavior: "Contou que Helena estava \"estranha\" na última semana e evitava falar de dinheiro e do ex-marido.",
        alibi: "Estava no escritório na quinta; sem vínculo direto com a noite de quarta."
      }
    ],
    testimonies: [
      {
        id: "t_carlos",
        person: "Carlos Vilela",
        role: "Irmão",
        text: "Minha irmã não ia sumir sem avisar os meninos. Ela adora os filhos, vive em função deles. Na quarta ela me mandou mensagem dizendo que estava cansada, mas que quinta a gente se falava. Quando não apareceu no trabalho e não atendeu o celular, eu logo fui registrar. Isso não é normal."
      },
      {
        id: "t_otavio",
        person: "Otávio Vilela",
        role: "Ex-marido",
        text: "Nós não nos falamos desde a separação, cada um seguiu o seu lado. As crianças ficam comigo, ponto. Eu fiquei em casa na quarta à noite vendo televisão, sozinho. Não tenho como provar, mas também ninguém tem como dizer o contrário. Ela sumiu? Ela sempre foi esquisita para decisões assim, não me surpreende."
      },
      {
        id: "t_paula",
        person: "Paula Mendes",
        role: "Colega de trabalho",
        text: "Na semana passada ela estava diferente: desligada, olhando o celular e suspirando. Eu perguntei se estava com dívidas, ela negou. Na quarta ela guardou na bolsa uns papéis e disse que ia adiantar a vida dela. Eu achei que era conversa... até ela não aparecer na quinta. A Helena nunca faltava."
      },
      {
        id: "t_vigia",
        person: "Seu Zé",
        role: "Vigia do condomínio",
        text: "Na quarta, perto das vinte e meia, vi a Helena saindo pela garagem com uma mala pequena e uma mochila. Ela acenou pra mim como sempre. Não vi ninguém com ela. Ela parecia calma, até sorriu. Não tinha cara de quem estava sendo levada."
      }
    ],
timeline: [
      { time: "18h00", event: "Helena sai do escritório de contabilidade, como de costume." },
      { time: "19h15", event: "Uma vizinha vê Helena chegando em casa com duas sacolas." },
      { time: "20h30", event: "A câmera do condomínio registra Helena saindo sozinha, com mala pequena e mochila." },
      { time: "21h38", event: "Uma mulher com as mesmas roupas de Helena embarca na rodoviária de Nova Esperança." },
      { time: "23h00", event: "O padrão de localização do celular de Helena encerra em casa — o aparelho jamais saiu do apartamento." },
      { time: "08h30", event: "Quinta-feira: Paula estranha a falta de Helena no trabalho e liga para Carlos." },
      { time: "19h00", event: "Carlos registra o desaparecimento na delegacia." }
    ],
    evidence: [
      {
        id: "ev_msg",
        title: "Mensagens e anotações",
        type: "Registro",
        icon: "chat",
        summary: "Conversas mostram Helena decidida a \"recomeçar\" e uma agenda com passagem de ônibus confirmada.",
        description: "No celular deixado em casa, a perícia encontrou conversas com a irmã sobre juntar dinheiro e \"dar um tempo da cidade\". Na agenda física, uma anotação na quarta-feira: \"21h — Rodoviária — passagem confirmada\".",
        significance: "Há indícios claros de um plano, e não de uma partida súbita e forçada."
      },
      {
        id: "ev_condcam",
        title: "Câmera do condomínio",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Helena sai da garagem sozinha às 20h30, com mala pequena e mochila.",
        description: "Não há imagens de acompanhantes. Helena cruza o saguão calmamente, faz um gesto ao vigia e sai pela garagem a pé. A câmera do portão de pedestres a registra virando a esquina.",
        significance: "A saída foi voluntária e tranquila; não há cena de coerção nem de pressa."
      },
      {
        id: "ev_rodcam",
        title: "Câmera e bilhete da rodoviária",
        type: "Registro de imagem",
        icon: "bus",
        summary: "Uma mulher idêntica a Helena embarca às 21h38 num ônibus para Monte Azul.",
        description: "A câmera da plataforma 3 mostra uma mulher com as mesmas roupas (jaqueta mostarda) e a mesma mala pequena. O bilhete foi comprado online às 17h02, em nome de solteira dela: Helena Duarte.",
        significance: "Helena embarcou por vontade própria; a pergunta passa a ser por que foi assim, sem avisar ninguém."
      },
      {
        id: "ev_apart",
        title: "Estado do apartamento",
        type: "Perícia",
        icon: "home",
        summary: "Móveis intactos, sem sinais de luta; roupas, passaporte, carteira e carregador sumiram.",
        description: "A perícia não encontrou vestígios de violência. O guarda-roupa está com faltas significativas de roupas de verão. O carregador do celular — que a perícia aponta como item levado por quem viaja — não está no apartamento, assim como carteira e passaporte.",
        significance: "Tudo indica uma partida preparada com antecedência, não uma remoção forçada da vítima."
      },
      {
        id: "ev_pensao",
        title: "Mensagens sobre os filhos",
        type: "Registro",
        icon: "chat",
        summary: "Helena e Otávio combinaram, dias antes, o fim de semana em que os filhos ficariam com ela.",
        description: "Ao contrário do que Otávio declarou (\"não falamos\"), há mensagens recentes e amigáveis: Helena confirmou que os filhos passariam o próximo fim de semana com ela e pediu que Otávio trouxesse as mochilas no sábado. Nenhum tom de ameaça.",
        significance: "A declaração de Otávio contém uma imprecisão relevante, mas também revela uma relação funcional — não uma relação de risco."
      }
    ],
    contradictions: [
      {
        id: "c_otavio",
        title: "Declaração de Otávio x mensagens",
        type: "contradiction",
        between: "Depoimento de Otávio Vilela x Registros de mensagens",
        analysis: "Otávio afirmou que não mantém contato com Helena desde a separação. As mensagens mostram combinações recentes e amigáveis sobre os filhos. A inconsistência é sobre o relacionamento dos dois, e não sobre um crime."
      },
      {
        id: "c_chegada",
        title: "Partida forçada x partida preparada",
        type: "contradiction",
        between: "Versão de sequestro x Itens que sumiram do apartamento",
        analysis: "Roupas de verão, passaporte, carteira e carregador ausentes, sem sinais de luta, apontam para uma partida planejada. Quem é levado à força não arruma a própria mala."
      },
      {
        id: "c_paula",
        title: "Impressão de Paula",
        type: "confirmation",
        between: "Depoimento de Paula Mendes x Anotações de Helena",
        analysis: "Paula percebeu Helena \"estranha\" e falando em adiantar a vida. Isso é totalmente compatível com alguém que estava planejando partir de propósito."
      }
    ],
    hints: [
      "Nem todo desaparecimento é crime. Examine o que sumiu do apartamento e compare com a \"impressão\" que as pessoas tiveram de Helena nos últimos dias.",
      "Siga as câmeras: condomínio e rodoviária. Depois ligue a anotação da agenda à compra do bilhete.",
      "As evidências decisivas são as mensagens e anotações mostrando um plano, a câmera do condomínio com a saída tranquila e o embarque registrado na rodoviária."
    ],
    answerOptions: [
      { id: "concl:voluntaria", label: "Helena partiu por vontade própria", sub: "Sem crime envolvido" },
      { id: "sus:otavio", label: "Otávio Vilela", sub: "Ex-marido" },
      { id: "sus:carlos", label: "Carlos Vilela", sub: "Irmão" },
      { id: "sus:paula", label: "Paula Mendes", sub: "Colega de trabalho" }
    ],
    solution: {
      correctAnswer: "concl:voluntaria",
      title: "Helena partiu por vontade própria",
      motive: "Helena atravessava o desgaste do divórcio e dívidas acumuladas. Decidiu recomeçar a vida em Monte Azul, onde tem uma prima, sem comunicar a ninguém — deixando o celular de propósito para não ser rastreada durante a viagem.",
      sequence: [
        "Nos dias anteriores, Helena conversa com a irmã sobre recomeçar e compra, online, a passagem para Monte Azul em nome de solteira.",
        "Na quarta, após o trabalho, ela arruma a mala com roupas de verão, documentos e dinheiro, deixando o celular em casa.",
        "Às 20h30 sai do condomínio sozinha, acena para o vigia e segue a pé para a rodoviária.",
        "Às 21h38 embarca no ônibus das 21h40 para Monte Azul e se apresenta aos policiais locais no dia seguinte, em segurança.",
        "Investigações em Monte Azul confirmaram que Helena está bem e descreveu a saída como decisão pessoal."
      ],
      decisiveEvidence: ["ev_msg", "ev_condcam", "ev_rodcam"],
      reasoning: "As mensagens e a anotação da agenda mostram um plano deliberado; a câmera do condomínio registra uma saída calma e voluntária; e a câmera da rodoviária, somada ao bilhete em nome de solteira, confirma o embarque. Não há indício de violência, sequestro ou morte. O caso foi encerrado como desaparecimento de pessoa que partiu voluntariamente — não como crime.",
      exclusions: [
        { who: "Otávio Vilela", why: "Apesar da imprecisão na declaração, as mensagens mostram uma relação funcional sobre os filhos. Nenhuma evidência o coloca no condomínio ou na rodoviária, e não há vestígio de coerção." },
        { who: "Carlos Vilela", why: "O irmão registrou o caso e estava trabalhando na quarta à noite, com cartão de ponto. Não há nenhuma evidência contra ele." },
        { who: "Paula Mendes", why: "Paula apenas notou a mudança de comportamento de Helena. Sem vínculo com a noite de quarta e sem qualquer evidência de participação." }
      ]
    }
  };
/* ============================================================
     CASO 4 — DESAPARECIMENTO, NÍVEL 2
     ============================================================ */
  var C4 = {
    id: "d02",
    code: "D-02",
    title: "O Contador de Porto Santo",
    category: "desaparecimentos",
    difficulty: 2,
    brief: "Marcos Tavares, 38 anos, contador da Distribuidora Beira-Mar, saiu na sexta-feira à noite para uma pescaria e não voltou. O barco emprestado pelo irmão Roni foi encontrado à deriva na manhã seguinte, com o colete salva-vidas de Marcos a bordo, mas sem sinais dele. Não há corpo. No mesmo dia, a empresa descobriu que R$ 120 mil desapareceram dos cofres.",
    context: "A Distribuidora Beira-Mar movimenta mercadorias no porto fictício de Porto Santo. Marcos controlava sozinho os pagamentos e as conciliações bancárias. O barco de pesca, de três metros, foi achado ancorado a duzentos metros de uma marina com acesso à rodovia.",
    date: "Sexta-feira, 19 de setembro · saída às 20h30 · barco encontrado no sábado às 6h20",
    suspects: [
      {
        id: "roni",
        name: "Roni Tavares",
        role: "Irmão de Marcos, pescador",
        age: 42,
        profile: [
          "Dono do barco usado por Marcos; é pescador profissional.",
          "Declarou que Marcos tinha medo de água e não sabia navegar direito."
        ],
        behavior: "Muito nervoso no primeiro depoimento; depois ficou evasivo sobre o horário em que emprestou o barco.",
        alibi: "Diz que passou a noite em casa, sozinho, assistindo a um campeonato de futebol."
      },
      {
        id: "ivan",
        name: "Ivan Cruz",
        role: "Sócio-gerente da Distribuidora",
        age: 50,
        profile: [
          "Dividia a gestão com Marcos; cuidava de vendas e contratos.",
          "Descobriu o desvio ao auditar os extratos após o sumiço."
        ],
        behavior: "Procurou a polícia para entregar a auditoria completa; pediu para que o caso fosse tratado com discrição.",
        alibi: "Jantava com clientes na cidade na sexta à noite, confirmado por três pessoas."
      },
      {
        id: "lidia",
        name: "Lídia Sampaio",
        role: "Conselheira financeira",
        age: 45,
        profile: [
          "Atendia Marcos há dois anos, inclusive em questões pessoais de dívidas.",
          "Confirmou que Marcos procurava planos de \"recomeço\" e falava em vender o barco emprestado."
        ],
        behavior: "Entregou os registros das consultas sem hesitar; destacou o endividamento de Marcos.",
        alibi: "Estava em uma palestra financeira em outra cidade na sexta à noite."
      },
      {
        id: "sergio",
        name: "Sérgio Mendes",
        role: "Colega de trabalho",
        age: 36,
        profile: [
          "Trabalhava ao lado de Marcos na área contábil; fazia o lançamento de notas.",
          "Disse que Marcos vivia \"no limite com o banco\" e recebia muitas ligações de cobrança."
        ],
        behavior: "Confuso no depoimento, mas sem qualquer ligação com a noite do sumiço.",
        alibi: "Trabalhou até 19h na sexta e seguiu direto para casa, confirmado pela esposa."
      }
    ],
    testimonies: [
      {
        id: "t_roni",
        person: "Roni Tavares",
        role: "Irmão e dono do barco",
        text: "Deixei o barco na rampa para ele, como ele pediu. Eu tentei convencê-lo a não ir, ele nunca foi bom de remo nem de mar. Mas insistiu que queria pescar sozinho naquela noite. Quando amanheceu e não achamos ele, fui o primeiro a sair procurando. Achei o barco ancorado, com o colete dele. Não sei o que aconteceu."
      },
      {
        id: "t_ivan",
        person: "Ivan Cruz",
        role: "Sócio-gerente",
        text: "Marcos era um funcionário brilhante, mas eu nunca tive acesso ao caixa. Quando ele sumiu, fui fechar o mês e encontrei oito transferências que ele fez, todas com recibo assinado. R$ 120 mil. Hoje eu acredito que ele não se afogou: ele foi embora com o dinheiro. Juro que só descobri isso depois do desaparecimento."
      },
      {
        id: "t_lidia",
        person: "Lídia Sampaio",
        role: "Conselheira financeira",
        text: "Marcos vinha aqui há um ano escondendo as dívidas. Dívidas de jogo, várias. Duas semanas antes do sumiço ele perguntou como uma pessoa podia \"sumir do mapa\" financeiramente — contas, cartões, tudo. Eu achei que era preocupação com dólar. Pelos relatórios que tenho aqui, aquilo tudo estava planejado."
      },
      {
        id: "t_sergio",
        person: "Sérgio Mendes",
        role: "Colega de trabalho",
        text: "Na quinta ele estava estranhamente calmo, até brincou dizendo que \"ia dar uma de peixe\". Eu ri. Se eu soubesse que era a última vez... O Marcos nunca levava a vida tão relaxado. E olha que eu estava por perto quando ele guardava as chaves do cofre, no dia do pagamento."
      }
    ],
timeline: [
      { time: "18h30", event: "Marcos sai da Distribuidora Beira-Mar após o expediente." },
      { time: "20h25", event: "Uma testemunha vê Marcos chegando sozinho à rampa de embarcações com o barco de Roni." },
      { time: "20h30", event: "O barco desatraca da rampa. Ninguém mais é visto embarcando." },
      { time: "21h05", event: "O celular de Marcos é desligado manualmente (dados da operadora)." },
      { time: "23h40", event: "A câmera do Posto Guardiano, na BR-340, registra Marcos dirigindo um carro naquela noite." },
      { time: "06h20", event: "Sábado: o barco é encontrado ancorado a 200 m da marina, com o colete no convés." },
      { time: "10h00", event: "Ivan conclui a auditoria e encontra as oito transferências do desvio." }
    ],
    evidence: [
      {
        id: "ev_boat",
        title: "Análise do barco",
        type: "Perícia",
        icon: "boat",
        summary: "O barco estava ancorado, com o interior do compartimento fechado e seco.",
        description: "O barco foi achado com o tanque cheio e as varas no lugar. A porta do compartimento interno estava fechada e seca por dentro. Um barco à deriva em mar aberto, com água subindo, não terminaria ancorado nem seco no interior.",
        significance: "O barco não naufragou ali nem ficou à deriva: foi posicionado deliberadamente — o que esvazia a versão do acidente."
      },
      {
        id: "ev_bank",
        title: "Movimentação financeira",
        type: "Documento",
        icon: "bank",
        summary: "Oito transferências somando R$ 120 mil, todas assinadas por Marcos, nos últimos 90 dias.",
        description: "A auditoria encontrou oito transferências para contas de terceiros, com recibos assinados por Marcos e lançadas apenas por ele. O valor total é de R$ 120 mil — que não consta em nenhum contrato ou nota fiscal da empresa.",
        significance: "Marcos desviava dinheiro da empresa antes de sumir: o desaparecimento convenientemente encobre um desvio de R$ 120 mil."
      },
      {
        id: "ev_gas",
        title: "Câmera do posto da BR-340",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Marcos aparece dirigindo a caminhonete azul de Roni às 23h40 de sexta.",
        description: "A câmera da conveniência do Posto Guardiano registra Marcos abastecendo uma caminhonete azul — o mesmo veículo de Roni — às 23h40 de sexta-feira. Ele estava a mais de uma hora de distância de onde o barco foi encontrado.",
        significance: "Marcos saiu da água e seguiu por terra naquela mesma noite. A versão do acidente não resiste a essa imagem."
      },
      {
        id: "ev_phone",
        title: "Desligamento do celular",
        type: "Registro",
        icon: "phone",
        summary: "O celular de Marcos foi desligado manualmente às 21h05, antes de qualquer incidente.",
        description: "A operadora registra que o aparelho foi desligado às 21h05, ainda na área de cobertura da marina. O desligamento foi manual — aparelho não molhou e não sofreu queda.",
        significance: "Quem vai pescar não desliga o celular antes da linha do horizonte. O desligamento proposital é típico de quem não quer ser rastreado."
      },
      {
        id: "ev_insurance",
        title: "Apolice contratada há 40 dias",
        type: "Documento",
        icon: "doc",
        summary: "Seguro de vida e cobertura de \"acidente pessoal\" contratados para Marcos há 40 dias.",
        description: "A Distribuidora contratou, há 40 dias, um seguro de vida com cobertura estendida para \"acidente pessoal\" em nome de Marcos. O beneficiário é a própria empresa. Documentação encaminhada pela corretora.",
        significance: "A montagem de um \"acidente\" daria à empresa um recebimento de seguro — mas quem monta o próprio acidente costuma ser o próprio beneficiário dos fatos."
      }
    ],
    contradictions: [
      {
        id: "c_barco",
        title: "Barco à deriva x ancorado e seco",
        type: "contradiction",
        between: "Versão de acidente x Perícia do barco",
        analysis: "Um barco de pesca acidentado não ficaria ancorado e seco no interior. Alguém o posicionou ali de propósito, o que indica que o desaparecimento foi encenado."
      },
      {
        id: "c_medo",
        title: "Medo de água x pescaria noturna",
        type: "contradiction",
        between: "Depoimento de Roni Tavares x Comportamento incomum",
        analysis: "Roni garante que Marcos tinha pavor de água e mal sabia guiar o barco. Ir pescar sozinho à noite seria totalmente fora do padrão — um detalhe de quem está montando uma cena, não vivendo um acidente."
      },
      {
        id: "c_sinal",
        title: "Celular desligado às 21h05",
        type: "contradiction",
        between: "Desligamento manual x Versão de acidente",
        analysis: "Se houvesse acidente na água, esperaríamos um aparelho perdido ou molhado. O desligamento manual, ainda perto da marina, é comportamento de quem planeja sumir."
      },
      {
        id: "c_ivan",
        title: "Descoberta do sócio",
        type: "confirmation",
        between: "Auditoria de Ivan Cruz x Transferências",
        analysis: "Ivan apresentou a auditoria espontaneamente. O desvio só veio à tona com o sumiço, e os recibos apontam para Marcos como autor das transferências — não para Ivan."
      }
    ],
    hints: [
      "Questione a cena: um barco \"à deriva\" estava ancorado, com o interior seco e o tanque cheio. O que isso diz sobre a versão do acidente?",
      "Confronte o medo de água declarado por Roni com a \"pescaria noturna\" e verifique o celular e as câmeras da madrugada.",
      "As evidências decisivas: a análise do barco, as oito transferências de R$ 120 mil e a imagem de Marcos vivo na BR-340 naquela noite."
    ],
    answerOptions: [
      { id: "concl:simulacao", label: "Marcos simulou o próprio desaparecimento", sub: "Com auxílio do irmão" },
      { id: "concl:acidente", label: "Acidente na pescaria", sub: "Não há crime envolvido" },
      { id: "sus:roni", label: "Roni Tavares", sub: "Irmão e dono do barco" },
      { id: "sus:ivan", label: "Ivan Cruz", sub: "Sócio-gerente" }
    ],
    solution: {
      correctAnswer: "concl:simulacao",
      title: "Marcos simulou o próprio desaparecimento",
      motive: "Marcos tinha dívidas de jogo e havia desviado R$ 120 mil da empresa. Descobrir o desvio era apenas questão de tempo — o fechamento do mês. Ele montou um \"acidente de pesca\" para fugir do cerco e, de quebra, transformar a investigação em busca por um cadáver que nunca existiria.",
      sequence: [
        "Nas semanas anteriores, Marcos transfere R$ 120 mil em oito parcelas e contrata, pela empresa, um seguro que cobriria seu \"acidente pessoal\".",
        "Na sexta, ele deixa o trabalho e vai à rampa; pega o barco emprestado, sai do cais às 20h30.",
        "Desliga o celular às 21h05, navega até um ponto próximo da marina e ancora o barco, deixando o colete no convés.",
        "Sai por terra, pega a caminhonete azul de Roni na marina e segue pela BR-340 — registrado às 23h40 no posto Guardiano.",
        "Roni, pressionado, admite ter emprestado o veículo (a caminhonete vista nas imagens); Marcos está vivo e foi localizado em outra cidade."
      ],
      decisiveEvidence: ["ev_boat", "ev_bank", "ev_gas"],
      reasoning: "O barco ancorado, seco e com o tanque cheio desmonta a versão do naufrágio. As oito transferências de R$ 120 mil mostram o motivo: o dinheiro desviado. E a câmera do posto de gasolina prova que Marcos estava vivo e dirigindo depois do \"acidente\". A condenação da versão, a motivação financeira e a presença dele por terra na madrugada se conectam: o desaparecimento foi uma fuga planejada.",
      exclusions: [
        { who: "Ivan Cruz", why: "A auditoria foi entregue espontaneamente; os recibos são assinados por Marcos, e Ivan é que destaca cada transferência. Além disso, Ivan estava jantando com clientes confirmados no horário da saída de Marcos." },
        { who: "Roni Tavares", why: "Não há indício de violência por parte do irmão — ao contrário, ele auxiliou na fuga emprestando a caminhonete, conforme confessou depois. O protagonista do plano é Marcos." },
        { who: "Acidente na pescaria", why: "Um barco acidentado não termina ancorado e seco. O celular foi desligado manualmente antes de qualquer incidente, e Marcos foi visto dirigindo na BR-340 na mesma noite." }
      ]
    }
  };
/* ============================================================
     CASO 5 — FRAUDE, NÍVEL 1
     ============================================================ */
  var C5 = {
    id: "f01",
    code: "F-01",
    title: "A Fatura do Fornecedor Fantasma",
    category: "fraudes",
    difficulty: 1,
    brief: "A EletroLar, loja de eletrodomésticos da cidade fictícia de Vila Bela, pagou R$ 18 mil a uma \"Distribuidora Nexus\" por um lote de televisores que nunca chegou. O pagamento seguiu o fluxo correto: fatura, certificado de entrega assinado e baixa no sistema. O dono Pedro Saldanha encontrou o problema ao conferir o estoque no dia 18 de julho.",
    context: "A loja funciona em um galpão na Rua do Comércio, com estoque no fundo. Compras acima de R$ 10 mil precisam da aprovação do comprador e da gerência financeira. O estoquista é o responsável por conferir e assinar o recebimento das mercadorias.",
    date: "Fatura emitida em 03/07 · pagamento executado em 10/07 · fraude descoberta em 18/07",
    suspects: [
      {
        id: "claudio",
        name: "Cláudio Menezes",
        role: "Comprador",
        age: 44,
        profile: [
          "Responsável por cadastrar fornecedores e aprovar pedidos de compra.",
          "Trabalha na EletroLar há 12 anos; conhece bem o fluxo de aprovações."
        ],
        behavior: "Defendeu o fornecedor de forma veemente e revisou o contrato \"só depois\" de o dono questionar.",
        alibi: "Disse que apenas conferiu o CNPJ por telefone antes de aprovar."
      },
      {
        id: "ivone",
        name: "Ivone Duarte",
        role: "Gerente financeira",
        age: 51,
        profile: [
          "Autoriza pagamentos acima de R$ 10 mil; segue o fluxo aprovado pelo comprador.",
          "Não cadastra fornecedores — apenas recebe a documentação pronta."
        ],
        behavior: "Apresentou toda a papelada da operação em minutos, sem resistência.",
        alibi: "Autorizou o pagamento com base na fatura aprovada e no recibo de entrega assinado."
      },
      {
        id: "rafael",
        name: "Rafael Luz",
        role: "Estoquista",
        age: 28,
        profile: [
          "Recebe as entregas, confere os itens e assina os comprovantes.",
          "Trabalhou o mês inteiro na loja, inclusive na data da suposta entrega."
        ],
        behavior: "Negou terminantemente ter recebido qualquer carga da Nexus.",
        alibi: "No dia da suposta entrega, o registro de ponto mostra que ele não estava na loja."
      }
    ],
    testimonies: [
      {
        id: "t_claudio",
        person: "Cláudio Menezes",
        role: "Comprador",
        text: "Eu verifiquei o fornecedor sim. Liguei, confirmei o objeto da venda e apoiei a compra porque o preço estava ótimo. E o recebimento veio assinado, do contrário a Ivone não pagaria. Se alguém assinou como Rafael, isso é com o Rafael, não comigo. Empresa nova não é crime."
      },
      {
        id: "t_ivone",
        person: "Ivone Duarte",
        role: "Gerente financeira",
        text: "Meu procedimento é o de sempre: fatura corretamente emitida, aprovação do comprador e recibo de entrega assinado. Isso aconteceu nos três casos. Eu não tinha como saber que o fornecedor era recém-criado — quem cadastra é o comprador, não eu. R$ 18 mil é um valor normal para a loja."
      },
      {
        id: "t_rafael",
        person: "Rafael Luz",
        role: "Estoquista",
        text: "Eu nunca recebi mercadoria nenhuma da tal Nexus. No dia 9 de julho eu não estava no expediente, fui ao dentista de manhã e voltei à tarde — está no meu registro de ponto. E essa assinatura no recibo não é minha, olha aqui a minha no cartão de ponto. É uma cópia malfeita."
      },
      {
        id: "t_pedro",
        person: "Pedro Saldanha",
        role: "Dono da EletroLar",
        text: "Eu conferi o estoque no dia 18 porque a loja estava devendo TV de 50 polegadas há semanas. Nenhuma televisão da remessa entrou no sistema. Fui atrás da nota e descobri que pagamos R$ 18 mil para uma empresa que não tem nem loja física. Isso só pode ser gente de dentro, quem conhece os nossos procedimentos."
      }
    ],
    timeline: [
      { time: "20/06", event: "Cláudio cadastra a \"Distribuidora Nexus\" no sistema de fornecedores." },
      { time: "28/06", event: "A conta bancária para recebimento é incluída no cadastro, a partir da estação de compras." },
      { time: "03/07", event: "A fatura n.º 1448 da Nexus é lançada no sistema, com aprovação do comprador." },
      { time: "09/07", event: "Consta certificado de entrega assinado por \"Rafael Luz\" — dia em que Rafael esteve no dentista." },
      { time: "10/07", event: "Ivone autoriza e o banco transfere R$ 18 mil para a conta recém-incluída." },
      { time: "18/07", event: "Pedro confere o estoque, encontra a fraude e comunica a polícia." }
    ],
    evidence: [
      {
        id: "ev_cnpj",
        title: "Consulta ao CNPJ",
        type: "Documento",
        icon: "doc",
        summary: "A Distribuidora Nexus foi criada há três semanas, com endereço em um apartamento residencial.",
        description: "O CNPJ existe, mas a empresa não tem histórico de operação, telefone comercial ou endereço de galpão. O endereço registrado é um apartamento em bairro residencial. Empresa constituída às vésperas do pagamento é um dos sinais clássicos de fornecedor fantasma.",
        significance: "O fornecedor é uma fachada criada de propósito para receber o pagamento."
      },
      {
        id: "ev_sig",
        title: "Comparação de assinaturas",
        type: "Perícia",
        icon: "doc",
        summary: "A assinatura do \"Rafael\" no recibo não corresponde à assinatura oficial do estoquista.",
        description: "O comprovante de entrega foi comparado com a assinatura oficial de Rafael em documentos internos. A perícia confirmou que o recebimento foi assinado por outra pessoa, com tentativa de imitar a letra.",
        significance: "O certificado de entrega — a peça que \"provou\" a mercadoria — é falso."
      },
      {
        id: "ev_log",
        title: "Trilha de acesso ao cadastro",
        type: "Registro",
        icon: "track",
        summary: "A alteração do cadastro da Nexus foi feita a partir do computador de Cláudio.",
        description: "O sistema registra que a inclusão da conta bancária para recebimento, em 28/06 às 17h03, foi feita da estação \"COMPRAS-02\", atribuída a Cláudio Menezes. Seu login foi usado com usuário e senha válidos.",
        significance: "A ação que tornou a fraude possível partiu do computador do próprio comprador."
      },
      {
        id: "ev_mail",
        title: "E-mail de confirmação",
        type: "Registro",
        icon: "mail",
        summary: "A \"confirmação de entrega\" veio de um domínio que imita o padrão da fornecedora legítima.",
        description: "O e-mail veio de @nexus-distrib.com.br, enquanto o padrão correto da cúpula do setor é @nexusdist.com.br. A troca sutil é a assinatura de golpes por fornecedores falsos.",
        significance: "Reforça que a loja foi alvo de uma operação montada, não de um erro."
      },
      {
        id: "ev_conta",
        title: "Conta de pagamento",
        type: "Documento",
        icon: "bank",
        summary: "A conta para a qual o dinheiro foi enviado era recém-aberta e incluída dias antes do pagamento.",
        description: "A conta que recebeu os R$ 18 mil foi aberta em 20/06 e incluída no cadastro do fornecedor em 28/06. Nenhum pagamento anterior havia sido feito a ela.",
        significance: "O dinheiro foi parar em uma conta recém-criada, controlada por quem criou o fornecedor."
      },
      {
        id: "ev_estoque",
        title: "Conferência de estoque",
        type: "Perícia",
        icon: "box",
        summary: "Nenhuma televisão da remessa consta na entrada do estoque.",
        description: "O levantamento do estoque não encontrou qualquer item da suposta remessa da Nexus. Não há registro de entrada, não há nota de conferência e não há mercadoria.",
        significance: "A \"entrega\" nunca existiu de fato — apenas a papelada em que ela foi desenhada."
      }
    ],
    contradictions: [
      {
        id: "c_aprov",
        title: "Aprovação de Cláudio x CNPJ fraco",
        type: "contradiction",
        between: "Depoimento de Cláudio Menezes x Consulta do CNPJ",
        analysis: "Cláudio afirmou ter verificado o fornecedor, mas a empresa é recém-criada, sem histórico e com endereço em apartamento residencial. A \"verificação\" que ele diz ter feito não existiu."
      },
      {
        id: "c_sig",
        title: "Entrega assinada x assinatura falsa",
        type: "contradiction",
        between: "Certificado de entrega x Assinatura oficial de Rafael",
        analysis: "Rafael, o estoquista, nega ter recebido qualquer carga e estava no dentista no dia da suposta entrega. A assinatura no comprovante é incompatível com a dele."
      },
      {
        id: "c_conta",
        title: "Conta do pagamento alterada",
        type: "contradiction",
        between: "Cadastro do fornecedor x Conta recém-incluída",
        analysis: "A conta que recebeu o dinheiro foi cadastrada dias antes do pagamento, a partir da estação de compras. Não havia conta para pagamento na abertura do cadastro.",
      },
      {
        id: "c_ivone",
        title: "Fluxo da gerência",
        type: "confirmation",
        between: "Depoimento de Ivone Duarte x Procedimento de pagamento",
        analysis: "Ivone autorizou com base na fatura aprovada e no recibo assinado, seguindo exatamente o fluxo da loja. Ela não cadastra fornecedores e não tinha como descobrir o CNPJ recente."
      }
    ],
    hints: [
      "Olhe para o fornecedor: quando a empresa foi criada e onde ela existe de verdade? Verifique o CNPJ e a conta que recebeu o dinheiro.",
      "A \"prova\" física da entrega é a assinatura do estoquista. Compare-a com a assinatura real dele — e confira o ponto dele no dia 9 de julho.",
      "As evidências decisivas são a consulta ao CNPJ (empresa recém-criada), a assinatura falsa no recibo e a trilha de acesso ao cadastro pela estação de Cláudio."
    ],
    answerOptions: [
      { id: "sus:claudio", label: "Cláudio Menezes", sub: "Comprador" },
      { id: "sus:ivone", label: "Ivone Duarte", sub: "Gerente financeira" },
      { id: "sus:rafael", label: "Rafael Luz", sub: "Estoquista" },
      { id: "concl:externo", label: "Golpe externo", sub: "Sem participação de funcionários" }
    ],
    solution: {
      correctAnswer: "sus:claudio",
      title: "Cláudio Menezes, o comprador",
      motive: "Cláudio tinha dívidas pessoais e precisava de uma fonte de dinheiro. Como comprador, controlava o cadastro de fornecedores e a aprovação de pedidos — a posição perfeita para criar uma empresa fantasma e pagá-la com o dinheiro da loja.",
      sequence: [
        "Cláudio cria a Distribuidora Nexus em um apartamento e cadastra a empresa no sistema como fornecedora.",
        "Em 28/06, ele inclui a conta recém-aberta no cadastro, a partir do próprio computador de compras.",
        "Lança a fatura de R$ 18 mil, imita a assinatura de Rafael no recibo de entrega e envia o e-mail \"de confirmação\".",
        "Com os três documentos, o fluxo normal de aprovação e pagamento é acionado — e o dinheiro cai na conta dele.",
        "A loja só percebe quando o dono confere o estoque e a televisão que deveria ter chegado não existe."
      ],
      decisiveEvidence: ["ev_cnpj", "ev_sig", "ev_log"],
      reasoning: "A empresa recém-criada, sem histórico e com endereço residencial mostra que o fornecedor é uma fachada. O recibo com assinatura falsa derruba a \"prova\" da entrega. E a trilha de acesso ao cadastro — feita a partir do computador de Cláudio — é o elo que liga a montagem da fraude ao próprio comprador, que era o único em posição de cadastrar a conta de recebimento. As peças encaixam: o autor é Cláudio Menezes.",
      exclusions: [
        { who: "Ivone Duarte", why: "Age no final do fluxo, com documentos aprovados e assinados. Não cadastra fornecedores e não tinha como detectar o CNPJ recém-criado." },
        { who: "Rafael Luz", why: "Estava no dentista no dia da suposta entrega e sua assinatura foi falsificada. Ele é vítima da montagem, não autor." },
        { who: "Golpe externo", why: "Criar fornecedor, alterar cadastro interno e forjar assinatura exige acesso ao sistema e conhecimento do fluxo da loja — só um funcionário com privilégios de comprador poderia fazer as três coisas." }
      ]
    }
  };
/* ============================================================
     CASO 6 — FRAUDE, NÍVEL 2
     ============================================================ */
  var C6 = {
    id: "f02",
    code: "F-02",
    title: "O Caminhão Desviado",
    category: "fraudes",
    difficulty: 2,
    brief: "Um carregamento de medicamentos avaliado em R$ 400 mil foi \"roubado\" na madrugada de quarta-feira. O motorista Diego França relatou que dois homens o abordaram, o levaram para uma estrada vicinal e sumiram com o cavalo-mecânico e a carreta. A seguradora contratou uma auditoria e encontrou inconsistências no caso.",
    context: "O caminhão saiu do armazém da Farmacentro, em Vila das Flores, às 22h30 de terça-feira, com escolta policial até o trevo. Seguiria para a capital até as 6h. O \"roubo\" teria ocorrido no pátio de um posto de combustível, onde Diego parou para abastecer.",
    date: "Terça 22h30 (saída) · quarta 2h10 (chegada ao posto) · 2h40 (\"roubo\" relatado)",
    suspects: [
      {
        id: "wagner",
        name: "Wagner Salles",
        role: "Dono da transportadora",
        age: 49,
        profile: [
          "Proprietário da TransÁgil, que opera a frota da carga; conhece a fundo os sistemas e a rota.",
          "Tem empréstimos vultosos no banco e vinha reclamando do valor do seguro.",
        ],
        behavior: "Reagiu bem à notícia, mas insistiu para que a seguradora pagasse \"logo\" para não prejudicar a empresa.",
        alibi: "Diz que dormia em casa na madrugada do \"roubo\"."
      },
      {
        id: "diego",
        name: "Diego França",
        role: "Motorista",
        age: 37,
        profile: [
          "Motorista há 8 anos na TransÁgil, sem registros de problemas.",
          "Era o único responsável pelo caminhão durante a viagem."
        ],
        behavior: "Parecia exausto e assustado no depoimento; respondeu de forma ensaiada sobre os \"encapuzados\".",
        alibi: "Diz ter sido rendido por dois homens por volta das 2h40 no pátio do posto."
      },
      {
        id: "jonas",
        name: "Jonas Pereira",
        role: "Vigia do posto",
        age: 55,
        profile: [
          "Trabalhava sozinho no posto Guardião na madrugada; foi a única testemunha no pátio.",
          "Já foi advertido por se ausentar do posto em outros turnos.",
        ],
        behavior: "Deu versão vaga sobre a movimentação no pátio e parecia evasivo ao falar de abastecimentos.",
        alibi: "Diz que estava na loja do posto quando o caminhão chegou e que não viu o \"roubo\"."
      },
      {
        id: "marcos",
        name: "Marcos Silva",
        role: "Encarregado de logística da Farmacentro",
        age: 33,
        profile: [
          "Despachou a carga com a escolta de rotina e conferiu os lacres na origem.",
          "Não tem acesso aos sistemas da transportadora.",
        ],
        behavior: "Colaborou com a auditoria e entregou os documentos de expedição sem resistência.",
        alibi: "Encerrou o turno às 23h; gastou a madrugada em casa, confirmado pelo porteiro do prédio."
      }
    ],
    testimonies: [
      {
        id: "t_wagner",
        person: "Wagner Salles",
        role: "Dono da transportadora",
        text: "O sistema de desvio é uma ferramenta normal para imprevistos de rota. Se há um pedido com a minha credencial, qualquer um da operação pode ter usado o terminal. Sobre o carro prata no posto: metade dos motoristas tem carro prata. A perda foi grande, e eu preciso que o seguro resolva."
      },
      {
        id: "t_diego",
        person: "Diego França",
        role: "Motorista",
        text: "Parei para abastecer às 2h10. Quando estava pagando, dois homens encapuzados entraram e me levaram para a estrada. Fiquei um tempo no mato, depois voltei a pé. Quando cheguei, o caminhão tinha sumido. Não vi placa, não vi rosto. Só sei que levaram tudo."
      },
      {
        id: "t_jonas",
        person: "Jonas Pereira",
        role: "Vigia do posto",
        text: "Eu estava na loja, olhando a televisão. O motorista abasteceu, pagou e saiu. Não vi nenhum encapuzado, isso eu garanto. Sobre o cupom de 150 litros? Ah, o sistema às vezes lança errado, essas coisas de máquina. Eu não fico olhando os abastecimentos."
      },
      {
        id: "t_marcos",
        person: "Marcos Silva",
        role: "Encarregado de logística",
        text: "A carga saiu lacrada e conferida, com escolta até o trevo, como sempre. Os lacres da carreta estavam intactos quando saiu. Depois disso, o caminhão é responsabilidade da transportadora, que controla a rota e o rastreamento. Eu só fui informado do roubo horas depois, quando a polícia chegou."
      },
      {
        id: "t_elisa",
        person: "Elisa Nogueira",
        role: "Auditora da seguradora",
        text: "Chamaram nossa equipe porque o sinistro tem valor alto. Três coisas me chamaram atenção: o cupom de abastecimento que não bate com o tanque, o lacre aberto por dentro e a criação de um desvio no sistema da transportadora horas antes de o caminhão chegar ao posto. Vou passar tudo para vocês."
      }
    ],
timeline: [
      { time: "22h30", event: "Terça: o caminhão sai do armazém da Farmacentro, com escolta até o trevo." },
      { time: "23h50", event: "Sistema TMS registra um desvio de rota aprovado com a credencial de Wagner Salles." },
      { time: "01h30", event: "Um sedã prata, do modelo do carro de Wagner, estaciona no acesso do posto." },
      { time: "02h10", event: "O caminhão chega ao posto Guardião; Diego entra na loja." },
      { time: "02h20", event: "Posto emite cupom de abastecimento de 150 litros." },
      { time: "02h40", event: "Diego afirma ter sido rendido pelos \"encapuzados\" e relata o roubo." },
      { time: "05h30", event: "Carreta é encontrada vazia numa estrada vicinal; tanque ainda com combustível." }
    ],
    evidence: [
      {
        id: "ev_tracker",
        title: "Rastreador removido",
        type: "Perícia",
        icon: "track",
        summary: "O rastreador foi cortado do chicote elétrico e descartado no banheiro do posto.",
        description: "O dispositivo foi desconectado do suporte com corte limpo e encontrado no banheiro do posto. O manual de instalação é restrito à seguradora e à transportadora; quem o removeu sabia exatamente onde o aparelho ficava.",
        significance: "Alguém com conhecimento técnico interno desativou o rastreamento de propósito."
      },
      {
        id: "ev_sis",
        title: "Pedido de desvio no sistema",
        type: "Registro",
        icon: "track",
        summary: "Um desvio de rota foi aprovado no TMS às 23h50 de terça, com a credencial de Wagner.",
        description: "O sistema da transportadora registra uma instrução de desvio — a carga \"seguiria diretamente para um CD alternativo\" — criada às 23h50 de terça. A credencial usada é a de Wagner Salles, que nega ter lançado qualquer desvio.",
        significance: "Horas antes do \"roubo\", alguém com acesso direto ao sistema da transportadora planejou a nova rota da carga."
      },
      {
        id: "ev_abertura",
        title: "Lacres da carreta",
        type: "Perícia",
        icon: "box",
        summary: "O lacre do cadeado foi rompido por dentro, sem sinais de arrombamento externo.",
        description: "A perícia mostrou que a porta traseira foi aberta por quem tinha acesso ao mecanismo interno do cadeado — chave — pois não há marcas de força na trava. O lacre de origem, conferido por Marcos na saída, estava intacto até a abertura.",
        significance: "Quem abriu a carreta tinha a chave do cadeado, e o lote de cadeados é controlado pela transportadora."
      },
      {
        id: "ev_campos",
        title: "Câmera do acesso do posto",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Um sedan prata, igual ao de Wagner, ficou parado no acesso do posto entre 1h30 e 2h05.",
        description: "A câmera de acesso registra um sedan prata estacionado longe das câmeras auxiliares, das 1h30 às 2h05, logo antes da chegada do caminhão. O registro do modelo e da cor coincide com o carro de Wagner Salles.",
        significance: "Alguém com um carro idêntico ao do dono aguardava a chegada do caminhão no local do suposto roubo."
      },
      {
        id: "ev_cupom",
        title: "Cupom de abastecimento",
        type: "Documento",
        icon: "doc",
        summary: "Cupom de 150 litros emitido às 2h20, mas o tanque do caminhão recuperado estava cheio.",
        description: "O posto emitiu um cupom de 150 litros às 2h20. Quando a carreta foi recuperada, o motor ainda estava com o tanque cheio — o abastecimento foi lançado sem jamais ocorrer. O sistema de vendas do posto confirma a emissão.",
        significance: "Uma nota de abastecimento falsa foi criada para dar verossimilhança à parada \"rotineira\"."
      }
    ],
    contradictions: [
      {
        id: "c_tanque",
        title: "Cupom de abastecimento x tanque cheio",
        type: "contradiction",
        between: "Registro do posto x Caminhão recuperado",
        analysis: "Foram lançados 150 litros às 2h20, mas o caminhão estava com o tanque cheio quando recuperado. O abastecimento é fictício — e só poderia ser lançado no posto com a participação do vigia."
      },
      {
        id: "c_lacre",
        title: "Arrombamento x abertura com chave",
        type: "contradiction",
        between: "Versão de roubo x Perícia dos lacres",
        analysis: "A porta foi aberta por dentro, com chave do cadeado, sem marca de força. Os \"encapuzados\" teriam que dispor da chave — que está na cadeia de controle da transportadora."
      },
      {
        id: "c_rota",
        title: "Roubo imprevisto x desvio planejado",
        type: "contradiction",
        between: "Versão do motorista x Sistema de desvio da transportadora",
        analysis: "Um desvio de rota foi lançado no TMS com a credencial de Wagner às 23h50, horas antes do caminhão chegar ao posto. Um roubo não planejado não deixa rastros de preparação no sistema."
      },
      {
        id: "c_marcos",
        title: "Logística da Farmacentro",
        type: "confirmation",
        between: "Depoimento de Marcos Silva x Registros de expedição",
        analysis: "A carga saiu lacrada, conferida e com escolta. O desvio foi uma decisão posterior da transportadora, fora do alcance do encarregado de logística."
      }
    ],
    hints: [
      "Compare a versão do \"roubo\" com os registros físicos: o cupom de abastecimento, o lacre da carreta e o rastreador. O que não fecha?",
      "Verifique quem tinha acesso ao sistema de desvios e à localização do rastreador. O desvio foi lançado no TMS antes de o caminhão chegar ao posto.",
      "As evidências decisivas: o desvio aprovado com a credencial de Wagner no sistema, os lacres rompidos por dentro e a câmera registrando o sedan prata dele na madrugada."
    ],
    answerOptions: [
      { id: "sus:wagner", label: "Wagner Salles", sub: "Dono da transportadora" },
      { id: "sus:diego", label: "Diego França", sub: "Motorista" },
      { id: "sus:jonas", label: "Jonas Pereira", sub: "Vigia do posto" },
      { id: "sus:marcos", label: "Marcos Silva", sub: "Encarregado de logística" }
    ],
    solution: {
      correctAnswer: "sus:wagner",
      title: "Wagner Salles, o dono da transportadora",
      motive: "A TransÁgil enfrentava empréstimos vencidos e dependia do valor do seguro para se reestruturar. Wagner armou o \"roubo\" para receber a indenização da carga segurada, usando o motorista como executor e o vigia do posto como cúmplice do esquema.",
      sequence: [
        "Wagner cria, às 23h50, o desvio no TMS com a própria credencial — o \"plano B\" era a rota que ele controlava.",
        "Ele se posiciona no posto em seu sedan prata (câmera do acesso, 1h30–2h05) e combina o esquema com Diego.",
        "Diego chega às 2h10, \"abastece\" e o posto emite o cupom fictício de 150 litros, com o tanque já cheio.",
        "A carreta é aberta por dentro com a chave do cadeado; o rastreador é removido e descartado no banheiro do posto.",
        "Wagner deixa o local do \"roubo\" e, horas depois, aciona a seguradora para indenização."
      ],
      decisiveEvidence: ["ev_sis", "ev_abertura", "ev_campos"],
      reasoning: "O desvio criado com a credencial de Wagner no TMS é a prova de que o \"roubo\" foi planejado no sistema da própria transportadora. Os lacres rompidos por dentro mostram quem tinha acesso físico à chave. E o sedan prata no acesso do posto, minutos antes do caminhão chegar, coloca Wagner no cenário do crime. A combinação de acesso sistêmico, acesso físico e presença no local fecha a cadeia: o autor é Wagner Salles.",
      exclusions: [
        { who: "Diego França", why: "Foi o executor da encenação, mas não tem acesso ao TMS para lançar o desvio nem controle sobre os registros do posto. Sem Wagner, ele não montaria o esquema." },
        { who: "Jonas Pereira", why: "O vigia era conivente e emitiu o cupom fictício, mas não tem relação com o desvio no sistema nem com a chave da carreta — sua participação é pontual." },
        { who: "Marcos Silva", why: "Despachou a carga lacrada e com escolta, sem acesso aos sistemas da transportadora nem ao local do \"roubo\". Sua atuação foi limpa." }
      ]
    }
  };
/* ============================================================
     CASO 7 — ASSASSINATO, NÍVEL 1
     ============================================================ */
  var C7 = {
    id: "a01",
    code: "A-01",
    title: "A Morte no Escritório da Madeireira",
    category: "assassinatos",
    difficulty: 1,
    brief: "O empresário Otávio Bregman, 62 anos, foi encontrado sem vida em seu escritório na madeireira Bregman & Vidal, num domingo à tarde. A perícia aponta intoxicação por uma substância adicionada ao adoçante do café, com a morte provável entre 16h e 17h. Não há sinais de luta nem de arrombamento.",
    context: "A madeireira fica em uma área industrial da cidade fictícia de Vila Alta. Aos domingos, poucas pessoas circulam: a portaria controla a entrada e uma única câmera filma o portão principal. Otávio costumava ir à empresa aos domingos para adiantar contratos e tomar café enquanto revisava papéis.",
    date: "Domingo, 27 de abril · morte estimada entre 16h e 17h",
    suspects: [
      {
        id: "leonardo",
        name: "Leonardo Bregman",
        role: "Filho e sócio de Otávio",
        age: 34,
        profile: [
          "Filho único; sócio minoritário da madeireira.",
          "Acumulava dívidas pessoais e discutiu com o pai na semana anterior.",
        ],
        behavior: "Declarou à polícia que \"não esteve na madeireira no domingo\". Parecia mais preocupado com a reação da imprensa do que com a perda.",
        alibi: "Diz que passou o domingo em casa, dormindo, e que não foi à empresa."
      },
      {
        id: "sonia",
        name: "Sônia Barros",
        role: "Secretária executiva",
        age: 48,
        profile: [
          "Há 15 anos na empresa; é quem compra os mantimentos do escritório, inclusive o adoçante do café.",
          "Não tinha desavenças conhecidas com o patrão."
        ],
        behavior: "Muito abalada; ajudou a polícia a reconstituir a rotina de Otávio e entregou o comprovante de compras.",
        alibi: "Estava em casa no domingo; a compra do supermercado é confirmada por nota fiscal da quinta-feira."
      },
      {
        id: "heitor",
        name: "Heitor Vidal",
        role: "Sócio fundador",
        age: 60,
        profile: [
          "Sócio de Otávio há 30 anos; existe um litígio societário entre os dois.",
          "Tinha reunião marcada com Otávio para as 16h de domingo."
        ],
        behavior: "Pareceu sinceramente surpreso e foi quem encontrou o corpo, chamando imediatamente o socorro.",
        alibi: "Chegou à empresa às 16h40, dizendo ter ficado preso no trânsito; a portaria confirma a entrada nesse horário."
      }
    ],
    testimonies: [
      {
        id: "t_leonardo",
        person: "Leonardo Bregman",
        role: "Filho",
        text: "Eu não estive com o meu pai no domingo, fiquei em casa. Ele e eu tivemos uma discussão na semana passada, isso é verdade, mas nada que justificasse o que aconteceu. Eu tinha dívidas? Todo mundo tem dívidas. Não vou comentar sobre o testamento porque é assunto de família."
      },
      {
        id: "t_sonia",
        person: "Sônia Barros",
        role: "Secretária",
        text: "Sempre comprei o adoçante \"Doçura\" na quinta-feira, para a semana toda. O pote do escritório estava aqui quando eu saí na sexta. No domingo eu não vim. Quando soube da morte, fiquei sem chão. Eu não tenho motivo nenhum para fazer mal ao senhor Otávio."
      },
      {
        id: "t_heitor",
        person: "Heitor Vidal",
        role: "Sócio fundador",
        text: "Eu tinha uma reunião às 16h com o Otávio para discutir a divisão da empresa, é verdade que a gente brigava por isso. Mas cheguei às 16h40 com o trânsito da saída de festa. Quando entrei no escritório, ele estava caído sobre a mesa, com a xícara de café ao lado. Chamei o resgate na hora, mas ele já não respondia."
      },
      {
        id: "t_vigia",
        person: "Zeca, o porteiro",
        role: "Vigia da portaria",
        text: "No domingo o sr. Otávio chegou sozinho por volta de uma da tarde. Depois vi o filho dele, o Leonardo, entrar às 15h20 com uma sacola de papel. Ele saiu às 15h50. Depois chegou o sr. Heitor, lá pelas 16h40. Eu não anotei tudo, mas a câmera aqui grava o portão o dia inteiro."
      }
    ],
timeline: [
      { time: "13h00", event: "Otávio chega sozinho à madeireira e se instala no escritório." },
      { time: "15h20", event: "A câmera do portão registra Leonardo entrando com uma sacola de papel." },
      { time: "15h50", event: "A câmera do portão registra Leonardo saindo, sem a sacola." },
      { time: "16h15", event: "Perícia estima o consumo do café adoçado com a substância pelo sr. Otávio." },
      { time: "16h40", event: "Heitor chega, encontra Otávio sem reação e chama o resgate." },
      { time: "17h05", event: "Equipe de resgate confirma o óbito; a polícia é acionada." }
    ],
    evidence: [
      {
        id: "ev_camp",
        title: "Câmera da portaria",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Registra Leonardo entrando às 15h20 com uma sacola e saindo às 15h50 sem ela.",
        description: "O filho declarou que não esteve na madeireira no domingo, mas a câmera do portão o registra chegando às 15h20 com uma sacola de papel e saindo às 15h50 sem ela. A sacola não aparece na volta.",
        significance: "A negação de Leonardo é contrariada pela imagem — e a sacola sugere que ele levou algo embora ou deixou algo."
      },
      {
        id: "ev_sugar",
        title: "Análise do adoçante",
        type: "Perícia",
        icon: "lab",
        summary: "O pote de adoçante do escritório continha cristais de substância tóxica.",
        description: "O pote de adoçante usado por Otávio tinha cristais da substância tóxica misturados. A xícara de café na mesa apresentava resíduo do mesmo composto. A substância age rapidamente e é quase indetectável no gosto quando misturada ao adoçante.",
        significance: "A contaminação do pote exige acesso ao escritório e o descarte do pote original — não foi acidente."
      },
      {
        id: "ev_receipt",
        title: "Comprovante de compra de Sônia",
        type: "Documento",
        icon: "receipt",
        summary: "O comprovante mostra a compra de adoçante \"Doçura\", mas o pote encontrado é de outra marca.",
        description: "Sônia apresentou o comprovante do supermercado da quinta-feira: adoçante \"Doçura\". O pote encontrado no escritório, porém, é da marca \"Adocilani\", lacrado em cima de um pote já utilizado. Ou seja: o pote foi trocado por outro, já com a substância.",
        significance: "Alguém substituiu o pote original pelo contaminado entre quinta-feira e o momento do envenenamento."
      },
      {
        id: "ev_cup",
        title: "Xícara de café",
        type: "Vestígio",
        icon: "lab",
        summary: "A xícara na mesa do escritório continha resíduo de café adoçado com a substância.",
        description: "A xícara estava na posição de uso, com café e cristais da substância no fundo. Após o envenenamento, Otávio não teve chance de arrumar nada — tudo permaneceu como na hora do ocorrido.",
        significance: "Confirma que a ingestão foi pelo café adoçado com o pote contaminado do escritório."
      },
      {
        id: "ev_testament",
        title: "Testamento e dívidas",
        type: "Documento",
        icon: "doc",
        summary: "Otávio havia anunciado que deserdaria Leonardo; o testamento antigo deixa 60% ao filho.",
        description: "Documentos do inventário mostram que Otávio marcou no cartório, para segunda-feira, uma reunião para deserdar Leonardo após a briga da semana anterior. Se morresse antes, valeria o testamento anterior, que destinava 60% da herança ao filho.",
        significance: "Leonardo tinha um motivo concreto e urgente: com a morte do pai antes da segunda-feira, o testamento que o favorece permaneceria válido."
      },
      {
        id: "ev_lock",
        title: "Fechaduras e acesso",
        type: "Perícia",
        icon: "key",
        summary: "Nenhum sinal de arrombamento; a entrada controlada não registra estranhos.",
        description: "As fechaduras do escritório e da madeireira não apresentam marcas de violação. O portão só abre pela guarita e a câmera não registra visitantes fora da lista conhecida no domingo.",
        significance: "Quem contaminou o pote tinha acesso normal ao prédio — alguém do círculo de pessoas próximas."
      }
    ],
    contradictions: [
      {
        id: "c_leo",
        title: "Negação de Leonardo x câmera",
        type: "contradiction",
        between: "Depoimento de Leonardo Bregman x Câmera da portaria",
        analysis: "Leonardo afirmou que não esteve na madeireira no domingo, mas a câmera o registra entrando às 15h20 e saindo às 15h50. Ele também tinha uma sacola na entrada que não aparece na saída."
      },
      {
        id: "c_sugar",
        title: "Adoçante comprado x pote encontrado",
        type: "contradiction",
        between: "Comprovante de Sônia x Pote encontrado",
        analysis: "Sônia comprou adoçante \"Doçura\" na quinta-feira. O pote com a substância é da marca \"Adocilani\" — o original foi substituído por quem teve acesso ao escritório entre quinta e o envenenamento."
      },
      {
        id: "c_heitor",
        title: "Horário de Heitor",
        type: "contradiction",
        between: "Perícia do café x Horário de chegada de Heitor",
        analysis: "A ingestão letal ocorreu por volta das 16h15. Heitor chegou às 16h40, já após o consumo — a contaminação foi feita antes, quando Heitor ainda não estava no prédio."
      },
      {
        id: "c_sonia",
        title: "Rotina de Sônia",
        type: "confirmation",
        between: "Depoimento de Sônia x Nota fiscal de quinta",
        analysis: "Sônia esteve no supermercado na quinta e não compareceu à empresa no domingo. O comprovante confirma a compra do pote original, reforçando que ela não trocou o pote no dia do crime."
      }
    ],
    hints: [
      "Nem todo crime é uma arma na mão. Aqui, a arma é o adoçante. Verifique quem teve acesso ao escritório e ao pote entre quinta e domingo.",
      "A câmera da portaria é o detector de mentiras: compare cada horário declarado com ela e com a perícia da xícara.",
      "As evidências decisivas são a câmera registrando Leonardo sem confirmar o depoimento dele, o testamento que ele tinha motivo para congelar e o pote de adoçante trocado que não bate com a compra de Sônia."
    ],
    answerOptions: [
      { id: "sus:leonardo", label: "Leonardo Bregman", sub: "Filho e sócio" },
      { id: "sus:sonia", label: "Sônia Barros", sub: "Secretária executiva" },
      { id: "sus:heitor", label: "Heitor Vidal", sub: "Sócio fundador" },
      { id: "concl:intruso", label: "Intruso desconhecido", sub: "Sem vínculo com a madeireira" }
    ],
    solution: {
      correctAnswer: "sus:leonardo",
      title: "Leonardo Bregman, o filho",
      motive: "Otávio marcou para segunda-feira a deserdação do filho após a briga da semana. Se o pai morresse antes, valeria o testamento que destinava 60% a Leonardo. As dívidas do filho tornavam a herança essencial — e a pressa era vital, pois o cartório fecharia a questão na segunda.",
      sequence: [
        "Leonardo vai ao cartório na quinta e confirma que a deserdação seria formalizada na segunda-feira.",
        "No domingo, prepara o pote da marca \"Adocilani\" com a substância e substitui o pote \"Doçura\" do escritório.",
        "Chega às 15h20 com a sacola de papel e troca o pote de adoçante rapidamente, antes de seu pai perceber.",
        "Sai às 15h50, removendo o pote original na sacola.",
        "Por volta das 16h15, Otávio toma o café adoçado com o pote contaminado e morre. Leonardo fica com o testamento antigo intacto."
      ],
      decisiveEvidence: ["ev_camp", "ev_testament", "ev_receipt"],
      reasoning: "A câmera da portaria prova que Leonardo esteve na madeireira no domingo e desmente o depoimento dele. O testamento e as dívidas mostram o motivo urgente: se o pai morresse antes de deserdá-lo, o filho herdava. E o pote de adoçante trocado — compra de \"Doçura\" na quinta, pote \"Adocilani\" no crime — só pode ter sido substituído por quem compareceu ao local com acesso ao escritório. As três evidências, juntas, fecham o caso contra Leonardo Bregman.",
      exclusions: [
        { who: "Sônia Barros", why: "O comprovante confirma a compra do pote original na quinta; ela não esteve na madeireira no domingo e não tinha motivo contra Otávio." },
        { who: "Heitor Vidal", why: "A ingestão letal foi às 16h15, e Heitor chegou às 16h40, conforme a portaria. Ele não estava no prédio quando o pote poderia ser trocado." },
        { who: "Intruso desconhecido", why: "Não há arrombamento e a entrada é controlada por guarita e câmera. Nenhum estranho foi registrado no domingo; quem trocou o pote tinha acesso normal." }
      ]
    }
  };
/* ============================================================
     CASO 8 — ASSASSINATO, NÍVEL 2
     ============================================================ */
  var C8 = {
    id: "a02",
    code: "A-02",
    title: "O Arquivo do Museu",
    category: "assassinatos",
    difficulty: 2,
    brief: "O diretor do Museu Regional de Alto Vale, Waldemar Cruz, 58 anos, foi encontrado sem vida no arquivo central do museu na quinta-feira à noite. A perícia indica causa violenta por golpe único, sem sinais de luta. Horas antes, Waldemar havia enviado um e-mail à conservadora Natália Ferraz pedindo explicações sobre o laudo de autenticidade de uma escultura. O foco da investigação está na dedução: por que o diretor estava ali, com quem falou e o que esconde o laudo.",
    context: "O museu fecha às 18h, mas a equipe técnica costuma ficar mais tarde em dias de montagem. O arquivo central fica no subsolo, com registro de acesso por cartão e câmera instalada no corredor do subsolo na semana anterior ao fato, por decisão da própria diretoria.",
    date: "Quinta-feira, 18 de junho · morte estimada entre 19h30 e 19h50",
    suspects: [
      {
        id: "natalia",
        name: "Natália Ferraz",
        role: "Conservadora do museu",
        age: 39,
        profile: [
          "Responsável pelo laudo de autenticidade da escultura em questão.",
          "Recebeu o e-mail de Waldemar pedindo \"uma conversa\" sobre o laudo, na própria quinta."
        ],
        behavior: "Disse que foi embora às 18h20 e que jantaria com o leiloeiro Bruno Vasconcelos. Depois, mudou a história para \"jantar em casa\".",
        alibi: "Afirma que saiu do museu às 18h20 na quinta-feira."
      },
      {
        id: "bruno",
        name: "Bruno Vasconcelos",
        role: "Leiloeiro parceiro",
        age: 44,
        profile: [
          "Intermediário de vendas de peças do museu para colecionadores.",
          "Vendia obras cuja procedência agora é questionada."
        ],
        behavior: "Apresentou um álibi muito detalhado sobre o \"jantar com Natália\" entre 17h e 20h — detalhado demais para a ocasião.",
        alibi: "Declarou que jantou com Natália das 17h às 20h em um restaurante do centro."
      },
      {
        id: "regina",
        name: "Regina Duarte",
        role: "Diretora administrativa",
        age: 52,
        profile: [
          "Disputava com Waldemar o controle orçamentário do museu.",
          "Defendia corte de gastos com a conservação de obras."
        ],
        behavior: "Apresentou ata de reunião com o prefeito e vereadores para justificar sua presença no período da morte.",
        alibi: "Reunião orçamentária na prefeitura das 18h50 às 21h."
      },
      {
        id: "mauro",
        name: "Mauro Sales",
        role: "Técnico de informática",
        age: 30,
        profile: [
          "Administra o sistema de cartões de acesso e as impressoras do museu.",
          "Esteve no museu até tarde na quinta, em manutenção na sala de servidores."
        ],
        behavior: "Colaborou entregando os logs do sistema e o registro de impressões.",
        alibi: "Na sala de servidores com uma testemunha, das 18h30 às 20h."
      }
    ],
    testimonies: [
      {
        id: "t_natalia",
        person: "Natália Ferraz",
        role: "Conservadora",
        text: "O e-mail do Waldemar era estranho. Ele pedia explicações sobre o laudo da escultura e dizia que precisávamos \"conversar pessoalmente\". Eu tinha jantar marcado com o Bruno, então respondi que conversaríamos na segunda-feira. Saí do museu às 18h20, está no meu cartão. Depois fui para casa."
      },
      {
        id: "t_bruno",
        person: "Bruno Vasconcelos",
        role: "Leiloeiro",
        text: "Sim, eu e a Natália jantamos juntos das 17h às 20h, no restaurante Cais do Porto. Chegamos juntos, ficamos na mesa da varanda, e depois ela me deixou em casa. Detalhe: eu sou muito pontual, por isso lembro dos horários com tanta precisão."
      },
      {
        id: "t_regina",
        person: "Regina Duarte",
        role: "Diretora administrativa",
        text: "Eu estava na prefeitura em reunião sobre o orçamento do museu, das 18h50 às 21h. Estão presentes o prefeito, a secretária de cultura e dois vereadores — está na ata. Pode conferir. Eu não tinha nenhuma razão para ir ao arquivo naquela noite."
      },
      {
        id: "t_mauro",
        person: "Mauro Sales",
        role: "Técnico de informática",
        text: "Eu fiquei no museu até às 20h fazendo manutenção na sala de servidores, com o estagiário Júnior do meu lado o tempo todo. Depois descobri que a impressora do arquivo imprimiu um documento do diretor às 19h20. A conta que aparece lá é a da Natália, mas era a minha senha administrativa que dava acesso a tudo."
      },
      {
        id: "t_perito",
        person: "Perito responsável",
        role: "Equipe de investigação",
        text: "O horário estimado da morte é entre 19h30 e 19h50, por conta da temperatura do corpo e do estado do café na mesa do arquivo. Não há sinal de luta, e a causa foi um golpe único. O diretor estava com o e-mail impresso em mãos quando foi atingido."
      }
    ],
timeline: [
      { time: "17h30", event: "Waldemar envia e-mail a Natália pedindo explicações sobre o laudo da escultura." },
      { time: "18h00", event: "O museu fecha para o público; equipe administrativa inicia a saída." },
      { time: "19h15", event: "O cartão registra a entrada de Natália no museu (contra o que ela declarou)." },
      { time: "19h20", event: "A impressora do arquivo registra a impressão do documento do diretor pela conta \"nferraz\"." },
      { time: "19h40", event: "A câmera do corredor do subsolo mostra Natália seguindo em direção ao arquivo central." },
      { time: "19h30–19h50", event: "Perícia estima o horário da morte de Waldemar." },
      { time: "21h10", event: "O vigilante noturno encontra o corpo e aciona a polícia." }
    ],
    evidence: [
      {
        id: "ev_laudo",
        title: "Laudo de autenticidade",
        type: "Documento",
        icon: "doc",
        summary: "Laudo emitido por Natália atesta como autêntica a escultura que Waldemar suspeitava ser falsa.",
        description: "O laudo de autenticidade da escultura \"Vaso das Ninfas\" foi assinado por Natália na semana anterior. Nos registros manuscritos de Waldemar havia a anotação \"conferir procedência — indícios de falsificação\". A peça carrega a mesma assinatura de obra já considerada falsa.",
        significance: "Se a escultura é falsa, o laudo que a autentica é parte da fraude — e Natália é a autora do laudo."
      },
      {
        id: "ev_pigment",
        title: "Análise de pigmento",
        type: "Perícia",
        icon: "lab",
        summary: "Pigmento sintético do século XX encontrado na escultura \"antiga\" verificada por Waldemar.",
        description: "A análise química revelou pigmento sintético, inexistente no período da suposta obra original de 1750. A peça era uma falsificação moderna, o que confirma que a coleção \"autenticada\" escondia uma fraude em andamento.",
        significance: "Confirma que havia falsificação real no museu — e que Waldemar estava certo em desconfiar."
      },
      {
        id: "ev_cam",
        title: "Câmera do corredor do subsolo",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Mostra Natália no subsolo às 19h40, indo em direção ao arquivo central.",
        description: "A câmera instalada na semana anterior registra Natália saindo da escada e seguindo em direção ao arquivo central às 19h40. Ela havia declarado que já estava fora do museu desde as 18h20.",
        significance: "A presença de Natália no local e no horário da morte contradiz frontalmente a versão dela."
      },
      {
        id: "ev_print",
        title: "Registro de impressão",
        type: "Registro",
        icon: "printer",
        summary: "O documento do diretor foi impresso às 19h20 pela conta \"nferraz\" na impressora do arquivo.",
        description: "O sistema da impressora registra cada trabalho liberado. Às 19h20, o documento de Waldemar sobre o laudo foi impresso na impressora do arquivo, liberado pela conta \"nferraz\" — a credencial de Natália.",
        significance: "Alguém com o acesso de Natália imprimiu o documento que estava na mesa dele momentos antes da morte."
      },
      {
        id: "ev_regina",
        title: "Ata da reunião municipal",
        type: "Documento",
        icon: "calendar",
        summary: "Regina participou da reunião com o prefeito das 18h50 às 21h, sem saída registrada.",
        description: "A ata da reunião orçamentária, assinada pelo prefeito e pela secretária de cultura, lista Regina das 18h50 às 21h. O cartão dela não registra entrada no museu naquela noite.",
        significance: "Um álibi documentado por autoridades públicas afasta Regina do arquivo no horário da morte."
      },
      {
        id: "ev_servers",
        title: "Testemunha na sala de servidores",
        type: "Depoimento",
        icon: "chat",
        summary: "Mauro permaneceu com o estagiário Júnior na sala de servidores das 18h30 às 20h.",
        description: "O estagiário Júnior confirma que Mauro ficou ao seu lado na manutenção da sala de servidores das 18h30 às 20h. A câmera de acesso ao subsolo não registra Mauro no corredor do arquivo.",
        significance: "Mauro não estava no arquivo no horário da morte; seu acesso era necessário apenas para localizar os logs."
      }
    ],
    contradictions: [
      {
        id: "c_impress",
        title: "Saída às 18h20 x cartão e câmera",
        type: "contradiction",
        between: "Depoimento de Natália Ferraz x Registros do museu",
        analysis: "Natália declarou ter saído às 18h20, mas o cartão registra entrada às 19h15 e a câmera do subsolo a mostra às 19h40 em direção ao arquivo. A versão dela não se sustenta."
      },
      {
        id: "c_alfibi",
        title: "Jantar com Natália x imagens",
        type: "contradiction",
        between: "Depoimento de Bruno Vasconcelos x Registros de acesso",
        analysis: "Bruno afirmou que jantou com Natália das 17h às 20h. Os registros mostram Natália entrando no museu às 19h15 — o jantar é uma montagem para dar álibi a ela."
      },
      {
        id: "c_laudo",
        title: "Conversa de Waldemar x laudo de Natália",
        type: "contradiction",
        between: "E-mail do diretor x Análise do pigmento",
        analysis: "Waldemar convocou Natália por causa do laudo que ela assinou. A análise de pigmento demonstra que a peça é falsa — e o laudo que a autentica é o ponto exato do conflito."
      },
      {
        id: "c_regina",
        title: "Álibi de Regina",
        type: "confirmation",
        between: "Ata da reunião x Registros de cartão",
        analysis: "A reunião municipal das 18h50 às 21h e a ausência de entrada no museu pelo cartão confirmam que Regina não esteve no arquivo no horário da morte."
      }
    ],
    hints: [
      "Por que o diretor resolveu \"conversar pessoalmente\" com a conservadora? Verifique o laudo e a análise de pigmento — o eixo do conflito estava ali.",
      "Siga os registros de acesso: cartão, impressora e câmera do subsolo. Compare cada horário declarado com os registros.",
      "As evidências decisivas são a câmera do subsolo mostrando Natália às 19h40, o laudo que autentica uma peça falsa e a impressão do documento do diretor pela conta dela."
    ],
    answerOptions: [
      { id: "sus:natalia", label: "Natália Ferraz", sub: "Conservadora" },
      { id: "sus:bruno", label: "Bruno Vasconcelos", sub: "Leiloeiro parceiro" },
      { id: "sus:regina", label: "Regina Duarte", sub: "Diretora administrativa" },
      { id: "sus:mauro", label: "Mauro Sales", sub: "Técnico de informática" }
    ],
    solution: {
      correctAnswer: "sus:natalia",
      title: "Natália Ferraz, a conservadora",
      motive: "Natália era a autora intelectual e material das falsificações, com cobertura do leiloeiro Bruno para revender as peças. Waldemar descobriu tudo: a análise de pigmento provava que a escultura era falsa, e ele havia marcado a \"conversa\" para confrontá-la. A conservadora perdeu o controle e agiu no arquivo, onde a fraude começou.",
      sequence: [
        "Waldemar imprime o documento com suas anotações sobre a falsificação e chama Natália para conversar pessoalmente.",
        "Natália mente no trabalho, faz o jantar fictício com Bruno e retorna ao museu às 19h15 com sua credencial.",
        "Às 19h20 ela imprime, pela sua conta, o documento do diretor que estava na impressora do arquivo.",
        "Às 19h40, a câmera do subsolo a registra indo ao arquivo, onde Waldemar a esperava.",
        "O confronto no arquivo termina em tragédia. Natália sai, e o corpo é encontrado às 21h10 pelo vigia."
      ],
      decisiveEvidence: ["ev_cam", "ev_laudo", "ev_print"],
      reasoning: "A câmera do subsolo mostra Natália no arquivo às 19h40 — no horário da morte e contra a versão dela. O laudo por ela assinado, em confronto com a análise de pigmento, é o motivo exato do conflito com o diretor. E a impressão do documento pela conta \"nferraz\" às 19h20 a coloca dentro do museu, manipulando a papelada que Waldemar tinha em mãos. A excentricidade do álibi (jantar com Bruno) cai por terra com os registros. O conjunto aponta de forma única e coerente para Natália Ferraz.",
      exclusions: [
        { who: "Bruno Vasconcelos", why: "Cúmplice comercial das falsificações, mas não estava no museu: as imagens e o cartão mostram Natália entrando sozinha às 19h15. O \"jantar\" era o álibi dele para ela." },
        { who: "Regina Duarte", why: "A ata da reunião municipal e a ausência de entrada no museu pelo cartão a colocam fora do prédio das 18h50 às 21h." },
        { who: "Mauro Sales", why: "Esteve com uma testemunha na sala de servidores das 18h30 às 20h e não foi registrado no corredor do arquivo. Ele apenas operou os logs que a investigação usou." }
      ]
    }
  };
/* ============================================================
   ETAPAS (conjuntos de casos) — progressão extensível
   ------------------------------------------------------------
   O jogo libera casos por etapas. Cada etapa declara quantos
   casos das etapas anteriores precisam estar resolvidos
   (requiredSolved). Para adicionar um grupo futuro basta
   acrescentar uma nova entrada em STAGES com `requiredSolved`
   igual à soma de casos das etapas anteriores e listar os ids.
   ============================================================ */
  var STAGES = [
    { id: "stage1", name: "Arquivo inicial", requiredSolved: 0, caseIds: ["r01", "r02", "d01", "d02", "f01", "f02", "a01", "a02"] },
    { id: "stage2", name: "Arquivo avançado", requiredSolved: 8, caseIds: ["r03", "r04", "d03", "d04", "f03", "f04", "a03", "a04"] },
    { id: "stage3", name: "Arquivo confidencial", requiredSolved: 16, caseIds: ["r05", "r06", "d05", "d06", "f05", "f06", "a05", "a06"] }
  ];

  function stageOf(caseId) {
    for (var i = 0; i < STAGES.length; i++) {
      if (STAGES[i].caseIds.indexOf(caseId) !== -1) return STAGES[i];
    }
    return null;
  }

  function stageCaseIds(stageId) {
    for (var i = 0; i < STAGES.length; i++) {
      if (STAGES[i].id === stageId) return STAGES[i].caseIds;
    }
    return [];
  }
/* ============================================================
     CASO 9 — ROUBO, NÍVEL 3
     ============================================================ */
  var C9 = {
    id: "r03",
    code: "R-03",
    title: "O Carregamento do Porto",
    category: "roubos",
    difficulty: 3,
    brief: "Na madrugada de quinta-feira, o caminhão SC-447 deixou o Centro de Distribuição do Porto da Barra carregado com 12 paletes de eletrônicos avaliados em R$ 2,4 milhões. No amanhecer, o veículo foi encontrado estacionado numa cava de brita a 8 km dali, praticamente vazio. A nota fiscal de embarque registrava 27,4 toneladas na balança da saída; o casco encontrado mal tinha 6 toneladas e nenhum rastro da carga.",
    context: "O centro funciona à noite para abastecer o mercado regional. O fluxo é: o caminhão entra vazio, é pesado na balança do portão, abastece no pátio de docks e sai pesado de novo. As câmeras cobrem o portão e os docks, mas a balança fica num corredor cego, sem câmera, por decisão antiga do setor de segurança.",
    date: "Quinta-feira, 24 de abril · carregamento das 22h às 02h30 · balança do portão sem câmera",
    suspects: [
      {
        id: "valerio",
        name: "Valério Padilha",
        role: "Conferente de expedição",
        age: 44,
        profile: [
          "Emite os mapas de carregamento e os tíquetes de balança; gerenciou o dock 4 na madrugada.",
          "Respondia a uma auditoria interna por divergências em pesagens anteriores."
        ],
        behavior: "Chegou atrasado, por volta das 22h20, e saiu pouco depois das 01h20, antes do fim do expediente, com justificativa de \"dor de cabeça\". Portava o cartão de acesso ao corredor da balança.",
        alibi: "Declara que ficou no escritório do expediente das 22h30 às 01h20, conferindo papéis."
      },
      {
        id: "rene",
        name: "Renê Costa",
        role: "Vigia do portão",
        age: 51,
        profile: [
          "Controla a cancela e o registro de saída de veículos; conhece o ritual da balança desde 2011.",
          "Foi advertido duas vezes por deixar o posto sem comunicação."
        ],
        behavior: "No registro de câmera, aparece saindo do posto entre 00h05 e 00h35 para \"tomar café na lanchonete\", wicket fechado.",
        alibi: "Diz que a cancela não se abriu sozinha naquele intervalo e que o café foi na lanchonete do pátio."
      },
      {
        id: "ubirata",
        name: "Ubiratã Nunes",
        role: "Motorista do caminhão",
        age: 38,
        profile: [
          "Dirigia o SC-447 há 2 anos; não tinha ocorrências, mas devia à financeira uma parcela do carro.",
          "Foi responsável por levar o caminhão carregado ao destino combinado."
        ],
        behavior: "Alegou que foi rendido por três homens encapuzados na rodovia e que a carga foi levada num baú branco. Não registrou boletim até ser encontrado pelo gerente.",
        alibi: "Na rodovia, entre a saída do centro às 01h50 e o encontro do veículo vazio às 06h30."
      },
      {
        id: "marisa",
        name: "Marisa Lopes",
        role: "Planejadora de logística",
        age: 36,
        profile: [
          "Monta as rotas e confere os mapas de viagem; não frequenta o pátio à noite.",
          "Tinha acesso ao sistema de rotas e ao e-mail de fornecedores do centro."
        ],
        behavior: "Apresentou o plano de viagem do SC-447 com destino correto, mas o mapa impresso na copiadora da sala dela tinha uma segunda rota riscada, para Boraceia.",
        alibi: "Saiu do centro às 21h10, confirmado pela catraca; passou a madrugada em casa, segundo os vizinhos."
      }
    ],
    testimonies: [
      {
        id: "t_valerio",
        person: "Valério Padilha",
        role: "Conferente de expedição",
        text: "Eu emiti o mapa do SC-447 com 12 paletes e 27,4 toneladas, confirmei no registro. Fiquei no expediente até 01h20, quando passei a dor de cabeça. Não saí do prédio sem assinar a saída no livro. Se o caminhão saiu pesado, saiu de acordo com o papel. O ajuste de destinos eu não faço; isso é com a planejadora."
      },
      {
        id: "t_rene",
        person: "Renê Costa",
        role: "Vigia do portão",
        text: "A cancela só abre com meu controle remoto ou com o botão interno. Entre 00h05 e 00h35 eu estava na lanchonete do pátio, pedi um café e voltei. Quando voltei, o equipamento estava normal. O caminhão SC-447 saiu às 01h50 como o registro mostra. Nada de anormal na minha noite."
      },
      {
        id: "t_ubirata",
        person: "Ubiratã Nunes",
        role: "Motorista",
        text: "Saí às 01h50 com a carga completa, conferida no dock. Na altura do km 12 fui fechado por um baú branco. Três caras renderam, me amarraram no banco, e por isso não pude avisar ninguém. Eu só descobri que o caminhão estava vazio quando fui solto, já de madrugada. Eu não tenho como explicar a balança de saída; ela marcou 27,4 toneladas mesmo."
      },
      {
        id: "t_marisa",
        person: "Marisa Lopes",
        role: "Planejadora de logística",
        text: "O plano de viagem do SC-447 era direto para a capital, como sempre. Não existe rota para Boraceia na minha planilha. A cópia riscada na copiadora? Deve ter sido impressa por engano em outra atualização. Eu saí às 21h10, a catraca confirma. Não tenho nada a ver com o pátio."
      },
      {
        id: "t_gerente",
        person: "Geraldo Meira",
        role: "Gerente operacional",
        text: "Fui eu que encontrei o caminhão na cava de brita. As marcas no chão mostram o veículo chegando quase vazio, com a cara do reboque levantada. Quem roubasse um caminhão carregado não iria descarregar tudo sozinho num cascalho numa madrugada. A carga saiu do pátio — e isso só quem conhece o ritual sabe fazer."
      }
    ],
    timeline: [
      { time: "22h10", event: "O SC-447 entra vazio, é pesado e segue ao dock 4." },
      { time: "22h40", event: "A equipe do dock registra o início da montagem das 12 paletes." },
      { time: "00h05", event: "A câmera do portão registra Renê deixando o posto, sem aviso." },
      { time: "00h40", event: "A câmera do pátio mostra um caminhão baú passando junto ao corredor da balança." },
      { time: "01h46", event: "O tíquete da balança registra a saída do SC-447 com 27,4 t." },
      { time: "01h50", event: "A cancela abre e a câmera do portão mostra o SC-447 deixando o centro." },
      { time: "02h05", event: "Câmera fraca da cava registra a chegada do veículo, com o reboque erguido." },
      { time: "06h30", event: "Geraldo encontra o caminhão vazio e aciona a polícia." }
    ],
    evidence: [
      {
        id: "ev_scale",
        title: "Tíquete da balança",
        type: "Documento",
        icon: "receipt",
        summary: "Tíquete de saída registra 27,4 t, mesma pesagem da entrada, sem conferência do dock.",
        description: "No papel do SC-447, o tíquete de saída repete exatamente a tara da entrada somada à carga declarada — valor redondo demais para uma operação com 12 paletes reais. Pesagens feitas por balança com fita adesiva sobre o visor costumam ignorar o peso real recebido.",
        significance: "O valor \"redondo\" indica quem operou a balança (Valério) e que nada foi realmente conferido na saída."
      },
      {
        id: "ev_ballast",
        title: "Jarra de água no reboque",
        type: "Vestígio",
        icon: "tool",
        summary: "Safra de tambores com água e areia encontrados num canto do reboque, com marca de torneira próxima.",
        description: "No fundo do reboque havia três tambores de plástico cheios de água e um saco de areia — lastro suficiente para explicar parte do peso registrado na balança. A torneira do dock 4 tem resíduo do mesmo padrão de sujeira por dentro.",
        significance: "O \"peso\" da saída foi completado com lastro — a carga nunca esteve inteira no caminhão quando ele cruzou a balança."
      },
      {
        id: "ev_bau",
        title: "Câmera do baú branco",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Registra um caminhão baú saindo pelo corredor da balança às 00h40, sem pesar.",
        description: "A câmera do pátio mostra um caminhão baú branco passando pelo corredor da balança às 00h40 e seguindo para o portão de serviço. O registro de basculante não existe no livro do período — ninguém assinou a saída de nenhum baú naquela madrugada.",
        significance: "Alguém movimentou um segundo veículo sem registro, no intervalo em que o vigia estava fora do posto."
      },
      {
        id: "ev_map",
        title: "Rota riscada de Boraceia",
        type: "Documento",
        icon: "doc",
        summary: "Cópia impressa na copiadora de Marisa mostra um desvio para Boraceia riscado a lápis.",
        description: "Na impressora da sala de planejamento foi recolhida uma cópia do plano de viagem com uma segunda rota para Boraceia, riscada a lápis. A impressão data das 21h03 — antes de o caminhão ser carregado.",
        significance: "A alteração de rota na cópia indica que o plano com desvio foi impresso e discutido na madrugada anterior ao roubo."
      },
      {
        id: "ev_rene_gap",
        title: "Registro da cancela no vazio",
        type: "Registro",
        icon: "clock",
        summary: "A cancela ficou sem registro de atividade entre 00h05 e 00h35, tempo exato da ausência de Renê.",
        description: "O software da cancela grava cada abertura com carimbo de tempo. No intervalo 00h05–00h35 não há nenhum registro — nem abertura, nem teste de sistema. Especialistas confirmam que o cabeamento foi desconectado por dentro.",
        significance: "A janela em que o baú saiu é exatamente a janela morta da cancela: isso não foi coincidência."
      },
      {
        id: "ev_audit",
        title: "Auditoria interna de Valério",
        type: "Documento",
        icon: "list",
        summary: "Relatório de auditoria aponta três pesagens divergentes de Valério em 3 meses.",
        description: "O setor de auditoria encaminhou a Valério três ocorrências de pesagem divergente nas últimas viagens que ele conferiu. A dívida do motorista Ubiratã com a financeira consta do mesmo processo internamente.",
        significance: "A divergência já era conhecida do centro, e essa foi a primeira madrugada em que Valério operou a balança sozinho."
      }
    ],
    contradictions: [
      {
        id: "c_peso",
        title: "Peso da balança x caminhão vazio",
        type: "contradiction",
        between: "Tíquete de balança x Encontro na cava de brita",
        analysis: "O tíquete registrou 27,4 t na saída, mas o caminhão chegou à cava praticamente vazio, com o reboque erguido e marcas no chão. A carga ou o peso saíram do pátio por outro veículo."
      },
      {
        id: "c_baustin",
        title: "Baú branco x registro de saída",
        type: "contradiction",
        between: "Câmera do baú branco x Livro de saídas",
        analysis: "A câmera registrou um segundo caminhão no corredor da balança às 00h40, mas o livro de saídas não tem nenhum baú registrado na madrugada."
      },
      {
        id: "c_rene",
        title: "Ausência de Renê x cancela morta",
        type: "contradiction",
        between: "Depoimento de Renê x Registro da cancela",
        analysis: "Renê disse que voltou em minutos, mas a cancela ficou sem registro de 00h05 a 00h35 — tempo exato da saída do baú pelo portão de serviço."
      },
      {
        id: "c_roteiro",
        title: "Rota de Ubiratã x cópia riscada",
        type: "confirmation",
        between: "Plano de viagem de Marisa x Cópia de Boraceia",
        analysis: "A cópia riscada na copiadora confirma o debate sobre uma rota alternativa nos dias anteriores, mas não imputa nada a Marisa: a impressão foi das 21h03, quando ela ainda estava na sala."
      }
    ],
    hints: [
      "Não existe caminhão que saia pesado e chegue vazio sozinho: procure o segundo veículo e o furo na cancela.",
      "A balança sem câmera e o tíquete de peso redondo indicam quem conhecia o ritual de pesagem por dentro.",
      "As evidências decisivas são o baú branco saindo sem registro, o lastro de água no reboque e a janela morta da cancela."
    ],
    answerOptions: [
      { id: "sus:valerio", label: "Valério Padilha", sub: "Conferente de expedição" },
      { id: "sus:rene", label: "Renê Costa", sub: "Vigia do portão" },
      { id: "sus:ubirata", label: "Ubiratã Nunes", sub: "Motorista do caminhão" },
      { id: "sus:marisa", label: "Marisa Lopes", sub: "Planejadora de logística" }
    ],
    solution: {
      correctAnswer: "sus:valerio",
      title: "Valério Padilha, o conferente",
      motive: "Valério já respondia a uma auditoria por pesagens divergentes e tinha o único cartão de acesso à balança naquela madrugada. Ele orquestrou o desvio: saiu a carga real em lotes pequenos pelo baú sem registro, completou o peso do caminhão com lastro de água e areia, e emitiu o tíquete redondo de 27,4 t para os papéis fecharem.",
      sequence: [
        "Na madrugada, Valério informa a equipe de que o SC-447 seguiria \"conforme o mapa\" e libera apenas parte da carga real nos paletes.",
        "Com Renê fora do posto, o baú branco entra pelo corredor da balança às 00h40 e recebe a carga excedente sem registro.",
        "Valério enche os tambores de água e acrescenta areia como lastro no fundo do reboque.",
        "Às 01h46 emite o tíquete de 27,4 t e libera a saída às 01h50.",
        "O caminhão \"carregado\" chega vazio à cava: o baú já havia levado a carga para o destino combinado."
      ],
      decisiveEvidence: ["ev_bau", "ev_ballast", "ev_rene_gap"],
      reasoning: "O caminhão que saiu pesado tinha lastro, não carga — os tambores de água e a areia comprovam que o peso foi maquiado. O baú branco saindo pelo corredor da balança sem registro exige quem operasse aquele acesso, que é o cartão de Valério. E a janela morta da cancela, com Renê longe do posto, só fecha se quem desligou o sistema sabia exatamente quando o portão ficaria sem vigia. O conjunto aponta de forma única para o conferente Valério Padilha.",
      exclusions: [
        { who: "Renê Costa", why: "A janela morta da cancela o incrimina à primeira vista, mas o cabeamento foi desconectado por dentro, de onde Renê não podia estar sem o alerta salvar. Ele foi afastado do posto, não o autor do corte." },
        { who: "Ubiratã Nunes", why: "O motorista conduziu um caminhão já vazio para a cava — as marcas no chão mostram o reboque erguido na chegada. O relato de rendição é consequência do plano, não a causa." },
        { who: "Marisa Lopes", why: "A cópia riscada foi impressa às 21h03, quando ela ainda estava na sala, mas a catraca confirma a saída dela às 21h10. O desvio para Boraceia era do planejamento físico, não da rota oficial." }
      ]
    }
  };
/* ============================================================
     CASO 10 — ROUBO, NÍVEL 3
     ============================================================ */
  var C10 = {
    id: "r04",
    code: "R-04",
    title: "O Mapa do Leilão",
    category: "roubos",
    difficulty: 3,
    brief: "Durante o leilão privado \"Noite das Cartas\", a Carta do Brasil Meridional, atlas raro de 1612 avaliado em R$ 3,1 milhões, sumiu do cofre do Solar das Acácias. O documento foi fotografado às 19h58, lacrado entre vidros com um selo de cera numerado e entregue ao correio duas horas depois. Ao abrir o pacote, o comprador encontrou uma reprodução moderna em papel sulfite.",
    context: "O Solar das Acácias recebe leilões para colecionadores convidados. As obras são catalogadas numa sala privada (arquivo) e transportadas até o saguão pelo próprio leiloeiro. A policial de acesso registra quem entra no arquivo; o fotógrafo documenta cada peça antes do lacre.",
    date: "Sábado, 17 de maio · catálogo das 19h às 20h30 · lacre numerado nº 714",
    suspects: [
      {
        id: "francisco",
        name: "Francisco Leme",
        role: "Leiloeiro e perito",
        age: 47,
        profile: [
          "Organiza os leilões do Solar; é o único com giro de chave do arquivo e do cofre.",
          "Laboratório de restauração próprio, com impressora de alta resolução."
        ],
        behavior: "Anotou no catálogo a peça como \"lacrada às 20h22\", mas o fotógrafo registrou o documento às 19h58 e o lacre do comprador às 20h34.",
        alibi: "Diz que ficou no saguão com os convidados entre 20h e 20h40.",
        role: "Leiloeiro e perito"
      },
      {
        id: "nora",
        name: "Nora Antunes",
        role: "Fotógrafa do acervo",
        age: 32,
        profile: [
          "Documenta as peças antes do lacre; trabalha com câmera de alta definição.",
          "Tem parente dono de gráfica especializada em fac-símiles."
        ],
        behavior: "A foto macro do mapa tem um realce de assunto que encobre um detalhe do canto nordeste do papel.",
        alibi: "Das 19h55 às 20h05 no estúdio fotográfico, conforme a câmera interna.",
        role: "Fotógrafa do acervo"
      },
      {
        id: "celina",
        name: "Celina Bittencourt",
        role: "Notária e escrivã",
        age: 55,
        profile: [
          "Lavra os termos do leilão e confere os lacres; membro antigo da casa.",
          "Assina cada pacote com um sinete particular."
        ],
        behavior: "O selo nº 714 foi dado como incinerado no fim da noite, como mandava o regulamento — mas o número apareceu impresso na nota de remessa da reprodução.",
        alibi: "Na mesa notarial do saguão, de onde não se via o arquivo, das 20h às 23h.",
        role: "Notária"
      },
      {
        id: "otavio",
        name: "Otávio Serra",
        role: "Correio de obras",
        age: 40,
        profile: [
          "Transporta os pacotes do leilão até o seguro da seguradora na manhã seguinte.",
          "Faz rondas noturnas pelo prédio durante os eventos, para \"checar portas\"."
        ],
        behavior: "Registrou parada de 18 minutos na rotatória nº 9, sem explicar o motivo; o percurso até a seguradora leva 12 minutos.",
        alibi: "No percurso do Solar até a sede da seguradora, entre 00h40 e 01h10.",
        role: "Correio de obras"
      }
    ],
    testimonies: [
      {
        id: "t_francisco",
        person: "Francisco Leme",
        role: "Leiloeiro",
        text: "Eu mesmo retirei a peça do cofre, levei ao estúdio para a fotografia e trouxe de volta ao arquivo às 20h20. Fechei o lacre nº 714 na frente da notária e do comprador. Pode conferir o giro de chave: entre 20h e 20h40 eu estava recebendo os convidados no saguão.",
        id2: "t_francisco"
      },
      {
        id: "t_nora",
        person: "Nora Antunes",
        role: "Fotógrafa",
        text: "Fotografei a Carta às 19h58, documento completo. Preparei o dossiê e devolvi o material ao arquivo às 20h05. A câmera do estúdio me mostra lá dentro. Um mapa antigo é quase transparente; qualquer mancha de tinta aparece na luz rasante. Não saí do estúdio até o leilão acabar."
      },
      {
        id: "t_celina",
        person: "Celina Bittencourt",
        role: "Notária",
        text: "O selo nº 714 foi aplicado na presença do comprador às 20h34 e incinerado às 23h10, conforme o livro. O número constante na nota de remessa da reprodução? Impossível — o regulamento manda queimar os lacres no mesmo dia. Nessa noite não queimei nada antes do fim."
      },
      {
        id: "t_otavio",
        person: "Otávio Serra",
        role: "Correio",
        text: "Peguei o pacote nas mãos da notária às 23h50, deixei no furgão e fiz uma ronda rápida pelo prédio antes de seguir. A parada na rotatória foi para conferir o peso do pacote no banco do passageiro — velho hábito. Cheguei à seguradora às 01h10 com o pacote lacrado."
      },
      {
        id: "t_diretor",
        person: "Amadeu Caldas",
        role: "Diretor-geral do Solar",
        text: "No leilão anterior, o mesmo Francisco foi advertido por fotografar uma peça fora da catálogo para o laboratório dele. Ele tem convênio com uma gráfica de reproduções que conhece a técnica do papel antigo. Mas não vou acusar sem prova: os registros de acesso ao arquivo são só os dele."
      }
    ],
    timeline: [
      { time: "19h30", event: "O cofre é aberto e a Carta é levada ao estúdio." },
      { time: "19h58", event: "Nora fotografa o documento original." },
      { time: "20h05", event: "Nora devolve o original ao arquivo." },
      { time: "20h20", event: "Francisco registra a retirada do arquivo e o retorno ao saguão." },
      { time: "20h34", event: "O lacre nº 714 é aprovado pelo comprador." },
      { time: "23h50", event: "Otávio retira o pacote lacrado e parte." },
      { time: "00h40–01h10", event: "Parada de 18 minutos na rotatória nº 9." },
      { time: "04h00", event: "A seguradora confere o conteúdo e encontra a reprodução." }
    ],
    evidence: [
      {
        id: "ev_foto",
        title: "Foto consulta da Carta",
        type: "Registro de imagem",
        icon: "camera",
        summary: "A foto de Nora apresenta realce de assunto cobrindo o canto nordeste do papel, onde existe uma anotação a lápis.",
        description: "A imagem usada pelo catálogo tem um filtro de realce aplicado pelo laboratório de Francisco — o recurso apaga uma anotação a lápis no canto nordeste, visível na foto bruta da câmera de Nora.",
        significance: "A anotação raspada na reprodução só poderia ser conhecida por quem manipulou a imagem no laboratório."
      },
      {
        id: "ev_lacre",
        title: "Selos e o número 714",
        type: "Documento",
        icon: "key",
        summary: "O número 714 aparece na sequência de lacres emitidos em lotes pares, apesar de mandarem incinerar.",
        description: "Os selos são numerados em caderno próprio. O 714 foi dado como incinerado às 23h10, mas o número voltou a aparecer no fim da noite na remessa do pacote recebido pela gráfica. A numeração confirma que o lacre foi reutilizado."
      },
      {
        id: "ev_oficina",
        title: "Convênio com a gráfica",
        type: "Documento",
        icon: "printer",
        summary: "O laboratório de Francisco contrata uma gráfica que produz fac-símiles com a técnica do papel antigo.",
        description: "Contratos de restauração mostram encomendas ao ateliê de fac-símiles da cidade, com prazo médio de 48 horas. O papel da reprodução encontrada no pacote é sulfite de alta gramatura, com capa de \"papel envelhecido\" a jato de tinta — assinatura do processo da gráfica.",
        significance: "A técnica de reprodução é específica do ateliê parceiro de Francisco, acionado por ele em outros acervos."
      },
      {
        id: "ev_nota",
        title: "Nota de remessa da reprodução",
        type: "Documento",
        icon: "receipt",
        summary: "A nota de remessa da gráfica lista o pacote com o número de lacre 714, emitida antes da incineração oficial.",
        description: "O rascunho eletrônico da nota de remessa da gráfica foi criado às 22h40 — antes do lacre ser incinerado às 23h10. A nota usa o mesmo número de lacre que deveria ter sido destruído à noite.",
        significance: "A reprodução foi despachada com a numeração do selo oficial enquanto o verdadeiro lacre ainda existia no Solar."
      },
      {
        id: "ev_rota",
        title: "Rotatória nº 9 e ronda",
        type: "Registro de imagem",
        icon: "clock",
        summary: "A câmera da rotatória nº 9 registra o furgão de Otávio parado por 18 minutos, com o motor ligado.",
        description: "A câmera municipal da rotatória nº 9 mostra o furgão nº 04 parado das 00h40 às 00h58, motor ligado e luz interna apagada. Não há nenhuma outra parada na rota registrada até a seguradora.",
        significance: "A única parada fora do percurso coincide com o horário em que o pacote poderia ser aberto e trocado, se alguém tivesse a reprodução pronta."
      },
      {
        id: "ev_estojo",
        title: "Estojo de lacres de Francisco",
        type: "Objeto apreendido",
        icon: "tool",
        summary: "Cera de reutilização e ferramentas de forno encontrados no estojo de Francisco.",
        description: "No estojo de Francisco foram recolhidos um pote de cera ardósia com três furos de reutilização e uma espátula com resíduo de cera antiga.",
        significance: "A reutilização do lacre exigia ferramentas que só o leiloeiro possuía no Solar."
      }
    ],
    contradictions: [
      {
        id: "c_registro",
        title: "Horário do lacre oficial",
        type: "contradiction",
        between: "Catálogo de Francisco x Registro do fotógrafo",
        analysis: "Francisco escreveu no catálogo que lacrou às 20h22, mas a foto do comprador foi às 19h58 e o lacre oficial aprovado às 20h34 — o intervalo não fecha com a versão dele."
      },
      {
        id: "c_reusa",
        title: "Lacre incinerado x número reaparecido",
        type: "contradiction",
        between: "Livro de incineração x Nota de remessa",
        analysis: "O selo 714 foi incinerado às 23h10, segundo o livro, mas a nota da gráfica usa o mesmo número às 22h40. O número reapareceu antes de ser destruído."
      },
      {
        id: "c_rota",
        title: "Parada de Otávio",
        type: "contradiction",
        between: "Olhinho de rota x Câmera da rotatória",
        analysis: "Otávio alegou conferência de peso, mas a câmera mostra o furgão parado por 18 minutos com o motor ligado e a luz apagada, bem fora da rota."
      },
      {
        id: "c_nora",
        title: "Álibi de Nora",
        type: "confirmation",
        between: "Câmera do estúdio x Livro de catálogo",
        analysis: "O estúdio tem câmera interna que mostra Nora das 19h55 às 20h05, sem saída. A foto macro bruta confirma que o original foi fotografado naquele horário."
      }
    ],
    hints: [
      "O verdadeiro mapa saiu do Solar: procure o objeto que saiu com o mesmo número do lacre.",
      "Compare o horário do catálogo com o horário do fotógrafo — a diferença de minutos marca quem tinha o acesso ao arquivo.",
      "As evidências decisivas são a foto com o realce do laboratório, a nota de remessa com o selo 714 e o estojo de lacres de Francisco."
    ],
    answerOptions: [
      { id: "sus:francisco", label: "Francisco Leme", sub: "Leiloeiro e perito" },
      { id: "sus:nora", label: "Nora Antunes", sub: "Fotógrafa do acervo" },
      { id: "sus:celina", label: "Celina Bittencourt", sub: "Notária" },
      { id: "sus:otavio", label: "Otávio Serra", sub: "Correio de obras" }
    ],
    solution: {
      correctAnswer: "sus:francisco",
      title: "Francisco Leme, o leiloeiro",
      motive: "Francisco tinha advertência interna por fotografar peças para o laboratório e dependia financeiramente do ateliê de fac-símiles. Ele trocou a Carta pela reprodução antes do lacre, apagou a anotação a lápis na imagem do catálogo e reutilizou o selo 714 para manter o pacote \"oficial\".",
      sequence: [
        "No laboratório, Francisco fotografa a Carta e aplica o realce que oculta a anotação a lápis no canto.",
        "Encomenda a reprodução à gráfica parceira, com a capa de papel envelhecido.",
        "No dia do leilão, troca a Carta original pela reprodução e lacra o pacote com o selo 714.",
        "A nota de remessa da gráfica sai às 22h40 com o número 714 — antes da incineração oficial às 23h10.",
        "O correto pacote \"lacrado\" segue para a seguradora, e a Carta sai pelas mãos da gráfica."
      ],
      decisiveEvidence: ["ev_foto", "ev_nota", "ev_estojo"],
      reasoning: "A reprodução foi despachada com o número de lacre 714 às 22h40, enquanto o selo oficial só foi incinerado às 23h10 — só quem controlava os dois artefatos podia repetir o número. A foto do catálogo com o realce do laboratório esconde a anotação conhecida do original, e o estojo de lacres reutilizados pertence a Francisco. Os horários do fotógrafo afastam Nora, e a parada de Otávio não explica como ele teria acesso a uma reprodução pronta. O conjunto aponta inequivocamente para o leiloeiro Francisco Leme.",
      exclusions: [
        { who: "Nora Antunes", why: "A câmera do estúdio a coloca lá das 19h55 às 20h05, e a foto bruta registra o original. Ela não tinha acesso ao laboratório de realce nem ao estojo de lacres." },
        { who: "Celina Bittencourt", why: "A notária não tinha giro de chave do arquivo nem ferramentas de lacre; o livro de incineração está no nome do regulamento, mas quem operava os lacres era o leiloeiro." },
        { who: "Otávio Serra", why: "A parada na rotatória é um fato, mas ela só é útil a quem tinha a reprodução pronta antes do lacre. O correio recebeu um pacote já selado com o número 714." }
      ]
    }
  };
/* ============================================================
     CASO 11 — DESAPARECIMENTO, NÍVEL 3
     ============================================================ */
  var C11 = {
    id: "d03",
    code: "D-03",
    title: "O Passageiro da Meia-Noite",
    category: "desaparecimentos",
    difficulty: 3,
    brief: "No Expresso Serrano, o empresário Sóstenes Vilar, 51 anos, desapareceu do vagão-leito durante a viagem da capital à serra. O trem partiu às 22h40; na parada intermediária de Curva Verde, a atendente encontrou o compartimento 8 vazio, com a bagagem intacta. Sóstenes não desembarcou em nenhuma estação com bilhete, o telefone não deu mais sinal e nenhuma câmera registrou a saída dele.",
    context: "O Expresso Serrano tem 4 vagões-leito e uma estação de embarque com catracas eletrônicas. Os compartimentos são abertos por dentro; a porta do vestíbulo nº 3, no fim do vagão-leito, abre com chave mestra que fica no gabinete do chefe de trem. O convés da sarjeta é alcançável pela porta do vestíbulo, sem câmera.",
    date: "Sexta-feira, 13 de junho · partida 22h40 · parada em Curva Verde 01h25",
    suspects: [
      {
        id: "nei",
        name: "Nei Fonseca",
        role: "Atendente do vagão-leito",
        age: 39,
        profile: [
          "Responsável pelos compartimentos 1 a 6 e 8; conhece Sóstenes de viagens anteriores.",
          "Fecha o vagão às 23h30 e registra o estado dos compartimentos."
        ],
        behavior: "No formulário de fechamento escreveu \"todos recolhidos\", mas a atendente plantão disse que a porta do vestíbulo podia ser aberta da parte de dentro sem a chave mestra, desde que o trinco estivesse aberto.",
        alibi: "No vagão entre 23h30 e 00h40, atendendo os compartimentos 5 e 6.",
        role: "Atendente do vagão-leito"
      },
      {
        id: "duarte",
        name: "Duarte Peçanha",
        role: "Viajante do compartimento 9",
        age: 46,
        profile: [
          "Ex-sócio de Sóstenes numa transportadora; a sociedade foi dissolvida com litígio.",
          "Viaja toda semana a Curva Verde, onde tem um depósito."
        ],
        behavior: "O registro de abertura do compartimento 9 mostra reabertura às 23h50, mas Duarte diz que \"não saiu do compartimento desde as 23h10\".",
        alibi: "No compartimento 9 das 23h10 à 00h50, dormindo.",
        role: "Viajante do compartimento 9"
      },
      {
        id: "rode",
        name: "Rode Bento",
        role: "Chefe do trem",
        age: 55,
        profile: [
          "Guarda a chave mestra no gabinete e anota cada abertura em livro físico.",
          "Era ciente da audiência que Sóstenes teria na segunda-feira contra Duarte."
        ],
        behavior: "O livro do gabinete registra abertura às 23h35 \"para conferência do vagão\", sem nome de quem a fez.",
        alibi: "No gabinete do trem, das 23h30 às 00h30, conferindo documentos.",
        role: "Chefe do trem"
      },
      {
        id: "vilar",
        name: "Odete Vilar",
        role: "Esposa do desaparecido",
        age: 49,
        profile: [
          "Vive da sociedade com Sóstenes; o casal atravessa crise financeira.",
          "Sabe que Sóstenes tinha seguro de vida com cláusula de desaparecimento."
        ],
        behavior: "Telefonou para a linha de emergência da estação pedindo notícias às 04h10, antes do trem chegar à serra.",
        alibi: "Em casa, segundo a vizinha; o telefone dela registrou a ligação às 04h10.",
        role: "Esposa do desaparecido"
      }
    ],
    testimonies: [
      {
        id: "t_nei",
        person: "Nei Fonseca",
        role: "Atendente do vagão-leito",
        text: "Confirmei os compartimentos às 23h30 e todos estavam recolhidos. O sr. Vilar tinha me pedido um chá às 23h40 e voltou para o 8. Às 00h40 fui acordar os passageiros antes da parada de Curva Verde e o compartimento 8 estava vazio, a bagagem no chão. A porta do vestíbulo fica sempre fechada com o trinco para fora."
      },
      {
        id: "t_duarte",
        person: "Duarte Peçanha",
        role: "Viajante do compartimento 9",
        text: "Eu e o Vilar não nos falamos na viagem. Fiquei no compartimento 9 das 23h10 à 00h50. Ninguém bateu na minha porta. Sobre reabrir o compartimento às 23h50: isso é conversa do sistema, eu estava deitado. Esse homem sabia que tinha audiência contra a minha empresa — se sumiu, sumiu para me prejudicar."
      },
      {
        id: "t_rode",
        person: "Rode Bento",
        role: "Chefe do trem",
        text: "A chave mestra fica no gabinete comigo. Anotei a abertura das 23h35 como conferência do vagão, mas não lembro quem pediu. Saí do gabinete por poucos minutos para receber o bilhete do passageiro do 5. O trinco da porta do vestíbulo, no fim do vagão, quando fechado por dentro, qualquer pessoa dentro do vagão pode abrir. Só não pode fechar por fora."
      },
      {
        id: "t_odete",
        person: "Odete Vilar",
        role: "Esposa",
        text: "Eu não sabia que ele viajaria hoje. Fiquei em casa o tempo todo. Quando o trem não chegou e o telefone dele fora do ar, liguei para a estação às 04h10. O seguro? Ele sempre falou que a firma podia afundar com esse processo. Nunca cogitamos sumir. Ele seria presidente ontem na audiência de segunda-feira, não iria deixar tudo de mão."
      },
      {
        id: "t_cozinha",
        person: "Luzia, cozinheira do trem",
        role: "Equipe de serviço",
        text: "O sr. Vilar pediu chá às 23h40 e recebi a xícara do Nei. Ele passou por mim no corredor do vagão olhando para a porta do vestíbulo, uns dez minutos depois, como quem esperava alguém ou queria ver a hora. Eu não vi ninguém sair, mas também não fico olhando a porta o tempo todo."
      }
    ],
    timeline: [
      { time: "22h40", event: "O Expresso Serrano parte da capital central." },
      { time: "22h58", event: "QR de Sóstenes registrado na catraca de embarque da capital." },
      { time: "23h30", event: "Nei confirma os compartimentos e escreve \"todos recolhidos\"." },
      { time: "23h35", event: "Abertura da porta do vestíbulo nº 3 (livro do gabinete)." },
      { time: "23h40", event: "Nei entrega o chá ao sr. Vilar no compartimento 8." },
      { time: "23h50", event: "O sistema registra reabertura do compartimento 9 (lado interno)." },
      { time: "00h40", event: "Nei abre o compartimento 8 e o encontra vazio." },
      { time: "01h25", event: "Parada de Curva Verde; nenhuma câmera registra desembarque de Sóstenes." }
    ],
    evidence: [
      {
        id: "ev_inhaler",
        title: "Pomada sem usar",
        type: "Vestígio",
        icon: "lab",
        summary: "O nebulizador e a pomada de Sóstenes continuavam lacrados na mala, sem uso.",
        description: "Sóstenes usava nebulização todas as noites por prescrição; o estojo na mala estava intacto, com o lacre do frasco. Quem planejasse uma ausência de poucas horas levaria a medicação — quem decidiu sumir de propósito a deixou exatamente na borda, para parecer pressa, mas sem o hábito diário dela.",
        significance: "A medicação diária intacta é incompatível com uma viagem voluntária de dias, mas perfeitamente compatível com um abandono planejado de uma única noite."
      },
      {
        id: "ev_vestibulo",
        title: "Trinco do vestíbulo nº 3",
        type: "Vestígio",
        icon: "key",
        summary: "A porta do vestíbulo, fechada por dentro, mostra marcas de giro recente do mecanismo.",
        description: "Na polícia da estação, a fechadura do vestíbulo nº 3 tem marca de giro seco recente (falta de lubrificação por uso), mas o trinco estava aberto por dentro no início da checagem. Quem abriu a porta a partir do interior do vagão podia simplesmente fechá-la por fora ao sair — ficando o trinco aberto para o próximo.",
        significance: "A porta foi aberta a partir do interior, conforme a marca, sem necessidade da chave mestra."
      },
      {
        id: "ev_gabinete",
        title: "Livro do gabinete",
        type: "Documento",
        icon: "doc",
        summary: "Abertura das 23h35 registrada sem nome; a conferência não consta do relatório noturno.",
        description: "O livro do gabinete registra uma única abertura da chave mestra às 23h35 com motivo \"conferência do vagão\". O chefe de trem não identifica quem pediu, e o mapa noturno não menciona nenhuma conferência no vagão-leito.",
        significance: "A anotação da chave mestra serve para explicar o acesso sem comprometer ninguém — o verdadeiro abridor usou o trinco interno."
      },
      {
        id: "ev_livre",
        title: "Passagem em nome de Arnol",
        type: "Documento",
        icon: "receipt",
        summary: "Uma passagem comprada por dinheiro na estação de São Roque, em nome de Arnol Brum, foi usada no mesmo dia em viagem-carona.",
        description: "A estação de São Roque, sem câmeras internas, vendeu na tarde anterior uma passagem carona para a serra em nome de Arnol Brum, paga em dinheiro. O nome \"Arnol\" é anagrama de \"Lorna\" — o segundo nome de Sóstenes — e a viagem seguinte partiu da serra em direção à capital na manhã seguinte.",
        significance: "Sóstenes tinha um bilhete de volta comprado por dinheiro em estação sem câmera, no mesmo trecho, horas depois de sumir."
      },
      {
        id: "ev_qr",
        title: "Catraca da capital",
        type: "Registro",
        icon: "track",
        summary: "O QR de Sóstenes registra entrada na capital, mas o sistema não mostra saída em nenhuma estação.",
        description: "O QR é registrado na entrada de Sóstenes na capital central às 22h58. A lista de desembarques da serra não contém o passe dele. Porém, o sistema registra dezenas de \"desembarque livre\" em estações sem catraca, como São Roque e Curva Verde — onde embarcações podem sair sem o passe.",
        significance: "A inexistência de registro de saída não prova permanência: as estações sem catraca liberam saída sem o cartão."
      }
    ],
    contradictions: [
      {
        id: "c_nei",
        title: "Fechamento às 23h30 x porta aberta",
        type: "contradiction",
        between: "Formulário de Nei x Trinco do vestíbulo",
        analysis: "Nei anotou que todos estavam recolhidos, mas o trinco do vestíbulo estava aberto por dentro — isso só é possível se a porta foi aberta a partir do interior após o fechamento."
      },
      {
        id: "c_digita",
        title: "Reabertura do 9",
        type: "contradiction",
        between: "Registro do sistema x Depoimento de Duarte",
        analysis: "O compartimento 9 registrou reabertura às 23h50, mas Duarte afirma que não saiu. O registro interno tem erro conhecido de relógio de até 12 minutos, mas a reabertura real existiu: alguém saiu e voltou, e Duarte é o único ocupante."
      },
      {
        id: "c_gab",
        title: "Chave mestra x trinco",
        type: "contradiction",
        between: "Livro do gabinete x Trinco do vestíbulo",
        analysis: "A abertura das 23h35 foi registrada como \"conferência\", mas nenhum relatório confirma conferência. O trinco aberto por dentro prova que a chave mestra não foi necessária para a saída."
      },
      {
        id: "c_odete",
        title: "Ligação da esposa",
        type: "confirmation",
        between: "Registro do telefone x Horário da chegada",
        analysis: "Odete ligou às 04h10, antes de o trem chegar à serra, confirmando que o casal combinou antecipadamente o que ela diria — ela não estava \"sem notícias\"."
      }
    ],
    hints: [
      "Nem todo desaparecimento é crime: examine o que Sóstenes deixou para trás e o que ele comprou antes.",
      "Compare a catraca com o bilhete-carona: o sistema sem saída registrada não prova que ele permaneceu no trem.",
      "As evidências decisivas são a medicação intacta, o trinco aberto por dentro e o bilhete-carona de Arnol."
    ],
    answerOptions: [
      { id: "concl:voluntaria", label: "Sóstenes sumiu por vontade própria", sub: "Fuga planejada" },
      { id: "sus:nei", label: "Nei Fonseca", sub: "Atendente do vagão-leito" },
      { id: "sus:duarte", label: "Duarte Peçanha", sub: "Ex-sócio" },
      { id: "sus:rode", label: "Rode Bento", sub: "Chefe do trem" }
    ],
    solution: {
      correctAnswer: "concl:voluntaria",
      title: "Fuga planejada de Sóstenes",
      motive: "Com a audiência de segunda e o processo contra Duarte, a firma de Sóstenes afundaria; a apólice com cláusula de desaparecimento protegeria a família. Ele simulou o sumiço: saiu pela porta do vestíbulo nº 3, sem a chave mestra, e viajou de volta por outra rota, comprada por dinheiro em estação sem câmera.",
      sequence: [
        "Sóstenes compra, em dinheiro, a passagem-carona de Arnol Brum na estação de São Roque.",
        "No trem, espera o vagão ser fechado e abre a porta do vestíbulo pelo trinco interno às 23h35.",
        "Deixa a medicação diária intacta na mala, como quem \"partiu sem nada\", para reforçar a versão de sequestro.",
        "Desce na estação de Curva Verde sem catraca e pega o trem de volta na manhã seguinte.",
        "O telefone desligado completa a cena: nenhum rastro, nenhum crime."
      ],
      decisiveEvidence: ["ev_inhaler", "ev_vestibulo", "ev_livre"],
      reasoning: "A pomada e o nebulizador lacrados mostram que a ausência pretendida era de uma única noite — quem planejasse uma viagem real levaria a medicação. O trinco aberto por dentro revela que a saída pela porta do vestíbulo dispensa a chave mestra e pode ser fechada por fora. E o bilhete-carona de \"Arnol Brum\" comprado por dinheiro em estação sem câmera, no mesmo trecho inverso, é a prova concreta da rota combinada. O quadro completo aponta para a fuga voluntária de Sóstenes Vilar.",
      exclusions: [
        { who: "Nei Fonseca", why: "O atendente fechou o vagão e entregou o chá às 23h40; o trinco aberto por dentro não exige a chave dele, e o livro do gabinete não o registra." },
        { who: "Duarte Peçanha", why: "A reabertura do 9 teve relógio de até 12 minutos de diferença, e a passagem de Arnol foi comprada um dia antes — o ex-sócio não tinha nada a ganhar fabricando uma fuga para proteger o segredo da apólice." },
        { who: "Rode Bento", why: "A chave mestra nunca saiu do gabinete para o vestíbulo; a abertura das 23h35 foi feita pelo trinco interno, sem necessidade do chefe de trem." }
      ]
    }
  };
/* ============================================================
     CASO 12 — DESAPARECIMENTO, NÍVEL 3
     ============================================================ */
  var C12 = {
    id: "d04",
    code: "D-04",
    title: "A Diretora do Colégio Aurora",
    category: "desaparecimentos",
    difficulty: 3,
    brief: "A diretora do Colégio Aurora, Maristela Queiroz, 54 anos, desapareceu do prédio principal na sexta-feira à noite. Seus óculos estavam sobre a mesa do gabinete, o café ainda morno, e a porta do prédio trancada por dentro. Não há sinais de arrombamento. Dois dias depois, a mãe dela recebeu um e-mail de \"Maristela\" pedindo que ficassem tranquilos — mensagem que a perícia considera verdadeira.",
    context: "O colégio tem prédio principal, um anexo de madeira (refeitório) e um porão desativado desde 1985, quando abrigou a antiga cozinha. O porão tem porta metálica fechada com cavilhão e cadeado. O acesso ao prédio principal monitora o corredor do andar do gabinete, e o subsolo não tem câmeras.",
    date: "Sexta-feira, 20 de junho · sumiço entre 18h30 e 19h20",
    suspects: [
      {
        id: "ulisses",
        name: "Ulisses Ferro",
        role: "Vice-diretor",
        age: 45,
        profile: [
          "Comandava o colégio quando Maristela viajava; hoje briga pela direção.",
          "Sabe do porão desativado porque fazia parte da obra de 1985."
        ],
        behavior: "Cancelou a reunião de sábado com a mãe de Maristela e mudou as iterações com a rede de ensino no e-mail.",
        alibi: "No gabinete até 21h, \"revisando os relatórios de bolsas\".",
        role: "Vice-diretor"
      },
      {
        id: "diolinda",
        name: "Diolinda Caires",
        role: "Cozinheira do refeitório",
        age: 48,
        profile: [
          "Trabalha no colégio desde 1990; conhece todos os acessos ao porão.",
          "Foi contratada por Maristela, de quem é próxima."
        ],
        behavior: "Na noite do sumiço preparou o jantar dos funcionários e saiu às 19h, segundo a catraca.",
        alibi: "No refeitório das 16h às 19h; depois, em casa.",
        role: "Cozinheira do refeitório"
      },
      {
        id: "zacarias",
        name: "Zacarias Bento",
        role: "Jardineiro e zelador",
        age: 41,
        profile: [
          "Tem a chave da porta de serviço do prédio principal e do refeitório.",
          "Reformou a cozinha antiga em 1985 e afirma que \"a porta do porão nunca mais foi aberta\"."
        ],
        behavior: "Ficou no colégio até as 20h no sábado, fazendo \"alguns reparos\" sem ordem de serviço.",
        alibi: "No sábado, das 8h às 20h, no colégio; na sexta, saiu às 17h30.",
        role: "Jardineiro e zelador"
      },
      {
        id: "everton",
        name: "Éverton Pinho",
        role: "Vigia noturno",
        age: 36,
        profile: [
          "Contratado havia um mês, indicação direta do vice-diretor.",
          "Controla as câmeras do corredor e o registro de presença dos funcionários."
        ],
        behavior: "Não registrou a saída de ninguém na sexta a partir das 18h45, mas apagou o trecho do relatório entre 18h e 19h20.",
        alibi: "Na guarita do portão, das 18h às 22h, com a tela dividida das câmeras.",
        role: "Vigia noturno"
      }
    ],
    testimonies: [
      {
        id: "t_ulisses",
        person: "Ulisses Ferro",
        role: "Vice-diretor",
        text: "Na sexta, a diretora me chamou para falar sobre as bolsas. Eu estava no meu gabinete. Saí às 21h, como consta. O e-mail seguinte dela para a mãe me surpreendeu, mas quem sou eu para duvidar? Eu quero a direção, sim, mas tenho nome para preservar. O porão? Eu não sei nada de porão."
      },
      {
        id: "t_diolinda",
        person: "Diolinda Caires",
        role: "Cozinheira",
        text: "A diretora jantava às 18h30 toda sexta no refeitório. Essa semana, quebrou o prato, coisa rara. Me pediu a chave do porão \"para separar uns arquivos\", mas eu não tenho essa chave há vinte anos. Saí às 19h, bateu a catraca nas minhas costas. Não vi mais ela."
      },
      {
        id: "t_zacarias",
        person: "Zacarias Bento",
        role: "Zelador",
        text: "A porta do porão tem cadeado desde 1985. Eu mesmo seus pai malhei. Na sexta, saí às 17h30 e voltei no sábado cedo para um reparo na calha. Não entro naquele buraco há décadas. Podem olhar o armário da calha: preciso daquele espaço para guardar as enxadas."
      },
      {
        id: "t_everton",
        person: "Éverton Pinho",
        role: "Vigia",
        text: "Fiquei na guarita a noite inteira. A câmera do corredor do gabinete mostrou a diretora entrando às 17h40 e fechando a porta. Depois das 18h45, o corredor ficou vazio. Ajustei o relatório: o sistema de gravação falhou por doze minutos, então anotei o intervalo como \"sem imagens\"."
      },
      {
        id: "t_merca",
        person: "Dona Mercês",
        role: "Mãe de Maristela",
        text: "O e-mail falava de \"curto descanso\" e pedia que eu não procurasse a polícia. Maristela nunca gostou de e-mail; ela me liga toda sexta às 20h30, religiosamente. Meu coração diz que não foi ela. Fui criada no serviço doméstico; sei quando uma voz no papel é de outra pessoa."
      }
    ],
    timeline: [
      { time: "17h40", event: "Maristela entra no prédio e tranca a porta por dentro." },
      { time: "18h10", event: "O café do gabinete é preparado (teste térmico da xícara)." },
      { time: "18h30", event: "Maristela janta no refeitório e quebra um prato." },
      { time: "18h45", event: "A diretora volta ao gabinete; a câmera a registra no corredor." },
      { time: "19h00", event: "Diolinda bate a catraca e sai." },
      { time: "19h20", event: "Éverton apaga do relatório o trecho das 18h às 19h20." },
      { time: "21h00", event: "Ulisses sai do gabinete e segue para casa." },
      { time: "20h30 sáb", event: "Detective junta: o porão é aberto, e Maristela é encontrada viva, trancada no antigo depósito." }
    ],
    evidence: [
      {
        id: "ev_porao",
        title: "Porta do porão",
        type: "Perícia",
        icon: "key",
        summary: "O cadeado foi trocado por um novo, com as marcas de serra na lâmina do velho no chão.",
        description: "Na inspeção, o cadeado que fechava o porão era novo, com número de série da loja do bairro e chave arranhada. O cadeado antigo, serrado, estava dentro de um pano de limpeza no fundo do corredor.",
        significance: "O porão foi aberto deliberadamente na noite do sumiço, e a troca de cadeado esconde o uso."
      },
      {
        id: "ev_poeira",
        title: "Poeira e chinelos",
        type: "Vestígio",
        icon: "foot",
        summary: "Na soleira do porão, duas marcas de chinelo de pano, tamanho 36, indo para dentro.",
        description: "A perícia encontrou marcas de chinelo de pano (o mesmo tipo que a diretora usava no colégio) entrando no porão. O porão estava limpo de poeira no corredor interno, mas empoeirado no canto.",
        significance: "Alguém varreu o caminho e deixou entrar as marcas — a limpeza seletiva sugere que a cena foi preparada."
      },
      {
        id: "ev_email",
        title: "E-mail para a mãe",
        type: "Documento",
        icon: "mail",
        summary: "Dispositivo e horário do e-mail; o texto não tem os hábitos de digitação de Maristela.",
        description: "O e-mail chegou às 22h12 de sábado, enviado do telefone de Maristela por aplicativo de e-mail. A perícia nota que a diretora digitava com dois toques e vírgula antes de \"e\"; no e-mail há uma vírgula depois de \"e\".",
        significance: "O conteúdo é do telefone dela, mas a digitação não é a dela — central que alguém respondeu com o celular."
      },
      {
        id: "ev_ponto",
        title: "Ponto das bolsas",
        type: "Documento",
        icon: "doc",
        summary: "Folha de distribuição de bolsas com o nome de Maristela riscado e substituído por Ulisses.",
        description: "No relatório de sexta, o nome da diretora foi riscado e o de Ulisses passado a caneta como responsável pelas bolsas, com a data da sexta. A revisão do risco é a mesma da caneta do gabinete do vice-diretor.",
        significance: "Ulisses assumiu o controle das decisões de bolsas no mesmo dia do sumiço."
      },
      {
        id: "ev_cam",
        title: "Câmera do corredor",
        type: "Registro de imagem",
        icon: "camera",
        summary: "A câmera registra a diretora saindo do gabinete às 19h05 e parando diante da escada do porão.",
        description: "A câmera do corredor, que Éverton disse ter falhado, registra Maristela saindo do gabinete às 19h05. Ela para em frente à escada do porão por 40 segundos e desce. O trecho apagado do relatório é o mesmo intervalo.",
        significance: "Maristela desceu ao porão por vontade própria na noite do sumiço."
      }
    ],
    contradictions: [
      {
        id: "c_cam",
        title: "Falha da câmera x registro",
        type: "contradiction",
        between: "Relatório de Éverton x Gravação do corredor",
        analysis: "Éverton declarou falha de 12 minutos, mas a gravação do corredor existe e mostra Maristela indo ao porão às 19h05. O trecho foi apagado do relatório, não da gravação."
      },
      {
        id: "c_email",
        title: "E-mail x hábitos de digitação",
        type: "contradiction",
        between: "Texto do e-mail x Perícia de digitação",
        analysis: "A diretora tem padrão de digitação conhecido (vírgula antes de \"e\"); o e-mail usa vírgula depois. O telefone é dela, mas o autor do e-mail é outra pessoa."
      },
      {
        id: "c_cadeado",
        title: "Cadeado trocado",
        type: "contradiction",
        between: "Cadeado novo x Registro de compra",
        analysis: "O cadeado é novo e foi comprado na loja do bairro naquela semana, em dinheiro, e a chave arranhada foi usada. Diolinda negou ter a chave do porão, mas o cadeado antigo foi serrado com a ferramenta do armário da calha."
      },
      {
        id: "c_ponto",
        title: "Risco das bolsas",
        type: "confirmation",
        between: "Relatório de sexta x Caneta do vice-diretor",
        analysis: "O nome de Maristela riscado e o de Ulisses acrescentado com revisão da caneta dele confirma os planos do vice-diretor para assumir as decisões no mesmo dia."
      }
    ],
    hints: [
      "O sumiço tem três pistas: a câmera que \"falhou\", o cadeado novo e o e-mail com digitação estranha.",
      "Compare a catraca de Diolinda e o gabinete de Ulisses com a movimentação registrada da porta do porão.",
      "As evidências decisivas são a câmera mostrando a descida, o e-mail digitado por outra pessoa e o cadeado trocado."
    ],
    answerOptions: [
      { id: "sus:ulisses", label: "Ulisses Ferro", sub: "Vice-diretor" },
      { id: "sus:diolinda", label: "Diolinda Caires", sub: "Cozinheira" },
      { id: "sus:zacarias", label: "Zacarias Bento", sub: "Jardineiro e zelador" },
      { id: "sus:everton", label: "Éverton Pinho", sub: "Vigia noturno" }
    ],
    solution: {
      correctAnswer: "sus:ulisses",
      title: "Ulisses Ferro, o vice-diretor",
      motive: "Ulisses queria a direção e o comando das bolsas, e sabia do porão desativado de 1985. Ele preparou a tranca para dar a Maristela uma \"baita lição\" e responder o e-mail dela no telefone, para que a mãe e a polícia acreditassem num sumiço voluntário.",
      sequence: [
        "Ulisses serra o cadeado antigo e instala um novo, com chave, no porão.",
        "Maristela, chamada por ele, desce ao porão às 19h05 para \"ver arquivos antigos\".",
        "Dentro, Ulisses tranca o cadeado novo por fora e fica com o telefone da diretora.",
        "O relatório do vigia, ajustado por Éverton, esconde o intervalo — mas a gravação existe.",
        "Na noite seguinte, Ulisses envia o e-mail com o celular dela, tentando convencer a família."
      ],
      decisiveEvidence: ["ev_cam", "ev_email", "ev_porao"],
      reasoning: "A gravação do corredor mostra Maristela descendo ao porão às 19h05, contrariando o relatório apagado de Éverton. O e-mail no telefone dela tem digitação diferente da dela — alguém respondeu com o aparelho. E o cadeado novo, comprado naquela semana, só faz sentido se quem o instalou sabia que o porão seria usado. A cadeia de fatos identifica Ulisses Ferro como o único com conhecimento, acesso e ferramentas para armar tudo.",
      exclusions: [
        { who: "Diolinda Caires", why: "A catraca confirma a saída dela às 19h, e o depoimento sobre não ter a chave do porão pode ser verdade: o cadeado foi serrado do lado de fora por quem conhecia a lâmina, não por quem prepara comida." },
        { who: "Zacarias Bento", why: "A ferramenta do armário da calha foi usada, mas o zelador não sabia do e-mail da diretora nem tinha motivo para trancá-la; ele nem entrou no prédio naquela noite." },
        { who: "Éverton Pinho", why: "O vigia ajustou o relatório a pedido, mas não sabia o conteúdo do porão: ele não podia conhecer o cadeado novo nem o telefone da diretora." }
      ]
    }
  };
/* ============================================================
     CASO 13 — FRAUDE, NÍVEL 3
     ============================================================ */
  var C13 = {
    id: "f03",
    code: "F-03",
    title: "O Silo da Cooperativa",
    category: "fraudes",
    difficulty: 3,
    brief: "A Cooperativa Serra Alta recebeu R$ 4,8 milhões em subsídios federais por 12 mil toneladas de grão armazenadas no silo central. A vistoria constata que o silo tem capacidade física de 8 mil toneladas e que os tíquetes de pesagem indicam, no máximo, 7,9 mil. Duplicidade de notas fiscais de venda também é apontada por dois corretores.",
    context: "A cooperativa funciona com um silo central, uma balança rodoviária na entrada e venda de grão por leilões trimestrais. O contador prepara as declarações; o gerente do silo confere as cargas; o auditor externo revisa os documentos para as entidades financiadoras.",
    date: "Julho de 2025 · declaração de safra e subsídios",
    suspects: [
      {
        id: "otto",
        name: "Otto Graça",
        role: "Presidente da cooperativa",
        age: 58,
        profile: [
          "Assina as declarações de subsídio e as atas dos leilões.",
          "Único com senha de cancelamento nas plataformas de leilão."
        ],
        behavior: "No leilão de maio, o mesmo lote de grão \"FG-414\" aparece em dois contratos de venda com compradores diferentes.",
        alibi: "Viajou a negócios na semana da vistoria; a presença física não é confirmada.",
        role: "Presidente"
      },
      {
        id: "genesio",
        name: "Genésio Baia",
        role: "Contador",
        age: 47,
        profile: [
          "Emite as notas e declarações; revelou à direção que os números não batiam.",
          "Guardou a memória de cálculo da 12 mil toneladas no computador dela."
        ],
        behavior: "Apresentou à auditoria um memorando escrito a mão alertando para a diferença de 4 mil toneladas.",
        alibi: "No escritório da cooperativa durante os três dias úteis da auditoria.",
        role: "Contador"
      },
      {
        id: "alcebiades",
        name: "Alcebíades Rocha",
        role: "Gerente do silo",
        age: 52,
        profile: [
          "Opera a balança e assina os tíquetes de carga real recebida.",
          "Declarou formalmente à presidência o teto físico de 8 mil toneladas do silo."
        ],
        behavior: "Os tíquetes somam 7,9 mil toneladas — abaixo das 12 mil declaradas — e foram conferidos por ele.",
        alibi: "Nas instalações durante as operações de carga, registrado no livro.",
        role: "Gerente do silo"
      },
      {
        id: "nilda",
        name: "Nilda Prado",
        role: "Auditora externa",
        age: 44,
        profile: [
          "Revisa os documentos para as entidades financiadoras.",
          "Assinou ressalvas nas duas últimas vistorias."
        ],
        behavior: "O relatório final dela lista as divergências, mas a versão encaminhada às entidades removeu as ressalvas.",
        alibi: "No escritório de auditoria, de onde mandou os arquivos revisados.",
        role: "Auditora externa"
      }
    ],
    testimonies: [
      {
        id: "t_otto",
        person: "Otto Graça",
        role: "Presidente",
        text: "As 12 mil toneladas estão contabilizadas no sistema e amparadas nos tíquetes. Se o auditor corrigiu alguma divergência, é ele quem corrigiu. Sobre os dois contratos do lote FG-414: cada leilão tem um comprador só; se há dois, é erro do sistema de leilão, não da gestão. Eu não mexo na plataforma depois de cancelar um lote por engano em maio."
      },
      {
        id: "t_genesio",
        person: "Genésio Baia",
        role: "Contador",
        text: "Fiz as notas conforme os dados que me foram passados. No memorando que entreguei à presidência, escrevi, em lápis, \"diferença de 4 mil toneladas entre tíquetes e declaração\". Guardei o rascunho no computador. Não assinei as notas com os dois contratos; isso passava por mim, mas eu tinha que assinar o que estava na fila."
      },
      {
        id: "t_alcebiades",
        person: "Alcebíades Rocha",
        role: "Gerente do silo",
        text: "A balança de entrada só pesa o que é real. Meus tíquetes fecham 7,9 mil toneladas na safra passada. O silo tem capacidade declarada em placa de 8 mil. Se a cooperativa declarou 12 mil subsídio, é da papelada de cima, não do meu pátio."
      },
      {
        id: "t_nilda",
        person: "Nilda Prado",
        role: "Auditora externa",
        text: "A vistoria de julho foi rotina. Encontrei os desvios e os listei no relatório. Quando enviei a versão às entidades, usei o modelo padrão com as ressalvas — na minha pasta, o arquivo final tem as ressalvas. Se o que chegou às entidades é outro, alguém substituiu o meu arquivo."
      },
      {
        id: "t_corretor",
        person: "Ruben Cáceres",
        role: "Corretor de grãos",
        text: "Eu acompanhei o leilão de maio. O lote FG-414 foi vendido ao meu cliente com nota. Em junho, o mesmo FG-414 surgiu outro leilão, vendido a outro comprador, com nota também. Dois compradores pagaram por um grão que só existiu uma vez. Isso é fraude de alguém que controla o leilão."
      }
    ],
    timeline: [
      { time: "Maio 20", event: "Leilão nº 12: lote FG-414 (6 mil t) vendido ao comprador A." },
      { time: "Junho 03", event: "Leilão nº 13: o mesmo FG-414 (6 mil t) vendido novamente, ao comprador B." },
      { time: "Julho 01", event: "Declaração de subsídio apresenta 12 mil t armazenadas." },
      { time: "Julho 12", event: "Auditoria externa encontra divergência de capacidade." },
      { time: "Julho 14", event: "Rascunho do relatório de Nilda lista as ressalvas." },
      { time: "Julho 15", event: "Versão final às entidades sem as ressalvas." }
    ],
    evidence: [
      {
        id: "ev_capac",
        title: "Placa de capacidade",
        type: "Documento",
        icon: "doc",
        summary: "Placa fixada no silo e ficha técnica com capacidade de 8 mil toneladas.",
        description: "A placa da fabricante no silo central declara capacidade de 8.000 toneladas. A ficha técnica de instalação (1988) confirma. O cálculo de volume por viga também é consistente com 8 mil.",
        significance: "Fisicamente é impossível ter armazenado 12 mil toneladas no silo."
      },
      {
        id: "ev_ticket",
        title: "Tíquetes de balança",
        type: "Documento",
        icon: "receipt",
        summary: "Tíquetes assinados por Alcebíades somam 7,9 mil toneladas na safra.",
        description: "A soma dos tíquetes de entrada de grão da safra passada é de 7.962 toneladas, com assinatura do gerente do silo em cada página.",
        significance: "O volume real recebido é menor que o declarado no subsídio."
      },
      {
        id: "ev_dupla",
        title: "Contratos do FG-414",
        type: "Documento",
        icon: "bank",
        summary: "Dois contratos de venda do mesmo lote FG-414 para compradores diferentes.",
        description: "O contrato nº 12-11 vende o FG-414 (6 mil t) ao comprador A; o contrato nº 13-05 vende o FG-414 (6 mil t) ao comprador B. Ambos têm nota fiscal emitida na sequência.",
        significance: "A emissão dupla é a roda da fraude: o subsídio se soma ao pagamento duplo do mesmo grão."
      },
      {
        id: "ev_memo",
        title: "Memorando manuscrito",
        type: "Documento",
        icon: "list",
        summary: "Genésio anotou a lápis a diferença de 4 mil toneladas no memorando entregue à presidência.",
        description: "O memorando de Genésio, com data, contém a anotação a lápis \"diferença de 4 mil t entre tíquetes e declaração\". O documento foi localizado no computador dele após o alerta.",
        significance: "O contador alertou formalmente sobre a divergência antes da auditoria."
      },
      {
        id: "ev_arq",
        title: "Duas versões do relatório",
        type: "Documento",
        icon: "printer",
        summary: "O arquivo enviado às entidades difere do que Nilda assinou, com as ressalvas retiradas.",
        description: "A versão final em posse de Nilda traz as ressalvas; a versão que chegou às entidades tem as páginas de ressalva removidas e a assinatura \"aprovado sem ressalvas\" datada do mesmo dia.",
        significance: "O relatório foi adulterado depois de sair do ambiente da auditoria."
      },
      {
        id: "ev_senha",
        title: "Log de cancelamento",
        type: "Registro",
        icon: "track",
        summary: "O log da plataforma registra cancelamento do FG-414 com a senha administrativa de Otto.",
        description: "O sistema de leilões registra, em maio, a operação de cancelamento do lote FG-414 usando a credencial de administrador, que pertence ao presidente.",
        significance: "A operação que \"fechou\" o primeiro contrato foi feita com a senha de Otto, criando o espaço para revender o mesmo lote."
      }
    ],
    contradictions: [
      {
        id: "c_cap",
        title: "Capacidade x declaração",
        type: "contradiction",
        between: "Placa do silo x Declaração de subsídio",
        analysis: "O silo tem capacidade física de 8 mil toneladas, mas a declaração de subsídio pede 12 mil. A diferença de 4 mil não pode ter sido armazenada."
      },
      {
        id: "c_tickets",
        title: "Tíquetes x declaração",
        type: "contradiction",
        between: "Tíquetes de Alcebíades x Declaração de subsídio",
        analysis: "Os tíquetes somam 7,9 mil toneladas; a declaração diz 12 mil. Há 4,1 mil toneladas fictícias na papelada."
      },
      {
        id: "c_relatorio",
        title: "Duas versões do relatório",
        type: "contradiction",
        between: "Rascunho de Nilda x Versão às entidades",
        analysis: "A auditora assinou com ressalvas; a versão entregue tinha as ressalvas removidas e assinatura \"aprovado\" no mesmo dia. Alguém adulterou o arquivo depois do envio."
      },
      {
        id: "c_gene",
        title: "Alertas de Genésio",
        type: "confirmation",
        between: "Memorando de Genésio x Tíquetes",
        analysis: "O memorando a lápis do contador confirma que a divergência era conhecida internamente antes da auditoria."
      }
    ],
    hints: [
      "A fraude usa três pilares: capacidade impossível, lote vendido duas vezes e relatório adulterado.",
      "Quem controla o leilão pode cancelar e revender o mesmo lote — examine a senha do sistema.",
      "As evidências decisivas são a placa do silo, os dois contratos do lote FG-414 e o log de cancelamento."
    ],
    answerOptions: [
      { id: "sus:otto", label: "Otto Graça", sub: "Presidente" },
      { id: "sus:genesio", label: "Genésio Baia", sub: "Contador" },
      { id: "sus:alcebiades", label: "Alcebíades Rocha", sub: "Gerente do silo" },
      { id: "sus:nilda", label: "Nilda Prado", sub: "Auditora externa" }
    ],
    solution: {
      correctAnswer: "sus:otto",
      title: "Otto Graça, o presidente",
      motive: "Otto precisava de caixa para a reeleição e sabia que a auditoria não cruzaria a capacidade física. Ele declarou 12 mil toneladas, cancelou e revendeu o lote FG-414 com a própria senha para pagar a diferença, e adulterou o relatório da auditora para as entidades não verem as ressalvas.",
      sequence: [
        "Otto cancela o contrato do FG-414 em maio com a senha administrativa, sem baixar a declaração de subsídio.",
        "Em junho, revende o mesmo lote a um segundo comprador com nova nota fiscal.",
        "Declara 12 mil toneladas de grão armazenado, quando o silo comporta 8 mil.",
        "Quando o relatório de Nilda aponta as ressalvas, remove as páginas e assina \"aprovado sem ressalvas\".",
        "Os tíquetes reais (7,9 mil t) e a placa de capacidade delatam a fraude na vistoria."
      ],
      decisiveEvidence: ["ev_capac", "ev_dupla", "ev_senha"],
      reasoning: "A placa do silo e os tíquetes provam que o grão real não chegou a 12 mil toneladas — a declaração é impossível fisicamente. Os dois contratos do FG-414 mostram a venda dupla do mesmo lote, e o log de cancelamento com a senha administrativa identifica o presidente como o autor da operação. A adulteração do relatório da auditora fecha o padrão de quem tinha acesso a tudo: Otto Graça.",
      exclusions: [
        { who: "Genésio Baia", why: "O contador alertou por escrito sobre a divergência antes da auditoria e não tinha a senha de cancelamento do leilão." },
        { who: "Alcebíades Rocha", why: "Os tíquetes assinados por ele somam exatamente o que o silo recebeu; seu papel foi documentar a realidade." },
        { who: "Nilda Prado", why: "O relatório com ressalvas está em posse dela, e a versão adulterada foi enviada de dentro da cooperativa, não do escritório de auditoria." }
      ]
    }
  };
/* ============================================================
     CASO 14 — FRAUDE, NÍVEL 3
     ============================================================ */
  var C14 = {
    id: "f04",
    code: "F-04",
    title: "A Herança Digital",
    category: "fraudes",
    difficulty: 3,
    brief: "No Instituto Previdencial do Vale, uma auditoria descobre que 17 \"pensionistas\" recebem benefícios com dados de pessoas falecidas há anos e digitações idênticas à dos atendentes. Os pagamentos somam R$ 640 mil em 14 meses. O caso só apareceu porque um novo atendente notou que três beneficiários usavam a mesma foto de perfil.",
    context: "O instituto usa um sistema legado com credenciais por atendente. O atendente tem acesso a determinados perfis; o gerente, a todos. A auditoria recebeu os logs do sistema e as listas de acesso das três últimas semanas; os arquivos de criação de beneficiário ficam no servidor com hora e endereço IP de origem.",
    date: "Revisão de agosto de 2025 · criação dos perfis entre março de 2024 e julho de 2025",
    suspects: [
      {
        id: "waldir",
        name: "Waldir Nogueira",
        role: "Gerente da agência",
        age: 49,
        profile: [
          "Único com credencial de superusuário no sistema legado.",
          "Cuida pessoalmente das correções de cadastro e dos acessos.",
          "Protestou contra a criação de um novo sistema de auditoria aprovada em julho."
        ],
        behavior: "Os 17 perfis fantasmas foram criados entre 22h e 23h em dias úteis, horário em que a agência fecha às 18h.",
        alibi: "Na agência até às 19h30 em alguns dias; não há registro de acesso noturno com o crachá dele.",
        role: "Gerente"
      },
      {
        id: "nivea",
        name: "Nívea Sales",
        role: "Atendente",
        age: 31,
        profile: [
          "Emite beneficiários diariamente e tem rotina conhecida pelos chamados.",
          "É a atendente mais eficiente do setor, elogiada pela gerência."
        ],
        behavior: "Três beneficiários fantasmas usam a mesma foto de perfil — a foto é a própria imagem que aparece no crachá de Nívea recortada.",
        alibi: "No balcão de atendimento das 8h às 18h, com registros de chamados.",
        role: "Atendente"
      },
      {
        id: "erico",
        name: "Érico Tavares",
        role: "Técnico de cadastro",
        age: 44,
        profile: [
          "Opera o sistema legado e cuida das permissões de acesso.",
          "Foi rebaixado de função depois de denunciar irregularidades em 2024."
        ],
        behavior: "A credencial dele foi desativada em 2024 após a denúncia, mas o log registra o perfil da velha senha sendo usado em 2025.",
        alibi: "Em casa, com o computador no escritório da empresa — o acesso remoto não faz parte do contrato dele.",
        role: "Técnico de cadastro"
      },
      {
        id: "dorita",
        name: "Dorita Lemos",
        role: "Supervisora de benefícios",
        age: 52,
        profile: [
          "Aprova os pagamentos e revisa as listas mensais de beneficiários.",
          "Morava perto do instituto; plantonista de emergências.",
        ],
        behavior: "As listas mensais que ela aprovava mostram os 17 nomes fictícios, mas as listas impressas dos arquivos físicos não os contêm.",
        alibi: "Reuniões internas em todos os dias de criação dos perfis, conforme a pauta.",
        role: "Supervisora"
      }
    ],
    testimonies: [
      {
        id: "t_waldir",
        person: "Waldir Nogueira",
        role: "Gerente",
        text: "A credencial de superusuário é minha, mas deixei o sistema aberto na minha sala várias vezes. Não uso depois das 19h. Se o log diz que os perfis foram criados às 22h, foi alguém que entrou com a minha senha, ou o técnico reativou a velha senha. Podem olhar a câmera da agência: ela pega o corredor, não a minha sala."
      },
      {
        id: "t_nivea",
        person: "Nívea Sales",
        role: "Atendente",
        text: "Eu emito beneficiário o dia todo, mas não crio perfil sozinha: o sistema exige a senha do gerente para cadastros. A foto do crachá foi usada em três perfis? Isso parece uma piada de mal gosto. Eu não tenho acesso noturno à agência."
      },
      {
        id: "t_erico",
        person: "Érico Tavares",
        role: "Técnico",
        text: "Eu denunciei as irregularidades em 2024, fui rebaixado e minha credencial foi desativada. Podem consultar o protocolo da denúncia. Eu não tenho mais acesso ao sistema. Se o log usa uma senha velha minha, foi reativada — e eu nunca soube."
      },
      {
        id: "t_dorita",
        person: "Dorita Lemos",
        role: "Supervisora",
        text: "Eu aprovo as listas de pagamento. As listas que assinei continham os 17 nomes, porque eram as que vinham do sistema. As listas físicas do arquivo não os mostram — mas o arquivo físico é outro setor. Desconfiar das minhas aprovações é desconfiar de quem só fazia o trabalho de rotina."
      },
      {
        id: "t_perito",
        person: "Perito em auditoria",
        role: "Equipe técnica",
        text: "Os 17 perfis foram criados via sessões com o endereço IP da agência e com a credencial do gerente ou a senha reativada do técnico. Nenhuma criação saiu de fora da rede do instituto. A auditoria interna em agosto era justamente para impedir esse tipo de uso."
      }
    ],
    timeline: [
      { time: "Mar 2024", event: "Primeiros 6 perfis fantasmas criados à noite." },
      { time: "Jun 2024", event: "Érico protesta por escrito contra o uso da senha dele." },
      { time: "Rebaixamento", event: "Érico é rebaixado e a credencial dele desativada." },
      { time: "Jul 2024", event: "Novos 6 perfis criados usando \"senha reativada\" do técnico." },
      { time: "Jul 2025", event: "Aprovação de um sistema novo de auditoria pelo conselho." },
      { time: "Jul 2025", event: "Últimos 5 perfis fantasmas criados." },
      { time: "Ago 2025", event: "Auditoria descobre os 17 beneficiários e a foto repetida." }
    ],
    evidence: [
      {
        id: "ev_ip",
        title: "Endereço IP de criação",
        type: "Registro",
        icon: "track",
        summary: "Todos os 17 perfis foram criados a partir do IP da própria agência.",
        description: "Os logs mostram sessões de criação de beneficiário originadas do IP da agência do instituto, sem nenhuma origem externa. Nenhum acessou de casa ou de outro escritório.",
        significance: "A fraude foi executada de dentro da agência, não por invasão remota."
      },
      {
        id: "ev_senha",
        title: "Sessões do gerente",
        type: "Registro",
        icon: "key",
        summary: "As 17 criações usaram a credencial do gerente ou a senha reativada do técnico.",
        description: "A autenticação das 17 sessões se divide entre a credencial única de superusuário (14) e uma senha antiga de suporte (3) que estava desativada desde 2024.",
        significance: "Só o gerente possuía a senha de superusuário; a senha do técnico só existia para quem tinha o arquivo de reativação."
      },
      {
        id: "ev_foto",
        title: "Foto repetida",
        type: "Documento",
        icon: "camera",
        summary: "Três dos perfis fantasmas usam a mesma imagem, recortada do crachá de Nívea.",
        description: "Auditoria percebeu que os beneficiários \"Arnaldo\", \"Zuleide\" e \"Caetano\" usavam a mesma foto. Ao ampliar, era o retrato do crachá da atendente Nívea com fundo recortado.",
        significance: "O autor da fraude usou fotos que tinha à mão no balcão — a de Nívea era a única imagem acessível sem login."
      },
      {
        id: "ev_tempo",
        title: "Horário das sessões",
        type: "Registro",
        icon: "clock",
        summary: "As criações aconteceram entre 22h e 23h, quando a agência está fechada desde as 18h.",
        description: "A média de criação é 22h40, com duração de 4 a 6 minutos por perfil — tempo de quem conhece o sistema e tem a tela na frente.",
        significance: "As sessões noturnas exigem acesso físico ao prédio após o expediente, contrariando o álibi de todos."
      },
      {
        id: "ev_escada",
        title: "Câmera do corredor",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Em três noites de criação, a câmera do corredor registra a sala do gerente com luz acesa às 22h.",
        description: "A câmera do corredor (que pega a porta da sala do gerente) mostra luz acesa, atrás da persiana, em três das noites em que perfis foram criados.",
        significance: "Alguém esteve fisicamente na agência no horário dos cadastros."
      }
    ],
    contradictions: [
      {
        id: "c_noturno",
        title: "Álibi noturno x sessões",
        type: "contradiction",
        between: "Depoimentos da equipe x Horário das sessões",
        analysis: "Todos declararam não estar na agência após as 19h, mas as criações aconteceram entre 22h e 23h a partir do IP interno."
      },
      {
        id: "c_ip",
        title: "IP interno x senhas",
        type: "contradiction",
        between: "Perito x Sessões do gerente",
        analysis: "Os perfis foram criados dentro da rede da agência, com uma senha que só o gerente possui e outra que estava desativada — dentro é que é impossível ter ocorrido sem acesso físico."
      },
      {
        id: "c_erico",
        title: "Denúncia de Érico",
        type: "confirmation",
        between: "Protocolo de 2024 x Credencial desativada",
        analysis: "A denúncia de Érico e a desativação da credencial dele ocorrem em 2024, confirmando que ele não usava o sistema por meios normais."
      },
      {
        id: "c_lista",
        title: "Lista física x lista do sistema",
        type: "contradiction",
        between: "Arquivos físicos x Listas aprovadas por Dorita",
        analysis: "As listas do sistema que Dorita aprovou contêm os fantasmas; as listas físicas não. A divergência entre os dois registros é a assinatura da fraude."
      }
    ],
    hints: [
      "A fraude é interna: siga o IP e o horário das sessões — ambos apontam a agência.",
      "A senha do gerente e a denúncia do técnico são pistas; a câmera do corredor fecha o horário.",
      "As evidências decisivas são o IP interno, as sessões com a senha do gerente e a câmera do corredor acesa às 22h."
    ],
    answerOptions: [
      { id: "sus:waldir", label: "Waldir Nogueira", sub: "Gerente" },
      { id: "sus:nivea", label: "Nívea Sales", sub: "Atendente" },
      { id: "sus:erico", label: "Érico Tavares", sub: "Técnico de cadastro" },
      { id: "sus:dorita", label: "Dorita Lemos", sub: "Supervisora" }
    ],
    solution: {
      correctAnswer: "sus:waldir",
      title: "Waldir Nogueira, o gerente",
      motive: "Waldir tem a única senha de superusuário, morava perto da agência e resistia ao novo sistema de auditoria. Ele criou os perfis fantasmas à noite, usou a foto do crachá de Nívea quando faltou imagem própria, e reativou a senha desativada de Érico para despistar a perícia.",
      sequence: [
        "Entre 2024 e 2025, Waldir usa a própria senha para criar 14 perfis fantasmas à noite.",
        "Para os últimos 3 perfis, reativa a senha antiga de Érico, sem que ele soubesse.",
        "Sem foto disponível, usa o retrato do crachá de Nívea nos três últimos perfis.",
        "As luzes da sala acendem às 22h em três noites registradas pela câmera do corredor.",
        "Quando a auditoria avança, as listas físicas ficam sem os nomes, mas o sistema e as fotos permanecem."
      ],
      decisiveEvidence: ["ev_ip", "ev_senha", "ev_escada"],
      reasoning: "As sessões vieram do IP da agência, fechando qualquer hipótese externa. As 17 criações usaram a senha de superusuário (só do gerente) ou a senha recuperada do técnico (que só o gerente podia reativar). E a câmera do corredor mostra a sala do gerente acesa às 22h nas noites das criações. A foto recortada do crachá de Nívea é o detalhe que a auditoria achou acidental, mas confirma quem tinha a imagem à mão: o gerente.",
      exclusions: [
        { who: "Nívea Sales", why: "A foto do crachá dela foi usada porque era a única imagem acessível no balcão; ela não tem senha de superusuário e não podia acessar a agência à noite com crachá (sem registro)." },
        { who: "Érico Tavares", why: "A denúncia de 2024 e a desativação da credencial mostram que ele estava fora do sistema; a senha \"dele\" foi reativada, o que ele mesmo denunciou." },
        { who: "Dorita Lemos", why: "A supervisora aprovava o que o sistema entregava; as listas físicas sem os nomes foram geradas pelo mesmo fluxo interno, não por decisão dela." }
      ]
    }
  };
/* ============================================================
     CASO 15 — ASSASSINATO (fictício), NÍVEL 3
     ============================================================ */
  var C15 = {
    id: "a03",
    code: "A-03",
    title: "A Balaustrada do Teatro",
    category: "assassinatos",
    difficulty: 3,
    brief: "Durante o ensaio técnico de \"A Dama Fantasma\", o diretor de luz Yorick Menezes caiu do balcão superior do Teatro Municipal de Alto Vale e não sobreviveu. A balaustrada do balcão cedeu no momento exato em que ele se inclinava para conferir o foco dos refletores. A perícia concluiu que o piso e a estrutura estavam firmes: o parafuso de fixação do corrimão foi cortado de propósito.",
    context: "O teatro passa por reforma na semana anterior ao ensaio, com o corrimão do balcão vistoriado na quinta. O ensaio de sexta tinha roteiro de luz com \"ponto escuro\" de três segundos no balcão. O acesso à ferramentaria é restrito e tem livro de saída de ferramentas.",
    date: "Sexta-feira, 5 de setembro · queda às 21h15",
    suspects: [
      {
        id: "tarsila",
        name: "Tarsila Vaz",
        role: "Técnica de iluminação",
        age: 34,
        profile: [
          "Opera a mesa de luz; escreve os roteiros de foco e conhece cada tempo do ensaio.",
          "Foi repreendida por Yorick por registrar horas extras irregulares."
        ],
        behavior: "No roteiro dela, o \"ponto escuro\" de 3 segundos tem uma marca \"✓ night\" que não existe nas cópias dos outros técnicos.",
        alibi: "Na mesa de luz, atrás do palco, das 20h às 22h.",
        role: "Técnica de iluminação"
      },
      {
        id: "olivia",
        name: "Olívia Barros",
        role: "Diretora do espetáculo",
        age: 50,
        profile: [
          "Dirigia o espetáculo e disputava o orçamento de luz com Yorick.",
          "Ela estava no palco quando a balaustrada cedeu."
        ],
        behavior: "Ordenou que o ensaio continuasse \"sem interrupção de luz\" até a queda, e depois interveio para que a perícia fosse feita \"com o mesmo cenário\".",
        alibi: "No centro do palco conduzindo o ensaio; testemunhas a veem o tempo todo.",
        role: "Diretora"
      },
      {
        id: "elias",
        name: "Elisa Prado",
        role: "Atriz principal",
        age: 28,
        profile: [
          "Novata na companhia; dependia do aval de Yorick para o contrato do próximo mês.",
          "Ficou no camarim durante o ponto escuro, segundo o figurinista."
        ],
        behavior: "As câmeras do palco a mostram no centro da cena, não no balcão, porém ela mencionou ter \"ida ao banheiro\" no intervalo.",
        alibi: "No palco ou no camarim, conforme as câmeras; no banheiro no intervalo.",
        role: "Atriz principal"
      },
      {
        id: "nando",
        name: "Nando Sales",
        role: "Marceneiro contratado",
        age: 46,
        profile: [
          "Executou a reforma do corrimão na semana anterior, sob supervisão de Yorick.",
          "É o único com a chave da ferramentaria."
        ],
        behavior: "O corrimão foi vistoriado na quinta e aprovado; Nando deixou a ferramentaria às 18h da sexta em ponto.",
        alibi: "Em casa às 21h15, com a esposa; a hora de saída consta do livro da ferramentaria.",
        role: "Marceneiro"
      }
    ],
    testimonies: [
      {
        id: "t_tarsila",
        person: "Tarsila Vaz",
        role: "Técnica de iluminação",
        text: "Eu escrevi o roteiro de luz com o ponto escuro de 3 segundos para respeitar o \"ir\" do coro — é padrão. O Yorick ia conferir exatamente nesse escuro. A marca \"✓ night\" é minha anotação de que a cena precisava de menos luz no balcão. Não sei quem mexeu na balaustrada.",
        id2: "t_tarsila"
      },
      {
        id: "t_olivia",
        person: "Olívia Barros",
        role: "Diretora",
        text: "O ensaio é uma máquina: quando o foco caiu, mandei seguir para não perder o elenco. Yorick decidiu olhar o foco do balcão, não fui eu que o mandei. A balaustrada aprovada na quinta— até eu vi o relatório maciço do Nando."
      },
      {
        id: "t_elias",
        person: "Elisa Prado",
        role: "Atriz",
        text: "Eu estava no palco o ensaio inteiro. No intervalo fui ao banheiro, como todas. Não subi no balcão nem cheguei perto da ferramentaria. O Yorick me apoiava no contrato do próximo mês — não teria motivo para nada."
      },
      {
        id: "t_nando",
        person: "Nando Sales",
        role: "Marceneiro",
        text: "A balaustrada ficou pronta na quinta e o vistoriador aprovou. Na sexta, fechei a ferramentaria às 18h em ponto e fui para casa. Minha esposa confirma. Quem cortou o parafuso usou a esmerilhadeira da própria oficina; de manhã, eu não tinha usado."
      },
      {
        id: "t_ajudante",
        person: "Júnior, assistente de iluminação",
        role: "Equipe de apoio",
        text: "A mesa de luz fica atrás do palco, com acesso ao corredor que desemboca na escada para o balcão. A Tarsila esteve na mesa o tempo todo, mas do lugar dela dava para ver quem abria a portinhola da escada. Eu estava com ela o tempo todo, menos nos três minutos do ponto escuro, quando fui buscar um cabo que estava na ferramentaria."
      }
    ],
    timeline: [
      { time: "Quinta 17h", event: "Vistoria da balaustrada aprova o corrimão." },
      { time: "Sexta 14h", event: "Ensaio técnico é marcado para 20h." },
      { time: "Sexta 18h", event: "Nando fecha a ferramentaria e vai embora." },
      { time: "20h40", event: "O ensaio começa; Tarsila opera a mesa de luz." },
      { time: "21h12", event: "Yorick sobe ao balcão para conferir o foco." },
      { time: "21h15", event: "O corrimão cede durante o ponto escuro." },
      { time: "21h20", event: "Equipe interrompe; a perícia assume o teatro." }
    ],
    evidence: [
      {
        id: "ev_parafuso",
        title: "Parafuso cortado",
        type: "Perícia",
        icon: "tool",
        summary: "Corte limpo no parafuso fixador do corrimão, com resíduo de esmerilhadeira de baixa rotação.",
        description: "A perícia encontrou o parafuso do pé do corrimão com corte limpo a 40% do corpo, como se enfraquecido para ceder com o peso. O resíduo é de esmerilhadeira de baixa rotação, a mesma que a ferramentaria do teatro usa.",
        significance: "A balaustrada não quebrou: foi deliberadamente enfraquecida."
      },
      {
        id: "ev_livro",
        title: "Livro da ferramentaria",
        type: "Documento",
        icon: "doc",
        summary: "A esmerilhadeira sai no livro às 19h40 da quinta, sem nome de saída, e volta no fim da noite.",
        description: "O livro da ferramentaria registra a esmerilhadeira em quarto à noite na quinta — dia seguinte à aprovação — com a linha de saída em branco. O nome da ferramentaria consta de gancho.",
        significance: "A ferramenta saiu depois que Nando foi embora, mas a esmerilhadeira é acessível no trocador comum."
      },
      {
        id: "ev_roteiro",
        title: "Roteiro de luz",
        type: "Documento",
        icon: "list",
        summary: "A marca \"✓ night\" só aparece no roteiro de Tarsila; os outros ensaios não têm o ponto escuro de 3 segundos.",
        description: "Nos três roteiros impressos para o ensaio, apenas o de Tarsila contém a anotação \"✓ night\" sobre o ponto escuro do balcão. A marca determina a escuridão exata que levou Yorick a se inclinar sobre o corrimão.",
        significance: "O momento da queda foi orquestrado pela mesa de luz."
      },
      {
        id: "ev_cam",
        title: "Câmera do corredor",
        type: "Registro de imagem",
        icon: "camera",
        summary: "A câmera do corredor atrás do palco registra Tarsila saindo da mesa às 21h08 e voltando às 21h14.",
        description: "A câmera do corredor, instalada após a reforma, registra Tarsila deixando a mesa de luz às 21h08 e retornando às 21h14. Ela alegou ter ficado na mesa todo o tempo; o assistente Júnior estava no corredor buscando o cabo nesse intervalo.",
        significance: "A técnica de luz não estava na mesa quando o ponto escuro foi executado."
      },
      {
        id: "ev_pe",
        title: "Marca de pó na escada",
        type: "Vestígio",
        icon: "foot",
        summary: "Marca de calçado de solado de borracha com pó de gesso na escada de acesso ao balcão.",
        description: "A escada de acesso ao balcão tem uma marca de pisada com pó de gesso de baixio — material que só existe na marcenaria em reforma. Nenhum marceneiro trabalhou na sexta.",
        significance: "Quem subiu ao balcão para enfraquecer o corrimão vinha da área de reforma."
      }
    ],
    contradictions: [
      {
        id: "c_rot",
        title: "Ponto escuro x rotina",
        type: "contradiction",
        between: "Roteiro de Tarsila x Roteiros dos outros técnicos",
        analysis: "O ponto escuro de 3 segundos com a marca \"✓ night\" só existe no roteiro dela; os outros roteiros não preveem a escuridão que antecipou a queda."
      },
      {
        id: "c_cam2",
        title: "Álibi da mesa x câmera",
        type: "contradiction",
        between: "Depoimento de Tarsila x Câmera do corredor",
        analysis: "Tarsila afirmou estar na mesa das 20h às 22h, mas a câmera a registra saindo às 21h08 e voltando às 21h14 — exatamente no período do ensaio."
      },
      {
        id: "c_par",
        title: "Aprovação x ferramenta",
        type: "contradiction",
        between: "Vistoria de quinta x Livro da ferramentaria",
        analysis: "A balaustrada foi aprovada na quinta, mas a esmerilhadeira saiu da ferramentaria sem saída registrada no mesmo dia — o enfraquecimento ocorreu depois da vistoria."
      },
      {
        id: "c_nando",
        title: "Marcador de Nando",
        type: "confirmation",
        between: "Livro da ferramentaria x Testemunho da esposa",
        analysis: "A saída de Nando às 18h é confirmada pela esposa e o livro; a ferramenta retirada depois das 18h o exime do corte."
      }
    ],
    hints: [
      "O momento da queda foi preparado: siga o roteiro de luz e a câmera do corredor.",
      "A balaustrada foi enfraquecida depois da vistoria — quem operou a esmerilhadeira havia saído às 18h.",
      "As evidências decisivas são o roteiro com a marca \"✓ night\", a câmera do corredor e o parafuso cortado."
    ],
    answerOptions: [
      { id: "sus:tarsila", label: "Tarsila Vaz", sub: "Técnica de iluminação" },
      { id: "sus:olivia", label: "Olívia Barros", sub: "Diretora" },
      { id: "sus:elias", label: "Elisa Prado", sub: "Atriz principal" },
      { id: "sus:nando", label: "Nando Sales", sub: "Marceneiro contratado" }
    ],
    solution: {
      correctAnswer: "sus:tarsila",
      title: "Tarsila Vaz, a técnica de luz",
      motive: "Repreendida por Yorick por horas extras irregulares e temendo ser demitida, Tarsila armou a queda para eliminar a assinatura que a denunciava. Ela enfraqueceu o corrimão usando a esmerilhadeira da marcenaria na quinta à noite e marcou no próprio roteiro a escuridão exata que levou Yorick ao balcão.",
      sequence: [
        "Na quinta, Tarsila retira a esmerilhadeira do livro da ferramentaria e corta o parafuso do corrimão do balcão.",
        "Na sexta, escreve a marca \"✓ night\" no ponto escuro do roteiro de luz.",
        "Antecipa a saída da mesa às 21h08 para \"verificar o foco pelo lado de cima\" e volta às 21h14.",
        "Yorick sobe ao balcão e se inclina no ponto escuro; o parafuso cortado cede.",
        "A câmera do corredor e o pó da marcenaria revelam o caminho que ela pegou para voltar à mesa."
      ],
      decisiveEvidence: ["ev_roteiro", "ev_cam", "ev_parafuso"],
      reasoning: "O parafuso foi cortado com a esmerilhadeira da casa depois da vistoria, o que descarta Nando (fora desde as 18h). O roteiro com a marca \"✓ night\", que ecoa exatamente no horário da queda, só existe na versão da mesa de luz de Tarsila. E a câmera do corredor a mostra longe da mesa entre 21h08 e 21h14. O oposto do que ela declarou. O quadro fecha, de forma única e lógica, contra a técnica de iluminação Tarsila Vaz.",
      exclusions: [
        { who: "Olívia Barros", why: "A diretora esteve no palco o tempo todo, com testemunhas, e não podia operar a esmerilhadeira na quinta à noite." },
        { who: "Elisa Prado", why: "As câmeras do palco a colocam em cena ou no camarim; o contrato dela dependia do aval de Yorick, e ela não tem acesso à ferramentaria nem roteiro." },
        { who: "Nando Sales", why: "O marceneiro fechou a ferramentaria às 18h e sua esposa confirma a hora; o corte do parafuso foi depois da vistoria, quando ele já tinha saído." }
      ]
    }
  };
/* ============================================================
     CASO 16 — ASSASSINATO (fictício), NÍVEL 3
     ============================================================ */
  var C16 = {
    id: "a04",
    code: "A-04",
    title: "O Quarto do Farol",
    category: "assassinatos",
    difficulty: 3,
    brief: "O juiz aposentado Océlio Andrade, 67 anos, foi encontrado sem vida no quarto 12 da Pousada do Farol, na madrugada de domingo. A perícia indica morte por sedativo em dose excessiva, dissolvido no copo de água da cabeceira. Não há sinais de arrombamento na porta, que estava trancada por dentro.",
    context: "A pousada tem quatro quartos no andar superior, um corredor com câmera ligada às 4h da manhã (instalada por falha do equipamento do gerente), e uma cozinha compartilhada no térreo. Cada hóspede recebe um cofre individual na chegada; o juiz usava o cofre nº 3.",
    date: "Sábado para domingo, 20 de setembro · óbito estimado entre 23h30 e 00h20",
    suspects: [
      {
        id: "iris",
        name: "Íris Dornelas",
        role: "Dona da pousada",
        age: 53,
        profile: [
          "Administra a pousada e o seguro contra incêndio do Farol.",
          "Mantém a chave reserva dos cofres no armário da recepção."
        ],
        behavior: "Comprou, em julho, uma caixa do sedativo \"Somnil\" para \"insônia\" — e trocou a marca fornecida ao hóspede no cofre.",
        alibi: "No quarto dos fundos, conforme a câmera do corredor, das 22h às 06h.",
        role: "Dona da pousada"
      },
      {
        id: "bento",
        name: "Bento Cabral",
        role: "Garçom/continuado",
        age: 29,
        profile: [
          "Serve as refeições e os \"chás da noite\"; faz a entrega no quarto 12 às 22h50.",
          "Precisa de dinheiro recorrente por dívidas de jogo."
        ],
        behavior: "Entregou o copo de água \"com calma\" às 22h50 e registrou no livro o quarto como \"ocupado — trancado\".",
        alibi: "No corredor do térreo, conforme a câmera, das 22h45 às 23h05.",
        role: "Garçom"
      },
      {
        id: "sara",
        name: "Sara Vilela",
        role: "Hóspede jornalista",
        age: 41,
        profile: [
          "Investigava a fraude no seguro da pousada para uma reportagem.",
          "Fotografou o Farol na madrugada, segundo o relógio da câmera."
        ],
        behavior: "Seus arquivos mostram fotos do farol entre 23h e 23h20, com metadados da câmera do próprio telefone.",
        alibi: "No deque do farol fotografando, das 23h às 23h30.",
        role: "Hóspede"
      },
      {
        id: "dona",
        name: "Rita Venâncio",
        role: "Cozinheira",
        age: 50,
        profile: [
          "Prepara o \"chá da noite\"; deixa a cozinha trancada às 23h.",
          "Conhecia Océlio de outra cidade; guardava a sentença que ele lhes proferira contra a irmã."
        ],
        behavior: "Achou estranha a \"troca de água às 22h30\" e a menção ao cofre nº 3 na conversa na cozinha.",
        alibi: "Trancou a cozinha às 23h e subiu para o quarto dos fundos; visto na câmera às 23h05.",
        role: "Cozinheira"
      }
    ],
    testimonies: [
      {
        id: "t_iris",
        person: "Íris Dornelas",
        role: "Dona da pousada",
        text: "A pousada é tranquila, mas o Farol tem um seguro que eu renovei em janeiro. A reportagem da Sara incomodava, é verdade. Eu dei a chave do cofre nº 3 ao juiz; a reserva fica na recepção, que eu nunca largo por muito tempo. O sedativo? Tenho insônia, compro para mim."
      },
      {
        id: "t_bento",
        person: "Bento Cabral",
        role: "Garçom",
        text: "Levei o copo de água às 22h50, ele abriu a porta, pegou o copo e trancou. Não entrei no quarto. Sobre o dinheiro, tenho dívida com a casa de jogos, mas ninguém morre de dívida — o juiz ia me pagar uma revisão do processo antigo? Eu nem tinha contato com ele."
      },
      {
        id: "t_sara",
        person: "Sara Vilela",
        role: "Jornalista",
        text: "Eu fiquei no deque do farol das 23h às 23h30 fotografando. As fotos têm metadados originais. Quando voltei, o corredor estava vazio, exceto a câmera ligada. Eu não entrei no quarto 12. A fraude do seguro é o meu tema; o juiz era só mais um convidado."
      },
      {
        id: "t_dona",
        person: "Rita Venâncio",
        role: "Cozinheira",
        text: "O chá da noite vai para todos os quartos. O juiz nunca tomava chá — só água. Preparei a bandeja dele com o copo de água e o deixava na cozinha às 22h30. Eu não sabia que ele estaria aqui; quando vi o nome no livro, quase caí para trás. A sentença contra a minha irmã era antiga."
      },
      {
        id: "t_perito",
        person: "Perito responsável",
        role: "Equipe técnica",
        text: "O copo de água tinha resíduo do sedativo \"Somnil\" em concentração acima do uso clínico. A divisão do líquido no copo indica que o sedativo foi adicionado após o enchimento, quando a água já tinha decantado — não era a dose normal do fabricante."
      }
    ],
    timeline: [
      { time: "22h30", event: "Rita deixa o copo de água do juiz na cozinha." },
      { time: "22h50", event: "Bento entrega o copo ao quarto 12; Océlio tranca a porta." },
      { time: "23h00–23h20", event: "Sara fotografa o farol ao ar livre." },
      { time: "23h05", event: "Rita tranca a cozinha e sobe; a câmera a registra." },
      { time: "23h10", event: "A câmera do corredor registra a porta do quarto 12 fechada e a luz acesa." },
      { time: "23h30–00h20", event: "Perícia estima o horário do óbito." },
      { time: "06h10", event: "Íris abre o quarto e encontra o juiz." }
    ],
    evidence: [
      {
        id: "ev_copo",
        title: "Copo de água",
        type: "Perícia",
        icon: "lab",
        summary: "Copo com resíduo de sedativo acima da dose clínica; a adição foi feita após o enchimento.",
        description: "A pericia reconstruiu: o sedativo \"Somnil\" foi adicionado à água depois que o copo foi enchido. A concentração é 3 vezes acima da dose máxima para insônia.",
        significance: "A adição pós-enchimento tira o caro da dose habitual de Íris e indica manipulação no quarto ou no balcão da cozinha."
      },
      {
        id: "ev_cofre",
        title: "Cofre nº 3",
        type: "Vestígio",
        icon: "key",
        summary: "O cofre nº 3 foi aberto às 23h12 com a reserva da recepção, sem registro no livro.",
        description: "O cofre de Océlio registra uma abertura às 23h12 — horário em que a câmera do corredor mostra a porta do quarto 12 fechada. A chave reserva fica na recepção, cuja câmera não tem gravação noturna.",
        significance: "A abertura do cofre do hóspede em plena madrugada exige a chave da recepção, que só a dona controla."
      },
      {
        id: "ev_foto",
        title: "Metadados das fotos",
        type: "Registro",
        icon: "camera",
        summary: "As fotos de Sara são originais, com metadados de telefone, tiradas no deque do farol.",
        description: "Os arquivos de Sara têm metadados EXIF do próprio telefone e GPS do deque do farol. A perícia confirmou a autenticidade das imagens.",
        significance: "O álibi de Sara é documentado por dados de câmera que ela não podia fabricar no horário."
      },
      {
        id: "ev_cozinha",
        title: "Registro da cozinha",
        type: "Registro de imagem",
        icon: "clock",
        summary: "A câmera do térreo mostra a cozinha fechada às 23h05 com Rita subindo.",
        description: "A câmera do corredor do térreo registra Rita trancando a cozinha às 23h05 e subindo. A cozinha fica sem acesso depois das 23h.",
        significance: "Quem manipulasse o copo na cozinha precisaria fazê-lo antes de Rita trancar."
      },
      {
        id: "ev_fraude",
        title: "Documentos da fraude",
        type: "Documento",
        icon: "doc",
        summary: "Rascunho da reportagem de Sara lista cheques do seguro, e um deles respalda o nome de Íris.",
        description: "O rascunho da reportagem de Sara contém cópia de um cheque emitido pela apólice do Farol com beneficiária Íris Dornelas — o mesmo seguro contra incêndio que ela administra.",
        significance: "A fraude no seguro era o motivo real do interesse de Sara e um motivo concreto para o juiz, que assessorava a reportagem, ter combinado a estadia."
      },
      {
        id: "ev_pill",
        title: "Histórico de compras",
        type: "Documento",
        icon: "receipt",
        summary: "A farmácia registra a compra do sedativo \"Somnil\" por Íris em julho, em dose de frasco de uso pessoal.",
        description: "O registro da farmácia local mostra a caixa de \"Somnil\" vendida a \"Sra. Íris\" em julho. A quantidade adquirida é a de um frasco (20 mL), compatível com uso pessoal.",
        significance: "A substância usada foi adquirida pela dona da pousada."
      }
    ],
    contradictions: [
      {
        id: "c_cofre",
        title: "Cofre aberto x câmera",
        type: "contradiction",
        between: "Registro do cofre nº 3 x Câmera do corredor",
        analysis: "O cofre foi aberto às 23h12, com a porta do quarto 12 fechada e a luz acesa. A chave reserva da recepção é a única forma de abrir o cofre de fora, e ela está sob o controle da dona."
      },
      {
        id: "c_copo",
        title: "Copo depois do enchimento",
        type: "contradiction",
        between: "Copo reconstruído pela perícia x Rotina da cozinha",
        analysis: "O sedativo foi adicionado ao copo depois que a água já estava no copo. Isso precisa de acesso posterior ao copo — o que descarta a adição na rotina de Rita e reforça uma adição manual."
      },
      {
        id: "c_sara",
        title: "Álibi da jornalista",
        type: "confirmation",
        between: "Fotos originais x GPS do deque",
        analysis: "Os metadados das fotos de Sara, com GPS do deque do farol, confirmam a presença dela lá entre 23h e 23h30, fora do alcance do quarto 12."
      },
      {
        id: "c_bento",
        title: "Entrega do copo",
        type: "confirmation",
        between: "Livro do quarto 12 x Câmera do corredor",
        analysis: "Bento entregou o copo às 22h50, quando o juiz abriu a porta para pegá-lo; a câmera do corredor não registra ele no andar depois das 23h."
      }
    ],
    hints: [
      "O caso tem duas pistas: o copo adulterado e o cofre aberto às 23h12.",
      "Siga a chave reserva: quem abriu o cofre do juiz no meio da madrugada tinha acesso à recepção.",
      "As evidências decisivas são o cofre registrado aberto, o histórico de compra do sedativo e o copo adulterado."
    ],
    answerOptions: [
      { id: "sus:iris", label: "Íris Dornelas", sub: "Dona da pousada" },
      { id: "sus:bento", label: "Bento Cabral", sub: "Garçom" },
      { id: "sus:sara", label: "Sara Vilela", sub: "Jornalista" },
      { id: "sus:dona", label: "Rita Venâncio", sub: "Cozinheira" }
    ],
    solution: {
      correctAnswer: "sus:iris",
      title: "Íris Dornelas, a dona",
      motive: "Íris fraudava o seguro da pousada e temia a reportagem de Sara, que o juiz Océlio assessorava. Ela tinha a chave reserva do cofre, o sedativo comprado em julho e o motivo — o casal de reportagem estava prestes a expor a fraude. Envenenou o copo com dose excessiva enquanto \"entregava a rotina\" do quarto dos fundos.",
      sequence: [
        "Em julho, Íris compra o sedativo \"Somnil\" para uso próprio — a mesma substância no copo.",
        "Na noite de sábado, quando Bento entrega o copo às 22h50, Íris espera a cozinha fechar e usa a reserva da recepção.",
        "Abre o cofre nº 3 às 23h12 para remover documentos que ligariam a fraude à reportagem.",
        "Adiciona o sedativo ao copo já cheio de água antes que o juiz bebesse.",
        "A câmera do corredor ligada por acidente (instalada por falha) registra a porta fechada às 23h10 — mas o cofre registra a abertura às 23h12."
      ],
      decisiveEvidence: ["ev_cofre", "ev_pill", "ev_copo"],
      reasoning: "O cofre nº 3 foi aberto às 23h12 com a chave reserva, que só a dona controla — e a câmera do corredor mostra a porta do quarto fechada, descartando o hóspede. O sedativo foi adicionado depois do enchimento do copo, e a compra do mesmo frasco pela dona em julho fecha a origem da substância. O histórico do senhorio e o rascunho da reportagem explicam o motivo. As evidências se cruzam de forma única em Íris Dornelas.",
      exclusions: [
        { who: "Bento Cabral", why: "A câmera do corredor não o registra no andar depois das 23h, e o livro mostra o quarto trancado quando ele entregou o copo. Ele não tinha a chave do cofre." },
        { who: "Sara Vilela", why: "As fotos com metadados e GPS a colocam no deque do farol das 23h às 23h30 — longe do quarto 12 no horário crítico." },
        { who: "Rita Venâncio", why: "A cozinha foi trancada às 23h05 e ela subiu; o copo já estava entregue e fechado quando a cozinha deixou de ser acessível." }
      ]
    }
  };
/* ============================================================
     CASO 17 — ROUBO, NÍVEL 4
     ============================================================ */
  var C17 = {
    id: "r05",
    code: "R-05",
    title: "O Quadro que Não Saiu do Salão",
    category: "roubos",
    difficulty: 4,
    brief: "Na noite do vernissage da galeria Aurora, o quadro \"Noite de Vento\", a peça mais valiosa da mostra, foi trocado por uma reprodução enquanto o salão estava cheio. A troca só foi percebida às 21h40, quando a repórter Luzia Ferrara voltou para fotografar a obra com o autor. A moldura continuava na parede, com o sensor de vibração intacto: nada foi arrancado, e o quadro original nunca saiu do prédio.",
    context: "O salão principal recebe o público das 19h às 22h, e atrás da parede central existe um corredor técnico, acessível por cartão, usado para manutenção das travessas e da iluminação. A reserva, ao lado da recepção, guarda tubos de pôsteres e caixas de transporte. Na noite do vernissage houve quedas de energia; a última, às 21h35, fez o vigia desligar o painel de vigilância do corredor por 12 minutos.",
    date: "Quinta-feira, 14 de novembro · vernissage das 19h às 22h · salão principal",
    suspects: [
      {
        id: "norma",
        name: "Norma Vilar",
        role: "Restauradora de arte",
        age: 39,
        profile: [
          "Responsável pela restauração e pela montagem de \"Noite de Vento\"; passou as duas últimas semanas preparando o quadro no estúdio da galeria.",
          "Atua como freelance e assinou, em setembro, um contrato com a editora de reproduções Fólio & Arte, que lhe paga por cópia autorizada de obras que ela mesma fotografa."
        ],
        behavior: "Alega ter ficado no subsolo, na sala de descanso, tomando café com o montador até o fim da noite; a câmera do corredor técnico, porém, registra uma figura entrando às 21h10 e saindo às 21h16.",
        alibi: "Diz que não entrou no salão nem no corredor técnico depois da conferência das 16h20, e que só voltou ao andar quando ouviu o boato da troca, às 21h50."
      },
      {
        id: "elcio",
        name: "Élcio Marins",
        role: "Montador de exposições",
        age: 52,
        profile: [
          "Monta e desmonta as obras e conhece a passagem técnica e o sistema de fixação das molduras.",
          "Está em acerto de contas com a galeria por horas extras não pagas e ameaçou pedir rescisão."
        ],
        behavior: "Passou duas vezes pelo corredor técnico para conferir as travessas e assinou o livro de acesso às 21h08; a câmera registra a figura no corredor a partir das 21h10.",
        alibi: "Diz que esteve no salão com a equipe de iluminação o tempo todo e que, no corredor, não viu ninguém além do técnico de som."
      },
      {
        id: "otavio",
        name: "Otávio Buarque Reis",
        role: "Diretor da galeria",
        age: 61,
        profile: [
          "Dirige a galeria há 20 anos, assina a curadoria da mostra e responde pela apólice de R$ 2,8 milhões sobre as obras.",
          "Estava sob pressão por causa do reajuste do aluguel do salão e por uma renegociação com o segurador."
        ],
        behavior: "Recebeu autoridades no salão a noite inteira e pediu, às 22h30, que as imagens das câmeras não fossem exibidas \"para não expor os visitantes\".",
        alibi: "Diz que não saiu do meio da sala das 19h às 22h, com exceção de cinco minutos no escritório para atender o telefone."
      },
      {
        id: "dario",
        name: "Dário Peixoto",
        role: "Vigia noturno",
        age: 47,
        profile: [
          "Está na guarita da entrada dos fundos e controla o painel de vigilância do corredor técnico.",
          "Ficou quatro minutos fora do posto durante um alarme falso na portaria lateral, às 20h50."
        ],
        behavior: "Desligou o painel de vigilância do corredor às 21h35, alegando a queda de energia, e só o religou às 21h47.",
        alibi: "Diz que ficou na guarita o tempo todo e que, quando o painel voltou, o corredor estava vazio."
      }
    ],
    testimonies: [
      {
        id: "t_marina",
        person: "Marina Lopes",
        role: "Atendente da galeria",
        text: "Estava na recepção, ao lado da reserva, a noite toda. Vi a Norma entrando na reserva às 21h19 e saindo às 21h47, sem nada nas mãos. Perguntei o que ela precisava e ela disse que era uma lâmpada queimada do corredor."
      },
      {
        id: "t_dario",
        person: "Dário Peixoto",
        role: "Vigia noturno",
        text: "Quando a luz caiu, às 21h35, desliguei o painel para não queimar o equipamento. Em doze minutos estava tudo de volta. Não vi ninguém pelo corredor dos fundos nem pela guarita."
      },
      {
        id: "t_otavio",
        person: "Otávio Buarque Reis",
        role: "Diretor da galeria",
        text: "A obra estava na parede às 21h30, quando a repórter fotografou ao lado do autor. Não mandei apagar câmera nenhuma: pedi apenas que o rosto dos visitantes não fosse exibido. Fui ao escritório atender o telefone por cinco minutos."
      },
      {
        id: "t_elcio",
        person: "Élcio Marins",
        role: "Montador",
        text: "Assinei o livro do corredor às 21h08 e saí às 21h10, depois de conferir as travessas. Quem entrou depois não fui eu. A Norma não estava lá."
      },
      {
        id: "t_luzia",
        person: "Luzia Ferrara",
        role: "Repórter",
        text: "Fotografei \"Noite de Vento\" às 21h30 com o autor. Quando voltei às 21h40 para a segunda foto, a textura do verniz estava lisa, demais — não era o mesmo quadro."
      }
    ],
    timeline: [
      { time: "16h20", event: "Norma conclui a conferência do quadro e assina a lista de montagem." },
      { time: "19h00", event: "Abertura do vernissage; o salão recebe os primeiros convidados." },
      { time: "20h50", event: "Alarme falso na portaria lateral; Dário deixa o posto por quatro minutos." },
      { time: "21h08", event: "Élcio assina o livro do corredor técnico e confere as travessas." },
      { time: "21h10", event: "A câmera do corredor técnico registra uma figura entrando." },
      { time: "21h16", event: "A mesma figura sai do corredor carregando algo enrolado sob o braço." },
      { time: "21h19", event: "O cartão de Norma abre a porta da reserva." },
      { time: "21h30", event: "Luzia fotografa a obra com o autor." },
      { time: "21h35", event: "Nova queda de energia; Dário desliga o painel do corredor até 21h47." },
      { time: "21h40", event: "A repórter percebe que a tela é outra." },
      { time: "21h43", event: "Otávio ordena o fechamento do salão e chama a perícia." },
      { time: "21h47", event: "O cartão de Norma fecha a porta da reserva." }
    ],
    evidence: [
      {
        id: "ev_sensor",
        title: "Sensor da moldura",
        type: "Perícia",
        icon: "shield",
        summary: "O sensor de vibração da moldura não registra impacto nenhum, e a moldura está fixada como no projeto.",
        description: "A perícia abriu a moldura pelo avesso: os parafusos das travessas estão originais, sem sinal de forçamento, e o sensor de vibração da parede não disparou em toda a noite. A troca não podia ter sido feita pela frente.",
        significance: "Quem trocou a tela teve acesso à passagem técnica atrás da parede central."
      },
      {
        id: "ev_corridor",
        title: "Câmera do corredor técnico",
        type: "Registro de imagem",
        icon: "camera",
        summary: "A câmera registra uma figura de casaco claro entrando às 21h10 e saindo às 21h16 com algo enrolado sob o braço; o rosto não aparece.",
        description: "O corredor técnico tem uma câmera única, voltada para a porta. A gravação mostra a figura entrando às 21h10, sem nada nas mãos, e saindo às 21h16 com um rolo enrolado sob o braço. O ângulo alto esconde o rosto, mas o casaco claro e a andatura são visíveis.",
        significance: "A troca ocorreu entre 21h10 e 21h16, e o original saiu do corredor enrolado."
      },
      {
        id: "ev_cut",
        title: "Lâmina curva",
        type: "Vestígio",
        icon: "tool",
        summary: "Uma lâmina de corte curva, encontrada na bancada do corredor técnico, tem cola fresca na ponta.",
        description: "Na bancada do corredor, a perícia encontrou uma lâmina de corte curva usada para abrir painéis sem marcar a madeira. A ponta tem resíduo de cola fresca, do tipo usado nos painéis traseiros de moldura.",
        significance: "O painel traseiro da moldura foi aberto — a tela saiu pelo avesso."
      },
      {
        id: "ev_copy",
        title: "Reprodução de \"Noite de Vento\"",
        type: "Perícia",
        icon: "edit",
        summary: "A tela encontrada na parede é uma reprodução feita há menos de 72 horas com resina de um estúdio conhecido.",
        description: "A análise identifica tela, tinta e verniz compatíveis com produção recente: a resina do avesso é a mesma do estúdio Fólio & Arte, com registro de lote de novembro. A obra original, pintada em 1998, não usa esse material.",
        significance: "A cópia foi encomendada e produzida antes do vernissage — o plano era antigo."
      },
      {
        id: "ev_tube",
        title: "Tubo nº 7 da reserva",
        type: "Vestígio",
        icon: "box",
        summary: "Um tubo de pôsteres do armário da reserva contém \"Noite de Vento\" enrolado; a fita que o fecha tem a digital de Norma Vilar.",
        description: "O tubo nº 7, no armário traseiro da reserva, estava lacrado com fita adesiva. Dentro dele, a obra original, enrolada sem proteção, com o mesmo verniz de 1998. Na fita, a impressão digital direita de Norma Vilar.",
        significance: "O original não saiu do prédio: foi escondido na reserva, com a digital da restauradora no lacre."
      },
      {
        id: "ev_card",
        title: "Cartão da reserva",
        type: "Registro",
        icon: "key",
        summary: "O cartão de Norma Vilar abre a reserva às 21h19 e a fecha às 21h47; é o único acesso registrado no período.",
        description: "O sistema de acesso da reserva registra o cartão da restauradora às 21h19 e o encerramento às 21h47. Nenhum outro cartão abriu a porta na noite do vernissage, e a atendente Marina Lopes confirma as duas passagens.",
        significance: "Norma esteve 28 minutos na reserva, no exato intervalo em que o original foi escondido."
      }
    ],
    contradictions: [
      {
        id: "c_corredor",
        title: "Álibi do subsolo x câmera do corredor",
        type: "contradiction",
        between: "Depoimento de Norma x Câmera do corredor técnico",
        analysis: "Norma declarou ter ficado no subsolo a noite inteira e nunca ter entrado no corredor técnico; a câmera registra a figura no corredor entre 21h10 e 21h16, e o casaco claro combina com a peça que ela vestia na conferência das 16h."
      },
      {
        id: "c_reserva",
        title: "Café com Élcio x cartão da reserva",
        type: "contradiction",
        between: "Álibi de Norma x Registro do cartão da reserva",
        analysis: "Ela afirmou estar no subsolo com Élcio até o fim da noite, mas o cartão dela abriu a reserva às 21h19 e fechou às 21h47, e a atendente a viu entrando e saindo."
      },
      {
        id: "c_tubo",
        title: "Moldura íntegra x tubo da reserva",
        type: "contradiction",
        between: "Perícia da moldura x Tubo nº 7",
        analysis: "A moldura saiu intacta porque a tela foi removida pelo avesso, e o original aparece enrolado num tubo da reserva com fita lacrada: a troca não foi um furto improvisado no apagão, e sim uma substituição preparada, com o original escondido no próprio prédio."
      },
      {
        id: "c_elcio",
        title: "Passagem de Élcio x livro e câmera",
        type: "confirmation",
        between: "Depoimento de Élcio x Livro do corredor e câmera",
        analysis: "O livro registra a entrada de Élcio às 21h08 e a saída às 21h10, antes da câmera registrar a figura de 21h10 às 21h16; e ele não tinha acesso à reserva. A passagem dele é confirmada e não explica a troca."
      }
    ],
    hints: [
      "A moldura não foi violada por fora: a troca veio de trás da parede, pelo corredor técnico.",
      "Dois registros eletrônicos derrubam o álibi da restauradora: a câmera do corredor e o cartão da reserva.",
      "As evidências decisivas são a câmera do corredor técnico, o cartão da reserva e o tubo nº 7."
    ],
    answerOptions: [
      { id: "sus:norma", label: "Norma Vilar", sub: "Restauradora de arte" },
      { id: "sus:elcio", label: "Élcio Marins", sub: "Montador de exposições" },
      { id: "sus:otavio", label: "Otávio Buarque Reis", sub: "Diretor da galeria" },
      { id: "sus:dario", label: "Dário Peixoto", sub: "Vigia noturno" }
    ],
    solution: {
      correctAnswer: "sus:norma",
      title: "Norma Vilar, a restauradora",
      motive: "Norma combinou com a editora Fólio & Arte vender uma reprodução \"de estudo\" de \"Noite de Vento\" a um comprador particular; o contrato lhe rendia R$ 60 mil por cópia, mas a dívida com a gráfica era maior. Ela fotografou a obra durante a restauração, mandou reproduzir a tela com resina do estúdio e, no vernissage, abriu o painel traseiro da moldura pelo corredor técnico, trocou a tela em seis minutos e escondeu o original no tubo nº 7 da reserva, de onde a retiraria no encerramento.",
      sequence: [
        "Nas duas semanas anteriores, Norma fotografa a obra no estúdio e a editora produz a reprodução com resina própria.",
        "Às 21h10 ela entra pelo corredor técnico e, com a lâmina curva, abre o painel traseiro da moldura, sem violar o sensor.",
        "Remove o original, instala a reprodução e sai às 21h16 com o rolo enrolado sob o casaco.",
        "Às 21h19 entra na reserva pelo cartão e lacra o original dentro do tubo nº 7, deixando a digital na fita.",
        "Sai às 21h47 de mãos vazias e só retorna ao salão quando a troca é descoberta, às 21h50."
      ],
      decisiveEvidence: ["ev_corridor", "ev_card", "ev_tube"],
      reasoning: "A moldura e o sensor não registram violência: a troca veio de trás da parede, pelo corredor técnico, e a câmera marca o intervalo exato de 21h10 às 21h16. O cartão de Norma abre a reserva às 21h19 e fecha às 21h47, contrariando o álibi do café no subsolo e o testemunho da atendente. E o tubo nº 7 guarda o original lacrado, com a digital dela na fita. A reprodução com resina da Fólio & Arte, produzida antes do vernissage, fecha o motivo e a premeditação. O quadro se fecha, de forma única, na restauradora.",
      exclusions: [
        { who: "Élcio Marins", why: "O livro e a câmera mostram que ele saiu do corredor às 21h10, antes da figura entrar; ele não tinha acesso à reserva e o tubo não tem sua digital." },
        { who: "Otávio Buarque Reis", why: "Ficou no salão recebendo convidados, com testemunhas, e o pedido sobre as imagens foi de proteção aos visitantes; ele não entrou no corredor nem na reserva em nenhum registro." },
        { who: "Dário Peixoto", why: "Desligou o painel às 21h35, dezoito minutos após a figura já ter saído do corredor às 21h16; o apagão não cobriu a troca e ele sequer tem cartão da reserva." }
      ]
    }
  };
/* ============================================================
     CASO 18 — ROUBO, NÍVEL 4
     ============================================================ */
  var C18 = {
    id: "r06",
    code: "R-06",
    title: "O Cofre sem Arrombamento",
    category: "roubos",
    difficulty: 4,
    brief: "No subsolo da Casa Sarto, o cofre de parede foi aberto na madrugada de sábado sem nenhum sinal de arrombamento. Somaram-se R$ 1,9 milhão em títulos ao portador e joias da família. O alarme não disparou, nenhuma porta externa foi forçada e o cofre tem apenas dois códigos: o do casal e o técnico da empresa de segurança.",
    context: "A Casa Sarto tem alarme com modo manutenção, que só é ligado pelo painel com credenciais da Segurpaz, a empresa que faz a manutenção trimestral. O cartão 03, da reserva da equipe técnica, foi reportado como perdido em agosto por Ivo Berlanda e, segundo o relatório da própria empresa, estava desativado. A Segurpaz só atende no plantão de sábados às 11h50.",
    date: "Sexta para sábado, 6 e 7 de dezembro · abertura do cofre às 01h24 · descoberta às 10h31",
    suspects: [
      {
        id: "afonso",
        name: "Afonso Sarto",
        role: "Dono da casa, joalheiro aposentado",
        age: 61,
        profile: [
          "Mantém no cofre joias da família e títulos ao portador herdados do pai.",
          "Estava em São Paulo, numa gala da associação de joalheiros, com recibo de hospedagem e fotos."
        ],
        behavior: "Chegou a dormir fora da casa duas vezes no mês; a chave reserva do cofre fica na gaveta do escritório.",
        alibi: "Gala do hotel Miramar das 21h à 01h30, com registro fotográfico; voltou somente na manhã seguinte."
      },
      {
        id: "zelia",
        name: "Zélia Sarto",
        role: "Esposa, administradora da loja",
        age: 38,
        profile: [
          "Conhece os dois códigos do cofre e assina os contratos do seguro da casa.",
          "Havia movimentado R$ 140 mil de uma conta conjunta na semana anterior, sem avisar o marido."
        ],
        behavior: "Estava em casa e disse ter ouvido o cachorro latir no subsolo por volta das 01h30, mas não desceu.",
        alibi: "Dormiu no quarto conjugal das 23h às 07h; o marido não estava em casa para confirmar."
      },
      {
        id: "ivo",
        name: "Ivo Berlanda",
        role: "Técnico da Segurpaz",
        age: 27,
        profile: [
          "Fazia a manutenção trimestral do alarme da casa e era o responsável pelo cartão 03 da equipe.",
          "Reportou o desaparecimento do cartão em agosto e nunca soube o que aconteceu com ele."
        ],
        behavior: "Apareceu na casa às 10h31 de sábado, \"para revisar o sensor do subsolo\", antes de a Segurpaz abrir; foi ele quem encontrou o cofre aberto.",
        alibi: "Diz que passou a madrugada na casa da namorada, a 15 km, e que só soube do roubo ao abrir a porta."
      },
      {
        id: "nelson",
        name: "Nélson Cruz",
        role: "Supervisor da Segurpaz",
        age: 44,
        profile: [
          "Supervisor da equipe noturna; tinha acesso às credenciais de manutenção e ao código técnico dos cofres sob contrato.",
          "Estava endividado em R$ 180 mil com o banco e sabia que uma auditoria na segunda-feira apontaria desvios nas escalas que ele assinava."
        ],
        behavior: "Não compareceu no atendimento de sábado, alegando folga; atendeu o telefone da central só às 12h10, depois da ocorrência.",
        alibi: "Diz que passou a madrugada em casa, com a mãe doente, e que sua senha pode ter sido copiada pelo call center."
      }
    ],
    testimonies: [
      {
        id: "t_nelson",
        person: "Nélson Cruz",
        role: "Supervisor da Segurpaz",
        text: "Passei a madrugada em casa com a mãe, que está doente. Nunca fui naquela casa de madrugada. Minha senha pode ter sido copiada — no call center anotam tudo em papel."
      },
      {
        id: "t_ivania",
        person: "Ivânia Reis",
        role: "Monitora da central",
        text: "A disciplina de manutenção é registrada com o login de quem entra. Às 01h02 apareceu 'ncruz'. Cada um tem a sua senha; eu não consigo logar com a dos outros."
      },
      {
        id: "t_zelia",
        person: "Zélia Sarto",
        role: "Esposa do dono",
        text: "Ouvi o cachorro latir perto das 01h30 e achei que era gato. Ninguém passou pela porta da frente; a casa tem alarme e as portas de serviço ficam trancadas."
      },
      {
        id: "t_ivo",
        person: "Ivo Berlanda",
        role: "Técnico da Segurpaz",
        text: "Cheguei às 10h31 para conferir o sensor. A porta de serviço estava fechada, sem arrombamento. Quando abri o subsolo, o cofre estava aberto e vazio. Liguei para a Segurpaz — só atenderam às 11h50 — e para a polícia às 12h05."
      },
      {
        id: "t_afonso",
        person: "Afonso Sarto",
        role: "Dono da casa",
        text: "O cofre tem dois códigos: o meu, que é 01, e o técnico, que é 02; a Segurpaz troca o 02 a cada manutenção. Estive no Miramar a noite inteira."
      }
    ],
    timeline: [
      { time: "Agosto, dia 9", event: "Ivo reporta o desaparecimento do cartão 03, da reserva da equipe." },
      { time: "Sexta, 18h42", event: "Nélson compra no balcão da rodoviária a passagem para Corumbá, primeira viagem de segunda." },
      { time: "Sexta, 23h40", event: "O casal se deita; Afonso está em São Paulo." },
      { time: "01h02", event: "O alarme entra em modo manutenção com o usuário 'ncruz'." },
      { time: "01h03", event: "O painel do corredor do subsolo é aberto no aplicativo da casa." },
      { time: "01h05", event: "O cartão 03 abre a porta de serviço do subsolo." },
      { time: "01h12", event: "O terminal de manutenção da Segurpaz consulta o status do cofre pela rede da casa." },
      { time: "01h24", event: "O cofre é aberto com o código 02, o código técnico." },
      { time: "01h39", event: "O cofre é fechado; o painel volta ao normal às 01h48." },
      { time: "Sábado, 10h31", event: "Ivo encontra o cofre aberto; 11h50 a Segurpaz atende; 12h05 a polícia é chamada." },
      { time: "Segunda, 06h00", event: "A passagem de Nélson consta como embarcada na viagem para Corumbá." }
    ],
    evidence: [
      {
        id: "ev_card",
        title: "Cartão 03",
        type: "Registro",
        icon: "key",
        summary: "O cartão reportado como perdido em agosto abriu a porta de serviço do subsolo às 01h05 e encerrou o uso às 01h41.",
        description: "O log de acesso registra o cartão 03 — a reserva da equipe, reportada como perdida por Ivo — abrindo a porta de serviço às 01h05. No relatório oficial que a Segurpaz enviou à polícia, o mesmo cartão consta como 'desativado em 14/08'.",
        significance: "O roubo entrou por um cartão que só circulava dentro da própria empresa de segurança."
      },
      {
        id: "ev_alarm",
        title: "Modo manutenção",
        type: "Registro",
        icon: "alarm",
        summary: "O alarme foi colocado em modo manutenção às 01h02 pelo usuário 'ncruz' e normalizado às 01h48.",
        description: "O log do alarme registra a mudança de modo às 01h02 com as credenciais do supervisor Nélson Cruz; no modo manutenção, a central de monitoramento não recebe sinal nenhum. O modo foi encerrado às 01h48, pelo mesmo usuário.",
        significance: "As credenciais são dele, e o modo manutenção silenciou a casa durante todo o roubo."
      },
      {
        id: "ev_campanel",
        title: "Painel do corredor",
        type: "Registro",
        icon: "screen",
        summary: "O painel do corredor do subsolo ficou aberto entre 01h03 e 01h46, tempo anormal para uma casa dormindo.",
        description: "O painel de iluminação do corredor do subsolo, que liga sozinho com o movimento, permaneceu na posição 'aberto' durante 43 minutos. No andar de cima, as câmeras não registram movimento nenhum no mesmo intervalo.",
        significance: "Alguém esteve no subsolo pelo tempo exato do roubo."
      },
      {
        id: "ev_terminal",
        title: "Terminal de manutenção",
        type: "Registro",
        icon: "gear",
        summary: "O notebook da unidade móvel 02, vinculada a Nélson, consultou o status do cofre às 01h12 pela rede Wi-Fi da residência.",
        description: "O terminal portátil que os técnicos usam para ler sensores conectou-se à rede da casa às 01h12 e abriu o status do cofre, minutos antes da abertura. O equipamento pertence à unidade móvel 02, que fica com o supervisor.",
        significance: "O autor consultou o cofre antes de abrir — e o aparelho é o dele."
      },
      {
        id: "ev_code",
        title: "Abertura do cofre",
        type: "Registro",
        icon: "lock",
        summary: "O cofre foi aberto às 01h24 com o código 02, o técnico, e fechado às 01h39 sem nenhum sinal de violência.",
        description: "O log do cofre registra duas aberturas no mês: a rotina do casal, com o código 01, em 2 de dezembro, e a da madrugada, às 01h24, pelo código 02, que só a equipe de segurança possui e que é trocado a cada manutenção.",
        significance: "Quem abriu conhecia o código técnico — informação que não sai da empresa."
      },
      {
        id: "ev_ticket",
        title: "Passagem para Corumbá",
        type: "Documento",
        icon: "bus",
        summary: "A passagem foi comprada no balcão na sexta às 18h42, em dinheiro, com CPF de Nélson, e consta como embarcada na viagem das 06h de segunda.",
        description: "A câmera do balcão da rodoviária registra Nélson pagando em dinheiro, dois dias antes do roubo. A passagem, assento 12A, foi utilizada na primeira viagem da manhã de segunda, para Corumbá.",
        significance: "A fuga foi programada antes do crime — e embarcada."
      }
    ],
    contradictions: [
      {
        id: "c_alibi",
        title: "Madrugada em casa x modo manutenção",
        type: "contradiction",
        between: "Depoimento de Nélson x Modo manutenção e painel do corredor",
        analysis: "Nélson afirmou ter passado a noite em casa com a mãe, mas o modo manutenção foi ligado às 01h02 com o login 'ncruz' e o painel do subsolo ficou ativo por 43 minutos naquele intervalo — alguém estava na casa com as credenciais dele."
      },
      {
        id: "c_empresa",
        title: "Relatório da Segurpaz x cartão 03",
        type: "contradiction",
        between: "Relatório oficial da Segurpaz x Registro do cartão 03",
        analysis: "A empresa enviou à polícia o cartão 03 como 'desativado em 14/08', mas o log mostra o mesmo cartão abrindo a porta às 01h05. A desativação nunca ocorreu, e o relatório é falso."
      },
      {
        id: "c_camera",
        title: "Álibi de madrugada x câmera da rodoviária",
        type: "contradiction",
        between: "Depoimento de Nélson x Câmera do balcão da rodoviária",
        analysis: "Ele disse não ter saído de casa desde quinta, mas a câmera do balcão o registra pagando a passagem na sexta às 18h42 — e a passagem foi embarcada na segunda de manhã."
      },
      {
        id: "c_zelia",
        title: "Ouvido de Zélia x painel do corredor",
        type: "confirmation",
        between: "Depoimento de Zélia x Painel do corredor do subsolo",
        analysis: "Zélia ouviu o cachorro latir às 01h30 e não desceu; o painel ativo de 01h03 a 01h46 confirma que havia movimento no subsolo exatamente naquele intervalo — e que ela não viu quem estava lá."
      }
    ],
    hints: [
      "Não houve arrombamento: alarme, cartão e código vêm todos da mesma empresa de segurança.",
      "O relatório da empresa esconde um cartão que nunca foi desativado — e quem o assinava era o supervisor.",
      "As evidências decisivas são o cartão 03, o modo manutenção pelo usuário 'ncruz' e a passagem de ônibus."
    ],
    answerOptions: [
      { id: "sus:afonso", label: "Afonso Sarto", sub: "Dono da casa" },
      { id: "sus:zelia", label: "Zélia Sarto", sub: "Esposa do dono" },
      { id: "sus:ivo", label: "Ivo Berlanda", sub: "Técnico da Segurpaz" },
      { id: "sus:nelson", label: "Nélson Cruz", sub: "Supervisor da Segurpaz" }
    ],
    solution: {
      correctAnswer: "sus:nelson",
      title: "Nélson Cruz, o supervisor da Segurpaz",
      motive: "Endividado em R$ 180 mil e sabendo que a auditoria de segunda-feira apontaria desvios nas escalas que ele assinava, Nélson montou o roubo com o que tinha de mais precioso: os acessos da própria empresa. Manteve ativo o cartão 03 que jamais devolveu, usou suas credenciais de supervisor e o código técnico do cofre, e comprou a passagem para Corumbá antes de entrar na casa.",
      sequence: [
        "Em agosto, Nélson recebe o relatório do cartão 03 perdido e o mantém ativo, sob a justificativa de 'auditoria em aberto'.",
        "Na sexta às 18h42, compra no balcão da rodoviária a passagem de segunda, para Corumbá.",
        "Às 01h02 liga o modo manutenção com o login 'ncruz' e, às 01h05, abre a porta de serviço com o cartão 03.",
        "Às 01h12 o terminal da unidade móvel 02 consulta o cofre; às 01h24 ele abre com o código 02 e retira os bens; fecha às 01h39 e normaliza o sistema às 01h48.",
        "Na segunda às 06h embarca para Corumbá, onde é localizado com os bens e a passagem utilizada."
      ],
      decisiveEvidence: ["ev_card", "ev_alarm", "ev_ticket"],
      reasoning: "O relatório da Segurpaz manda no cartão 03 como desativado, mas o log mostra o cartão abrindo a porta às 01h05 — e só a empresa circulava com ele. As credenciais 'ncruz' ligaram o modo manutenção às 01h02, o terminal da unidade dele consultou o cofre às 01h12 e o código 02, que não sai da empresa, abriu o cofre às 01h24. O álibi da madrugada cai com a câmera da rodoviária, e a passagem comprada na sexta comprova a premeditação e a fuga. Nenhum outro suspeito toca nos acessos.",
      exclusions: [
        { who: "Afonso Sarto", why: "As fotos e o recibo do hotel Miramar o colocam em São Paulo a noite inteira; além disso, ele já era dono de tudo o que estava no cofre." },
        { who: "Zélia Sarto", why: "Conhece o código 01, mas o cofre foi aberto com o 02; o modo manutenção e o cartão 03 não lhe pertencem, e o painel mostra movimento no subsolo, onde ela não desceu." },
        { who: "Ivo Berlanda", why: "Foi ele quem encontrou o cofre às 10h31 e chamou a polícia às 12h05; seu cartão havia desaparecido em agosto e nenhum login dele aparece na madrugada — ele nem sabia que o cartão continuava ativo." }
      ]
    }
  };
/* ============================================================
     CASO 19 — DESAPARECIMENTO, NÍVEL 4
     ============================================================ */
  var C19 = {
    id: "d05",
    code: "D-05",
    title: "O Último Trem de Helena",
    category: "desaparecimentos",
    difficulty: 4,
    brief: "Helena Marcondes, 34, subiu no trem 602 às 22h40 de sexta, na estação central, com destino às Ondas. Não chegou em casa. O trem parou de rotina em Vilinha entre 01h19 e 01h23; a câmera da plataforma registrou uma figura de casaco cinza, com um estojo de instrumento, descendo pelo lateral e entrando num automóvel prato que esperava com o motor ligado. O casaco e a mala de Helena ficaram no banco 12A.",
    context: "O trem 602 percorre o litoral em três trechos; Vilinha é a única parada com plataforma curta e escada lateral de acesso à linha. O boletim de bordo registra as varreduras dos revisores. Na estação central, uma banca vende comida e recargas até 22h30. Helena viajava de madrugada porque na sexta seguinte fecharia, às 14h, o dossiê que entregou à Corregedoria na quinta.",
    date: "Sexta, 7 de fevereiro · saída às 22h40 · parada de Vilinha das 01h19 às 01h23",
    suspects: [
      {
        id: "drausio",
        name: "Dráusio Ferraz",
        role: "Advogado, ex-marido de Helena",
        age: 51,
        profile: [
          "O divórcio se encerrou há oito meses com disputa de bens; Helena entregou na quinta um dossiê sobre o escritório dele à Corregedoria, com pedido de quebra de sigilo bancário.",
          "Tinha amizade antiga com o supervisor noturno da estação e conhecia o itinerário do trem 602."
        ],
        behavior: "Declara ter jantado com sócios e assistido TV até de madrugada; na sexta às 19h10 assinou, em nome da sua empresa, o contrato de aluguel de um carro, sem comunicar ninguém.",
        alibi: "Jantar com sócios até 23h, em casa; depois, sozinho, até o amanhecer."
      },
      {
        id: "sergio",
        name: "Sérgio Bonfim",
        role: "Revisor de trem",
        age: 43,
        profile: [
          "Faz a varredura dos carros e assina o boletim de bordo; estava de licença médica por um mês e voltou exatamente naquela viagem.",
          "Assinou o boletim registrando o banheiro do carro 3 ocupado das 00h30 às 01h05, com todos os passageiros conferidos às 01h10."
        ],
        behavior: "Admitiu ter anotado \"com sono\"; a câmera interna mostra Helena no corredor às 00h41, fora do banheiro, e ela nunca mais voltou ao assento.",
        alibi: "Diz que conferiu tudo e foi direto ao carro da tripulação descansar."
      },
      {
        id: "vanda",
        name: "Vanda Loureiro",
        role: "Auxiliar de bordo",
        age: 29,
        profile: [
          "Servia café e atendia os passageiros do carro 2; assinou o boletim junto com Sérgio como conferente.",
          "Estava de mudança para a capital e pediu a viagem extra da madrugada."
        ],
        behavior: "Foi a última pessoa a falar com Helena, às 23h40, quando ela pediu água no carro 2.",
        alibi: "Diz que ficou no carro 2 até as 05h10, quando o trem chegou às Ondas."
      },
      {
        id: "milena",
        name: "Milena Torrado",
        role: "Sócia de Helena na casa de projetos",
        age: 32,
        profile: [
          "Estava em processo de dissolução societária com Helena, que exigia R$ 900 mil pela parte dela.",
          "Sabia da entrega do dossiê e discordava de \"metê-las em encrenca com advogado\"."
        ],
        behavior: "Alega que a discussão societária era só dinheiro, e que o dossiê era problema da ex-vida dela.",
        alibi: "Estava no vôo 4412, com bagagem despachada, decolado às 22h15."
      }
    ],
    testimonies: [
      {
        id: "t_drausio",
        person: "Dráusio Ferraz",
        role: "Advogado",
        text: "Jantei com os sócios até 23h e depois fiquei em casa. Não aluguei carro nenhum: o contrato é da empresa e os funcionários usam como querem. Nunca estive na estação."
      },
      {
        id: "t_sergio",
        person: "Sérgio Bonfim",
        role: "Revisor",
        text: "Conferei o banheiro às 01h05 e todos estavam nos assentos. Anotei com sono, pode ser que a hora esteja trocada. Não falei com Helena a noite inteira."
      },
      {
        id: "t_vanda",
        person: "Vanda Loureiro",
        role: "Auxiliar de bordo",
        text: "Helena pediu água às 23h40, no carro 2, e voltou para o carro 3. Depois eu não a vi mais; fiquei no carro 2 até as 05h10."
      },
      {
        id: "t_milena",
        person: "Milena Torrado",
        role: "Sócia",
        text: "Estava no vôo 4412 para Recife; a bagagem foi despachada no balcão. A dissolução da sociedade está com meu advogado — dinheiro, não crime."
      },
      {
        id: "t_marcelo",
        person: "Marcelo Duarte",
        role: "Condutor",
        text: "O registro de portas abre a porta de comunicação do carro 3 às 00h41, fora de estação. O boletim do Sérgio consta como concluído às 01h05, com o banheiro ocupado — e a Helena não voltou mais ao banco 12A."
      }
    ],
    timeline: [
      { time: "Quinta, 17h", event: "Helena entrega o dossiê à Corregedoria, com envio agendado para segunda, 18h40." },
      { time: "Sexta, 19h10", event: "Dráusio assina, em nome da sua empresa, o contrato do carro RQX-4J21." },
      { time: "22h06", event: "Um chip pré-pago é comprado na banca da estação e ativado com CPF de Dráusio." },
      { time: "22h15", event: "O vôo 4412, com Milena a bordo, decola para Recife." },
      { time: "22h36", event: "A câmera do portão registra Helena entrando na plataforma, de casaco cinza, com o estojo." },
      { time: "22h40", event: "O trem 602 sai da estação central." },
      { time: "23h40", event: "Helena pede água a Vanda, no carro 2, e volta para o carro 3." },
      { time: "23h50", event: "A mensagem \"Desça em Vilinha. Não conte para ninguém. — D\" chega ao celular de Helena, pela antena da estação." },
      { time: "00h41", event: "O registro de portas abre a porta de comunicação do carro 3; a câmera interna mostra Helena indo para o fundo do carro e não voltando." },
      { time: "00h52", event: "O chip descartável sai do ar." },
      { time: "01h05", event: "O boletim de Sérgio registra o banheiro ocupado e a varredura concluída." },
      { time: "01h19", event: "O trem para em Vilinha; a figura de casaco cinza desce pelo lateral com o estojo e entra no automóvel de placa RQX-4J21." },
      { time: "01h23", event: "O trem segue viagem; o banco 12A guarda o casaco e a mala de Helena." },
      { time: "05h10", event: "Chegada às Ondas; Helena não desce e não responde ao telefone." },
      { time: "Segunda, 18h40", event: "O e-mail agendado entrega o dossiê à Corregedoria." }
    ],
    evidence: [
      {
        id: "ev_gate",
        title: "Portão da plataforma",
        type: "Registro de imagem",
        icon: "camera",
        summary: "A câmera do portão registra Helena às 22h36, com casaco cinza e o capuz do moletom preso na cintura, carregando o estojo.",
        description: "O portão de acesso da estação central registra Helena Marcondes às 22h36, de casaco cinza por cima do moletom — o capuz preso na cintura — e com o estojo de instrumento na mão. Ela não volta a aparecer em nenhuma câmera até Vilinha.",
        significance: "Define a roupa e o objeto que a figura de Vilinha reproduz."
      },
      {
        id: "ev_platform",
        title: "Câmera da plataforma de Vilinha",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Entre 01h19 e 01h23, uma figura de casaco cinza desce pelo lateral do trem com o estojo e entra num automóvel de placa legível RQX-4J21.",
        description: "A câmera da plataforma, com lente tele, registra a parada de quatro minutos do trem 602: a figura desce sozinha, olha para o lado e entra no automóvel que esperava com o motor ligado. A placa traseira é legível: RQX-4J21. O quadro do corredor, na mesma gravação, mostra o banco 12A ainda com o casaco e a mala.",
        significance: "A descida foi combinada: alguém esperava Helena na parada errada."
      },
      {
        id: "ev_plate",
        title: "Contrato de aluguel RQX-4J21",
        type: "Documento",
        icon: "doc",
        summary: "O automóvel da plataforma é do aluguel assinado por Dráusio Ferraz, em nome da sua empresa, na sexta às 19h10.",
        description: "A locadora registra a retirada do automóvel, placa RQX-4J21, na sexta às 19h10, com devolução prevista para segunda. O contrato foi assinado por Dráusio; a empresa dele consta como responsável financeira.",
        significance: "O carro que espera em Vilinha é dele — sem que ele tenha avisado a ninguém."
      },
      {
        id: "ev_chip",
        title: "Chip comprado na banca",
        type: "Registro",
        icon: "phone",
        summary: "A câmera do caixa reconhece Dráusio comprando um chip pré-pago às 22h06; a ativação, quatro minutos depois, é feita com CPF dele.",
        description: "A banca da estação tem câmera frontal no caixa: o quadro das 22h06 mostra Dráusio Ferraz pagando em dinheiro e pedindo o troco cheio. A operadora confirma que o chip foi ativado às 22h10 com o CPF dele, conforme a regra de registro.",
        significance: "Ele esteve na estação 30 minutos antes da saída do trem, e o chip é dele."
      },
      {
        id: "ev_sms",
        title: "Mensagem de 23h50",
        type: "Registro",
        icon: "chat",
        summary: "\"Desça em Vilinha. Não conte para ninguém. — D\", enviada às 23h50 do chip ativado às 22h06, com a antena da estação central.",
        description: "A mensagem chegou ao celular de Helena às 23h50 e foi a última atividade da linha, que saiu do ar às 00h52. O texto mandava Helena descer na parada de Vilinha, fora do roteiro de chegada, e era assinado com a inicial do remetente. A antena utilizada é a da estação de partida.",
        significance: "Alguém na estação a instruiu a descer no ponto errado — e o chip é o que Dráusio comprou."
      },
      {
        id: "ev_dossie",
        title: "Dossiê à Corregedoria",
        type: "Documento",
        icon: "doc",
        summary: "O dossiê sobre o escritório Dráusio Ferraz & Cia., entregue na quinta às 17h, pedia quebra de sigilo bancário e foi enviado automaticamente na segunda às 18h40.",
        description: "Helena entregou o material à Corregedoria com envio agendado para segunda, 18h40 — antecipando represálias. O dossiê aponta operações de lavagem em conta do escritório e é assinado por ela como testemunha.",
        significance: "O motivo: o dossiê que só dependia do tempo para chegar à Corregedoria."
      }
    ],
    contradictions: [
      {
        id: "c_banco",
        title: "Jantar declarado x banca da estação",
        type: "contradiction",
        between: "Depoimento de Dráusio x Câmera da banca",
        analysis: "Dráusio afirmou jantar com sócios até 23h e não ter saído de casa desde quinta, mas a câmera frontal do caixa o reconhece comprando um chip às 22h06, na estação de partida do trem."
      },
      {
        id: "c_platform",
        title: "Álibi de madrugada x plataforma de Vilinha",
        type: "contradiction",
        between: "Depoimento de Dráusio x Câmera da plataforma e contrato de aluguel",
        analysis: "Ele disse ter ficado em casa a noite inteira, mas o carro alugado no nome dele aparece parado ao lado da plataforma de Vilinha entre 01h19 e 01h23, no horário exato da parada em que Helena desaparece."
      },
      {
        id: "c_bordo",
        title: "Boletim de bordo x câmera interna",
        type: "contradiction",
        between: "Boletim de bordo de Sérgio x Câmera interna do carro 3",
        analysis: "O boletim registra Helena no banheiro das 00h30 às 01h05 e de volta ao assento às 01h10; a câmera interna a mostra às 00h41 caminhando pelo corredor em direção ao fundo do carro, fora do banheiro, e ela nunca mais retorna ao banco 12A."
      },
      {
        id: "c_milena",
        title: "Álibi de Milena x cartão de embarque",
        type: "confirmation",
        between: "Depoimento de Milena x Cartão de embarque do vôo 4412",
        analysis: "O cartão carimbado e a bagagem despachada confirmam que Milena estava no ar quando Helena desceu em Vilinha; a dissolução societária é uma disputa civil, sem acesso ao trem, ao chip ou ao carro."
      }
    ],
    hints: [
      "Helena não desapareceu no destino: alguém a chamou por mensagem enquanto o trem ainda estava na estação de partida.",
      "O carro da plataforma, o chip e o contrato de aluguel têm dono registrado — comece por ele.",
      "As evidências decisivas são o chip comprado na banca, a mensagem de 23h50 e o aluguel do carro."
    ],
    answerOptions: [
      { id: "sus:drausio", label: "Dráusio Ferraz", sub: "Advogado, ex-marido" },
      { id: "sus:sergio", label: "Sérgio Bonfim", sub: "Revisor de trem" },
      { id: "sus:vanda", label: "Vanda Loureiro", sub: "Auxiliar de bordo" },
      { id: "sus:milena", label: "Milena Torrado", sub: "Sócia de Helena" }
    ],
    solution: {
      correctAnswer: "sus:drausio",
      title: "Dráusio Ferraz, o ex-marido",
      motive: "O dossiê que Helena entregou à Corregedoria pedia a quebra de sigilo bancário do escritório Dráusio Ferraz & Cia. e apontava operações de lavagem. Como o envio estava agendado para segunda, Dráusio tentou interceptar Helena e o material antes que o processo andasse: alugou um carro, comprou um chip descartável na estação e mandou ela descer em Vilinha, num ponto fora do roteiro, onde o esperava.",
      sequence: [
        "Na sexta às 19h10, aluga o carro RQX-4J21 no nome da empresa, sem avisar ninguém.",
        "Às 22h06, compra o chip pré-pago na banca da estação, com CPF dele, e o ativa minutos depois.",
        "Às 23h50, envia do chip a mensagem \"Desça em Vilinha\", com a antena da própria estação.",
        "Helena, no trem, caminha para o fundo do carro 3 às 00h41 e, na parada de Vilinha, desce com o estojo e entra no carro que ele estacionava ao lado da plataforma.",
        "O carro segue para fora da cidade; o e-mail agendado entrega o dossiê na segunda às 18h40, e a Corregedoria abre a investigação."
      ],
      decisiveEvidence: ["ev_chip", "ev_sms", "ev_plate"],
      reasoning: "A câmera da banca e a ativação com CPF colocam Dráusio na estação, quebrando o álibi do jantar; a mensagem de 23h50, enviada do mesmo chip pela antena da estação, instrui Helena a descer do roteiro em Vilinha; e o carro que a espera na plataforma é o alugado por ele na mesma tarde. Os registros se cruzam de forma única: a descida e a fuga tiveram um combinado, e quem combinou foi o ex-marido que o dossiê ameaçava.",
      exclusions: [
        { who: "Sérgio Bonfim", why: "Seguiu viagem com a tripulação e é registrado a bordo na saída de Vilinha; a inconsistência do boletim é falha funcional, e nenhum dos registros o liga ao carro, ao chip ou à mensagem." },
        { who: "Vanda Loureiro", why: "Ficou no carro 2 a noite inteira, sob a câmera interna e a assinatura do boletim, e foi a última a atender Helena por serviço; ela não desceu em Vilinha nem tem vínculo com o aluguel ou o chip." },
        { who: "Milena Torrado", why: "O cartão de embarque do vôo 4412 e a bagagem despachada a colocam no ar durante toda a noite; a disputa societária é civil e ela não teve acesso ao trem, ao chip ou ao carro." }
      ]
    }
  };
/* ============================================================
     CASO 20 — DESAPARECIMENTO, NÍVEL 4
     ============================================================ */
  var C20 = {
    id: "d06",
    code: "D-06",
    title: "O Quarto 12",
    category: "desaparecimentos",
    difficulty: 4,
    brief: "Marta Bicalho, 49, auditora do Hotel Serrano, subiu ao quarto 12 às 22h50 de quinta e não saiu mais — segundo a ficha da fechadura e a câmera do hall. De manhã, a porta do quarto estava com o ferrolho girado por dentro, a janela tinha grade e o quarto estava vazio. O irmão de Marta foi ao hotel quando ela deixou de atender desde a madrugada.",
    context: "O Hotel Serrano é um edifício de 1972, com dois elevadores e um corredor de serviço que liga rouparia, depósito e elevador de carga. O corredor de serviço não tem câmera, mas o elevador de serviço e a garagem têm. Atrás do armário do quarto 12 existe uma porta de serviço da época da construção, hoje para a rouparia, sinalizada como saída de emergência. Marta entregaria o relatório da auditoria na sexta às 14h.",
    date: "Quinta para sexta, 12 e 13 de junho · última abertura do quarto às 22h55 · descoberta às 08h20",
    suspects: [
      {
        id: "beatriz",
        name: "Beatriz Sampaio",
        role: "Gerente do hotel",
        age: 47,
        profile: [
          "Gerencia o hotel há 12 anos e controla cartões-mestre, senhas de fechadura e o acesso ao corredor de serviço.",
          "Estava sob auditoria da própria Marta: notas frias da transportadora Rota Norte somavam R$ 2,4 milhões, lançadas pela gerência."
        ],
        behavior: "Alega ter saído às 23h30 e ido dormir em casa; o cartão-mestre dela registrou o corredor de serviço às 03h52, e o elevador de serviço mostra dois ocupantes descendo às 04h18.",
        alibi: "Diz que saiu do hotel às 23h30, foi para casa e dormiu desde 00h."
      },
      {
        id: "osvaldo",
        name: "Osvaldo Queirós",
        role: "Porteiro",
        age: 66,
        profile: [
          "Controla a recepção noturna e conhece todas as saídas do prédio, inclusive a porta velha da rouparia.",
          "Estava de ponto marcado para o dia seguinte, de mudança de apartamento."
        ],
        behavior: "Encerrou o turno às 23h04 e foi embora; não voltou até o início da manhã.",
        alibi: "Diz que saiu às 23h04, pegou o ônibus das 23h15 e chegou em casa às 23h40."
      },
      {
        id: "italo",
        name: "Ítalo Bhering",
        role: "Hóspede do quarto 14, sócio da Rota Norte",
        age: 39,
        profile: [
          "Dormia no hotel enquanto fechava um contrato de entrega com a gerência; a auditoria da Rota Norte dependia do relatório de Marta.",
          "Tinha motivos para que o relatório não fosse entregue na sexta."
        ],
        behavior: "Diz ter trabalhado no quarto 14 a noite toda; as aberturas do quarto o mantêm dentro do próprio quarto na madrugada.",
        alibi: "No quarto 14 das 22h às 07h, trabalhando no computador."
      },
      {
        id: "marcela",
        name: "Marcela Junqueira",
        role: "Camareira",
        age: 31,
        profile: [
          "Trabalha no turno da manhã, das 6h às 14h; conhece a porta velha atrás do armário porque passa por ali quando a tomada do corredor queima.",
          "Estava em estágio probatório e dependia da avaliação da gerente."
        ],
        behavior: "Entrou no hotel às 06h03 pelo hall, para o turno; não teve acesso ao corredor de serviço.",
        alibi: "Dormiu em casa e chegou ao hotel às 06h03, pelo hall."
      }
    ],
    testimonies: [
      {
        id: "t_caio",
        person: "Caio Bicalho",
        role: "Irmão de Marta",
        text: "Ela me ligou às 22h40, animada, dizendo que tinha encontrado \"a última peça\". Prometeu ligar de novo depois de dormir. Quando não respondeu de manhã, fui ao hotel."
      },
      {
        id: "t_beatriz",
        person: "Beatriz Sampaio",
        role: "Gerente",
        text: "Saí do hotel às 23h30 e fui para casa dormir. A porta do quarto 12 é do sistema antigo e dá muito erro; o ferrolho é da época do prédio. Nunca entrei na rouparia de madrugada."
      },
      {
        id: "t_osvaldo",
        person: "Osvaldo Queirós",
        role: "Porteiro",
        text: "Meu turno termina às 23h; depois disso, quem entra é pelo cartão. Peguei o ônibus das 23h15 e fui para casa. A madrugada é silenciosa."
      },
      {
        id: "t_marcela",
        person: "Marcela Junqueira",
        role: "Camareira",
        text: "Já vi o zelador passando pela porta velha quando a tomada do corredor queima. Não sei dizer se aquela porta ainda abre. Trabalho de 6h às 14h e entrei pelo hall, como sempre."
      },
      {
        id: "t_italo",
        person: "Ítalo Bhering",
        role: "Hóspede do quarto 14",
        text: "O relatório da Marta é uma farsa paga pela concorrência. Fiquei no quarto 14 a noite inteira, trabalhando. Não saí depois das 22h."
      }
    ],
    timeline: [
      { time: "Quinta, 22h40", event: "Marta liga para o irmão, animada, dizendo que fechou as últimas peças do relatório." },
      { time: "22h50", event: "A câmera do hall registra Marta subindo pelo elevador principal." },
      { time: "22h55", event: "O cartão de Marta abre o quarto 12; é a última abertura registrada na porta." },
      { time: "03h52", event: "O cartão-mestre da gerente abre a porta do corredor de serviço." },
      { time: "04h00", event: "Aproximadamente: os parafusos do painel do armário têm desgaste fresco — a porta de 1972 é usada." },
      { time: "04h18", event: "O elevador de serviço registra dois ocupantes descendo do andar do quarto 12 ao subsolo." },
      { time: "04h19", event: "A porta da garagem abre; o veículo sai às 04h26 com duas silhuetas." },
      { time: "04h31", event: "O sensor registra a porta do corredor de serviço fechando." },
      { time: "05h33", event: "A garagem reabre; o mesmo veículo retorna às 05h38 com uma única silhueta." },
      { time: "05h40", event: "O elevador de serviço registra um ocupante subindo do subsolo ao andar da recepção." },
      { time: "06h15", event: "A câmera do hall registra Beatriz \"chegando\" para o turno, com a bolsa do trabalho." },
      { time: "08h20", event: "Caio chega ao hotel; o zelador entra pela porta velha: ferrolho girado por dentro, quarto vazio." }
    ],
    evidence: [
      {
        id: "ev_fechadura",
        title: "Registro da fechadura",
        type: "Registro",
        icon: "key",
        summary: "Última abertura do quarto 12 às 22h55 com o cartão de Marta; nenhum uso posterior de cartão na porta principal — que, de manhã, estava com o ferrolho girado por dentro.",
        description: "O sistema registra a abertura às 22h55 com o cartão de Marta Bicalho e nenhum evento seguinte na porta principal até a mestra de emergência da manhã. O ferrolho de segurança, que só gira de dentro, estava girado.",
        significance: "Pela porta principal ninguém saiu depois das 22h55; quem saiu por último esteve dentro do quarto e usou outra rota."
      },
      {
        id: "ev_passagem",
        title: "Porta de 1972",
        type: "Perícia",
        icon: "tool",
        summary: "Atrás do armário do quarto 12, a porta de serviço de 1972 liga o quarto à rouparia; os parafusos da dobradiça têm desgaste fresco e há rastro de limpeza no piso.",
        description: "O painel do armário estava levemente deslocado. Atrás dele, a porta de serviço da construção original, hoje para a rouparia. A perícia encontra desgaste fresco nos parafusos da dobradiça, um rastro de limpeza no piso da rouparia e poeira transferida para o tapete do quarto, do lado de dentro.",
        significance: "O quarto tinha uma segunda saída esquecida — e ela foi usada naquela madrugada."
      },
      {
        id: "ev_cartao",
        title: "Cartão do corredor de serviço",
        type: "Registro",
        icon: "key",
        summary: "O cartão-mestre da gerente abre o corredor de serviço às 03h52; o sensor registra a porta fechando às 04h31.",
        description: "O corredor de serviço, que não tem câmera, é controlado por cartão. O único acesso de madrugada é o da gerente Beatriz Sampaio: abertura às 03h52 e fechamento do sensor às 04h31. É o caminho que termina atrás do armário do quarto 12.",
        significance: "Alguém com o cartão da gerente entrou pelo único trajeto sem câmera — e ele termina no quarto 12."
      },
      {
        id: "ev_garagem",
        title: "Movimentação da garagem",
        type: "Registro de imagem",
        icon: "camera",
        summary: "O veículo sai da garagem às 04h19 e fecha às 04h26 com duas silhuetas; retorna às 05h38 com uma única silhueta.",
        description: "As câmeras da garagem são em contraluz: os rostos não aparecem, mas os portes sim. Duas figuras saem de madrugada no mesmo carro e uma volta sozinha, no horário em que a gerente dizia estar dormindo em casa.",
        significance: "Duas pessoas saíram do hotel de madrugada e uma retornou — como quem desfaz uma entrega."
      },
      {
        id: "ev_relatorio",
        title: "Relatório de Marta",
        type: "Documento",
        icon: "screen",
        summary: "O rascunho salvo no laptop, na quinta às 22h40, aponta notas frias da Rota Norte somando R$ 2,4 milhões, com lançamentos da gerência; entrega prevista para sexta às 14h.",
        description: "O laptop de Marta, encontrado no quarto 12, guarda o rascunho do relatório salvo às 22h40 — dez minutos antes dela subir. O documento descreve as notas fictícias, aponta os lançamentos assinados pela gerência do hotel e prevê a entrega para a sexta às 14h.",
        significance: "O relatório dependia de Marta e expunha a gerente; na madrugada seguinte, Marta sumiu e o relatório ficou no quarto."
      },
      {
        id: "ev_elevador",
        title: "Elevador de serviço",
        type: "Registro",
        icon: "screen",
        summary: "Duas chamadas fora de turno: às 04h18, do andar do quarto 12 ao subsolo, com dois ocupantes; às 05h40, do subsolo ao andar da recepção, com um.",
        description: "O elevador de serviço registra as chamadas e os ocupantes pelo sensor de peso: às 04h18, dois ocupantes descem do andar do quarto 12; às 05h40, um único ocupante sobe do subsolo, logo após o retorno do carro à garagem.",
        significance: "O percurso de quem desceu com alguém e voltou sozinho, no horário exato da movimentação da garagem."
      }
    ],
    contradictions: [
      {
        id: "c_alibi",
        title: "Dormindo em casa x cartão do corredor",
        type: "contradiction",
        between: "Depoimento de Beatriz x Cartão do corredor de serviço",
        analysis: "Beatriz afirmou ter saído às 23h30 e dormido em casa, mas o cartão-mestre dela abriu o corredor de serviço às 03h52 e o sensor o fechou às 04h31."
      },
      {
        id: "c_elevador",
        title: "Ausente do hotel x elevador de serviço",
        type: "contradiction",
        between: "Depoimento de Beatriz x Registros do elevador de serviço",
        analysis: "Ela disse não ter voltado ao hotel durante a noite, mas o elevador de serviço registra dois ocupantes descendo do andar do quarto 12 às 04h18 e um único ocupante subindo às 05h40 — o mesmo intervalo da garagem."
      },
      {
        id: "c_quarto",
        title: "Fechadura x ferrolho",
        type: "contradiction",
        between: "Registro da fechadura x Estado da porta do quarto 12",
        analysis: "A ficha não mostra nenhuma saída pela porta principal, mas o ferrolho estava girado por dentro: quem saiu por último esteve dentro do quarto e usou a passagem de 1972 — o caminho que não tem câmera."
      },
      {
        id: "c_hall",
        title: "Câmera do hall x registro da fechadura",
        type: "confirmation",
        between: "Câmera do hall x Registro da fechadura",
        analysis: "As duas gravações concordam: Marta entrou às 22h50 e nunca mais usou a porta principal. A ausência de saída pelo hall confirma que a rota foi a da passagem de serviço, atrás do armário."
      }
    ],
    hints: [
      "A porta principal não foi usada — mas o ferrolho prova que quem saiu por último estava do lado de dentro.",
      "Atrás do armário do quarto 12 existe uma porta de 1972; siga o caminho que não tem câmera.",
      "As evidências decisivas são o cartão do corredor de serviço, o elevador de serviço e as duas passagens da garagem."
    ],
    answerOptions: [
      { id: "sus:beatriz", label: "Beatriz Sampaio", sub: "Gerente do hotel" },
      { id: "sus:osvaldo", label: "Osvaldo Queirós", sub: "Porteiro" },
      { id: "sus:italo", label: "Ítalo Bhering", sub: "Hóspede do quarto 14" },
      { id: "sus:marcela", label: "Marcela Junqueira", sub: "Camareira" }
    ],
    solution: {
      correctAnswer: "sus:beatriz",
      title: "Beatriz Sampaio, a gerente",
      motive: "O relatório de Marta apontava as notas frias da Rota Norte como responsabilidade da gerência; a entrega estava marcada para a sexta às 14h. Beatriz subiu ao quarto 12 pelo corredor de serviço, com o cartão-mestre, usou a porta velha de 1972 atrás do armário, tirou Marta do quarto, desceu pelo elevador de serviço e saiu pela garagem no carro da empresa. Levou Marta para longe — e voltou sozinha de madrugada para encerrar o expediente.",
      sequence: [
        "Às 03h52, Beatriz abre o corredor de serviço com o cartão-mestre, pelo único trajeto sem câmera.",
        "Aproximadamente às 04h00, entra no quarto 12 pela porta de 1972 atrás do armário — Marta estava lá, e o relatório no laptop.",
        "Às 04h18, desce pelo elevador de serviço com Marta; às 04h19 a garagem abre e o carro sai com duas silhuetas.",
        "Deixa Marta fora do hotel e retorna às 05h38, sozinha; o ferrolho do quarto, girado por dentro, faz o resto do trabalho de encobrimento.",
        "Às 05h40 sobe pelo elevador de serviço e, às 06h15, aparece no hall \"chegando\" para o turno."
      ],
      decisiveEvidence: ["ev_cartao", "ev_elevador", "ev_garagem"],
      reasoning: "O ferrolho girado por dentro e a ficha sem saída pela porta principal apontam para a passagem de 1972, atrás do armário. O único acesso de madrugada às áreas de serviço é o cartão-mestre de Beatriz, às 03h52. O elevador de serviço registra dois ocupantes descendo do andar do quarto 12 às 04h18 e um só subindo às 05h40, e a garagem mostra o carro saindo com duas silhuetas e voltando com uma. O relatório no laptop explica o motivo: oito horas antes da entrega, a gerente tinha tudo a perder.",
      exclusions: [
        { who: "Osvaldo Queirós", why: "O ponto marca a saída às 23h04 e a câmera do hall o registra deixando o hotel; o cartão do corredor de serviço é da gerente, não dele, e a movimentação da madrugada é toda posterior à saída dele." },
        { who: "Ítalo Bhering", why: "Tinha motivo para querer o relatório enterrado, mas as aberturas do quarto 14 o mantêm dentro do próprio quarto, e nenhum cartão dele tocou o corredor de serviço, o elevador de serviço ou a garagem." },
        { who: "Marcela Junqueira", why: "Entrou pelo hall às 06h03, depois de toda a movimentação da madrugada; seu cartão não registra acesso a serviço algum, e ela trabalha no turno da manhã." }
      ]
    }
  };
/* ============================================================
     CASO 21 — FRAUDE, NÍVEL 4
     ============================================================ */
  var C21 = {
    id: "f05",
    code: "F-05",
    title: "A Herança em Duplicidade",
    category: "fraudes",
    difficulty: 4,
    brief: "Alzira Vasconcelos, 79, morreu em 14 de março. O Testamento A, público, de 12 de maio de 2024, dividia a herança entre os filhos Wilson e Gláucio e deixava um legado de R$ 150 mil para Vera, a cuidadora. O Testamento B, particular, datado de 3 de fevereiro de 2026, nomeava Wilson herdeiro único — e foi \"encontrado\" por ele mesmo, sozinho, na gaveta do escritório, em 16 de março.",
    context: "Alzira esteve internada de 31 de janeiro a 8 de fevereiro com pneumonia. Wilson protocolou, em 26 de fevereiro, uma execução judicial de R$ 3,1 milhões contra o espólio, com leilão marcado para 30 de março. Um testamento particular exige duas testemunhas que não sejam herdeiros; a letra de Alzira no documento foi imitada segundo a perícia, e o caderno de rascunhos nº 14, de capa azul, é de propriedade de Wilson.",
    date: "12 de maio de 2024 a 30 de março de 2026 · óbito em 14 de março · \"achado\" em 16 de março",
    suspects: [
      {
        id: "wilson",
        name: "Wilson Vasconcelos",
        role: "Empresário, filho e herdeiro único segundo o Testamento B",
        age: 52,
        profile: [
          "Empresário endividado; protocolou a execução de R$ 3,1 milhões contra o espólio da mãe ainda em vida dela, com leilão marcado para 30 de março.",
          "É dono do escritório onde o Testamento B foi assinado e do caderno de rascunhos nº 14, de capa azul, do qual falta a folha 12."
        ],
        behavior: "Diz que o testamento \"apareceu\" na gaveta quando ele organizava os papéis da mãe com a família presente; a câmera do prédio o registra sozinho no escritório por duas horas.",
        alibi: "Diz que encontrou o documento na gaveta junto com os papéis antigos, sem pressa, num domingo à manhã."
      },
      {
        id: "glauco",
        name: "Gláucio Vasconcelos",
        role: "Filho e herdeiro do Testamento A",
        age: 49,
        profile: [
          "Dentista em BH; herdeiro do Testamento A, o documento autêntico que o documento forjado vinha para anular.",
          "Consta como uma das três testemunhas do Testamento B, mas nega ter estado no escritório em 3 de fevereiro."
        ],
        behavior: "Alega que esteve em congresso em BH de 2 a 4 de fevereiro e que só assinou uma procuração de venda do apartamento da mãe dias depois de voltar.",
        alibi: "Congresso em BH de 2 a 4 de fevereiro; voltou no dia 5."
      },
      {
        id: "neusa",
        name: "Neusa Bandeira",
        role: "Advogada da família",
        age: 61,
        profile: [
          "Conduzia os assuntos jurídicos de Alzira, incluindo o Testamento A, lavrado em cartório sob sua orientação.",
          "Nunca viu o Testamento B antes do protocolo e afirma que ele contraria todas as instruções da cliente."
        ],
        behavior: "Sustenta que Alzira jamais faria testamento particular e que o documento ignora até o legado da cuidadora.",
        alibi: "Seminário em Salvador de 2 a 5 de fevereiro."
      },
      {
        id: "vera",
        name: "Vera Lins",
        role: "Cuidadora e legataria do Testamento A",
        age: 44,
        profile: [
          "Cuidava de Alzira há sete anos e recebia, no Testamento A, o legado de R$ 150 mil.",
          "Passou a noite de 15 para 16 de março na suíte de hóspedes da casa, véspera do \"achado\"."
        ],
        behavior: "Diz que a noite foi tranquila e que não ouviu ninguém no escritório, que fica do outro lado da casa.",
        alibi: "Suíte de hóspedes da casa de Alzira, da noite de 15 à manhã de 16 de março."
      }
    ],
    testimonies: [
      {
        id: "t_wilson",
        person: "Wilson Vasconcelos",
        role: "Empresário",
        text: "Organizei os papéis da minha mãe no domingo, com a família por perto, e o testamento estava na gaveta, entre documentos antigos. Protocoluei tudo certinho. Meu irmão assinou como testemunha; a gente se dá bem."
      },
      {
        id: "t_glauco",
        person: "Gláucio Vasconcelos",
        role: "Dentista",
        text: "Eu não estava no escritório em 3 de fevereiro: estava em congresso em BH. Assinei uma procuração para vender o apartamento da mãe, mas isso foi depois, quando voltei. Aquela assinatura no testamento não é minha."
      },
      {
        id: "t_sonia",
        person: "Sônia Meireles",
        role: "Testemunha",
        text: "O Wilson explicou que a mãe estava internada, que o apartamento precisava ser vendido para pagar o tratamento, e que era só uma procuração. O Gláucio estava ali e assinou junto comigo e com o Audério."
      },
      {
        id: "t_audério",
        person: "Audério Pinho",
        role: "Testemunha",
        text: "Assinei a procuração de venda do apartamento, no escritório do Wilson, às 16h, com a Sônia e o Gláucio. Se eu soubesse que era testamento, jamais teria assinado — eu não sou parente."
      },
      {
        id: "t_neusa",
        person: "Neusa Bandeira",
        role: "Advogada da família",
        text: "A Alzira jamais faria testamento particular: o Testamento A foi discutido por meses. Este documento ignora até o legado da Vera, que ela considerava família. Não redigei, não vi e não recomendaria."
      }
    ],
    timeline: [
      { time: "12/05/2024", event: "Testamento A lavrado em cartório: herança dividida entre Wilson e Gláucio, com legado de R$ 150 mil para Vera." },
      { time: "31/01/2026", event: "Alzira é internada com pneumonia." },
      { time: "02 a 04/02", event: "Gláucio está em congresso em BH; Neusa, em seminário em Salvador até 05/02." },
      { time: "03/02, 16h", event: "O Testamento B é assinado no escritório de Wilson; Sônia e Audério acreditam estar assinando uma procuração; a assinatura de Gláucio é falsificada." },
      { time: "08/02", event: "Alzira recebe alta." },
      { time: "26/02", event: "Wilson protocola execução judicial de R$ 3,1 milhões; leilão do espólio marcado para 30/03." },
      { time: "14/03", event: "Alzira morre aos 79 anos." },
      { time: "15→16/03", event: "Vera pernoita na suíte de hóspedes da casa." },
      { time: "16/03, 09h15–11h40", event: "Wilson entra sozinho no escritório e \"encontra\" o Testamento B na gaveta; a câmera do prédio não registra mais ninguém na sala." },
      { time: "17/03", event: "O Testamento B é protocolado como particular." },
      { time: "28/04", event: "A perícia conclui: imitação de letra de Alzira e mão de Wilson na assinatura de Gláucio." }
    ],
    evidence: [
      {
        id: "ev_testA",
        title: "Testamento A",
        type: "Documento",
        icon: "doc",
        summary: "Lavrado em cartório em 12/05/2024, divide a herança entre Wilson e Gláucio e deixa R$ 150 mil de legado para Vera; registro autêntico e incontestado.",
        description: "O Testamento A foi lavrado em cartório de notas, com as assinaturas de Alzira, do tabelião e de duas testemunhas estranhas à família. Divide o espólio entre os dois filhos e assegura o legado de R$ 150 mil a Vera, a cuidadora. É o único testamento que aparece nos registros em vida de Alzira.",
        significance: "O documento autêntico que o Testamento B vinha para anular — e que exclui Vera da herança, não a beneficia."
      },
      {
        id: "ev_testB",
        title: "Testamento B",
        type: "Documento",
        icon: "doc",
        summary: "Particular, datado de 03/02/2026, nomeia Wilson herdeiro único; traz três assinaturas de testemunhas e a letra de Alzira, que a perícia considera imitada.",
        description: "O documento não passou por cartório em vida de Alzira. Datado de 3 de fevereiro — no meio da internação — nomeia Wilson como único herdeiro e não menciona o legado de Vera. A perícia grafotécnica conclui que a letra de Alzira foi imitada por outra mão.",
        significance: "A data cai durante a internação; a letra é falsa; e o conteúdo conveniently elimina o irmão e a cuidadora."
      },
      {
        id: "ev_papel",
        title: "Caderno nº 14",
        type: "Vestígio",
        icon: "edit",
        summary: "O caderno de rascunhos de capa azul é de Wilson; a folha 12 foi arrancada e o papel do Testamento B tem a mesma marca de fórra e o mesmo pautado.",
        description: "O caderno de rascunhos nº 14, de capa azul, pertence a Wilson e ficava na gaveta do escritório. A folha 12 foi arrancada — o corte é limpo, feito com régua. O papel do Testamento B tem a mesma marca de fórra, o mesmo pautado e o mesmo tipo de gramatura.",
        significance: "O testamento foi confeccionado com a folha arrancada do caderno de Wilson."
      },
      {
        id: "ev_graf",
        title: "Perícia grafotécnica",
        type: "Perícia",
        icon: "lab",
        summary: "A letra de Alzira no Testamento B foi imitada; a assinatura de Gláucio tem o traçado do \"g\" característico da mão de Wilson.",
        description: "A perícia comparou o documento com assinaturas autênticas de Alzira e Gláucio. A letra do corpo do testamento imita, sem reproduzir, a mão debilitada de Alzira. Na assinatura atribuída a Gláucio, o laudo identifica o traçado do \"g\" — inconfundível na mão de Wilson, conforme os modelos examinados.",
        significance: "Quem escreveu o testamento foi a mão de Wilson, que também forjou a assinatura do irmão."
      },
      {
        id: "ev_print",
        title: "Dactiloscopia",
        type: "Perícia",
        icon: "lab",
        summary: "A digital de Wilson ocupa o centro da folha do Testamento B, na zona de dobra, transferida antes de qualquer protocolo.",
        description: "A folha do Testamento B está com uma dobra central. No centro dessa dobra, a dactiloscopia identifica a digital de Wilson em impressão plena — não uma ponta de dedo na borda, mas a marca de quem segurou e dobrou o papel. Wilson alega ter tocado no documento somente no cartório, pelas bordas.",
        significance: "Ele manuseou e dobrou o testamento antes de qualquer cartório, o que derruba a versão do \"achado\"."
      },
      {
        id: "ev_cam",
        title: "Câmera do prédio",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Registra Wilson entrando sozinho no escritório em 16/03, das 09h15 às 11h40; ninguém mais usou a sala nesse intervalo.",
        description: "A câmera do corredor do escritório registra Wilson chegando sozinho às 09h15 e saindo às 11h40, com o mesmo envelope que levou. Nenhum outro funcionário, familiar ou visitante aparece na sala nesse intervalo. A família inteira estava na sala da casa, no andar de baixo.",
        significance: "O \"achado\" do testamento aconteceu a portas fechadas, com um único homem na sala."
      },
      {
        id: "ev_exec",
        title: "Execução judicial",
        type: "Registro",
        icon: "bank",
        summary: "Wilson protocolou, em 26/02, execução de R$ 3,1 milhões contra o espólio, com leilão marcado para 30/03 — ainda em vida de Alzira.",
        description: "Antes mesmo do óbito, Wilson deu entrada em execução judicial contra o espólio da mãe, pedindo o leilão dos bens para quitar supostas dívidas. O leilão estava marcado para 30 de março, dezesseis dias após a morte. O Testamento B, protocolado em 17/03, serviria para justificar a herança dele.",
        significance: "Ele agiu como se já soubesse que seria o único herdeiro — e antes de o testamento ser \"encontrado\"."
      }
    ],
    contradictions: [
      {
        id: "c_wilson",
        title: "Família presente x escritório vazio",
        type: "contradiction",
        between: "Depoimento de Wilson x Câmera do prédio",
        analysis: "Wilson disse ter encontrado o testamento na gaveta com a família por perto; a câmera o registra sozinho no escritório por duas horas, sem mais ninguém na sala."
      },
      {
        id: "c_gaveta",
        title: "Assinatura de Gláucio x congresso em BH",
        type: "contradiction",
        between: "Testamento B x Depoimento de Gláucio e cartões de embarque",
        analysis: "O Testamento B traz a assinatura de Gláucio como testemunha em 03/02; ele comprovadamente estava em congresso em BH de 2 a 4 de fevereiro, e a perícia aponta a mão de Wilson naquele \"g\"."
      },
      {
        id: "c_print",
        title: "Alegação de toque só no cartório x digital no centro da folha",
        type: "contradiction",
        between: "Depoimento de Wilson x Dactiloscopia",
        analysis: "Wilson disse ter tocado no papel apenas no cartório, segurando pelas bordas; a digital dele está no centro da dobra central, transferida enquanto ele montava e dobrava o documento."
      },
      {
        id: "c_cartorio",
        title: "Registro do Testamento A x silêncio dos papéis de Alzira",
        type: "confirmation",
        between: "Cartório de notas x Belichê e papéis pessoais de Alzira",
        analysis: "O cartório confirma o Testamento A como o único ato da vontade de Alzira registrado em vida. Nos papéis da casa não há rascunho, cópia, bilhete ou menção a qualquer testamento particular — o Testamento B não existia enquanto ela podia falar."
      }
    ],
    hints: [
      "Quem assina um testamento como testemunha não pode ser herdeiro; o Testamento A e o Testamento B se excluem mutuamente.",
      "A data do Testamento B cai no meio da internação de Alzira — e a assinatura de um dos três testemunhas veio de outra cidade.",
      "As evidências decisivas são a perícia grafotécnica, a digital no centro da folha e a câmera do escritório."
    ],
    answerOptions: [
      { id: "sus:wilson", label: "Wilson Vasconcelos", sub: "Herdeiro único (segundo o Testamento B)" },
      { id: "sus:glauco", label: "Gláucio Vasconcelos", sub: "Filho e herdeiro do Testamento A" },
      { id: "sus:neusa", label: "Neusa Bandeira", sub: "Advogada da família" },
      { id: "sus:vera", label: "Vera Lins", sub: "Cuidadora e legataria" }
    ],
    solution: {
      correctAnswer: "sus:wilson",
      title: "Wilson Vasconcelos, o herdeiro único",
      motive: "Wilson sabia que o Testamento A o colocaria em dividenda com o irmão e asseguraria o legado de Vera. Com a mãe internada e debilitada, forjou um testamento particular em nome dela, datado de 3 de fevereiro, se declarando herdeiro único: imitou a letra de Alzira, falsificou a assinatura do irmão — que estava em BH — e induziu Sônia e Audério a assinarem o que tomaram por uma procuração. Depois protocolou a execução de R$ 3,1 milhões ainda em vida dela e \"encontrou\" o documento sozinho, quando Alzira já não podia mais desmenti-lo.",
      sequence: [
        "Em 3 de fevereiro, às 16h, chama Sônia e Audério ao escritório e faz assinarem o que diz ser procuração para venda do apartamento — o papel é o testamento com ele como herdeiro único.",
        "Falsifica a assinatura de Gláucio, ausente em congresso; a grafotécnica aponta a mão de Wilson no traçado do \"g\".",
        "Imita a letra debilitada de Alzira, que estava internada sob tratamento.",
        "Protocola, em 26 de fevereiro, a execução de R$ 3,1 milhões, com leilão marcado para 30 de março — antes do óbito.",
        "Em 16 de março, dois dias após a morte, entra sozinho no escritório e \"encontra\" o testamento na gaveta, com a digital no centro da dobra."
      ],
      decisiveEvidence: ["ev_graf", "ev_print", "ev_cam"],
      reasoning: "A perícia grafotécnica mostra que a letra de Alzira foi imitada e que a assinatura de Gláucio tem o traçado da mão de Wilson — e Gláucio comprovadamente estava em BH em 3 de fevereiro. A digital de Wilson no centro da dobra prova que ele manuseou e dobrou o documento antes de qualquer cartório, e a câmera do prédio o registra sozinho no escritório na hora do \"achado\". O Testamento A é o único ato da vontade de Alzira registrado em vida; o caderno nº 14, com a folha 12 arrancada, é o berço do documento forjado.",
      exclusions: [
        { who: "Gláucio Vasconcelos", why: "Sua assinatura foi falsificada; ele estava em congresso em BH de 2 a 4 de fevereiro e desconhecia o conteúdo do papel. Como herdeiro do Testamento A, o documento forjado o prejudicava, não o beneficiava." },
        { who: "Neusa Bandeira", why: "Estava em seminário em Salvador de 2 a 5 de fevereiro; não redigiu, viu ou recomendou o Testamento B, e o documento particular não passou por cartório — não há registro dela em nada." },
        { who: "Vera Lins", why: "Pernoitou na suíte de hóspedes, mas Wilson entrou sozinho no escritório pela manhã; o Testamento B a excluía da herança — o legado de R$ 150 mil deixaria de existir —, então a fraude a prejudicava." }
      ]
    }
  };
/* ============================================================
     CASO 22 — FRAUDE, NÍVEL 4
     ============================================================ */
  var C22 = {
    id: "f06",
    code: "F-06",
    title: "O Leilão Beneficente",
    category: "fraudes",
    difficulty: 4,
    brief: "O Leilão Beneficente do Hospital Infantil arrecadou R$ 1,86 milhão no sábado à noite; os depósitos confirmados nos dias seguintes somaram R$ 1,02 milhão. A diferença de R$ 840 mil está concentrada em três lotes: o quadro \"Serra Azul\", doado por Aurélio Cravo, e dois outros. Do lote 9 constam dois recibos — um do livro oficial, R$ 840 mil, outro particular, R$ 430 mil —, ambos assinados às 21h58.",
    context: "A diretora Rosana Vilela conduziu o leilão e assina o livro de fechamento; a comissão dela é de 3% sobre a arrecadação. O lote 9 foi anotado no livro por César Mundim, tesoureiro e leiloeiro adjunto. Aurélio Cravo doou o quadro \"Serra Azul\", avaliado pela apólice em R$ 900 mil, mas um laudo independente da corretora o estimou entre R$ 600 mil e R$ 750 mil. O arrematante é Amauri Delfino, dono de uma construtora.",
    date: "Sábado, 19 de setembro · leilão das 20h às 22h40 · entregas na madrugada seguinte",
    suspects: [
      {
        id: "cesar",
        name: "César Mundim",
        role: "Tesoureiro do hospital e leiloeiro adjunto",
        age: 46,
        profile: [
          "Anotava o livro de lances, controlava o dinheiro do leilão e ficou com a chave do depósito na noite do evento.",
          "Tinha R$ 780 mil em dívidas pessoais vencendo na segunda subsequente e uma auditoria contábil marcada para segunda-feira."
        ],
        behavior: "Diz que a chave do depósito fica sempre com o vigia e que não ligou para ninguém de madrugada; o vigia confirma que ela ficou com ele.",
        alibi: "Diz que foi embora depois do leilão e dormiu em casa."
      },
      {
        id: "rosana",
        name: "Rosana Vilela",
        role: "Diretora do hospital",
        age: 52,
        profile: [
          "Conduziu o leilão, assina o fechamento do livro e recebe 3% de comissão sobre a arrecadação.",
          "Entregou o envelope com a arrecadação no gabinete às 22h30 e saiu às 22h38 sem ele, diante da câmera."
        ],
        behavior: "Diz que o livro de lances é de César e que ela apenas assina o fechamento.",
        alibi: "No salão do leilão até 22h40; deixa o gabinete às 22h38 e vai para casa."
      },
      {
        id: "aurelio",
        name: "Aurélio Cravo",
        role: "Doador do quadro \"Serra Azul\"",
        age: 68,
        profile: [
          "Empresário aposentado; doou o quadro para o leilão e assinou o recibo de doação.",
          "A apólice do quadro, contratada há seis anos após uma restauração, registra R$ 900 mil."
        ],
        behavior: "Diz que doou de boa fé e que não voltou a ver o quadro desde o sábado.",
        alibi: "Durante o leilão, no salão, como convidado de honra."
      },
      {
        id: "amauri",
        name: "Amauri Delfino",
        role: "Arrematante do lote 9",
        age: 41,
        profile: [
          "Dono de construtora; arrematou o \"Serra Azul\" com recibo particular e cheque de R$ 430 mil.",
          "Recebeu o quadro na sua obra, às 01h30 da madrugada seguinte, e o tinha dentro do carro."
        ],
        behavior: "Diz que comprou por telefone com o César e que foi chamado de madrugada para retirar o lote.",
        alibi: "Em casa até 00h40; sai com o carro para buscar o quadro."
      }
    ],
    testimonies: [
      {
        id: "t_cesar",
        person: "César Mundim",
        role: "Tesoureiro",
        text: "O leilão foi um sucesso. O cheque da Marechal foi encontrado no gabinete por alguém da limpeza — não sei de quem é. A chave do depósito fica com o Nilton, sempre. Não liguei para o Amauri de madrugada nenhuma."
      },
      {
        id: "t_rosana",
        person: "Rosana Vilela",
        role: "Diretora",
        text: "Deixei o gabinete às 22h38, sem o envelope, como todos viram na câmera. O livro de lances é do César; eu assino o fechamento. Minha comissão é de 3% sobre o que entrar de verdade."
      },
      {
        id: "t_aurelio",
        person: "Aurélio Cravo",
        role: "Doador",
        text: "Doei o Serra Azul de boa fé; a apólice foi contratada há seis anos, depois da restauração. Nunca vi aquele quadro de novo desde o sábado. Espero que tenha ajudado as crianças."
      },
      {
        id: "t_amauri",
        person: "Amauri Delfino",
        role: "Arrematante",
        text: "Comprei o quadro com recibo e cheque de R$ 430 mil, por telefone. O César me ligou depois da meia-noite dizendo que o lote estava pronto para retirar. Fui lá de madrugada, como ele falou."
      },
      {
        id: "t_nilton",
        person: "Nilton Rocha",
        role: "Vigia",
        text: "A chave do depósito ficou com o César na noite do leilão. Ele disse que ia conferir os lotes grandes antes de ir embora. Vi a luz do gabinete lá pelas 23h50."
      }
    ],
    timeline: [
      { time: "17/09, 14h06", event: "César está no balcão da agência, abrindo a conta da Marechal Consultoria com o sócio laranja Deivid Soares." },
      { time: "19/09, 20h", event: "Início do leilão; Rosana conduz e César anota o livro de lances." },
      { time: "21h58", event: "Lote 9, \"Serra Azul\": o livro registra R$ 840 mil; o recibo particular registra R$ 430 mil. Ambos assinados na mesma hora." },
      { time: "22h30", event: "Rosana entrega o envelope com a arrecadação no gabinete." },
      { time: "22h38", event: "Rosana sai do gabinete sem o envelope, diante da câmera." },
      { time: "22h40", event: "Fim do leilão." },
      { time: "23h50", event: "O vigia Nilton vê a luz do gabinete acesa; a chave do depósito está com César." },
      { time: "00h40", event: "César liga para Amauri." },
      { time: "01h30", event: "O quadro \"Serra Azul\" é encontrado na obra de Amauri, dentro do carro." },
      { time: "Segunda", event: "O cheque da Marechal Consultoria, de R$ 610 mil, é devolvido por falta de fundos; a auditoria contábil começa." },
      { time: "Fechamento", event: "Livros do leilão: R$ 1,86 milhão. Depósitos confirmados: R$ 1,02 milhão. Diferença: R$ 840 mil." }
    ],
    evidence: [
      {
        id: "ev_recibo1",
        title: "Recibo do livro oficial",
        type: "Registro",
        icon: "receipt",
        summary: "O livro de lances registra a arrematação do lote 9 por R$ 840 mil, assinado por César como leiloeiro e por Amauri como arrematante, às 21h58.",
        description: "O livro oficial, anotado por César e fechado por Rosana, registra o lote 9 \"Serra Azul\" vendido por R$ 840 mil, com as assinaturas do leiloeiro e do arrematante, ambas datadas das 21h58.",
        significance: "O valor que entra no cálculo da arrecadação — e que não aparece em nenhum depósito."
      },
      {
        id: "ev_recibo2",
        title: "Recibo particular",
        type: "Documento",
        icon: "receipt",
        summary: "Um segundo recibo, particular, registra a mesma arrematação do lote 9 por R$ 430 mil, com a mesma hora e as mesmas assinaturas.",
        description: "Encontrado no envelope abandonado no gabinete: um recibo particular, fora do livro, com o lote 9 vendido por R$ 430 mil, às 21h58, assinado por César e Amauri. O cheque de Amauri, de R$ 430 mil, corresponde a este recibo.",
        significance: "Dois recibos, um lote, uma hora: um deles é a cobertura do desfalque de R$ 410 mil."
      },
      {
        id: "ev_cheque",
        title: "Cheque da Marechal Consultoria",
        type: "Registro",
        icon: "bank",
        summary: "Cheque de R$ 610 mil, emitido em 18/09, devolvido por falta de fundos; a conta da consultoria foi aberta em 17/09, um dia antes do leilão, com sócio laranja.",
        description: "A Marechal Consultoria emitiu um cheque de R$ 610 mil para o hospital, emitido na véspera do leilão, e o banco o devolveu por falta de fundos. A conta foi aberta em 17/09 — um dia antes —, com capital de R$ 5 mil e um sócio, Deivid Soares, sem histórico profissional conhecido.",
        significance: "O dinheiro que faltava para fechar a diferença nunca existiu; a empresa foi montada para o leilão."
      },
      {
        id: "ev_agencia",
        title: "Câmera da agência",
        type: "Registro de imagem",
        icon: "camera",
        summary: "A câmera registra César no balcão da agência em 17/09, às 14h06, abrindo a conta da Marechal Consultoria.",
        description: "A gravação do caixa da agência mostra César Mundim assinando a abertura de conta da Marechal Consultoria, com Deivid Soares ao lado. O gesto é dele no balcão; o laranja mal abre a boca.",
        significance: "O autor do cheque devolvido é o mesmo que anotava o livro do leilão."
      },
      {
        id: "ev_entrega",
        title: "Envelope do gabinete",
        type: "Registro",
        icon: "camera",
        summary: "O envelope entregue às 22h30 foi abandonado no gabinete; dentro dele, R$ 430 mil em espécie e o recibo particular; o cheque da Marechal estava no gabinete.",
        description: "A câmera registra Rosana entregando o envelope no gabinete às 22h30 e saindo às 22h38 sem ele. Quando o gabinete foi aberto, o envelope estava lá com R$ 430 mil em espécie e o recibo particular do lote 9; o cheque da Marechal estava sobre a mesa.",
        significance: "O dinheiro do lote 9 nunca saiu do gabinete — e o recibo que o justificava também estava ali."
      },
      {
        id: "ev_dividas",
        title: "Dívidas de César",
        type: "Documento",
        icon: "doc",
        summary: "Extratos mostram R$ 780 mil em dívidas pessoais de César, com vencimento na segunda subsequente, e uma auditoria contábil marcada para segunda-feira.",
        description: "Os extratos pessoais de César acumulam R$ 780 mil em dívidas, com vencimentos na segunda subsequente — o mesmo dia da auditoria contábil que ele sabia que ocorreria no hospital. O leilão era a última oportunidade de acertar as contas.",
        significance: "O motivo: precisava acertar R$ 780 mil até segunda — e o leilão movimentava R$ 1,86 milhão."
      },
      {
        id: "ev_valores",
        title: "Laudo de avaliação",
        type: "Perícia",
        icon: "lab",
        summary: "O laudo independente da corretora estimou o \"Serra Azul\" entre R$ 600 mil e R$ 750 mil; a apólice de Aurélio registra R$ 900 mil; o livro do leilão registra a venda por R$ 840 mil.",
        description: "A corretora contratada pelo hospital avaliou o quadro entre R$ 600 mil e R$ 750 mil. A apólice de Aurélio, de seis anos atrás, registra R$ 900 mil. O livro de lances, escrito por César, registrou a venda por R$ 840 mil — acima de qualquer avaliação real, mas abaixo da apólice, para não chamar atenção.",
        significance: "O valor do livro não veio do leilão: veio do espaço entre o laudo e a apólice."
      }
    ],
    contradictions: [
      {
        id: "c_livro",
        title: "Dois recibos, um lote",
        type: "contradiction",
        between: "Recibo do livro oficial x Recibo particular",
        analysis: "O livro e o recibo particular registram a mesma arrematação do lote 9, na mesma hora, com as mesmas assinaturas, por valores diferentes — R$ 840 mil e R$ 430 mil. Um deles foi forjado para cobrir o desfalque de R$ 410 mil."
      },
      {
        id: "c_cesar",
        title: "Chave sempre com o vigia x chave com o tesoureiro",
        type: "contradiction",
        between: "Depoimento de César x Depoimento de Nilton",
        analysis: "César afirmou que a chave do depósito fica sempre com o vigia; Nilton confirma que, na noite do leilão, ela ficou com ele, e que ele ainda o viu no gabinete às 23h50."
      },
      {
        id: "c_valores",
        title: "Laudo independente x livro de lances",
        type: "contradiction",
        between: "Laudo da corretora x Registro do livro oficial",
        analysis: "O laudo estima o quadro entre R$ 600 mil e R$ 750 mil; o livro registra a venda por R$ 840 mil, valor que só existe entre a apólice e o laudo — e que não aparece em nenhum depósito."
      },
      {
        id: "c_rosana",
        title: "Comissão sobre o livro x comissão sobre os depósitos",
        type: "confirmation",
        between: "Livro de lances x Declaração de comissão de Rosana",
        analysis: "Se Rosana participasse do desvio, teria incentive para cobrar comissão sobre os R$ 1,86 milhão do livro; mas sua comissão foi calculada sobre os R$ 1,02 milhão efetivamente depositados. Ela própria não cobrou sobre a diferença, o que confirma que ela não participou do golpe."
      }
    ],
    hints: [
      "Dois recibos, o mesmo lote, a mesma hora: um deles é verdadeiro e o outro é a cobertura do desfalque.",
      "O cheque devolvido foi emitido por uma conta aberta um dia antes do leilão, por um sócio que não existe — e a câmera da agência mostra quem abriu.",
      "As evidências decisivas são o cheque da Marechal, a câmera da agência e o telefonema da madrugada para o arrematante."
    ],
    answerOptions: [
      { id: "sus:cesar", label: "César Mundim", sub: "Tesoureiro e leiloeiro adjunto" },
      { id: "sus:rosana", label: "Rosana Vilela", sub: "Diretora do hospital" },
      { id: "sus:aurelio", label: "Aurélio Cravo", sub: "Doador do quadro" },
      { id: "sus:amauri", label: "Amauri Delfino", sub: "Arrematante do lote 9" }
    ],
    solution: {
      correctAnswer: "sus:cesar",
      title: "César Mundim, o tesoureiro",
      motive: "César anotava o livro de lances e controlava o dinheiro do leilão. Com R$ 780 mil em dívidas vencendo na segunda e uma auditoria marcada, inflou o lote 9 no livro — R$ 840 mil — enquanto emitia um recibo particular de R$ 430 mil para o arrematante; ajustou ainda os lotes 4 e 12, fechando os R$ 840 mil que sumiram. Para lavar o valor, abriu uma conta de fachada no dia anterior ao leilão, com um sócio laranja, e tentou fazer o cheque passar; devolvido, chamou o arrematante de madrugada para retirar o quadro antes da auditoria de segunda.",
      sequence: [
        "Em 17 de setembro, às 14h06, abre no balcão da agência a conta da Marechal Consultoria, com o laranja Deivid Soares.",
        "Na noite do leilão, ajusta o livro: lote 9 por R$ 840 mil (com recibo particular de R$ 430 mil), lote 4 de R$ 180 mil para R$ 90 mil e lote 12 de R$ 390 mil para R$ 50 mil — R$ 840 mil de diferença.",
        "Às 21h58, faz assinar os dois recibos contraditórios do lote 9, um no livro e outro particular.",
        "Emite o cheque de R$ 610 mil da Marechal para cobrir parte do valor e depositar no hospital.",
        "Quando o cheque é devolvido por falta de fundos, liga para Amauri às 00h40 e manda buscar o quadro na obra, antes da auditoria de segunda."
      ],
      decisiveEvidence: ["ev_cheque", "ev_agencia", "ev_entrega"],
      reasoning: "A câmera da agência coloca César abrindo a conta da Marechal Consultoria no dia anterior ao leilão, e o cheque devolvido prova que o dinheiro nunca existiu. O envelope abandonado no gabinete, com o recibo particular de R$ 430 mil, mostra que o desvio foi feito no fechamento do livro — que era anotado por ele. O telefonema de 00h40 para Amauri e a retirada do quadro de madrugada completam o quadro de quem precisava acertar as contas antes de segunda. As dívidas de R$ 780 mil e a auditoria de segunda dão o motivo e o prazo.",
      exclusions: [
        { who: "Rosana Vilela", why: "Assina o fechamento, mas deixa o gabinete às 22h38 sem o envelope, diante da câmera; a própria comissão dela foi calculada sobre o valor depositado, não sobre o do livro, o que a coloca fora do desvio." },
        { who: "Aurélio Cravo", why: "Doou o quadro de boa fé; a apólice de R$ 900 mil foi contratada anos antes, e foi o laudo da corretora — não a doação — que foi ignorado por quem escreveu o livro." },
        { who: "Amauri Delfino", why: "Arrematou com recibo particular e cheque de R$ 430 mil, valor coerente com o laudo; foi chamado de madrugada pelo autor do desvio e recebeu o quadro como quem cumpre uma ordem, não como quem planejou o golpe." }
      ]
    }
  };
/* ============================================================
     CASO 23 — ASSASSINATO, NÍVEL 4
     ============================================================ */
  var C23 = {
    id: "a05",
    code: "A-05",
    title: "O Silêncio do Observatório",
    category: "assassinatos",
    difficulty: 4,
    brief: "Victor Alencar, 58, diretor do Observatório Municipal, foi encontrado morto no pátio externo, aos pés da cúpula, às 03h47 de sábado, no meio da noite de observação. O laudo aponta queda de 2,4 metros do parapeito da passarela, com arranhões de defesa nos antebraços. A noite era de estreia do levantamento do céu do sul — o levantamento que Victor ia denunciar.",
    context: "O observatório tem sala de controle, cúpula, passarela externa e uma sala de máquinas no subsolo, acessível por escada e por crachá. A equipe noturna era composta por Victor, pela astrônoma assistente Amélia Ferraz, que liderava o levantamento, pelo astrônomo adjunto Reinaldo Sá, pela técnica Célia Boaventura e pelo zelador Dorival Pena. A boca de visitação da cúpula é acionada por alavanca manual e registra no sistema.",
    date: "Sábado, 6 de setembro · noite de observação das 22h às 06h · descoberta às 03h47",
    suspects: [
      {
        id: "amelia",
        name: "Amélia Ferraz",
        role: "Astrônoma assistente, líder do levantamento",
        age: 34,
        profile: [
          "Liderava o levantamento Southern Sky, cujos dados Victor apontava como fraudados: valores repetidos e objetos catalogados que jamais foram observados.",
          "Usa parka vermelha e bota de número 41; retirou o crachá de acesso à sala de máquinas na madrugada do crime."
        ],
        behavior: "Alega que ficou a noite inteira na sala de controle, olhando dados; a câmera mostra ela saindo às 03h23, sem avisar ninguém.",
        alibi: "Na sala de controle a noite toda, trabalhando nos dados do levantamento."
      },
      {
        id: "reinaldo",
        name: "Reinaldo Sá",
        role: "Astrônomo adjunto",
        age: 45,
        profile: [
          "Adjunto de Victor há dez anos e o próximo na linha de sucessão da direção.",
          "Diz ter ouvido \"algo\" por volta das 03h30 e ido procurar Victor sozinho, sem chamar ninguém."
        ],
        behavior: "A câmera da passagem de serviço o registra apenas às 03h47, acompanhado de Célia; nenhum registro de porta anterior.",
        alibi: "Na sala de controle, exceto quando saiu para procurar Victor."
      },
      {
        id: "celia",
        name: "Célia Boaventura",
        role: "Técnica de instrumentos",
        age: 29,
        profile: [
          "Cuidava da calibração do spectrograph; estava na sala de calibração até 03h40, segundo o registro do sistema.",
          "Foi ela quem desconfiou que Victor demorava demais e chamou Reinaldo."
        ],
        behavior: "Não usa parka vermelha nem bota nº 41; nunca esteve na sala de máquinas.",
        alibi: "Sala de calibração até 03h40; depois, sala de controle e passagem com Reinaldo."
      },
      {
        id: "dorival",
        name: "Dorival Pena",
        role: "Zelador",
        age: 62,
        profile: [
          "Faz os rounds de segurança às 02h e às 04h, registrados no quadro de rondas da portaria.",
          "Conhece todas as portas, inclusive a boca de visitação da cúpula."
        ],
        behavior: "Visto na portaria às 03h50, antes de saber do corpo; bota de número 44.",
        alibi: "Round das 02h concluído; entre 02h e 04h, na portaria e no depot técnico."
      }
    ],
    testimonies: [
      {
        id: "t_amelia",
        person: "Amélia Ferraz",
        role: "Astrônoma assistente",
        text: "Fiquei a noite inteira na sala de controle, conferindo dados do levantamento. Nunca subi à passarela; Victor sempre ficava tonto naquele parapeito. Provavelmente escorregou."
      },
      {
        id: "t_reinaldo",
        person: "Reinaldo Sá",
        role: "Astrônomo adjunto",
        text: "Por volta das 03h30 senti que faltava algo e saí para procurar Victor. Chamei a Célia quando vi que ele demorava; juntos encontramos o corpo no pátio."
      },
      {
        id: "t_celia",
        person: "Célia Boaventura",
        role: "Técnica",
        text: "Estava na calibração até 03h40; o registro do sistema atesta. Victor não desceu da passarela desde as 02h40. Quando vi que não voltava, chamei o Reinaldo."
      },
      {
        id: "t_dorival",
        person: "Dorival Pena",
        role: "Zelador",
        text: "Meu round das 02h foi concluído e assinado. Fiquei na portaria até as 04h. Ouvi o alarme do pátio só quando a Célia gritou, lá pelas 03h47."
      },
      {
        id: "t_tecnico",
        person: "Hugo Sertã",
        role: "Técnico do observatório",
        text: "A boca de visitação da cúpula é acionada por alavanca e registra no sistema. O crachá de cada pessoa marca em que porta entra e a que horas. Sem isso, a noite é um escuro só."
      }
    ],
    timeline: [
      { time: "22h00", event: "Início da noite de observação; equipe reunida na sala de controle." },
      { time: "02h40", event: "Victor sobe sozinho à passarela da cúpula, registrado pela câmera." },
      { time: "03h05", event: "Victor salva no computador da sala de controle o rascunho da denúncia sobre os dados do levantamento." },
      { time: "03h23", event: "Amélia sai da sala de controle pela câmera, sem avisar ninguém." },
      { time: "03h24", event: "O crachá de Amélia registra entrada na sala de máquinas, no subsolo." },
      { time: "~03h26", event: "A tranca da cúpula é acionada manualmente; o sistema registra o disparo da alavanca." },
      { time: "03h29:40", event: "O gravador da passarela registra impacto abafado, gemidos por 20 segundos e passos apressados." },
      { time: "03h35", event: "O sensor registra a abertura da porta da passarela." },
      { time: "03h36", event: "O crachá de Amélia registra saída da sala de máquinas." },
      { time: "03h47", event: "Reinaldo e Célia entram pela passagem de serviço e encontram o corpo no pátio." },
      { time: "03h50", event: "Dorival é visto na portaria, antes de saber do ocorrido." }
    ],
    evidence: [
      {
        id: "ev_audio",
        title: "Gravador da passarela",
        type: "Registro",
        icon: "screen",
        summary: "Às 03h29:40, impacto abafado; gemidos por 20 segundos; passos apressados; a porta é aberta às 03h35.",
        description: "O gravador acústico da passarela, ligado durante as noites de observação, registra às 03h29:40 um impacto abafado, seguido de gemidos por cerca de 20 segundos e de passos apressados descendo a escada. Às 03h35, o sensor registra a abertura da porta.",
        significance: "Fixa o minuto exato do ataque e mostra que o autor desceu a escada em fuga."
      },
      {
        id: "ev_badge",
        title: "Registro do crachá",
        type: "Registro",
        icon: "key",
        summary: "O crachá de Amélia registra entrada na sala de máquinas às 03h24 e saída às 03h36; a câmera a mostra saindo da sala de controle às 03h23.",
        description: "O sistema de crachás registra a entrada de Amélia na sala de máquinas às 03h24 e a saída às 03h36 — exatamente a janela do ataque. A câmera da sala de controle a mostra saindo às 03h23, sem se despedir de ninguém.",
        significance: "Derruba o álibi de que ela ficou a noite inteira na sala de controle."
      },
      {
        id: "ev_hatch",
        title: "Boca de visitação da cúpula",
        type: "Perícia",
        icon: "foot",
        summary: "Pegadas de bota nº 41 na escada externa; digital de Amélia na alavanca da alavanca de acionamento.",
        description: "A perícia encontra, na escada da boca de visitação, pegadas de bota de número 41 — o mesmo número que Amélia usa. Na alavanca de acionamento da tranca, uma digital identificada como de Amélia, em impressão recente.",
        significance: "Ela esteve na boca da cúpula naquela madrugada, no caminho até a passarela."
      },
      {
        id: "ev_fall",
        title: "Laudo do legista",
        type: "Perícia",
        icon: "lab",
        summary: "Queda de 2,4 metros do parapeito; arranhões de defesa nos antebraços; morte entre 03h05 e 03h35.",
        description: "O laudo aponta morte por politraumatismo decorrente de queda de 2,4 metros, com arranhões de defesa nos antebraços — sinais de que Victor se protegeu de um ataque antes de cair. O intervalo da morte é 03h05–03h35.",
        significance: "Descarta o acidente: houve ataque, e o intervalo bate com a janela do crachá de Amélia."
      },
      {
        id: "ev_email",
        title: "Rascunho de denúncia",
        type: "Documento",
        icon: "mail",
        summary: "O rascunho salvo às 03h05 denuncia fraudes nos dados do levantamento liderado por Amélia: valores repetidos e medições que jamais foram feitas.",
        description: "No computador da sala de controle, o rascunho salvo por Victor às 03h05 descreve as irregularidades do levantamento Southern Sky: séries de valores idênticos, objetos catalogados sem nenhuma observação correspondente e assinatura de Amélia na entrega preliminar. O envio estava previsto para a segunda-feira.",
        significance: "O motivo: a denúncia acabaria com a carreira de Amélia — e estava salva dez minutos antes da morte."
      },
      {
        id: "ev_parka",
        title: "Fibra no parapeito",
        type: "Vestígio",
        icon: "box",
        summary: "Fibra de parka vermelha presa no parapeito, no ponto exato da queda; Amélia usa a mesma parka.",
        description: "Na borda do parapeito, no ponto de onde Victor caiu, a perícia prende uma fibra de tecido vermelho, do tipo parka de inverno. A equipe confirma que Amélia usa uma parka vermelha idêntica, vista na noite do crime pela câmera da sala de controle.",
        significance: "Quem empurrou Victor encostou no parapeito — e vestia a parka de Amélia."
      }
    ],
    contradictions: [
      {
        id: "c_alibi",
        title: "Sala de controle a noite toda x registro do crachá",
        type: "contradiction",
        between: "Depoimento de Amélia x Câmera e crachá",
        analysis: "Amélia disse ter ficado na sala de controle a noite inteira; a câmera a mostra saindo às 03h23 e o crachá a registra na sala de máquinas de 03h24 a 03h36, exatamente a janela do ataque."
      },
      {
        id: "c_passagem",
        title: "Procura sozinha x passagem lacrada",
        type: "contradiction",
        between: "Depoimento de Reinaldo x Registro de portas e câmera",
        analysis: "Reinaldo disse ter saído sozinho por volta das 03h30 para procurar Victor; o registro de portas não abre a passagem de serviço antes das 03h47, quando a câmera mostra ele e Célia juntos."
      },
      {
        id: "c_queda",
        title: "Queda acidental x arranhões de defesa",
        type: "contradiction",
        between: "Depoimento de Amélia x Laudo do legista",
        analysis: "Amélia sustenta que Victor era tonto e provavelmente escorregou; o laudo identifica arranhões de defesa nos antebraços, que só ocorrem quando a vítima se protege de um ataque."
      },
      {
        id: "c_controle",
        title: "Victor vivo às 03h05 x janela da morte",
        type: "confirmation",
        between: "Rascunho de denúncia x Laudo do legista",
        analysis: "O rascunho salvo por Victor às 03h05 e o intervalo do laudo (03h05–03h35) se cruzam: ele estava vivo e trabalhando quando salvou a denúncia, e morreu nos trinta minutos seguintes — o mesmo intervalo em que o crachá de Amélia aparece na sala de máquinas."
      }
    ],
    hints: [
      "O crachá registra quem entra em cada porta; compare o que a câmera mostra com o que o crachá registra.",
      "A boca de visitação da cúpula tem pegadas e uma alavanca; a fibra no parapeito tem cor de parka.",
      "As evidências decisivas são o registro do crachá, a fibra no parapeito e o rascunho de denúncia de Victor."
    ],
    answerOptions: [
      { id: "sus:amelia", label: "Amélia Ferraz", sub: "Astrônoma assistente, líder do levantamento" },
      { id: "sus:reinaldo", label: "Reinaldo Sá", sub: "Astrônomo adjunto" },
      { id: "sus:celia", label: "Célia Boaventura", sub: "Técnica de instrumentos" },
      { id: "sus:dorival", label: "Dorival Pena", sub: "Zelador" }
    ],
    solution: {
      correctAnswer: "sus:amelia",
      title: "Amélia Ferraz, a líder do levantamento",
      motive: "Victor descobriu que o levantamento Southern Sky, liderado por Amélia, tinha medições fabricadas — valores repetidos e objetos catalogados que jamais foram observados. Ele salvou, às 03h05, o rascunho da denúncia, com envio previsto para segunda. Amélia, que estava na sala de controle, subiu pela boca de visitação da cúpula, encontrou Victor na passarela e o empurrou do parapeito, tentando fazer parecer um acidente durante a noite de observação.",
      sequence: [
        "Às 03h05, Victor salva o rascunho da denúncia no computador da sala de controle, na frente de toda a equipe.",
        "Às 03h23, Amélia sai da sala de controle sem avisar; o crachá a registra na sala de máquinas às 03h24.",
        "Por volta das 03h26, aciona a alavanca da boca de visitação e sobe à passarela — as pegadas nº 41 e a digital na alavanca confirmam a subida.",
        "Às 03h29:40, empurra Victor do parapeito: o gravador registra o impacto e os gemidos; ele cai 2,4 metros e morre.",
        "Desce em fuga, sai da sala de máquinas às 03h36 e volta à sala de controle; às 03h47, Reinaldo e Célia encontram o corpo."
      ],
      decisiveEvidence: ["ev_badge", "ev_parka", "ev_email"],
      reasoning: "O crachá de Amélia e a câmera quebram o álibi: ela esteve fora da sala de controle exatamente na janela da morte (03h23–03h36). A fibra de parka vermelha no parapeito e as pegadas nº 41 na boca de visitação colocam ela na passarela, e a digital na alavanca fecha o percurso. O rascunho de denúncia de Victor, salvo às 03h05, dá o motivo — o levantamento dela estava fraudado, e a denúncia acabaria com a carreira dela. Os arranhões de defesa no laudo descartam a queda acidental.",
      exclusions: [
        { who: "Reinaldo Sá", why: "Tinha ambição pela direção, mas a câmera da passagem de serviço o mostra apenas às 03h47, junto com Célia; o registro de portas não abre antes disso, e nenhum crachá dele toca a sala de máquinas naquela madrugada." },
        { who: "Célia Boaventura", why: "A técnica estava na sala de calibração, sob registro do sistema, até 03h40; não usa parka vermelha nem bota nº 41, e foi ela quem chamou Reinaldo ao desconfiar que Victor demorava." },
        { who: "Dorival Pena", why: "O quadro de rondas e a portaria o registram longe do pátio; a bota dele é nº 44, e ele foi visto na portaria às 03h50, antes de saber do corpo." }
      ]
    }
  };
/* ============================================================
     CASO 24 — ASSASSINATO, NÍVEL 4
     ============================================================ */
  var C24 = {
    id: "a06",
    code: "A-06",
    title: "A Última Sessão",
    category: "assassinatos",
    difficulty: 4,
    brief: "O maestro Hélio Vanderlei, 61, desplumbrou no palco durante a estreia da temporada da Filarmônica, no sábado. Ele foi encontrado caído atrás da cortina, com fratura no crânio, ao lado do troféu Diogo Mendes — o prêmio que a orquestra ia entregar a ele no encerramento. O laudo coloca a morte entre 21h55 e 22h10, durante um blackout de 14 segundos disparado remotamente.",
    context: "O console de iluminação registra cada disparo e a origem do sinal. O cue 147-B, um blackout de 14 segundos previsto na obra, foi disparado às 21h58min07s pelo controle remoto beltpack 02 — retirado às 19h30 no nome de Ivone Kraus, regente assistente, e nunca devolvido ao técnico. A câmera do corredor sofreu corte de circuito de 21h57min50s a 22h00min10s; a câmera em infravermelho do palco registra uma figura saindo de trás da cortina com um beltpack às 21h58min44s.",
    date: "Sábado, 24 de maio · estreia às 21h · morte entre 21h55 e 22h10",
    suspects: [
      {
        id: "ivone",
        name: "Ivone Kraus",
        role: "Regente assistente",
        age: 39,
        profile: [
          "Regente assistente de Hélio na temporada; recebeu em 15 de maio o e-mail de não-recondução para a temporada seguinte.",
          "Retirou o beltpack 02 às 19h30 no nome dela e nunca o devolveu ao técnico de palco."
        ],
        behavior: "Alega que estava em casa ensaiando e só soube do ocorro ao chegar ao teatro às 22h44, quando encontrou o corpo; saiu aos gritos às 22h50.",
        alibi: "Em casa até 22h40; no teatro a partir das 22h44."
      },
      {
        id: "beto",
        name: "Beto Assunção",
        role: "Primeiro violino",
        age: 55,
        profile: [
          "Líder das cordas e maestro natural da seção; ambicionava assumir a regência titular.",
          "Durante o blackout, conduziu a seção pelos quatro segundos restantes da frase, segundo a partitura."
        ],
        behavior: "Visto em primeiro violino, no lugar marcado, durante todo o blackout, pelo infravermelho do palco.",
        alibi: "No palco, em primeiro violino, a apresentação inteira."
      },
      {
        id: "mauro",
        name: "Mauro Quirino",
        role: "Percussionista",
        age: 48,
        profile: [
          "Sentado ao lado do troféu Diogo Mendes, que ficava no palco desde o ensaio geral.",
          "Foi repreendido publicamente por Hélio no ensaio, por erro de entrada no terceiro movimento."
        ],
        behavior: "Durante o blackout, no posto de percussão, sob a câmera do palco; as mãos estavam ocupadas com os instrumentos.",
        alibi: "No posto de percussão a noite toda, registrado pela câmera do palco."
      },
      {
        id: "nadia",
        name: "Nádia Ferrão",
        role: "Solista convidada de violoncelo",
        age: 36,
        profile: [
          "Teve o solo dela cortado do programa de estreia, anunciado no ensaio geral por causa de patrocínio.",
          "Divulgou a frustração nas redes, mas compareceu à apresentação."
        ],
        behavior: "Durante o blackout, no lugar marcado da solista, no palco; não sai da posição segundo o infravermelho.",
        alibi: "No palco, como solista, a apresentação inteira."
      }
    ],
    testimonies: [
      {
        id: "t_ivone",
        person: "Ivone Kraus",
        role: "Regente assistente",
        text: "Estava em casa ensaiando; as ligações do Hélio eu só vi depois. Cheguei ao teatro às 22h44, entrei no saguão e fui direto para os bastidores, onde o encontrei. Gritei porque eu não acreditava."
      },
      {
        id: "t_beto",
        person: "Beto Assunção",
        role: "Primeiro violino",
        text: "Quando as luzes caíram, mantive a seção nos quatro segundos finais da frase; sem o maestro, eu era o norte. Só depois percebemos o que havia acontecido atrás da cortina."
      },
      {
        id: "t_mauro",
        person: "Mauro Quirino",
        role: "Percussionista",
        text: "O troféu ficava ao meu lado desde o ensaio. No blackout, minhas mãos estavam nas baquetas; não vi nada no escuro. Apanhei o troféu só depois, quando trouxeram a luz."
      },
      {
        id: "t_nadia",
        person: "Nádia Ferrão",
        role: "Solista",
        text: "Fiquei no palco, no meu lugar, como solista. O corte do solo me magoou, mas eu não ia matar ninguém por causa de patrocínio. Fiquei parada no escuro, como todos."
      },
      {
        id: "t_tecnico",
        person: "Rui Palma",
        role: "Técnico de palco",
        text: "O beltpack 02 foi retirado às 19h30 no nome da Ivone e nunca voltou. O cue 147-B é remoto; só ele dispara o blackout de 14 segundos. A música tem quatro segundos restantes ali — quem conhecia a obra sabia do quadro."
      }
    ],
    timeline: [
      { time: "15/05, 18h", event: "Hélio envia o e-mail comunicando que não reconduziria Ivone como regente assistente." },
      { time: "19h30", event: "O beltpack 02 é retirado no nome de Ivone Kraus; nunca é devolvido ao técnico." },
      { time: "21h00", event: "Início da estreia da temporada." },
      { time: "21h53 · 21h56 · 21h57", event: "O chip de Hélio liga três vezes para o de Ivone; nenhuma chamada é atendida ou devolvida." },
      { time: "21h57:50", event: "A câmera do corredor sofre corte de circuito; o feed só volta às 22h00:10." },
      { time: "21h58:07", event: "O cue 147-B é disparado manualmente pelo beltpack 02: blackout de 14 segundos no palco." },
      { time: "21h58:09", event: "A música continua por mais 4 segundos; Hélio ainda conduz a frase no escuro." },
      { time: "21h58:44", event: "A câmera em infravermelho do palco registra uma figura saindo de trás da cortina com um beltpack." },
      { time: "22h00:10", event: "A câmera do corredor volta ao ar." },
      { time: "22h10", event: "Hélio é encontrado caído atrás da cortina; o laudo fixa a morte entre 21h55 e 22h10." },
      { time: "22h44", event: "Ivone entra no saguão do teatro." },
      { time: "22h50", event: "Ivone sai aos gritos, em altercado com a direção artística." }
    ],
    evidence: [
      {
        id: "ev_console",
        title: "Console de iluminação",
        type: "Registro",
        icon: "screen",
        summary: "O cue 147-B foi disparado manualmente pelo REM beltpack 02 às 21h58min07s, gerando 14 segundos de blackout; a partitura tem 4 segundos de música restantes naquele ponto.",
        description: "O log do console mostra o cue 147-B saindo do canal remoto do beltpack 02, não do botão principal, às 21h58min07s. O blackout durou 14 segundos. Naquele ponto da partitura restam 4 segundos de música: os músicos terminaram a frase no escuro, sob a condução ainda de pé de Hélio.",
        significance: "O autor precisava conhecer o quadro, a obra e o beltpack — e o sinal veio do controle que estava com Ivone."
      },
      {
        id: "ev_cam",
        title: "Câmeras do corredor e do palco",
        type: "Registro de imagem",
        icon: "camera",
        summary: "Corte do corredor de 21h57min50s a 22h00min10s; infravermelho do palco registra figura com beltpack saindo de trás da cortina às 21h58min44s; Ivone entra no saguão às 22h44 e sai aos gritos às 22h50.",
        description: "A câmera do corredor teve o circuito cortado de 21h57min50s a 22h00min10s — a janela exata do crime e da fuga. A câmera em infravermelho do palco registra, às 21h58min44s, uma figura saindo de trás da cortina com um beltpack na mão. Ivone só aparece no saguão às 22h44 e sai altercada com a direção às 22h50.",
        significance: "Isola a fuga pelo corredor e coloca a figura com o beltpack fora do palco no minuto do golpe."
      },
      {
        id: "ev_trofeu",
        title: "Troféu Diogo Mendes",
        type: "Vestígio",
        icon: "box",
        summary: "Troféu de metal encontrado ao lado do corpo, sem digitais de terceiros, com marcas de luva; os dedos de Hélio seguram a base (tentativa de proteção).",
        description: "O troféu anual, que seria entregue a Hélio no encerramento, estava caído ao lado do corpo. A perícia não encontra digitais de terceiros: apenas marcas de luva no metal polido. Os dedos de Hélio seguram a base — ele tentou se proteger.",
        significance: "A arma do crime foi limpa com luva: execução planejada, não um impulso de último segundo."
      },
      {
        id: "ev_tod",
        title: "Laudo do legista",
        type: "Perícia",
        icon: "lab",
        summary: "Morte entre 21h55 e 22h10; fratura no crânio compatível com o troféu; sem sinais de defesa nas mãos além dos arranhões mínimos do impacto.",
        description: "O laudo fixa a morte entre 21h55 e 22h10, por fratura craniana compatível com o impacto do troféu. Não há ferimentos defensivos nas mãos — Hélio foi atingido por trás, quando não via o agressor, o que bate com o blackout de 14 segundos.",
        significance: "O golpe veio durante o escuro, por trás, no momento exato do cue 147-B."
      },
      {
        id: "ev_email",
        title: "E-mail de não-recondução",
        type: "Documento",
        icon: "mail",
        summary: "Em 15/05 às 18h, Hélio comunicou à direção que não reconduziria Ivone como regente assistente; o e-mail foi enviado também para ela.",
        description: "O e-mail de 15 de maio, às 18h, formaliza a decisão de Hélio de não reconduzir Ivone para a temporada seguinte, citando diferenças artísticas. A mensagem foi enviada à direção e copiada para Ivone, que respondeu com um único OK.",
        significance: "O motivo: quatro semanas antes da estreia, ela soube que ficaria sem o cargo."
      },
      {
        id: "ev_phone",
        title: "Três chamadas sem resposta",
        type: "Registro",
        icon: "phone",
        summary: "O chip de Hélio ligou para o de Ivone às 21h53, 21h56 e 21h57; nenhuma atendida ou devolvida.",
        description: "Nos minutos finais antes do blackout, o telefone de Hélio registra três chamadas para o de Ivone: 21h53, 21h56 e 21h57. Nenhuma foi atendida e nenhuma foi devolvida. Ela alegou que só viu as chamadas depois.",
        significance: "Hélio tentava falar com ela justamente quando ela já estava a postos, atrás da cortina."
      },
      {
        id: "ev_pack",
        title: "Beltpack 02",
        type: "Registro",
        icon: "gear",
        summary: "Retirado às 19h30 no nome de Ivone Kraus; nunca devolvido ao técnico; é exatamente o dispositivo que disparou o cue 147-B.",
        description: "O controle remoto beltpack 02, capaz de disparar cues do palco, foi retirado às 19h30 no nome de Ivone Kraus e nunca retornou à barra do técnico. O log do console aponta o beltpack 02 como origem do cue 147-B.",
        significance: "A origem do blackout está registrada no nome de quem o disparou."
      }
    ],
    contradictions: [
      {
        id: "c_ivone",
        title: "Em casa ensaiando x beltpack e infravermelho",
        type: "contradiction",
        between: "Depoimento de Ivone x Beltpack 02 e câmera do palco",
        analysis: "Ivone disse ter ficado em casa até 22h44; o beltpack retirado no nome dela dispara o cue às 21h58min07s e a câmera em infravermelho registra figura com beltpack saindo de trás da cortina às 21h58min44s."
      },
      {
        id: "c_partitura",
        title: "Blackout de 14 segundos x música continuando",
        type: "contradiction",
        between: "Console de iluminação x Partitura e registro do maestro",
        analysis: "O cue 147-B derruba as luzes por 14 segundos, mas a música continua por mais 4 — Hélio ainda conduzia quando o escuro caiu. O golpe, portanto, veio dentro do blackout, de quem sabia exatamente os 14 segundos e os 4 que sobravam."
      },
      {
        id: "c_descoberta",
        title: "Primeira a encontrar o corpo x chamadas ignoradas",
        type: "contradiction",
        between: "Depoimento de Ivone x Registros de chamadas e beltpack",
        analysis: "Ivone disse ter sido a primeira a encontrar Hélio, por volta das 22h44, e só então tomado conhecimento; mas ignorou três chamadas dele entre 21h53 e 21h57 e o beltpack no nome dela nunca voltou ao técnico."
      },
      {
        id: "c_beto",
        title: "Ambição de Beto x marcas do palco",
        type: "confirmation",
        between: "Depoimento de Beto x Infravermelho e marcas de posição",
        analysis: "O infravermelho e as marcas de posição confirmam Beto em primeiro violino durante todo o blackout; ele conduziu a seção pelos 4 segundos finais da frase, o que dependia dele estar no posto — não no corredor da cortina."
      }
    ],
    hints: [
      "O blackout não veio do console principal: veio de um controle remoto que estava com alguém.",
      "A música continuou quatro segundos no escuro — quem conhecia o quadro sabia que o golpe teria 14 segundos.",
      "As evidências decisivas são o registro do beltpack 02, a câmera em infravermelho do palco e o e-mail de não-recondução."
    ],
    answerOptions: [
      { id: "sus:ivone", label: "Ivone Kraus", sub: "Regente assistente" },
      { id: "sus:beto", label: "Beto Assunção", sub: "Primeiro violino" },
      { id: "sus:mauro", label: "Mauro Quirino", sub: "Percussionista" },
      { id: "sus:nadia", label: "Nádia Ferrão", sub: "Solista convidada" }
    ],
    solution: {
      correctAnswer: "sus:ivone",
      title: "Ivone Kraus, a regente assistente",
      motive: "Em 15 de maio, Hélio comunicou que não a reconduziria como regente assistente. Na noite da estreia, Ivone retirou o beltpack 02 no próprio nome, cortou o circuito da câmera do corredor e disparou remotamente o cue 147-B — o blackout de 14 segundos que ela conhecia de cor. No escuro, golpeou Hélio com o troféu que seria entregue a ele no encerramento, limpou as digitais com luva e fugiu pela passarela antes de 22h. As três chamadas de Hélio, minutos antes, ficaram sem resposta: ela estava a postos, atrás da cortina.",
      sequence: [
        "Às 19h30, retira o beltpack 02 no nome dela e não o devolve ao técnico.",
        "Ignora as três chamadas de Hélio, às 21h53, 21h56 e 21h57 — ele tentava alcançá-la antes daquele trecho.",
        "Às 21h57min50s, corta o circuito da câmera do corredor, isolando o trajeto da fuga.",
        "Às 21h58min07s, dispara o cue 147-B pelo beltpack: 14 segundos de blackout; a música continua 4 segundos e Hélio ainda conduz.",
        "Golpeia Hélio por trás com o troféu, limpa as digitais com luva, sai de trás da cortina às 21h58min44s com o beltpack e some antes de 22h00min10s.",
        "Entra no saguão às 22h44, alegando saber do ocorrido apenas ao encontrar o corpo, e sai aos gritos às 22h50."
      ],
      decisiveEvidence: ["ev_pack", "ev_console", "ev_cam"],
      reasoning: "O console prova que o blackout veio do beltpack 02 — retirado no nome de Ivone e nunca devolvido. A câmera em infravermelho coloca uma figura com beltpack saindo de trás da cortina às 21h58min44s, e o corte da câmera do corredor isola a fuga na janela exata. O e-mail de 15 de maio dá o motivo, e as três chamadas sem resposta mostram que ela estava ocupada justamente quando Hélio tentava alcançá-la. A partitura revela que o autor precisava conhecer os 14 segundos do cue 147-B — conhecimento de quem conduzia ao lado dele.",
      exclusions: [
        { who: "Beto Assunção", why: "O infravermelho e as marcas do palco o confirmam em primeiro violino durante todo o blackout; ele não tinha acesso à sala de luzes nem ao beltpack, e a condução da seção nos 4 segundos finais dependia dele estar no posto." },
        { who: "Mauro Quirino", why: "Estava no posto de percussão, ao lado do troféu, mas a câmera do palco o registra com as mãos nas baquetas; as digitais no troféu haviam sido apagadas — o que indica autor com luva e plano, não o músico de mãos ocupadas." },
        { who: "Nádia Ferrão", why: "A solista ficou no palco, no lugar marcado, durante toda a peça; o corte do solo foi anunciado no ensaio geral, mas o laudo coloca o golpe por trás, no corredor da cortina — trajeto que exigia o quadro de luzes e o beltpack." }
      ]
    }
  };
var CASES = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22, C23, C24];

  function getCase(id) {
    for (var i = 0; i < CASES.length; i++) {
      if (CASES[i].id === id) return CASES[i];
    }
    return null;
  }

  function getLevelInfo(level) {
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].level === level) return LEVELS[i];
    }
    return LEVELS[0];
  }

  function getCategory(catId) {
    return cat(catId);
  }

  function casesByCategory(catId) {
    var out = [];
    for (var i = 0; i < CASES.length; i++) {
      if (CASES[i].category === catId) out.push(CASES[i]);
    }
    return out;
  }

return {
    CATEGORIES: CATEGORIES,
    LEVELS: LEVELS,
    CASES: CASES,
    STAGES: STAGES,
    getCase: getCase,
    getLevelInfo: getLevelInfo,
    getCategory: getCategory,
    casesByCategory: casesByCategory,
    getStageOf: stageOf,
    getStageCaseIds: stageCaseIds
  };

})();
