function cadastrarDoacao() {
  let nome = document.getElementById("nome").value;
  let valor = prompt("Digite o valor da doação em PIX (apenas números):");
  while (isNaN(valor)) {
    valor = prompt("Digite apenas números para o valor da doação em PIX:");
  }
  let presente = prompt("Digite o nome do presente doado:");
  let lista = document.getElementById("lista-doacoes");
  let item = document.createElement("li");
  let texto = document.createTextNode(`${nome} contribuiu com R$ ${valor}  - ${presente}`);
  item.appendChild(texto);
  lista.appendChild(item);
  document.getElementById("nome").value = "";
  document.getElementById("nome").focus();
  document.querySelector("button").textContent = "Cadastrar Outra Doação";
}