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
  window.location.href = "quiz.html";
});

let abrirModalEl = document.querySelector('#abrir-modal');
let fecharModalEl = document.querySelector('#fechar-modal');
let modal = document.querySelector('#modal');

abrirModalEl.addEventListener('click', () => {
  modal.style.display = 'flex';
})

fecharModalEl.addEventListener('click', () => {
  modal.style.display = 'none'
})
