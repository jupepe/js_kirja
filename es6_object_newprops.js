// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let species = "Golden Retriever",
    nickname = "Buster",
    age = 11;
 // ES5
 var animal = {
      species: species,
      nickname: nickname,
      age: age
};  

console.log(animal);

// ES6

let dog = { species, nickname, age };
 
console.log(dog);

// { species: 'Golden Retriever', nickname: 'Buster', age: 11 }
