// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
 let langMap = new Map()
    .set("EcmaScript", 6)
    .set("PHP", 7)
    .set("Java", 8);


langMap.set("Perl", 6);
langMap.set("C#", 5);


console.log(`Perl version is ${langMap.get("Perl")}`);

langMap.delete("C#");
console.log(langMap);

for (let lang of langMap.entries()) {
    console.log(lang[0], "\t=>", lang[1]);
}

for (let lang of langMap) {
    console.log(lang[0], "\t=>", lang[1]);
}

for (let langKey of langMap.keys()) { 
    console.log(langKey);
}

for (let langVal of langMap.values()) { 
    console.log(langVal);
}

for (let lang of langMap.entries()) { 
     console.log(`${lang[0]} => ${lang[1]}`); 
}

langMap.forEach((value, key) => { console.log(`${key} => ${value}`); });