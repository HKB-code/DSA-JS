// ## Data Structure:

/*A data structure is a specific way of organizing, storing, and accessing data. */

// ## Algorithms:

/*A set of instructions that tell a computer how to do something, or you can also say step-by-step solution of the problem is called algorithms. */

// Problem:
/*
Create an array with5 students names, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "studentName"
 */

// What is the sepecific Data Structure we use for these problems?
// =>And that is array
const studentDatabase = ["jordan", "harshil", "peter", "john"];

//And this the algorithms we use for finding  that specific user...
function checkUser(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found: ${studentName}`);
    }
  }
}
checkUser(studentDatabase, "harshil");

/*A labeled break statement lets you exit out of a specific loop in JavaScript, rather than just the nearest one. It's like placing a marker so you can break out precisely where you need. */
// This is the label
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // This breaks out of the outer loop
    }
    console.log("i = " + i + ", j = " + j);
  }
}
console.log("Done");
/*The  purpose of the labeled break statement is to give you more control over your loops. It allows you to break out of not just the nearest enclosing loop, but any outer loop you specify with a label. This is especially useful in nested loops where you might want to exit more than just the innermost loop upon a certain condition.

It's all about improving readability and maintainability, making sure your code is doing exactly what you want it to do, and avoiding convoluted workaround logic.  */

function numberToWords(num) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return num
    .toString()
    .split("")
    .map((digit) => words[digit])
    .join("");
}

console.log(numberToWords(123)); // Outputs: "onetwothree"
///////////////////////////////
// Problem Statement:
// You want x to pass the following condition:
if (x == 1 && x == 2 && x == 3) {
  console.log("Done");
}

//Method-1
// let x = {
//   flag: 1,
//   toString: function () {
//     return this.flag++;
//   },
// };

// if (x == 1 && x == 2 && x == 3) {
//   console.log("Done");
// }

//Method-2,Solution:
// We can use a getter to achieve this. The getter allows us to control what happens when a property is accessed.

/*value is initially set to 1. This variable will be used to control the value of x when accessed. */
let value = 1;
/*Object.defineProperty is used to define a new property (x) on the global object (globalThis).

globalThis is a standard way to refer to the global object in any environment (e.g., window in browsers, global in Node.js). */
Object.defineProperty(globalThis, "x", {
  get: function () {
    return value++;
  },
  /*This getter function is called whenever x is accessed.

return value++:

The first time x is accessed, it returns 1 and then increments value to 2.

The second time x is accessed, it returns 2 and then increments value to 3.

The third time x is accessed, it returns 3 and then increments value to 4. */
});

if (x == 1 && x == 2 && x == 3) {
  console.log("Done");
}
