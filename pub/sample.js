"use strict";
console.log('hello');
let val = 'ajmal';
val = 'fgb';
console.log(val);
console.log("hello");
console.log('hey');
const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');
if (btn && h1) {
    btn.addEventListener('click', () => {
        console.log('hello');
        const num1Input = prompt("Enter the first number");
        const num2Input = prompt("Enter the second number");
        if (num1Input !== null && num2Input !== null) {
            const num1 = parseFloat(num1Input);
            const num2 = parseFloat(num2Input);
            if (!isNaN(num1) && !isNaN(num2)) {
                const sum = num1 + num2;
                h1.innerText = `Sum: ${sum}`;
            }
            else {
                h1.innerText = 'Invalid numbers entered';
            }
        }
        else {
            h1.innerText = 'Number input canceled';
        }
    });
}
