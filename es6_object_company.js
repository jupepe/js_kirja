// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
class Company {
    constructor(name, address, id) {
        this.name = name;
        this.address = address;
        this.id = id;
    }
    toString() {
        return this.name + " in address " + this.address + " with id " + this.id;
    }
    get name() {
        return this._name
    }
    set name(n) {
        this._name = n
    }
}
let company = new Company("Shining Company Ltd", "Full Street 15", 15);
let company2 = new Company("Shift Alternativies Ltd", "Control Street 32", 18);
console.log(company.toString());

console.log(company2.toString());


// Before ES5 with prototypes the same code looks like

function CompanyEs5(name, address, id) {
        this.name = name;
        this.address = address;
        this.id = id;
    }
CompanyEs5.prototype.toString = function() {
    return this.name + " in address " + this.address + " with id " + this.id;
}

CompanyEs5.prototype.name = function() {
    return this.name;
}

let company3= new Company("Old Prototypes Ltd", "EcmaStreet 5", 22);
console.log(company3.toString());
