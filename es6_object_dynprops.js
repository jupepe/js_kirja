// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

 // ES6
let counter = 0;
let getId = () => ++counter;
let o1 = {
      ['id_' + getId()]: counter
 };
let o2 = {
      ['id_' + getId()]: counter
 }; 
console.log(o1); 
console.log(o2);


/********** Reflect ******************/

console.log(Reflect.ownKeys(o1));
console.log(Reflect.ownKeys(o2));

console.log(Reflect.getPrototypeOf(o1));

let myObj = {"c": 3};
Reflect.defineProperty(myObj, "a", {value: 2}); 
Reflect.defineProperty(myObj, "b", {value: 3}); 
console.log(myObj.a + " " + myObj.b);
//Reflect.deleteProperty(myObj, "c");
console.log(myObj.c);
console.log(myObj);