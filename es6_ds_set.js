// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let langSet = new Set()

langSet.add("Java");
langSet.add("JavaScript");
langSet.add("C++");
langSet.add("C#");
langSet.add("JavaScript");
langSet.add("JavaScript");
langSet.add("ECMAScript");

console.log(langSet.size)
console.log(langSet)

langSet.delete("Java")
console.log(langSet.has("Java"))
console.log(langSet.size)
console.log(langSet)

//langSet.clear()
//console.log(langSet.size)

// Looping through the set
for (var lang of langSet) {
  console.log(lang);
}

console.log("Different output methods");

let setProcessor = {
    output(v) {
        console.log(v);
    },
    loopAll(set) {
        set.forEach((v) => this.output(v));
    }
};

setProcessor.loopAll(langSet);


// with defined function

let printElement = function (v1, set) {
    console.log(v1); 
}
// forEach executes the callback function once for each element

//langSet.forEach(printElement);

//langSet.forEach((v1,v2) => {console.log(v1); });
