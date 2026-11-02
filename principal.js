let escritaNomeEl = document.querySelector('#escrita-nome');
let botaoJogarEl = document.querySelector('#botao-jogar');

botaoJogarEl.addEventListener('click', function() {
  if (escritaNomeEl.value === '') {
    escritaNomeEl.focus();
    return;
  }

  localStorage.setItem('nome-jogador', escritaNomeEl.value);
  window.location.href = 'quiz.html';
});