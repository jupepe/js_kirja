// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

//------ mymodule.js ------

export function arrayNumericFilter(arr) {
  return arr.filter(n => n > 100 && n < 1000);
}

export function arraySquare(arr) {
    return arr.map(n => n * n);
}