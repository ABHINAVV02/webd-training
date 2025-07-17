const prompt = require('prompt-sync')();

//flattten the array using recursion
function flattenArray(arr) {
    const flattedArray = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (Array.isArray(item)) {
        flattedArray.push(flattenArray(item));
      } else {
        flattedArray.push(item);
      }
    }
    return flattedArray;
  }
  
  const arr4 = [ 23,45, 67,43,[22, 45, [56]],[23, 4, 5, [7, 8, 6, [4, 7]]]];
console.log(flattenArray(arr4));
//using flat method
console.log(arr4.flat(Infinity));

  
// remove duplicate elements from array
function removeDuplicate(arr) {
  const newArray = [];
  for (let i of arr) {
    const item = arr[i];
    if (newArray.includes(item) === false) {
      newArray.push(item);
    }
  }
  return newArray;
}
console.log("\nRemove Duplicates from Array");
const input6 = prompt('Enter string elements comma-separated: ');
console.log(removeDuplicate(input6.split(',')));

// What will be the output of the following?

// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);   //Output will be [ 1, 2, 3, 4 ]

// How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?
function secondLargestnum(arr) {
    let max = -Infinity, second = -Infinity;
    for (let i of arr) {
      if (i > max) {
        secondmax = max;
        max = i;
      } else if (i > secondmax && i < max) {
        secondmax = i;
      }
    }
    return secondmax;
  }
  const arr1=[10, 5, 8, 1, 9]
  console.log(secondLargestnum(arr1));
  

// How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}


// Write a custom implementation of the .map() method (polyfill).

// How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]

// Sort by name (alphabetical), then age (ascending)

// Given an array of numbers, return a new array containing only the elements that are prime numbers.
// function Primearray(n) {
//     if (n < 2) return false;
//     for (let i = 2; i**2<=n; i++) {
//       if (n % i == 0) return false; 
//     }
//     return true;
//   }
  
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 13]; FOR REVIEW //
  

// What will this code output and why?
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr[0]);   //OUTPUT WILL BE UNDEFINED BECAUSE SIZE OF ARRAY IS 0 THAT MEANS IT IS AN EMPTY ARRAY .

// What’s the difference between Array.prototype.forEach and Array.prototype.map in terms of return value and use-case?
//for eaCH IS USED TO APPLY ANY FUNCTION OR ANY PIECE OF CODE FOR EVERY ELEMENT OF CODE WHERE FOR EACH WORKS LIKE A LOOP
// AND RETURNS NOTHING WHEREAS  MAP GENERATES A NEW ARRAY BY TRANSFORMING ELEMENTS OF ARRAY AND RETURNS A NEW ARRAY.

// What is the result of this?

const a1= [1, 2, 3];
const b1 = a.slice(0, 2);
b1[0] = 100;
console.log(a1); // ?
// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]
function Pairs(arr, final) {
    let pairarr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === final) {
          pairarr.push([arr[i], arr[j]]);
        }
      }
    }
    return pairarr;
  }
  
  const numArr = [1, 2, 3, 4, 5];
console.log(Pairs(numArr, 6));
  
// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]
function chunk(arr, size) {
    let CHUNKED = [];
    for (let i = 0; i < arr.length; i += size) {
      let chunkgroup = arr.slice(i, i + size);
      CHUNKED.push(chunkgroup);
    }
    return CHUNKED;
  }
  
  const tochunk = [1, 2, 3, 4, 5, 6];
  console.log(chunkArray(tochunk, 2));
  

// Explain what happens in this reduce expression:

console.log([1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0))

// What is the time complexity of Array.prototype.splice() in the worst case, and why?



