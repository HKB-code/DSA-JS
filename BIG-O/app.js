// How can we tell if the code we just wrote is good code?
//=>Big O- Big O notation help us to understand "how long" an algorithm will take to run or "how much" money it will need as the amount of data it handles grows.

//Time-complexity: how lomg an algorithms will take to run
//Space-compleity: how much money it will need as the amount of data it handles grows

//Big O = time-complexity +  space-complexity

//Analogy:Imagine you have a giant mess to clean. Big O  notation is like saying how the cleaning time grows as the mess gets bigger.

//////////////////////////
// 1.Linear Time: O(n)- Signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data(n).

//Analogy: As the number of items in the input data increases, the time it takes for the algorithms to run increase correspondingly.

//Example: Imagine you have a list of groceries. To find a specific item( like milk), You might need to scan through the entire list. If the list has 5 items, it'll take a relatively short time. But if the list has 500 items, it'll take considerably longer. This is the essence of linear time complexity.

//PROBLEM:
const groceriesItems = [
  "Bread",
  "Onion",
  "Cheese",
  "Butter",
  "Bananas",
  "Cherry",
  "Milk",
  "Sugar",
];

const searchItems = (item) => {
  for (let i = 0; i < groceriesItems.length; i++) {
    if (groceriesItems[i] === item) {
      console.log(`Found ${item}`);
    }
  }
};
searchItems("Milk");

const searchItems1 = (item) => {
  for (let i = 0; i < groceriesItems.length; i++) {
    if (groceriesItems[i] === item) {
      console.log(`Found ${item}`);
    }
  }

  for (let j = 0; j < groceriesItems.length; j++) {
    if (groceriesItems[j] === item) {
      console.log(`Found ${item}`);
    }
  }
  // n + n  = O(2n)
  //Drop the constant so it becomes O(n)
};
searchItems1("Milk");

//2.Constant Time - O(1): It signifies that the execution time of an algorithm remain constant regardless of the input size.

//O(1)
const numbers = [1, 2, 3, 4, 5];

const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0));

//3.Quadratic Time - O(n^2): Indicates that the algorithms execution time grows quadratically with the size of the input data (represented by n)

//Analogy: Imagine you have a box of items and want to compare each item with every other item to find specific pairs. As the number of items(n) increases, the number of comparisons (n^2) grows much faster.

function findParis(arr) {
  //O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]},${arr[j]}`);
    }
  }
}
findParis([1, 2, 3, 4, 5]);

function findParis1(arr) {
  //O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]},${arr[j]}`);
    }
  }
  //O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log(`--------------- ${q}`);
  }

  //If we combine all the "O" operation it becomes O(n^2+n)
  //O(n^2) is a dominant term
  // "n" is a Non-Dominant term
  //So we remove the "non-dominant" term and we're only left with O(n^2)
  // This way, we simplify our bigO
}
