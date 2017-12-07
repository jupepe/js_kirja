// JavaScript-kieli kirjan esimerkki
// Juha Peltomäki, 2017

const person = {"name": "Mariah", "age": 44};
// destructuring 
const {"name": name, "age": age} = person;
console.log(name + " " + age); // Mariah 44
//name = 45; // TypeError: Assignment to constant variable



let jack = {
  name: "Jack",
  age: 42,
  tasks: {
    manager: "ICT",
    developer: "JavaScript", 
    future: "Boss"
  }
};

let { name: jack_name, age: jack_age, tasks: {manager: t1, developer: t2, future: t3} } = jack
console.log(jack_name + ", " + jack_age + "," + t1 + "," + t2 + "," + t3)

let bill = {
  name: "Bill",
  age: 25,
  skills: ["javaScript", "Designing", "CSS3"]
};
let { name: bill_name, age: bill_age, skills: props } = bill
console.log(bill_name + ", " + bill_age + "," + props)
