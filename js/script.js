let indiceAtual = 0;
  const faixa = document.getElementById('faixa');

  function atualizarCarrossel() {
    const larguraImagem = faixa.children[0].clientWidth;
    faixa.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
  }

  function mudarImagem(direcao) {
    const totalImagens = faixa.children.length;
    indiceAtual += direcao;

    if (indiceAtual < 0) {
      indiceAtual = totalImagens - 1;
    } else if (indiceAtual >= totalImagens) {
      indiceAtual = 0;
    }

    atualizarCarrossel();
  }


  window.addEventListener('resize', atualizarCarrossel);