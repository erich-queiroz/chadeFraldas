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
  
  // Essa váriavel removes os botões de incremento e decremento de valor dentro dos inputs do tipo number em navegadores que não suportam os psudo-elementos "::-webkit-inner-spin-button" e "::-webkit-outer-spin-button".
  const modificarInput = document.querySelectorAll("input[type='number']");

  modificarInput.forEach(function(input) {
      input.style.WebkitAppearance = "none"; 
      input.style.MozAppearance = "textfield";
  });
  
  let lista = document.getElementById("lista-doacoes");
  let item = document.createElement("li");
  let texto = document.createTextNode(`${nome} contribuiu com R$ ${valor} - ${presente}`);
  item.appendChild(texto);
  lista.appendChild(item);
  nomeInput.value = "";
  valorInput.value = "";
  presenteInput.value = "";
  nomeInput.focus();
  document.querySelector("button").textContent = "Cadastrar Outra Doação";
}
