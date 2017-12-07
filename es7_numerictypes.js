// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
/*
let includesNumber = [1, 2, 3, 4, 10].includes(10, -1);
let includesNumber2 = [1, 2, 3, 4, 10].includes(3, 3); // includes(3, 2) is true! 
console.log(`Arr includes number 10 == ${includesNumber}`);
console.log(`Arr includes number 3 from position 3 == ${includesNumber2}`);
*/

let intArr = new Uint8Array([1, 2, 3, 4, 10]);
let intInc = intArr.includes(4);    
console.log(`IntArr includes number 10 == ${intInc}`);

let floatArr = new Float64Array([1.1, 2.2, 4.5, 'a']);
let floatInc = floatArr.includes(4.5);    
console.log(floatArr);
console.log(`floatArr includes number 4.5 == ${floatInc}`);

let byteArr = new Int8Array([10, 20, 30, 150]);
console.log(byteArr);

// trying to add new values 
try {
	byteArr[10] = 10;
}
catch (e) {
	console.log("Error: " + e);
}
console.log(byteArr);

// convert to normal array
let normalArray = [];
normalArray = Array.prototype.slice.call(byteArr);
console.log(normalArray);
