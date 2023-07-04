function interest():void{
    const p = document.getElementById('num1') as HTMLInputElement;
    const r  = document.getElementById('num2') as HTMLInputElement;
    const s = document.getElementById('num3') as HTMLInputElement;
  
    const si: number = (parseFloat(p.value) * parseFloat(r.value) * parseFloat(s.value)) / 100;
  
    console.log(si);
  
  }

  const num = prompt("enter any")
  console.log(num);
  
const num2 = Number(num)
console.log(num2);


function calculateIncomeTax(annualIncome: number): number {
  let taxAmount = 0;

  if (annualIncome > 250000 && annualIncome <= 500000) {
    taxAmount = (annualIncome - 250000) * 0.05;
  } else if (annualIncome > 500000 && annualIncome <= 1000000) {
    taxAmount = 250000 * 0.05 + (annualIncome - 500000) * 0.2;
  } else if (annualIncome > 1000000 && annualIncome <= 5000000) {
    taxAmount = 250000 * 0.05 + 500000 * 0.2 + (annualIncome - 1000000) * 0.3;
  }

  return taxAmount;
}

const annualIncome = Number(prompt("Enter the annual income: "));
const taxAmount = calculateIncomeTax(annualIncome);

console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);




const input1 = Number(prompt("Enter the first number: "));
const input2 = Number(prompt("Enter the second number: "));

const sum = input1 + input2;

console.log(`Sum: ${sum}`);

//..............//
const mark = Number(prompt("Enter the mark: "));

if (mark >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}


//....................//

const totalMark = Number(prompt("Enter the total mark percentage: "));

let grade;

if (totalMark > 90) {
  grade = "A";
} else if (totalMark >= 80) {
  grade = "B";
} else if (totalMark >= 70) {
  grade = "C";
} else if (totalMark >= 60) {
  grade = "D";
} else if (totalMark >= 50) {
  grade = "E";
} else {
  grade = "Failed";
}

console.log(`Grade: ${grade}`);

//.....................//

const input = Number(prompt("Enter a number (1-7) representing a day: "));

let day;

switch (input) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid Entry";
    break;
}

console.log(day);


//........................///

const inputs = Number(prompt("Enter a number: "));

console.log(`Multiplication table of ${inputs}:`);
for (let i = 1; i <= 10; i++) {
  const result = inputs * i;
  console.log(`${i} x ${inputs} = ${result}`);
}


//.................//

const limit:number = Number(prompt("Enter a limit: "));

let sum1:number = 0;

for (let i = 1; i <= limit; i++) {
  if (i % 2 !== 0) {
    sum1 += i;
  }
}

console.log(`Sum of odd numbers = ${sum}`);


//...............//

const row = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = '';

  for (let j = 1; j <= i; j++) {
    pattern += j + ' ';
  }

  console.log(pattern.trim());
}


//....................//

const size = Number(prompt("Enter the size of arrays: "));

const array1: number[] = [];
const array2: number[] = [];

console.log("Enter the values of Array 1:");
for (let i = 0; i < size; i++) {
  const value = Number(prompt(`Input value ${i + 1}: `));
  array1.push(value);
}

console.log("Enter the values of Array 2:");
for (let i = 0; i < size; i++) {
  const value = Number(prompt(`Input value ${i + 1}: `));
  array2.push(value);
}

console.log("Arrays before swapping:");
console.log("Array1:", array1);
console.log("Array2:", array2);

// Swap arrays
const temp = [...array1];
array1.length = 0;
array1.push(...array2);
array2.length = 0;
array2.push(...temp);

console.log("Arrays after swapping:");
console.log("Array1:", array1);
console.log("Array2:", array2);


//.....................//

const siz = Number(prompt("Enter the size of an array: "));
const array: number[] = [];

console.log("Enter the values of the array:");
for (let i = 0; i < siz; i++) {
  const value = Number(prompt(`Input value ${i + 1}: `));
  array.push(value);
}

let count = 0;
for (let i = 0; i < siz; i++) {
  if (array[i] % 2 === 0) {
    count++;
  }
}

console.log("Number of even numbers in the given array is", count);



//..................//


const size1 = Number(prompt("Enter the size of an array: "));
const array4: number[] = [];

console.log("Enter the values of the array:");
for (let i = 0; i < size1; i++) {
  const value = Number(prompt(`Input value ${i + 1}: `));
  array4.push(value);
}

array4.sort((a, b) => b - a);

console.log("Sorted array:");
console.log(array4.join(", "));

//.............................//


const input7 = String(prompt("Enter a string: "));

// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Check if the input string is a palindrome
const isPalindromeString = isPalindrome(input7);

// Display the result
if (isPalindromeString) {
  console.log("Entered string is a palindrome");
} else {
  console.log("Entered string is not a palindrome");
}


//.....................//

function addArrays(arr1: number[][], arr2: number[][]): number[][] {
  const rows = arr1.length;
  const cols = arr1[0].length;
  const sumArray: number[][] = [];

  for (let i = 0; i < rows; i++) {
    sumArray[i] = [];
    for (let j = 0; j < cols; j++) {
      sumArray[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return sumArray;
}

// Get the size of arrays
const sizez = Number(prompt("Enter the size of arrays:"));

// Initialize arrays
const array11: number[][] = [];
const array22: number[][] = [];

// Get values for array1
console.log("Enter the values of array 1:");
for (let i = 0; i < size; i++) {
  const row = (prompt(`Enter values for row ${i + 1}:`).split(" ").map(Number));
  array1.push(row);
}

// Get values for array2
console.log("Enter the values of array 2:");
for (let i = 0; i < size; i++) {
  const row = (prompt(`Enter values for row ${i + 1}:`).split(" ").map(Number));
  array2.push(row);
}

// Add the arrays
const sumArray = addArrays(array1, array2);

// Display the sum
console.log("Sum of 2 arrays is:");
for (let i = 0; i < size; i++) {
  console.log(sumArray[i].join(" "));
}

//....................//

function getArray(): number[] {
  const size = Number(prompt("Enter the size of the array:"));
  const array: number[] = [];

  console.log("Enter the values of the array:");
  for (let i = 0; i < size; i++) {
    const value = Number(prompt(`Enter value for index ${i}:`));
    array.push(value);
  }

  return array;
}

function displayArray(array: number[]): void {
  console.log("Array elements are:");
  console.log(array.join(" "));
}

function main(): void {
  const array = getArray();
  displayArray(array);
}

// Call the main function
main();


//.....................//

function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function mains(): void {
  const number = Number(prompt("Enter a number:"));

  if (isPrime(number)) {
    console.log("Entered number is a Prime number");
  } else {
    console.log("Entered number is not a Prime number");
  }
}

// Call the main function
mains();






