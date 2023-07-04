"use strict";
function interest() {
    const p = document.getElementById('num1');
    const r = document.getElementById('num2');
    const s = document.getElementById('num3');
    const si = (parseFloat(p.value) * parseFloat(r.value) * parseFloat(s.value)) / 100;
    console.log(si);
}
const num = prompt("enter any");
console.log(num);
const num2 = Number(num);
console.log(num2);
function calculateIncomeTax(annualIncome) {
    let taxAmount = 0;
    if (annualIncome > 250000 && annualIncome <= 500000) {
        taxAmount = (annualIncome - 250000) * 0.05;
    }
    else if (annualIncome > 500000 && annualIncome <= 1000000) {
        taxAmount = 250000 * 0.05 + (annualIncome - 500000) * 0.2;
    }
    else if (annualIncome > 1000000 && annualIncome <= 5000000) {
        taxAmount = 250000 * 0.05 + 500000 * 0.2 + (annualIncome - 1000000) * 0.3;
    }
    return taxAmount;
}
const annualIncome = Number(prompt("Enter the annual income: "));
const taxAmount = calculateIncomeTax(annualIncome);
console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
