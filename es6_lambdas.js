// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let r1 = x => { return x * x }
let r2 = (x,y) => { return x / y }
console.log(r1(10)) // 100
console.log(r2(100, 5)) // 20


var arr1 = [1, 2, 3, 4, 5].map(function (n) {
   return n * n;
});

// ES6 with lambdas
var arr2 = [1, 2, 3, 4, 5].map(n => n * n);
console.log(arr2) // [ 1, 4, 9, 16, 25 ]


/********** Sorting ******************/


let langs = ["Java", "javaScript", "C++", "C#", "c", "COBOL"];

var sorted = langs.sort(function(a, b) {
    var aStr = a.toUpperCase(); // ignore upper and lowercase characters
    var bStr = b.toUpperCase();
    if (aStr > bStr) {
       return 1;
    }
    if (aStr < bStr) {
      return -1;
    }
    return 0;
});

var sorted2 = langs.sort((a, b) => {
    var aStr = a.toUpperCase(); // ignore upper and lowercase characters
    var bStr = b.toUpperCase();
    if (aStr > bStr) {
       return 1;
    }
    if (aStr < bStr) {
      return -1;
    }
    return 0;}
);

// [ 'c', 'C#', 'C++', 'COBOL', 'Java', 'javaScript' ]

console.log(sorted);
console.log(sorted2);