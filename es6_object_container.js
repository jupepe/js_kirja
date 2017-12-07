// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
class ArrayContainer {
    constructor(arr) {
        this.arr = arr;
    }
    addNew(newItem) {
        return this.arr.push(newItem);
    }
    addAll(items) {
        this.arr.push(...items);
        return items.length;
    }
    searchGreaterThanTen() {
        return this.arr.filter(val => val >= 10);
    }
    searchLowerThanTen() {
        return this.arr.filter(val => val <= 10);
    }
    searchByValueBetween(lower, upper) {
        return this.arr.filter(val => val >= lower && val <= upper);
    }
    searchByNumberCount(numberOfDigits) {
        let exp = "^\\d{" + String(numberOfDigits) + "}$";
        let re = new RegExp(exp);
        console.log("search RE: " + exp);
        return this.arr.filter(val => re.test(String(val)));
    }
}
let ac = new ArrayContainer([1, 2, 3, 4, 5, 50, 60, 70, 80, 90, 100]);
ac.addAll([9, 11, 15, 150, 244, 355, 444, 505]);
console.log(ac.searchLowerThanTen());
console.log(ac.searchGreaterThanTen());
console.log(ac.searchByValueBetween(50, 300));
console.log(ac.searchByNumberCount(1));
console.log(ac.searchByNumberCount(3));