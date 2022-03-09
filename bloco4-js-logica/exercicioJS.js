// const a = 8;
// const b = 2;

// // Adição //

// let soma;
// soma = a + b;
// console.log(soma);

// // Subtração //

// let subtracao = a - b;
// console.log(subtracao);

// // Multiplicação //

// let multiplicacao = a * b;
// console.log(multiplicacao);

// // Divisão //

// let divisao = a / b;
// console.log(divisao);

// // Módulo //

// let resto = a % b;
// console.log(resto);

//     Retornar maior numero

// const a = 8;
// const b = 2;

// if(a > b){
//     console.log(a);

// }else{
//     console.log(b);
// }

// const a = 15;
// const b = 50;
// const c = 33;

// if(a > b && a > c){
//     console.log(a);

// }else if(b > a && b > c){
//     console.log(b);

// }else{
//     console.log(c);
// }

//  Verdadeiro | falso | ou zero

// const yesOrNo = 0;

// if(yesOrNo > 0) {
// console.log(true);

// }else if(yesOrNo < 0) {
//     console.log(false);

// }else{
//     console.log("zero");
// }

// const a = 60;
// const b = 60;
// const c = 60;

// let soma = a + b + c;

// if(soma === 180){
//     console.log(true);
// }

// else if(soma !== 180){
//     console.log(false);
// }
// else if(soma < 0){
//     console.error();
// }

//  Valor em porcentagem

// // function nota (A, B, C, D, E, F){

// //     if(A >= 90){
// //         return "90%";
// //     }

// //     else if(B >= 80){
// //         return "80%";
// //     }

// //     else if(C >= 70){
// //         return "70%";
// //     }

// //     else if(D >= 60){
// //         return "60%";
// //     }

// //     else if(E >= 50){
// //         return "50%";
// //     }

// //     else if(D >= 60){
// //         return "60%";
// //     }

// //     else if(F < 50){
// //         return "50%";
// //     }

// //     else if(nota < 0 || nota > 100){
// //         console.error();
// //     }
// // }

//     Numero par

// const num1 = 5;
// const num2 = 3;
// const num3 = 1;

// if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
// console.log(true);

// }else{
//     console.log(false)
// }

// const num1 = 14;
// const num2 = 20;
// const num3 = 165;

// if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

const quantoCusta = 10;
const quantoVende = 20;
let quantoLucra = " ";
let imspostoSobreCusto = 0.2;
let valorCustoTotal = "";
let valorLucroTotal = " ";

valorCustoTotal = quantoCusta + imspostoSobreCusto;

valorLucroTotal = quantoVende - valorCustoTotal;

valorCustoTotal * 1000;
