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

function Truck(maxWeight) {
    this.maxWeight = maxWeight;
}

Truck.prototype = Object.create(Car.prototype);

Truck.prototype.setMaxWeight = function(vm) {
  this.maxWeight = vm;
};
Truck.prototype.asString = function() {
  return this.brand + " " + this.model + ", " + this.modelYear + ", max weight: " + this.maxWeight;
};

var volvo = new Truck();
volvo.setBrand("Volvo");
volvo.setModel("Truck");
volvo.setModelYear(2013);
volvo.setMaxWeight(23000);

console.log(volvo.asString()); 

/* 
[object Object]
Toyota Yaris, model year is 2011
*/



var printPrototypeProperties = function(obj) {
    var arr = [];
    for (; obj != null; obj = Object.getPrototypeOf(obj)) {
        console.log(obj.toString());
        var props = Object.getOwnPropertyNames(obj);
        for (var i = 0; i < props.length; i++)
            if (arr.indexOf(props[i]) == -1)
                arr.push(props[i]);
    }
    return arr;
}

//console.log(printPrototypeProperties(volvo));
console.log(printPrototypeProperties(volvo).toString());