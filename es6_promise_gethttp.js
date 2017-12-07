// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
require('isomorphic-fetch');
//isomorphic-fetch lib is for using the new promise-based HTTP fetch API 
let co = require('co');
// https://www.npmjs.com/package/co

function getFileFromUrl(url) {
    return fetch(url)
        .then(request => request.text());
}

co(function* readUrl() {
    let [responseUrl1, responseUrl2, responseUrl3] 
    = yield Promise.all([  
        getFileFromUrl('https://api.opensource.org/licenses/osi-approved'),
        getFileFromUrl('https://api.opensource.org/licenses/permissive'),
        getFileFromUrl('https://api.opensource.org/licenses/copyleft'),
    ]);

    let response1 = JSON.parse(responseUrl1);
    let response2 = JSON.parse(responseUrl2);
    let response3 = JSON.parse(responseUrl3);

    return {"response1" : response1, "response2": response2, "response3": response3};

})//.catch(errorHandler);
.then(function (p) {
  console.log("1st response");
  console.log(p.response1[0]);
  console.log("2nd response");
  console.log(p.response2[0]);
  console.log("3th response");
  console.log(p.response3[0]);
}, function (err) {
  console.error(err.stack);
});
 
