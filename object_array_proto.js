// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

var ArrayStats = function (arr) {
    this.arr = arr
};

var arrayMethods = {
    sum: function () {
        var sum = 0;
        this.arr.forEach(function(i) {
          sum += i;
        });
        return sum;
    },
    avg: function() {
        return this.sum() / this.arr.length;
    }
};

ArrayStats.prototype.__proto__ = arrayMethods;

var initialArray = [20,50,30,77,120,65,432,54,15];
var stats = new ArrayStats(initialArray);

console.log(stats.sum());
console.log(stats.avg());

