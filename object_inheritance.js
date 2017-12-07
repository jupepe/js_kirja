// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
function Company(name) {
    this.name = name;
}
Company.prototype.toString = function() {
    return "Company: " + this.name;
}

function IctCompany(name, services) {
    this.name = name
    this.services = services;
}

// IctCompany inherit from Company
IctCompany.prototype = Object.create(Company.prototype);
IctCompany.prototype.constructor = IctCompany;

IctCompany.prototype.myToString = function() {
    return "ICT Company: " + this.name + " And services are '" + this.services + "'";
}

var comp = new IctCompany("My Shining Web Company", ["Web Development", "Consultation", "Node.js", "TypeScript", "Responsive CSS"]);
console.log(comp.toString());
console.log(comp.myToString());
console.log(comp);
console.log(IctCompany.prototype);
