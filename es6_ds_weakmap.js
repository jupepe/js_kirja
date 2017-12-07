// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
'use strict'

var map = new WeakMap();

var ecma = {name: "ECMAScript", latestVersion: 6};
var java = {name: "Java", latestVersion: 8};
var c =   {name: "C", latestVersion: "many"};

map.set(ecma, "Standard Language for JavaScript");
map.set(java, "Need Java Runtime to run applications");
map.set(c, "The popular system programming language");

console.log(map.get(ecma)); 
console.log(map.get(java)); 
console.log(map.get(c)); 

console.log(map.has(java)); 
map.delete(java);
console.log(map.has(java)); 


