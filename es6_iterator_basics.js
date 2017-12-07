// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
'use strict'

// Map iterators
let numbers = new Map();
numbers.set('one', 1);
numbers.set('two', 2);
numbers.set('three', 3);

for (let [key,value] of numbers.entries()) {
    console.log(`key = ${key}, value = ${value}`);
}

// Set iterators
let numberSet = new Set().add('one').add('two').add('three');
for (let val of numberSet) {
    console.log(val);
}