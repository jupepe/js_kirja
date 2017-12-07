// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
var languages = [
{
  "code" : "fi",
  "name" : "Finnish"
},
{
    "code" : "se",
    "name" : "Swedish"
},
{
    "code" : "en",
    "name" : "English"
}];



var languageList = [];

for (i in languages) {
    languageList.push(languages[i]);
}

languageList.push({"code": "no", "name": "Norway"})


var languagesStr = JSON.stringify(languageList);

console.log(languagesStr)