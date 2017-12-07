// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
function makeFood(param1, param2, callback) {    
    return callback(param1, param2);
}

var func = function(p1, p2) {
    return 'spaghetti with ' + p1 + " and " + p2;
};

var food = makeFood('ham', 'cheese', func);

var food2 = makeFood('bacon', 'salami', function(p1, p2) {
    return 'Pizza with ' + p1 + ' or ' + p2;
});

console.log(food);
console.log(food2);