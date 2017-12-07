// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
'use strict';

let numbersIters = {
    [Symbol.iterator]() {
        let counter = -1;
        let numberIterator = {
            next() {
                if (counter <= 3) {
                    counter++;
                    //counter += 2;
                }


                switch (counter) {
                    case 0:
                        return { value: 'Zero', done: false };
                    case 1:
                        return { value: 'One', done: false };
                    case 2:
                        return { value: 'Two', done: false };
                    case 3:
                        return { value: 'Three', done: false };
                    default:
                        return { value: 'The end', done: true };
                }
            }
        };
        return numberIterator;
    }
};


for (let value of numbersIters) {
    console.log(value);
}