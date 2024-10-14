//Sum of first n Natural numbers:
//Big O = o(n)
const fn = function (n) {
  sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(fn(5));
//Fibonacci sequence(Recursive)
//o(2^n)
const fb = function (n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fb(n - 1) + fb(n - 2);
  }
};
console.log(fb(6));

//Min and max
//o(n)
const mn_mf = function (arr) {
  min = 0;
  max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(max, min);
};
mn_mf([1, 2, -3, 4]);

//binary search:
/*You
what is binary search
Copilot
Binary search is a fast and efficient algorithm for finding a target value within a sorted array. Here's how it works:

Start in the Middle: Begin with the middle element of the array.

Compare: If the middle element is the target, you're done. If the target is smaller, search the left half. If the target is larger, search the right half.

Repeat: Repeat this process on the chosen half until you find the target or the search space is empty. */
const bs = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
let value = bs([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);
console.log(value);
