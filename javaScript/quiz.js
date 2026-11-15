
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
    opcoes: ["Amizade alta durante o dia", "Uma Pedra do Trovão", "Amizade alta durante a noite"],
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
  },
  {
    pergunta: "Qual Pokémon acompanha Ash em suas aventuras?",
    opcoes: ["Charmander", "Pikachu", "Bulbasaur"],
    resposta: "Pikachu"
  },
  {
    pergunta: "Qual Pokémon lendário está associado aos oceanos?",
    opcoes: ["Groudon", "Rayquaza", "Kyogre"],
    resposta: "Kyogre"
  },
  {
    pergunta: "Em qual Pokémon Charmander evolui?",
    opcoes: ["Charmeleon", "Charizard", "Dragonite"],
    resposta: "Charmeleon"
  },
  {
    pergunta: "Qual Pokémon evolui ao usar uma Pedra do Trovão em Pikachu?",
    opcoes: ["Jolteon", "Raichu", "Electabuzz"],
    resposta: "Raichu"
  },
  {
    pergunta: "Qual Pokémon lendário controla o tempo?",
    opcoes: ["Dialga", "Palkia", "Giratina"],
    resposta: "Dialga"
  },
  {
    pergunta: "Qual Pokémon lendário controla o espaço?",
    opcoes: ["Arceus", "Dialga", "Palkia"],
    resposta: "Palkia"
  },
  {
    pergunta: "Qual Pokémon é famoso por dormir muito?",
    opcoes: ["Slaking", "Snorlax", "Slowbro"],
    resposta: "Snorlax"
  },
  {
    pergunta: "Qual é a evolução final do Squirtle?",
    opcoes: ["Wartortle", "Blastoise", "Feraligatr"],
    resposta: "Blastoise"
  },
  {
    pergunta: "Qual Pokémon consegue se transformar em outros Pokémon?",
    opcoes: ["Ditto", "Zoroark", "Mewtwo"],
    resposta: "Ditto"
  },
  {
    pergunta: "Quais são os tipos do Charizard?",
    opcoes: ["Fogo e Dragão", "Fogo e Voador", "Fogo e Terra"],
    resposta: "Fogo e Voador"
  },
  {
    pergunta: "Qual Pokémon evolui para Lucario?",
    opcoes: ["Riolu", "Machop", "Mienfoo"],
    resposta: "Riolu"
  },
  {
    pergunta: "Qual Pokémon é considerado o criador do universo Pokémon?",
    opcoes: ["Mewtwo", "Arceus", "Rayquaza"],
    resposta: "Arceus"
  },
  {
    pergunta: "Qual é o número do Pikachu na Pokédex Nacional?",
    opcoes: ["025", "026", "035"],
    resposta: "025"
  },
  {
    pergunta: "Quais são os tipos do Greninja?",
    opcoes: ["Água e Sombrio", "Água e Lutador", "Água e Psíquico"],
    resposta: "Água e Sombrio"
  },
  {
    pergunta: "Qual Pokémon evolui para Dragonite?",
    opcoes: ["Dratini", "Dragonair", "Bagon"],
    resposta: "Dragonair"
  },
  {
    pergunta: "Qual Pokémon lendário está associado aos sonhos?",
    opcoes: ["Darkrai", "Cresselia", "Lugia"],
    resposta: "Cresselia"
  },
  {
    pergunta: "Qual Pokémon lendário está associado ao mundo da distorção?",
    opcoes: ["Giratina", "Dialga", "Palkia"],
    resposta: "Giratina"
  },
  {
    pergunta: "Qual é o tipo do Pokémon Mewtwo?",
    opcoes: ["Psíquico", "Fantasma", "Sombrio"],
    resposta: "Psíquico"
  },
  {
    pergunta: "Qual é a evolução de Torchic?",
    opcoes: ["Blaziken", "Combusken", "Monferno"],
    resposta: "Combusken"
  },
  {
    pergunta: "Qual Pokémon lendário representa a terra e os continentes?",
    opcoes: ["Kyogre", "Groudon", "Rayquaza"],
    resposta: "Groudon"
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

const perguntasDoJogo = embaralhar(perguntas).slice(0, 20);

let indicePergunta = 0;
let acertos = 0;

const progresso = document.querySelector("#progresso");
const textoPergunta = document.querySelector("#texto-pergunta");
const opcoes = document.querySelector("#opcoes");
const feedback = document.querySelector("#feedback");
const botaoProxima = document.querySelector("#proxima");
const jogador = document.querySelector("#jogador");
const telaQuiz = document.querySelector("#tela-quiz");
const telaFim = document.querySelector("#tela-fim");
const resultado = document.querySelector("#resultado");
const listaRanking = document.querySelector("#ranking");
const botaoJogarNovamente = document.querySelector("#jogar-novamente");

jogador.textContent = `Treinador: ${localStorage.getItem("nomeJogador")}`;

function terminarQuiz() {
  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  ranking.push({
    nome: localStorage.getItem("nomeJogador"),
    pontos: acertos
  });
  ranking.sort((a, b) => b.pontos - a.pontos);
  localStorage.setItem("ranking", JSON.stringify(ranking));

  telaQuiz.hidden = true;
  telaFim.hidden = false;
  resultado.textContent =
    `Você acertou ${acertos} de ${perguntasDoJogo.length} perguntas.`;

  listaRanking.replaceChildren();
  ranking.slice(0, 5).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome}: ${item.pontos} pontos`;
    listaRanking.appendChild(li);
  });
}

function mostrarPergunta() {
  if (indicePergunta >= perguntasDoJogo.length) {
    terminarQuiz();
    return;
  }

  const atual = perguntasDoJogo[indicePergunta];

  progresso.textContent =
    `Pergunta ${indicePergunta + 1} de ${perguntasDoJogo.length}`;
  textoPergunta.textContent = atual.pergunta;
  feedback.textContent = "";
  botaoProxima.hidden = true;
  opcoes.replaceChildren();

  embaralhar(atual.opcoes).forEach((opcao) => {
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

    if (botao.textContent === atual.resposta) {
      botao.classList.add("certa");
    } else if (botao.textContent === opcaoEscolhida) {
      botao.classList.add("errada");
    }
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

const abrirMenu = document.querySelector('#btn-pokedex');
const janelaPokedex = document.querySelector('#janela-pokedex');
const fecharMenu = document.querySelector('#fechar-menu');

abrirMenu.addEventListener('click', () => {
  janelaPokedex.classList.toggle('ativo');
});

fecharMenu.addEventListener('click', () => {
  janelaPokedex.classList.remove('ativo');
});
botaoJogarNovamente.addEventListener("click", () => {
  window.location.reload();
});

mostrarPergunta();

const formPokedex = document.querySelector('#form-pokedex');
const buscaPokemon = document.querySelector('#busca-pokemon');
const resultadoPokemon = document.querySelector('#resultado-pokemon');

async function buscarPokemon(nome) {
  resultadoPokemon.textContent = 'Carregando...';

  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

  if (!resposta.ok) {
    resultadoPokemon.textContent = 'Pokémon não encontrado!';
    return;
  }

  const dados = await resposta.json();

  let tipos = '';
  for (let i = 0; i < dados.types.length; i++) {
    const nomeTipo = dados.types[i].type.name;
    tipos = tipos + `<span class="tipo ${nomeTipo}">${nomeTipo}</span>`;
  }

  resultadoPokemon.innerHTML = `
   <img src="${dados.sprites.front_default}" alt="${dados.name}">
   <h4>#${dados.id} ${dados.name}</h4>
   <p>${tipos}</p>
   <p>Altura: ${dados.height / 10} m</p>
   <p>Peso: ${dados.weight / 10} kg</p>
  `;
}

formPokedex.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = buscaPokemon.value.toLowerCase();

  if (nome !== '') {
    buscarPokemon(nome);
  }
});