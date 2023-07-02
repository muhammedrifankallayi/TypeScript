console.log('hello');


let val:string='ajmal'
val='fgb'

console.log(val);
console.log("hello");
console.log('hey');

const btn: HTMLElement | null = document.getElementById('btn');
const h1: HTMLElement | null = document.querySelector('h1');

if (btn && h1) {
  btn.addEventListener('click', () => {
    console.log('hello');
    const num1Input: string | null = prompt("Enter the first number");
    const num2Input: string | null = prompt("Enter the second number");
    
    if (num1Input !== null && num2Input !== null) {
      const num1: number = parseFloat(num1Input);
      const num2: number = parseFloat(num2Input);
      
      if (!isNaN(num1) && !isNaN(num2)) {
        const sum: number = num1 + num2;
        h1.innerText = `Sum: ${sum}`;
      } else {
        h1.innerText = 'Invalid numbers entered';
      }
    } else {
      h1.innerText = 'Number input canceled';
    }
  });
}




