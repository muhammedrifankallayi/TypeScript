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



