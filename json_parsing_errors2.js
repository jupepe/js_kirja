// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

let showErrorMessages = function(error) {
    console.log(`${error} ${error.name}: ${error.message}`);
}

try {
    let person2 = `
    {
        "first": "Don",
        last: "Buster",
        "age" : 60
    }
    `

    console.log(JSON.parse(person2));

} catch (exp) {
    if (exp instanceof SyntaxError) {
        showErrorMessages(exp);
    } else {
        showErrorMessages(exp);
    }
}
 
