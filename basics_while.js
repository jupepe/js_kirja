// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

/** while */
var x = 1;
var sum = 0;

while ( x <= 10 ) { 
   sum += x;
   x++;
}
console.log("sum = " + sum + " and x = " + x);


/** do ... while */
var counter = 1;
do {
   console.log("Counter: " + counter);
   counter++;
}
while (counter < 10);

