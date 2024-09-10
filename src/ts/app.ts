function reviewUser(nota: number | boolean) {
  if (typeof nota === "number" && nota >= 3.5) {
    console.log("Obrigado por avaliar bem o nosso restaurante");
  } else if (typeof nota === "number" && nota <= 3.5) {
    console.log("obrigado pela avaliação, volte sempre!");
  } else if (typeof nota === "boolean") {
    console.log(
      "Gostaria de nos falar alguma melhoria no atendimento/serviço?"
    );
  } else {
    console.log("voce nao avaliou o produto");
  }
}

reviewUser(3.7);
reviewUser(2.5);
reviewUser(false);
