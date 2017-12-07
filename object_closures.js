// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
function Counter(init) {
    var privCounter = init || 10;    
    return {
        decrement: function() {
          privCounter--;
        },
        increment: function() {
          privCounter++;
        },
        getValue: function() {
          return privCounter;
        }
    } 
} 

var c = new Counter(5);
c.increment();
c.increment();
console.log(c.getValue());
c.increment();
c.decrement();
c.decrement();
c.decrement();
c.decrement();
console.log(c.getValue());
console.log(c);

/****************** Private vars with closure **********************/
function Langs() {
   var langs = [];
   
   return {
      add : function(name) {
         var lang = {};
         lang.name = name;
         langs.push(name);
         return lang;
      },
      remove : function(name) {
         var i = langs.indexOf(name);
         if(i != -1) {
             langs.splice(i, 1);
         }
      },

      counter : function() {
         return langs.length;
      },
      getAll : function() {
         return langs.join(', ');
      }
   };
}; 


var langs = new Langs();
langs.add('Visual Basic');
langs.add('C#');
langs.add('C++');
langs.add('Groovy');
langs.add('Swift');
langs.add('Objective-C');
langs.add('COBOL');

console.log(langs);
console.log(langs.counter()); 

langs.remove('C++');
console.log(langs.getAll());

