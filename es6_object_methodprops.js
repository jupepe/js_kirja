// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let species = "Golden Retriever", nickname = "Buster", age = 11;

// ES5
var dog1 = {
      species: species,
      nickname: nickname,
      age: age,
      toString: function() {
        return this.species + ", which name is " + this.nickname + " and age is " + this.age;
      }
};  

// ES6
var dog2 = {
      species,
      nickname,
      age,
      toString() {
        return this.species + ", which name is " + this.nickname + " and age is " + this.age;
      }
};  


console.log(JSON.stringify(dog1));
console.log(dog1.toString())
console.log(JSON.stringify(dog2));
console.log(dog2.toString())
//console.log(dog1);

/*
{"species":"Golden Retriever","nickname":"Buster","age":11}
{"species":"Golden Retriever","nickname":"Buster","age":11}
Golden Retriever, which name is Buster and age is 11
*/