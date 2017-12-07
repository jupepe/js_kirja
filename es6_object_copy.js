// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

let timKids = ['Jim', 'Jill'];
let tim = { name: "Tim", age: 50, hobbies: ['swimming', "programming", "jumping"], family: { kids: timKids } };
let copy = Object.assign({}, tim);

// Use the JSON library for a fast way of deep-cloning objects.
let p2 = (JSON.parse(JSON.stringify(tim)));
p2.name = 'Bill Boulder';

timKids.push('Jane');
tim.family.kids.push('Johnny');
tim.family.kids.push('Jack');
copy.age = 52;

console.log(tim);
console.log(copy);
console.log(p2);
console.log(timKids);


/*
An Object.assign method is part of the ECMAScript 2015 (ES6) standard.

let clone = Object.assign({}, obj);
*/