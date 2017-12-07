// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017
let companyName = "My Shining Company"

let mup = {
    header : "My Header",
    content: "This is a line",
    footer: `Copyright by ${companyName}`
}

let myHtml = `<body>
<h1>${mup.header}</h1>
<div>${mup.content}</div>
<footer>${mup.footer}</footer>`;
console.log(myHtml);
