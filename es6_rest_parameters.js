// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

// ES5: you should use arguments object to read arguments 
// It's not array
function toCsv() {
  let strs = Array.prototype.slice.call(arguments);
  console.log(strs)
  let res = "";
  strs.forEach(function (str) {
     res += str + ",";
  });
  return res.substring(0, res.length - 1);
}

// ES6: you can use the spread operator (...)
// Parameter defined with spread operator creates an array which contain all parameters.
// No other named arguments can follow in the function declaration.
function toCsvEs6(...strs) {
  console.log(strs)
  let res = "";
  strs.forEach(function (str) {
     res += str + ",";
  });
  return res.slice(0, -1);
}


//function toCsvEs6WithSeparator(...strs, separator) { // SyntaxError: Rest parameter must be last formal parameter

function toCsvEs6WithSeparator(separator, ...strs) {    
  //console.log(strs)
  let res = "";
  strs.forEach(function (str) {
     res += str + separator;
  });
  return res.slice(0, -1);
}


console.log(toCsv("a", "b", "c", "dee", "zzzzz"));
console.log(toCsvEs6("a", "b", "c", "dee", "zzzzz"));  
console.log(toCsvEs6WithSeparator(":", "a", "b", "c", "dee", "zzzzz"));  
