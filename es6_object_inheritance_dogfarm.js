// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
class Animal {
    constructor(species, legs) {
        this._species = species;
        this._legs = legs;
        this._id = Animal.getNextId();
    }
    get legs() {
        return this._legs;
    }
    set legs(le) {
        this._legs = le;
    }
    get species() {
        return this._species;
    }
    set species(sp) {
        this._species = sp;
    }
    get id() {
        return this._id;
    }
    static getNextId() {
        return Animal.lastId += 1;
    }
}
Animal.lastId = 0;
class Dog extends Animal {
    constructor(name, speed, species, legs) {
        super(species, legs);
        this._name = name;
        this._speed = speed;
    }
    get speed() {
        return this._speed;
    }
    set speed(s) {
        this._speed = s;
    }
    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
}
class DogFarm {
    constructor(dogs) {
        this.dogs = dogs;
    }
    add(d) {
        return this.dogs.push(d);
    }
    delete(d) {
        let index = this.dogs.indexOf(d);
        if (index > -1) {
            this.dogs.splice(index, 1);
        }
    }
    getAll() {
        return this.dogs;
    }
    sortBySpeed() {
        return this.dogs.sort((a, b) => b.speed - a.speed);
    }
    sortById() {
        return this.dogs.sort((a, b) => a.id - b.id);
    }
    searchByDogName(name) {
        return this.dogs.filter(dog => new RegExp(name).test(dog.name));
    }
    searchBySpeed(minSpeed) {
        return this.dogs.filter((dog) => dog.speed >= minSpeed);
    }
}
function main() {
    let puppy = new Dog("Puppy", 15, "Golden Retriever", 4);
    let bill = new Dog("Bill", 21, "Golden Retriever", 4);
    let buster = new Dog("Buster", 9, "Nordic Hunting Dog", 4);
    let kim = new Dog("Kim", 12, "Nordic Hunting Dog", 4);
    let farm = new DogFarm([]);
    farm.add(buster);
    farm.add(kim);
    farm.add(puppy);
    farm.add(bill);
    console.log("sort by speed");
    console.log(farm.sortBySpeed());
    console.log("sort by id");
    console.log(farm.sortById());
    console.log("search by up");
    console.log(farm.searchByDogName("up"));
    console.log("search by B");
    console.log(farm.searchByDogName("B"));
    farm.delete(bill);
    console.log("search by speed >= 15");
    console.log(farm.searchBySpeed(15));
    console.log("get All dogs");
    console.log(farm.getAll());
}
main();
