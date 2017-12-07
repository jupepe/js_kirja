// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
var languages = ['Java', 'JavaScript', 'Scala', 'Groovy', 'Clojure'];
languages[7] = "C#"

console.log("*".repeat(20) + " Traditional for " + "*".repeat(20));
for(var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}

console.log("*".repeat(20) + " Traditional for undefined " + "*".repeat(20));
for(var i = 0; i < languages.length; i++) {
    if (languages[i] != undefined) console.log(languages[i]);
}


console.log("*".repeat(20) + " ES 2015 forEach  " + "*".repeat(20));
languages.forEach(function(lang) {
    console.log(lang);
});

console.log("*".repeat(20) + " ES 2015+ for-of undefined " + "*".repeat(20));

// ECMAScript 2015+ for
for (var lang of languages) {
    if (lang) console.log(lang);
}


console.log("*".repeat(20) + " object properties " + "*".repeat(20));

for(var i in languages){
    var lang = languages[i];
    console.log(lang);
 }

console.log("*".repeat(20) + " while " + "*".repeat(20));
/*
while(lang = languages.shift()) { 
    console.log(lang); 
}*/

while (lang = languages.pop()) { 
    console.log(lang); 
}    