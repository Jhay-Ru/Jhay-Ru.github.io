//"let" can chnage value, "const" remain fixed
//numeric, for math (let a=10;)
//string, any text (const name = "Victoria";)
//boolean, true or false (let isItRaining = false;)
//object, group of valriables of same entity - age, student,id (let student = { name:"jhay", id:1,};) (student.name student.id)
//array, collection but theyre the same type (let grades = [12, 55, 38, 90];) (let names=[a, b,c]) -> (grades[1] ->55 starts at 0) (grades.length)

//conditions
//if (condition) {true -> execute}
//else {execute this}
// if (isItRaining) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

//loops, lterate a function
// for (let i =0; i < names.length; 1++) {
//     console.log("hello", name[i]);
// }

//Functions, scripts that activated when needed
// let b = 20;
// function add(a, b) {
//     let c = a + b;
//     console.log("value of c", c)
// } //this defines a function

// add(a, b); //this calls a function
// add(1, 3);

function greet(name) {
  let greetings = "hello" + name;
  return greetings;
}
let welcome = greet("jhay");
console.log(welcome);
console.log(greet("jaye"));
