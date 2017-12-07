// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
function getInfo(person) {
    person.info();
}
let person = {
    name: "Jack",
    birthYear: 1974,
    age: function () {
        return new Date().getFullYear() - this.birthYear;
    },
    info: function () {
        console.log(this.name + ", birth year was ", this.birthYear + " and now he is " + this.age());
    }
};

getInfo(person);



