const prompt = require('prompt-sync')();

// Even or Odd Checker
const num1 = parseInt(prompt('Enter a number: '));
if (num1 % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

// Positive, Negative, or Zero
const num2 = parseInt(prompt('Enter a number: '));
if (num2 > 0) {
  console.log('Positive');
} else if (num2 < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}

// Age-based Eligibility
const age = parseInt(prompt('Enter your age: '));
if (age >= 18) {
  console.log('Eligible to vote');
} else {
  console.log('Not eligible to vote');
}

// Number Range Validator
const num4 = parseInt(prompt('Enter a number(10 to 20): '));
if (num4 >= 10 && num4 <= 20) {
  console.log('In range');
} else {
  console.log('Out of range');
}

// Check Number Equality
const n1 = parseInt(prompt('Enter first number : '));
const n2 = parseInt(prompt('Enter second number: '));
if (n1 === n2) {
  console.log('Both numbers are equal');
} else if (n1 > n2) {
  console.log('First number is larger');
} else {
  console.log('Second number is larger');
}

// Simple Grading System
const score = parseInt(prompt('Enter your score: '));
if (score >= 90) {
  console.log('Grade A');
} else if (score >= 75) {
  console.log('Grade B');
} else if (score >= 50) {
  console.log('Grade C');
} else {
  console.log('Fail');
}

// Divisibility Checker (5 and 11)
const num7 = parseInt(prompt('Enter a number: '));
if (num7 % 5 === 0 && num7 % 11 === 0) {
  console.log('Divisible by both 5 and 11');
} else {
  console.log('Not divisible by both 5 and 11');
}

// Find the Largest of Three Numbers
const a = parseInt(prompt('Enter first number: '));
const b = parseInt(prompt('Enter second number: '));
const c = parseInt(prompt('Enter third number : '));
if (a >= b && a >= c) {
  console.log('Largest number is:', a);
} else if (b >= a && b >= c) {
  console.log('Largest number is:', b);
} else {
  console.log('Largest number is:', c);
}

// Leap Year Validator
const year = parseInt(prompt('Enter a year (Leap Year Validator): '));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log('Leap year');
} else {
  console.log('Not a leap year');
}

// Vowel or Consonant
const char = prompt('Enter an alphabet (Vowel or Consonant): ');
if (
  char.length === 1 &&
  (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
) {
  console.log('Vowel');
} else if (
  char.length === 1 &&
    ((char >= 'a' && char <= 'z'
)||(char >= 'A' && char <= 'Z'))) {
  console.log('Consonant');
} else {
  console.log('Invalid input');
}
