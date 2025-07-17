const prompt = require('prompt-sync')();

// reverses string
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr.concat(str[i]);
  }
  return reversedStr;
}
console.log("\nReverse String");
const str = prompt('Enter a string: ');
console.log(reverseString(str));

// palindrome checker
function isPalindrome(str) {
  const originStr = str.toUpperCase();
  let reversedStr1 = '';
  for (let i = originStr.length - 1; i >= 0; i--) {
    reversedStr1 += originStr[i];
  }
  return originStr === reversedStr1;
}
console.log("\nCheck Palindrome");
console.log(isPalindrome(prompt('Enter a string: ')));

// count no. of vowels in string
function countVowels(str) {
  let vowelCount = 0;
  const lStr = str.toLowerCase();

  for (let i = 0; i < lStr.length; i++) {
    const letter = lStr[i];
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log("\nCount Vowels");
console.log(countVowels(prompt('Enter a string: ')));

// capitalize the first letter of each word.
function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalizedstr = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length === 0) {
      capitalizedstr.push('');
    } else {
      const firstLetter= word[0].toUpperCase();
      const restWord = word.slice(1);
      capitalizedstr.push(firstLetter + restWord);
    }
  }
  return capitalizedstr.join(' ');
}
console.log("\nCapitalize first letterof words of string");
console.log(capitalizeWords(prompt('Enter a string: ')));

// count of repeatation of each character in string
function charFrequency(str) {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    const a = str[i];
    count[a] = count[a] ? count[a] + 1 : 1;
  }
  return count;
}


console.log("\nCharacter repeatation in string");
console.log(charFrequency(prompt('Enter a string: ')));

// remove duplicate elements from array
function removeDuplicate(arr) {
const nSet = new Set(arr);
  return nSet;
}
console.log("\nRemove Duplicates from Array");
const input6 = prompt('Enter string elements comma-separated: ');
console.log(removeDuplicate(input6.split(',')));


//flatten single nested array 
function flattenArray(arr) {
  const flattedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        flattedArray.push(item[j]);
      }
    } else {
      flattedArray.push(item);
    }
  }
  return flattedArray;
}

console.log("\nFlatten Array");
const input7 = [1, 2, [3, 4], 5, [6, 7]];
console.log(flattenArray(input7));

// maximum and minimum values in an array of numbers.
const arrin=[23,45,65,98,34,997]
function MaxMin(arr) {
  let biggest = arr[0];
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];
    if (currentNum> biggest) biggest = currentNum;
    if (currentNum < smallest) smallest = currentNum;
  }
  return { max: biggest, min: smallest };
}
console.log(MaxMin(arrin));

// sum of all even numbers in an array.
function sumofEven(arr) {
  let Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 == 0) {
      Sum += num;
    }
  }
  return Sum;
}
console.log("\nSum Even Numbers in Array");
console.log(sumofEven(arrin));

// group elements of an array by their data type
function groupByType(arr) {
  const groups = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const type = typeof item;
    if (groups[type] === undefined) {
      groups[type] = [];
    }
    groups[type].push(item);
  }

  return groups;
}

console.log("\nGroup Array Elements by Type");
const input = [23, "hello", true, false, 12];
console.log(groupByType(input10.split(',')));
