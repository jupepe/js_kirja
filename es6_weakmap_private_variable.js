// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
'use strict'

// Private variables with WeakMap
let _privVal = new WeakMap();

class Counter {
    constructor(initValue) {
        _privVal.set(this, initValue);
    }
    inc() {
        let val = _privVal.get(this);
        val++;
        _privVal.set(this, val);        
    }
    dec() {
        let val = _privVal.get(this);
        val--;
        _privVal.set(this, val);
    }
    get() {
        return _privVal.get(this);
    }
}

let n1 = new Counter(10);
n1.dec();
n1.dec();
n1.dec();
n1.inc();

console.log(n1.get());

let n2 = new Counter(20);
n2.inc();
n2.inc();
n2.inc();
console.log(n2.get());

console.log(_privVal.get(n1));
console.log(_privVal.get(n2));

console.log(Reflect.ownKeys(n2));
