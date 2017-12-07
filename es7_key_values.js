// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let isObjectEntriesSupported = true;
try { 
   Object.entries({'0':'foo'});
}
catch (e) {
    isObjectEntriesSupported = false;
}



/******************* ES2017 features *********************/
if (isObjectEntriesSupported) {
    let programmer = { 'name': 'John', 'age': 45, 'job': 'developer' };
    console.log(Object.entries(programmer).join("; ")); 
    console.log(Object.values(programmer)); 
    console.log(Object.keys(programmer)); 

    let map = new Map(Object.entries(programmer));
    console.log(map);
}

