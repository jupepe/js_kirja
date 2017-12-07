// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
function createPersonString(name, phone) { 
  if (!arguments[1]) return false;  
  var str = "Name: " + name + ", phone number: " + phone;
  return str; 
}

var personStr = createPersonString("Donald Duck", "313 - 123 456"); 
var personStr2 = createPersonString("Mickey Mouse"); 
console.log(personStr);
console.log(personStr2);


/************ Default arguments ********************/

function defaultArguments() { 
    console.log(`function called with arguments 0: ${arguments[0]}, 1: ${arguments[1]}, 2: ${arguments[2]}`);
}

function getAllArguments() {
    var str = "All arguments: ";
    for (var i = 0, len = arguments.length; i < len; i++) {
        if (i == len - 1)
            str += `${i}: ${arguments[i]}`;
        else
            str += `${i}: ${arguments[i]}, `;
    }
    return str;

}
defaultArguments("Donald Duck", "313 - 123 456"); 


var allArgs = getAllArguments("Jim", "calls", "function", "once");
console.log(allArgs);


/************ different functions ********************/

function f1(a, b) {
    return a * b;
}

var f2 = function (a, b) {
   return a * b
}; 

var res1 = f1(2,3);
var res2 = f2(3,2); 
console.log(res1 === res2); 

/************ Default arguments ********************/
function createStringWithJoin() {
  var args = Array.prototype.slice.call(arguments);
  var separator = args.shift(); 
  return args.join(separator);
}

var newStr = createStringWithJoin("--", "Jim", "calls", "function", "once");
var newStr2 = createStringWithJoin("::", "Jim", "calls", "function", "again");
console.log(newStr);
console.log(newStr2);

/************* Anonymous functions *******************/
var sum = function(arr) { 
    var s = 0; 
    for (var i = 0; i < arr.length; ++i) { 
       s += arr[i] 
    }
    return s;
}

var sum2 = function(arr) { 
    var s = 0; 
    arr.forEach(
        function(x) { s += x } ); 
    return s;
}

var avg = function(arr) { 
    var sum = function (arr) {
        var s = 0; 
        arr.forEach(
            function(x) { s += x } ); 
        return s;
    }
    return sum(arr) / arr.length;
}


var numArray = [5,10,15,20];
console.log(sum(numArray)); 
console.log(sum2(numArray));
console.log(avg(numArray));

/********** function scope ***********************/

function functionWithGlobal() {
    var localVar = "value";
    globalName = "Jim";
} 

functionWithGlobal();
//console.log("localVar:" + localVar);  // ReferenceError: localVar is not defined
console.log("globalName:" + globalName); 

function functionScope() {
    var a = 10; 
    if (a>0) {
       var a = 100;    
    }
    return a;
} 

function functionScope2() {
    let a = 10; 
    if (a>0) {
       let a = 100;    
    }
    return a;
} 

console.log(functionScope());
console.log(functionScope2());

/*********** Function object ******************/
var division = new Function('x', 'y', 'return x / y');
console.log(division(5,2));
console.log(division(5,0));


// var a = 1; // ReferenceError: a is not defined
a = 1

function getValue() {
    var a=100;
    return new Function('return a');
}

console.log(getValue()());


function getValue2() {
    a = 100; // global! 
    return new Function('return a');
}
console.log(getValue2()());


