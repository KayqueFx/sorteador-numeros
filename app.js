function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  // 🔎 Validação dos campos
  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  if (de > ate) {
    alert("O número inicial não pode ser maior que o número final.");
    return;
  }

  let intervalo = ate - de + 1;

  if (quantidade > intervalo) {
    alert("A quantidade de números é maior que o intervalo disponível.");
    return;
  }

  let sorteados = [];

  while (sorteados.length < quantidade) {
    let numero = obterNumeroAleatorio(de, ate);

    if (!sorteados.includes(numero)) {
      sorteados.push(numero);
    }
  }

  // 🔢 Ordena os números
  sorteados.sort((a, b) => a - b);

  let resultado = document.getElementById('resultado');
  resultado.innerHTML =
    `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;

  // 🔒 Desabilita botão Sortear
  document.getElementById('btn-sortear').disabled = true;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');

  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';

  document.getElementById('resultado').innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

  // 🔓 Reabilita botão Sortear
  document.getElementById('btn-sortear').disabled = false;

  alterarStatusBotao();
}