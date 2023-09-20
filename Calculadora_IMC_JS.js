//faz o teste do link do HTML e JavaScript
console.log("echo!!")

// Função para calcular o IMC
function CalcularIMC() {
  // Cria o elemento OutputResultado
  const outputResultado = document.querySelector("#Resultado");

  // Obtém referências para os elementos HTML
  const inputPeso = document.querySelector("#Peso");
  const inputAltura = document.querySelector("#Altura");

  // Obtém os elementos onde serão exibidos os valores digitados
  const outputPeso = document.querySelector("#OutputPeso");
  const outputAltura = document.querySelector("#OutputAltura");

  // Obtém o valor do input
  const valorPeso = parseFloat(inputPeso.value);
  const valorAltura = parseFloat(inputAltura.value);

  // Exibe os valores digitados nos respectivos outputs
  outputPeso.textContent = `Peso: ${valorPeso} Kg`;
  outputAltura.textContent = `Altura: ${valorAltura} M`;

  // Verifica se o valor do input é um número válido
  if (isNaN(valorPeso) || isNaN(valorAltura) || valorAltura <= 0) {
    alert("Insira um valor válido para o peso e a altura.");
    return;
  }

  // Faz o cálculo de IMC
  const imc = valorPeso / (valorAltura * valorAltura);

  // Exibe o IMC no elemento de saída
  outputResultado.textContent = `IMC: ${imc.toFixed(2)}`;

  // Mostra a tela de resultados
  document.getElementById("Position1").style.display = "block";
}

// Função para recarregar a página
function recarregarPagina() {
  location.reload();
}

// Função para mostrar a tela de resultados
function mostrar() {
  // Mostra a tela de resultados
  document.getElementById("Position1").style.display = "block";
}
