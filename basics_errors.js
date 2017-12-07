// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
try {
  throw new Error('Generating error!');
  console.log("Print info");
} catch (err) {
  console.log(err)
  console.log(err.name + ': ' + err.message);
}

function getLastItem(arr) {
	if (arr.length > 0)
	    return arr[arr.length - 1];
	else
	    throw "No elements in Array";
}


try {
    console.log(getLastItem([]) + 10);
}
catch (err) {
    console.log("Error: ", err);
    console.log(err.name + ': ' + err.message);
}

// Error: Generating error!
//Error:  Zero element in Array

// No error handling

function getLastItemNoErrorHandling(arr) {
	return arr[arr.length - 1];
}


try {
    console.log(getLastItemNoErrorHandling([]) + 10);
}
catch (err) {
    console.log("Error: ", err);
}