let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let listaNumbers = numbers.length;
let mediaAritmetica;

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
  // console.log(soma);
  mediaAritmetica = 278 / listaNumbers;
}
console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

let maiorValor = 0;
maiorValor = numbers[0];

for (let index = 1; index < numbers.length; index++) {
  if (maiorValor < numbers[index]) {
    maiorValor = numbers[index];

  }
}
console.log('Maior valor: ',maiorValor);


for(let indice = 0; indice < numbers.length; indice++){
  if(numbers[indice] % 2 !== 0){
  console.log(numbers[indice]);
  }
}
