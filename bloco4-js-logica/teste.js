/*
const notaPessoa = 90;

if(notaPessoa >= 80) {
  console.log('Parabéns, você foi aprovada(o)!')
} 

else if(notaPessoa < 80 && notaPessoa >= 60){
  console.log("Você está na nossa lista de espera")

}else{
  console.log("Você foi reprovada(o)")
}
*/

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1]

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');

// console.log(menu);

// let numero = 7;
// for(index = 1; index <= 9; index ++){
//   console.log(numero * index);
// // }

// let listaNomes = ['Giovani' , 'Maria' , 'Joao'];
// for(var index = 0; index < listaNomes.length; index++){
//   console.log('Boas Vindas a Trybe ' + listaNomes[index] + '!');
// }

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for(index = 0; index < groceryList.length; index += 1){
//   console.log(groceryList[index]);
// }

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for(let lista of groceryList){
//   console.log(lista);
// }

// let nome = "Giovani";
// for(let letras of nome){
//   console.log(letras);
// }

// let num = [10, 20, 30, 40];
// for(let index of num){
//   index += 1;
//   console.log(index);

// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for(let lista of names){
//   console.log(lista);
// }

// let player = {
//   name: "Marta",
//   lastName: "Pereira",
//   age: 34,
//   medals: {
//     dolden: 2,
//     silver: 3,
//   },
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],

// };

// // console.log(
// //   "A jogadora",
// //   player.name + " " + player.lastName + " " + 
// // );

// console.log('A jogadora' , player.name + " " + player.lastName + ' foi eleita a melhor do mundo 6 vezes:' + " " + player.bestInTheWorld);

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index);
// }

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(pessoa in names){
  console.log('Ola', names[pessoa]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(carro in car){
  console.log(car, car[carro] );
}