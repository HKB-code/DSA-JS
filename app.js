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
