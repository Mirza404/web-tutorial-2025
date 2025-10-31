// JavaScript Basics Refresher

// let: can be reassigned
let num = 5;
num = 8; // works fine
console.log("let example:", num);

// const: cannot be reassigned (immutable binding)
const numConst = 10;
// numConst = 15; // ❌ will throw an error
console.log("const example:", numConst);

// var: function-scoped (old way, avoid in modern code)
var oldVar = "Im function scoped!";
console.log("var example:", oldVar);


// PRIMITIVE vs REFERENCE TYPES

// Primitive: number, string, boolean, null, undefined, symbol, bigint
let x = 10;
let y = x; // copies value
y = 20;
console.log("Primitive:", x, y); // x not affected

// Reference: arrays, objects, functions
let arr1 = [1, 2, 3];
let arr2 = arr1; // copies reference
arr2.push(4);
console.log("Reference:", arr1, arr2); // both changed


// -------------------------------------
// CONTROL FLOW (if, else, switch)
// -------------------------------------

// let hour = 15;

// if (hour < 12) {
//   console.log("Good morning!");
// } else if (hour < 18) {
//   console.log("Good afternoon!");
// } else {
//   console.log("Good evening!");
// }

// let color = "blue";
// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   default:
//     console.log("Unknown color");
//     break;
// }


// -------------------------------------
// LOOPS (for, while, do…while)
// -------------------------------------

// // for loop
// for (let i = 0; i < 3; i++) {
//   console.log("for loop iteration:", i);
// }

// // while loop
// let count = 0;
// while (count < 3) {
//   console.log("while loop:", count);
//   count++;
// }

// // do...while loop (runs at least once)
// let numCheck = 0;
// do {
//   console.log("do...while loop:", numCheck);
//   numCheck++;
// } while (numCheck < 2);


// -------------------------------------
// ARRAYS & COMMON METHODS
// -------------------------------------

// let fruits = ["apple", "banana", "cherry"];
// fruits.push("date"); // add at end
// console.log("push:", fruits);

// fruits.pop(); // remove last
// console.log("pop:", fruits);

// let sliced = fruits.slice(0, 2); // new array, not modifying original
// console.log("slice:", sliced);

// fruits.unshift("kiwi"); // add to start
// console.log("unshift:", fruits);

// fruits.sort(); // alphabetically sort
// console.log("sort:", fruits);


// -------------------------------------
// OBJECTS & OBJECT LITERALS
// -------------------------------------

// let person = {
//   name: "Alice",
//   age: 25,
//   hobbies: ["reading", "coding"],
//   greet: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// console.log("Object:", person);
// person.greet();


// -------------------------------------
// FUNCTIONS, SCOPE, CALLBACKS
// -------------------------------------

// Regular function
function add(a, b) {
  return a + b;
}
console.log("add function:", add(5, 10));

// Function scope
function scopeExample() {
  let innerVar = "I exist only inside this function";
  console.log(innerVar);
}
scopeExample();
// console.log(innerVar); // will throw error

// Callback example
function processUserInput(callback) {
  let name = "Bob";
  callback(name);
}
processUserInput(function(user) {
  console.log("Callback says hello to:", user);
});


// =====================================
// 🧩 FINAL TASK: MODIFY THIS MINI APP
// =====================================

// Task idea:
// Build upon this: 
// Ask user for name, store it in an object, and greet them using functions.

function createUser(name, age) {
  return {
    name,
    age,
    greet: function() {
      console.log(`👋 Hello ${this.name}, you are ${this.age} years old!`);
    }
}
}

// Initial data
const user1 = createUser("Charlie", 28);
user1.greet();

//   Tasks:
// - Add a new property (like "city" or "hobby")
// - Add a new function (like "describe()" that logs all info)
// - Try to use an array inside your object (e.g. hobbies)
// - Print it nicely in console

// Example extension (for teacher demo):
// user1.city = "Toronto";
// user1.describe = function() {
//   console.log(`${this.name} lives in ${this.city}`);
// };
// user1.describe();
