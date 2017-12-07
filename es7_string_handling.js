// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let isPadSupported = true;
try { 
   '*'.padStart(1);
}
catch (e) {
    isPadSupported = false;
}

//********* ES7 String examples ****************************

if (isPadSupported) {
//if (isPadSupported && isFirefox) {
    let padSpace = 'Add some pad'.padStart(15, '#');
    let padSpace2 = 'Add some pad'.padEnd(15, '#');
    console.log(`"${padSpace}" and "${padSpace2}"`);

    let padStr = 'Add some pad'.padStart(20,"Extra");
    let padStr2 = 'Add some pad'.padEnd(24,"Extra");
    console.log(`"${padStr}" and "${padStr2}"`);

    let padStar = ''.padEnd(80,"*");
    console.log(`"${padStar}"`);
}


