const valor = document.querySelector(".contagem");
const btn = document.querySelector(".btn");
const gerarNumero = () => {
  const numeroAleatorio = Math.floor(Math.random() * 10 + 1);
  valor.innerHTML = numeroAleatorio;
}

btn.addEventListener("click", gerarNumero);
gerarNumero();
