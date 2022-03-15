// Valor Fatorial //

// REF https://cursos.alura.com.br/forum/topico-urgente-por-favor-me-ajudem-erro-ao-criar-uma-funcao-fatorial-usando-o-contador-for-116677?gclid=EAIaIQobChMIgPKKmuC79gIVgw6RCh3DgQl3EAAYASAAEgIm7PD_BwE //

function fatorial(numero) {
  let multiplicacao = 1;

  for (let i = numero; i > 1; i--) {
    multiplicacao *= i;
  }
  return multiplicacao;
}
console.log(fatorial(10));

let word = "tryber";
let palavraInvertida = "";

for (i = word.length -1; i >= 0; i--) {
  palavraInvertida += word[i];
}

console.log(palavraInvertida);
