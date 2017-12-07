// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

var car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.modelYear = 2006;

console.log(JSON.stringify(car));

var car2 = {
 'brand':'Toyota', 
 'model': 'Carina', 
 'modelYear': 1992
}
console.log(JSON.stringify(car2));


var printProperties = function(obj) {
    var resultString = "";
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) 
            resultString += property + ': ' + obj[property] + '; ';
    }
    return resultString;
}

var printProperties2 = function(obj) {
    var resultString = "";
    Object.getOwnPropertyNames(obj).forEach(
        function(property, idx, array) {
            resultString += property + ': ' + obj[property] + '; ';
    });
   return resultString;
}

console.log(printProperties(car2));

car2.owner = "Jim";
car2.firstOwner = false;

console.log(printProperties(car2));


function Car(model, brand, modelYear) {
  this.model = model;
  this.brand = brand;
  this.modelYear = modelYear;
  this.asString = function() {
    return this.brand + " " + this.model + ", model year is " + this.modelYear;
  };
}


var car3 = new Car("Primera", "Nissan", 1994);

console.log(printProperties(car3));
console.log(printProperties2(car3));
console.log(car3.asString());


/* 
Output: 
{"brand":"Toyota","model":"Corolla","modelYear":2006}
{"brand":"Toyota","model":"Carina","modelYear":1992}
brand: Toyota; model: Carina; modelYear: 1992; 
brand: Toyota; model: Carina; modelYear: 1992; owner: Jim; firstOwner: false; 
model: Primera; brand: Nissan; modelYear: 1994;
*/