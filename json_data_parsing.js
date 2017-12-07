// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
var languagesStr = '[\
{\
    "code" : "fi",\
    "name" : "Finnish"\
},\
{\
    "code" : "se",\
    "name" : "Swedish"\
},\
{\
    "code" : "en",\
    "name" : "English"\
}]';


var languages = JSON.parse(languagesStr);

var languageList = [];

for (i in languages) {
    languageList.push(languages[i]);
}

console.log(languageList)