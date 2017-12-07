// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
console.log('myscript;'.repeat(5).slice(0,-1)); 

let str = 'JavaScript'

console.log(str.startsWith('Jav'));      
console.log(str.startsWith('Script', 4)); 
console.log(str.endsWith('cript'));      
console.log(str.includes('aScr'));    

// raw strings, not escape character needed
let escapedStr = "new\\nlines\\nnot\\ninterpreted";
let rawStr = String.raw`new\nlines\nnot\ninterpreted`;

console.log(rawStr);    
console.log(escapedStr);
console.log(rawStr ===  escapedStr);    
                             

// Handling unicode chars
var ucodeString = '\u{00C4} and \u{00E4}';
console.log(ucodeString);
console.log(/ä/.test(ucodeString)); // false, because tested without unicode flag (u)
console.log(/\u{00E4}/u.test(ucodeString)); // true