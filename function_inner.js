// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
var arrayAvg1 = function(arr) {
 var sum = function() { 
   var s=0; 
   arr.forEach(function (item) { s+= item; } ); 
   return s; 
 }; 
 
 var len = function() { return arr.length; };
 
 return sum()/len();
}

var arrayAvg2 = function(arr) { return (
    function() { 
         var s=0; 
         arr.forEach(function (item) { 
            s+= item; 
     } ); 
     return s; } )() / arr.length ;
}

  
var numbers = [1,2,3,4,5,6,7,8,9,10]; 
numbers.push(11);
numbers.push(12);
numbers.push(13);
numbers.push(14);

var avg1 = arrayAvg1(numbers);
var avg2 = arrayAvg1(numbers);
console.log(avg1 + ", " + avg2);

/******** closure *****************/

function countSum(arr) {
  // this inner function has access to the outer function's variables, including the parameter
  var innerSum = function() {
    var s=0; 
    for (var i in arr) s += arr[i];
    return s;
  }
  return innerSum();
}

// IIFE example
function countSum2(arr) {
  return (function() {
    var s=0; 
    for (var i in arr) s += arr[i];
    return s;
  })(arr);
}

// in closure Inner function can also access to parameters of the outer function.
console.log("closure sum I: " +  countSum([1,2,3,4,5,6,7,8,9,10]) );
console.log("closure sum II: " + countSum2([1,2,3,4,5,6,7,8,9,10]) );

/******************* simple closure *************/

function createName(first) {
    var fullName = "The full name is ";

    var lastName = function (last) {
        return fullName + first + " " + last;
    };
    return lastName;
}
var nameFunc = createName ("Donald"); 
console.log(nameFunc); 
console.log(nameFunc("Duck")); 
console.log(nameFunc("Johansson")); 

console.log(createName("Mickey")("Mouse")); 