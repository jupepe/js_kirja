// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let isFirefox = false;

try { 
    isFirefox = (navigator.userAgent.search("Firefox") > -1) ? true : false;
    console.log("isFirefox: " + navigator.userAgent.search("Firefox"));
}
catch (e) {
    isFirefox = false;   
}

//if (isFirefox) {
    let b = 10;
    let a = b ** 2;
    console.log(`${b} ** 2 = ${a}`); 

    // Destructuring rest parameters => Firefox 52
    function multiply(...[x, y, z]) {
      return x * y * z;
    }    

    console.log(multiply(1));          
    console.log(multiply(10,5,6));          
    console.log(multiply(10,5,7,7));        

    // Rest parameters, numerical sort
    function sortRestParameters(...params) {
      return params.sort((a, b) => a - b);
    }

    console.log(sortRestParameters(10, 30, 5, 15)); 

//}

