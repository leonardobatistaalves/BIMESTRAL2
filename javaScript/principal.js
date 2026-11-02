const campoNome = document.querySelector("#escrita-nome");
const botaoJogar = document.querySelector("#botao-jogar");

botaoJogar.addEventListener("click", () => {
  const nome = campoNome.value.trim();

  if (nome === "") {
    alert("Digite seu nome para jogar.");
    campoNome.focus();
    return;
  }

  localStorage.setItem("nomeJogador", nome);
  window.location.href = "pokedex.html";
});