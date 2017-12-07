// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

// Prototype object

function Car(brand, model, modelYear) {
  this.brand = brand;
  this.model = model;
  this.modelYear = modelYear;
}

Car.prototype.setBrand = function(brand) {
  this.brand = brand;
};

Car.prototype.setModel = function(model) {
  this.model = model;
};
Car.prototype.setModelYear = function(year) {
  this.modelYear = year;
};

Car.prototype.asString = function() {
  return this.brand + " " + this.model + ", model year is " + this.modelYear;
};

var toyota = new Car();
toyota.setBrand("Toyota");
toyota.setModel("Yaris");
toyota.setModelYear(2011);
console.log(toyota.toString()); 
console.log(toyota.asString()); 

/* 
  [object Object]
  Toyota Yaris, model year is 2011
*/