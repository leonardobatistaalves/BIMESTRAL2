const perguntas = [
  {
    pergunta: "Qual é o tipo do Pikachu?",
    opcoes: ["Água", "Elétrico", "Fogo"],
    resposta: "Elétrico"
  },
  {
    pergunta: "Em qual Pokémon o Magikarp evolui?",
    opcoes: ["Lapras", "Gyarados", "Vaporeon"],
    resposta: "Gyarados"
  },
  {
    pergunta: "Qual é o Pokémon número 1 da Pokédex Nacional?",
    opcoes: ["Bulbasaur", "Pikachu", "Charmander"],
    resposta: "Bulbasaur"
  },
   {
    pergunta: "Quais são os tipos do Gengar?",
    opcoes: ["Fantasma e Venenoso", "Fantasma e Sombrio", "Venenoso e Psíquico"],
    resposta: "Fantasma e Venenoso"
  },
  {
    pergunta: "Quais são os tipos do Lucario?",
    opcoes: ["Lutador e Aço", "Lutador e Psíquico", "Aço e Sombrio"],
    resposta: "Lutador e Aço"
  },
  {
    pergunta: "Quais são os tipos do Scizor?",
    opcoes: ["Inseto e Aço", "Inseto e Voador", "Aço e Elétrico"],
    resposta: "Inseto e Aço"
  },
  {
    pergunta: "Em qual Pokémon o Rockruff pode evoluir?",
    opcoes: ["Lycanroc", "Arcanine", "Mightyena"],
    resposta: "Lycanroc"
  },
  {
    pergunta: "Em qual Pokémon o Gastly evolui?",
    opcoes: ["Gengar", "Haunter", "Misdreavus"],
    resposta: "Haunter"
  },
  {
    pergunta: "Como Haunter normalmente evolui para Gengar nos jogos?",
    opcoes: ["Usando uma Pedra da Lua", "Por troca", "Subindo ao nível 40"],
    resposta: "Por troca"
  },
  {
    pergunta: "O que é necessário para Riolu evoluir para Lucario?",
    opcoes: [
      "Amizade alta durante o dia",
      "Uma Pedra do Trovão",
      "Amizade alta durante a noite"
    ],
    resposta: "Amizade alta durante o dia"
  },
  {
    pergunta: "Em qual Pokémon Larvitar evolui?",
    opcoes: ["Pupitar", "Tyranitar", "Bagon"],
    resposta: "Pupitar"
  },
  {
    pergunta: "Qual é o tipo de golpe que não afeta Pokémon do tipo Fantasma?",
    opcoes: ["Normal", "Água", "Gelo"],
    resposta: "Normal"
  },
  {
    pergunta: "Qual destes tipos é super efetivo contra Pokémon do tipo Dragão?",
    opcoes: ["Fogo", "Gelo", "Elétrico"],
    resposta: "Gelo"
  },
  {
    pergunta: "Qual destes tipos é uma fraqueza do tipo Psíquico?",
    opcoes: ["Sombrio", "Fogo", "Água"],
    resposta: "Sombrio"
  },
  {
    pergunta: "A qual tipo de Pokémon o tipo Fada é imune?",
    opcoes: ["Dragão", "Fantasma", "Aço"],
    resposta: "Dragão"
  },
  {
    pergunta: "Em qual região se passam Pokémon Diamond e Pearl?",
    opcoes: ["Johto", "Sinnoh", "Hoenn"],
    resposta: "Sinnoh"
  },
  {
    pergunta: "De qual Pokémon foi criado Mewtwo?",
    opcoes: ["Mew", "Ditto", "Arceus"],
    resposta: "Mew"
  },
  {
    pergunta: "Em qual Pokémon Eevee evolui ao usar uma Pedra da Folha?",
    opcoes: ["Leafeon", "Espeon", "Glaceon"],
    resposta: "Leafeon"
  },
  {
    pergunta: "Quais são os tipos do Flygon?",
    opcoes: ["Terra e Dragão", "Inseto e Dragão", "Terra e Voador"],
    resposta: "Terra e Dragão"
  },
  {
    pergunta: "Em qual Pokémon Swablu evolui?",
    opcoes: ["Altaria", "Pelipper", "Noivern"],
    resposta: "Altaria"
  }
];

function embaralhar(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

const perguntasDoJogo = embaralhar(perguntas);

let indicePergunta = 0;
let acertos = 0;

const progresso = document.querySelector("#progresso");
const textoPergunta = document.querySelector("#texto-pergunta");
const opcoes = document.querySelector("#opcoes");
const feedback = document.querySelector("#feedback");
const botaoProxima = document.querySelector("#proxima");

function mostrarPergunta() {
  if (indicePergunta >= perguntasDoJogo.length) {
    progresso.textContent = "Quiz finalizado!";
    textoPergunta.textContent =
      `Você acertou ${acertos} de ${perguntasDoJogo.length} perguntas.`;
    opcoes.replaceChildren();
    feedback.textContent = "";
    botaoProxima.hidden = true;
    return;
  }

  const atual = perguntasDoJogo[indicePergunta];

  progresso.textContent =
    `Pergunta ${indicePergunta + 1} de ${perguntasDoJogo.length}`;
  textoPergunta.textContent = atual.pergunta;
  feedback.textContent = "";
  botaoProxima.hidden = true;
  opcoes.replaceChildren();

  atual.opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;

    botao.addEventListener("click", () => {
      responder(opcao);
    });

    opcoes.appendChild(botao);
  });
}

function responder(opcaoEscolhida) {
  const atual = perguntasDoJogo[indicePergunta];
  const botoes = opcoes.querySelectorAll("button");

  botoes.forEach((botao) => {
    botao.disabled = true;
  });

  if (opcaoEscolhida === atual.resposta) {
    feedback.textContent = "Correto!";
    acertos++;
  } else {
    feedback.textContent = `Não foi dessa vez. A resposta certa é: ${atual.resposta}`;
  }

  botaoProxima.hidden = false;
}

botaoProxima.addEventListener("click", () => {
  indicePergunta++;
  mostrarPergunta();
});

mostrarPergunta();