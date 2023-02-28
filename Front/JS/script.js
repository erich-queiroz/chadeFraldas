function cadastrarDoacao() {
  let nomeInput = document.getElementById("nome");
  let valorInput = document.getElementById("valor");
  let presenteInput = document.getElementById("item");

  let nome = nomeInput.value;
  let valor = valorInput.value;
  let presente = presenteInput.value;

  /*while (isNaN(valor)) {
    valor = prompt("Digite apenas números para o valor da doação em PIX:");
  }*/
  
  let lista = document.getElementById("lista-doacoes");
  let item = document.createElement("li");
  let texto = document.createTextNode(`${nome} contribuiu com R$ ${valor} - ${presente}`);
  item.appendChild(texto);
  lista.appendChild(item);
  nomeInput.value = "";
  valorInput.value = "";
  presenteInput.value = "";
  nomeInput.focus();
  nomeInput.style.color = 'green';
  document.querySelector("button").textContent = "Cadastrar Outra Doação";
}
