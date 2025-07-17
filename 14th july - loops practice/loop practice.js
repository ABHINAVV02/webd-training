const prompt = require('prompt-sync')();

//print number from  10 to 1 using while loop
console.log('number from 10 to 1')
let i = 10;
while (i >0) {
  console.log(i);
  i--;
}

//Print numbers from 1 to 5 using a do...while loop
console.log('print number from 1 to 5')
let a = 1;
do {
  console.log(a);
  a++;
}
while (a < 6)
  
//Print numbers from 1 to 10 using a for loop.
console.log('print number from 1 to 10')
for (let i = 1; i < 11; i++) {
   console.log(i)
}

// Print all even numbers from 1 to 50.
console.log('all even no from 1 to 50')
for (let i = 1; i < 51; i++) {
  if(i%2==0){
    console.log(i)
  }
}

// Print all odd numbers between 20 and 50.
console.log('all odd numbers between 20 to 50')
for (let i = 20; i < 51; i++) {
  if(i%2!=0){
    console.log(i);
  }
}

// Print all numbers divisible by 3 from 1 to 30.
console.log('all numbers divisible by 3 from 1 to 30');
for (let i = 1; i < 31; i++) {
  if(i%3==0){
    console.log(i);
  }
}

//sum 0f 1 to 100
console.log('sum of 1 to 10')
let sum = 0 
for (let i = 1; i < 101; i++) {
    sum = sum + i;  
}
console.log(`the sum of numbers 1 to 100 is ${sum}`)

//product 0f 1 to 10
console.log('product 0f 1 to 10')
let product = 1 
for (let i = 1; i < 11; i++) {
  product = product * i;  
}
console.log(`the product of number 1 to 10 is ${product}`);

//Find the sum of all even numbers between 1 and 50.
console.log('Find the sum of all even numbers between 1 and 50.')
sum = 0;
for (let i = 1; i < 51; i++) {
  if(i%2==0){
    sum = sum + i;
  }
}
console.log(`the sum of all even numbers between 1 to 20 is ${sum}`);

//Find the sum of squares of numbers from 1 to 10.
console.log('Find the sum of squares of numbers from 1 to 10');
sum = 0 
for (let i = 1; i < 11; i++) {
    sum = sum + (i **2) ;  
}
console.log(`the sum of squares of numbers 1 to 10 is ${sum}`);

// Print numbers from 1 to 20, skip multiples of 4 using continue.
console.log('numbers from 1 to 20, skip multiples of 4.');
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  console.log(i);
}

// Print numbers from 1 to 10, stop at 7 using break.
console.log('numbers from 1 to 10, stop at 7.');
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

// Count how many numbers between 1 and 100 are divisible by both 3 and 5.
console.log('count numbers between 1 and 100 divisible by both 3 and 5.');
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) count++;
}
console.log(`count is ${count}`);

// Print all pairs (i, j) where i and j go from 1 to 3.
console.log('pairs (i, j) where i and j go from 1 to 3.');
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}

// Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).
console.log('combinations (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).');
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5)
      console.log(`(${a}, ${b})`);
  }
}

// Check if a given number is a prime number using a loop.
console.log('check if a given number is a prime number.');
let num1 =parseInt (prompt('enter number to check prime: '));
let isPrime = true;
if (num1 <= 1) isPrime = false;
else {
  for (let i = 2; i **2 <= num1; i++) {
    if (num1 % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(`${num1} is${isPrime ? '' : ' not'} prime`);

// Print the factorial of a number.
console.log(`print the factorial of a number.`);
let num = parseInt(prompt(`enter number to calculate factorial: `));
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(`factorial of ${num} is ${fact}`);

// Print the reverse of a number using a loop.
console.log(`print the reverse of a number.`);
num = parseInt(prompt(`enter number to reverse: `));
let rev = 0;
let temp = num;
while (temp !== 0) {
  rev = rev * 10 + (temp % 10);
  temp = (temp - (temp % 10)) / 10;
}
console.log(`reversed number is ${rev}`);

// Count the number of digits in a given number using a loop.
console.log(`count the number of digits in a given number.`);
num = parseInt(prompt(`enter number to count digits: `));
let digits = 0;
temp = num;
if (temp === 0) digits = 1;
else {
  while (temp !== 0) {
    digits++;
    temp = (temp - (temp % 10)) / 10;
  }
}
console.log(`number of digits is ${digits}`);

// Check if a number is a palindrome using only number operations and loops.
console.log(`check if a number is a palindrome.`);
num = parseInt(prompt(`enter number to check : `));
 temp = num;
rev = 0;
while (temp !== 0) {
  rev = rev * 10 + (temp % 10);
  temp = parseInt(temp / 10);
}
if (num === rev) {
  console.log(`${num} is palindrome`);
} else {
  console.log(`${num} is not palindrome`);
}

