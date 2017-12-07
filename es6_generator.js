// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
 function* randomNumberBetweenGenerator(max) {
   while (true) {
     yield Math.floor(Math.random() * max) + 1;
   }
 }
 
 let gen = randomNumberBetweenGenerator(100);
 console.log(gen.next());
 
 for (let i=0; i<10; i++) {
    console.log(gen.next().value);
 }

let c = 0;
for (let item of gen) {
    console.log(gen.next());
    c++;
    if (c>20) break;    
 }

/*
72
96
32
36
45
56
44
52
63
20
{ value: 6, done: false }
{ value: 21, done: false }
{ value: 60, done: false }
{ value: 45, done: false }
{ value: 1, done: false }
{ value: 4, done: false }
{ value: 78, done: false }
{ value: 100, done: false }
{ value: 69, done: false }
{ value: 77, done: false }
{ value: 68, done: false }
{ value: 40, done: false }
{ value: 65, done: false }
{ value: 73, done: false }
{ value: 41, done: false }
{ value: 43, done: false }
{ value: 83, done: false }
{ value: 63, done: false }
{ value: 82, done: false }
{ value: 84, done: false }
{ value: 44, done: false }
*/ 