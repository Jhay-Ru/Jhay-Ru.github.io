console.log("men");
//comment

//data
//let for changing values
//constant is constant
//number can be pos and neg + fractions

let myId = 1111;
console.log(myId);
myId = 2222;
console.log(myId);

let men = 4.3;
console.log("there are", men);
{
  let a = 2;
  let b = 4;
  let c = a + b;
  console.log("value", c);
}
//boolean cor condition checks
let isItToday = true;
let isHoliday = true;

//null undefined emoty and unknown

//strings to same values inc html
const name = "jhay";
console.log("hi", name);

const myRecord = { myName: "jason", id: "2233" };
console.log(myRecord);
console.log(myRecord.id);

//objects group things to one things
//array is a collection of objects
const grades = [32, 64, 33, 64, 82];
const city = ["mel", "syd", "ade"];
console.log("grade of No.3", grades[2]);
console.log("city visited", city[1]);
//it starts at 0 not 1

//if else, conditionals
if (isHoliday) {
  console.log("no clad");
} else {
  console.log("yes class");
}

//

let x = "40";
if (x === 40) {
  console.log(true);
} else {
  console.log(false);
}

//== equal to
//=== equal value and type

//LOGIC
//&& AND gate
//! NOT
//|| OR

if (grades > 20 && grades < 40) {
  console.log("you get c");
} else if (grades > 40 && grades < 50) {
  console.log("you get b");
}

//loops

const friends = ["abb", "bob", "crl", "dyln"];
//console.log ("hello",friends[2])
console.log(friends.length);
for (
  let i = 0;
  i < friends.length;
  i++ //just adds to i for array
) {
  console.log("hello", friends[i]);
}

///

// const expend = [10, 20, 30, 40]
// let totalSpend = 0;
// for (let totalspend = 0; totalspend<expend.totalSpend; totalspend++)
// {
//   console.log ("spent", expend[w]);
// }
const expend = [10, 20, 30, 40];
let totalSpend = 0;
console.log(expend.length);
for (let i = 1; 1 < expend.length; i++) {
  totalSpend = totalSpend + expend[i];
  console.log("total", totalSpend);
}
