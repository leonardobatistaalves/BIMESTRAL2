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