// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
'use strict';
class GeneralAnimal {
    constructor(name, val) {
        this.name = name;
        this.value = val;
    }
}

class GeneralAnimalIterator {
    constructor(animals) {
        this.animals = animals;
    }

    [Symbol.iterator]() {
       let counter = 0;
       let animalsArr  = this.animals;
       let animalIterator = {
            next() {
                if (counter < animalsArr.length) {
                    return {
                        done: false,
                        value: animalsArr[counter++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: undefined
                    };
                }
            }
        }
        return animalIterator;
    }
}

let animals = 
  [new GeneralAnimal("cat", 15), new GeneralAnimal("dog", 22), new GeneralAnimal("snake", 13), new GeneralAnimal("lion", 3)];
animals[4] = new GeneralAnimal("fox", 6);

let animIterator = new GeneralAnimalIterator(animals);

for (let item of animIterator) {
    console.log(item);
}