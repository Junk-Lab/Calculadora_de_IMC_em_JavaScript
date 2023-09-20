//faz o teste do link do HTML e JavaScript
//console.log("echo!!")

//Função para calcular o IMC
function CalcularIMC() {
  // Cria o elemento OutputResultado
  const outputResultado = document.querySelector("#Resultado");

  // Obtém referências para os elementos HTML
  const inputPeso = document.querySelector("#Peso");
  const inputAltura = document.querySelector("#Altura");

  // Obtém os elementos onde serão exibidos os valores digitados
  const outputPeso = document.querySelector("#OutputPeso");
  const outputAltura = document.querySelector("#OutputAltura");

  // Obtém o valor dos inputs
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

  // Determina os parâmetros do IMC com base no valor calculado
  let parametrosIMC;
  if (imc < 16.99) {
      parametrosIMC = " Muito abaixo do peso";
  } else if (imc >= 16.0 && imc < 18.49) {
      parametrosIMC = " Abaixo do peso";
  } else if (imc >= 18.50 && imc < 24.99) {
      parametrosIMC = " Regular";
  } else if (imc >= 25.0 && imc < 29.99) {
      parametrosIMC = " Sobrepeso";
  } else if (imc >= 30.0 && imc < 34.99) {
      parametrosIMC = " Obesidade I";
  } else if (imc >= 35.0 && imc < 39.99) {
      parametrosIMC = " Obesidade II";
  } else {
      parametrosIMC = " Obesidade III";
  }

  // Exibe o IMC e os parâmetros no elemento de saída
  outputResultado.textContent = `IMC: ${imc.toFixed(2)} - ${parametrosIMC}`;

  // Mostra a tela de resultados
  document.getElementById("Position1").style.display = "block";
}

// Função para recarregar a página
function recarregarPagina() {
  location.reload();
}