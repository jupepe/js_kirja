// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let Firms;
(function (Firms) {
    class Company {
        constructor(name, address, id) {
            this.name = name;
            this.address = address;
            this.id = id;
        }
        toString() {
            return this.name + " in address " + this.address + " with compId " + this.id;
        }
    }
    Firms.Company = Company;
})(Firms || (Firms = {}));

let comp = new Firms.Company("Shining Company", "Full Street 15", 15);
let comp2 = new Firms.Company("Shift Alternativies", "Control Street 32", 18);
comp2.address = "Control Shift Happens Way 61";
console.log(comp.toString());
console.log(comp2.toString());