let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let listaNumbers = numbers.length;
let mediaAritmetica;

 // SOMANDO TODOS VALORES DO ARRAY //

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
 console.log(soma);
  mediaAritmetica = 278 / listaNumbers;
}
console.log(mediaAritmetica);

 // ENCONTRANDO VALOR MAIOR QUE 20 //

if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

 // ENCONTRANDO MAIOR VALOR DO ARRAY //

let maiorValor = 0;
maiorValor = numbers[0];

for (let index = 1; index < numbers.length; index++) {
  if (maiorValor < numbers[index]) {
    maiorValor = numbers[index];
  }
}
console.log("Maior valor: ", maiorValor);

 // ENCONTRANDO VALOR IMPAR //

for (let indice = 0; indice < numbers.length; indice++) {
  if (numbers[indice] % 2 !== 0) {
    console.log(numbers[indice]);
  } else {
    console.log("nenhum valor ímpar encontrado");
  }
}

  // ENCONTRANDO MENOR VALOR ARRAY //

let menorValor = 0;
menorValor = numbers[0];

for (let z = 1; z < numbers.length; z++) {
  if (menorValor >= numbers[z]) {
    menorValor = numbers[z];
  }
}
console.log("Menor valor:", menorValor);

// IMPRIMINDO QUANTIDADE E LISTA DO ARRAY //

let novoArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
  24, 25,
];

console.log("Quantidade de valores é:", novoArray.length);
 console.log('Lista dos valores: ');

 for (a = 0; a < novoArray.length; a++) {
   console.log(novoArray[a]);
 }

// DIVISAO VALORES ARRAY POR 2 //

console.log('Divisao todos os valores por 2: ');
for (y = 0; y < novoArray.length; y++) {
  let divisao;
  divisao = novoArray[y] / 2;
  console.log(divisao);
}


const n = 9

let resultado = 100;
for (let i = 0; i <= n; i++){
  resultado -= i;
}
console.log(resultado)