// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
function toCsv(st1, st2, st3) {
  return st1 + ", " + st2 + "," + st3;
}


let arr = ["a", "b", "zzzzz"];
let args = toCsv.apply(undefined, arr); 
console.log(args);

console.log(toCsv(...arr));   // spread operator
console.log(toCsv(..."abc"));   // spread operator mixed with standard arguments

let strToArr = [...'abcde'];
console.log (strToArr);

/*
a,b,zzzzz
a,b,zzzzz
a,b,c
[ 'a', 'b', 'c', 'd', 'e' ]
*/