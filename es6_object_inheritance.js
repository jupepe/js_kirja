// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
class GeneralCompany {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return "Company: " + this.name;
    }
}

class IctCompany extends GeneralCompany {
    constructor(name, services) {
        super(name);
        this.services = services;
    }
    toString() {
        return "ICT Company: " + this.name + " And services are '" + this.services + "'";
    }
}

let myCompany = new IctCompany("My Shining Web Company", ["Web Development", "Consultation", "Node.js", "TypeScript", "Responsive CSS"]);
myCompany.services.push("Specialist Shop");
console.log(myCompany.toString());
console.log(IctCompany);

/********** Reflect ******************/

console.log(Reflect.ownKeys(IctCompany));

console.log(Reflect.ownKeys(IctCompany.prototype));

console.log(Reflect.ownKeys(myCompany));

console.log(Reflect.getPrototypeOf(IctCompany));
console.log(Reflect.getPrototypeOf(myCompany));