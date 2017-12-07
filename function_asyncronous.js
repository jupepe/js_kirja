// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
var print = function (str, timeMs) {
  setTimeout(function() {
    console.log(str);
  }, timeMs);
}

function execute(callbackFunc, str, timeMs) {  
  callbackFunc(str, timeMs);
}

execute(print, "1st call", 300);
execute(print, "2nd call", 2500);
execute(print, "3th call", 200);
execute(print, "4th call", 1200);

/* 
3th call
1st call
4th call
2nd call
*/