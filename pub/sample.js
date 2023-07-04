"use strict";
// // console.log('hello');
// // let val:string='ajmal'
// // val='fgb'
// // console.log(val);
// // console.log("hello");
// // console.log('hey');
// // const btn: HTMLElement | null = document.getElementById('btn');
// // const h1: HTMLElement | null = document.querySelector('h1');
// // if (btn && h1) {
// //   btn.addEventListener('click', () => {
// //     console.log('hello');
// //     const num1Input: string | null = prompt("Enter the first number");
// //     const num2Input: string | null = prompt("Enter the second number");
// //     if (num1Input !== null && num2Input !== null) {
// //       const num1: number = parseFloat(num1Input);
// //       const num2: number = parseFloat(num2Input);
// //       if (!isNaN(num1) && !isNaN(num2)) {
// //         const sum: number = num1 + num2;
// //         h1.innerText = `Sum: ${sum}`;
// //       } else {
// //         h1.innerText = 'Invalid numbers entered';
// //       }
// //     } else {
// //       h1.innerText = 'Number input canceled';
// //     }
// //   });
// // }
// // function myFilter(myArray: number[], callback: (element: number) => boolean): number {
// //   let sum = 0;
// //   for (const num of myArray) {
// //     sum += num;
// //   }
// //   const isSumEven = callback(sum);
// //   return isSumEven ? sum : 0;
// // }
// // const myArray = [1, 2, 3, 4];
// // const isSumEven = (sum: number) => sum % 2 === 0;
// // const result = myFilter(myArray, isSumEven);
// // console.log(result); 
// // receive values to a class 
// // class Car {
// //   name: string;
// //   mileage: number;
// //   max_speed: number;
// //   constructor(name: string, mileage: number, max_speed: number) {
// //     this.name = name;
// //     this.mileage = mileage;
// //     this.max_speed = max_speed;
// //   }
// // }
// function HeightCheck(height:any):void{
//   if(typeof height !== 'number'){
//     throw new Error("notANumberError- When my_heightis NaN");
//   }
//   if(height>=20){
//     throw new Error(" HugeHeightError- When my_height Greater than 20");
//   }
//   if(height<=0){
//     throw new Error(" TinyHeightError- When my_height Less than 0 or below");
//   }
//   console.log(height);
// }
// // HeightCheck(0)
// // const my_string = "1234";
// // try {
// //   const reversed_string = my_string.split("").reverse().join("");
// //   console.log(`Reversed string is: ${reversed_string}`);
// // } catch (err) {
// //   console.log(`Error: ${err}`);
// // } finally {
// //   console.log(`Type of my_string is: ${typeof my_string}`);
// // }
// interface Book {
//   title: string;
//   author: string;
//   readingStatus: boolean;
// }
// const library: Book[] = [
//   {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     readingStatus: true
//   },
//   {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     readingStatus: true
//   },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     readingStatus: false
//   }
// ];
// for (const book of library) {
//   if (book.readingStatus) {
//     console.log(`Already read '${book.title}' by ${book.author}.`);
//   } else {
//     console.log(`You still need to read '${book.title}' by ${book.author}.`);
//   }
// }
// // class Area {
// //   static circle(r: number): number {
// //     return Math.PI * r * r;
// //   }
// //   static square(L: number): number {
// //     return L * L;
// //   }
// //   static rectangle(length: number, width: number): number {
// //     return length * width;
// //   }
// //   static triangle(base: number, height: number): number {
// //     return 0.5 * base * height;
// //   }
// // }
// // class MyClass extends Area {
// //   static main(): void {
// //     const shape = prompt("Please enter any of the following:\n1. for Circle\n2. for Square\n3. for Rectangle\n4. for Triangle");
// //     switch (shape) {
// //       case "1":
// //         MyClass.circle();
// //         break;
// //       case "2":
// //         MyClass.square();
// //         break;
// //       case "3":
// //         MyClass.rectangle();
// //         break;
// //       case "4":
// //         MyClass.triangle();
// //         break;
// //       default:
// //         alert("Invalid shape entered.");
// //         break;
// //     }
// //   }
// //   static circle(): void {
// //     const radius = (prompt("Please enter the radius of the circle: "));
// //     const area = Area.circle(parseFloat(radius));
// //     document.write(area.toString());
// //     alert("The area of the circle is: " + area);
// //   }
// //   static square(): void {
// //     const side = parseFloat(prompt("Please enter the length of a side of the square: "));
// //     const area = Area.square(side);
// //     document.write(area.toString());
// //     alert("The area of the square is: " + area);
// //   }
// //   static rectangle(): void {
// //     const length = parseFloat(prompt("Please enter the length of the rectangle: "));
// //     const width = parseFloat(prompt("Please enter the width of the rectangle: "));
// //     const area = Area.rectangle(length, width);
// //     document.write(area.toString());
// //     alert("The area of the rectangle is: " + area);
// //   }
// //   static triangle(): void {
// //     const base = parseFloat(prompt("Please enter the base of the triangle: "));
// //     const height = parseFloat(prompt("Please enter the height of the triangle: "));
// //     const area = Area.triangle(base, height);
// //     document.write(area.toString());
// //     console.log(area);
// //     alert("The area of the triangle is: " + area);
// //   }
// // }
// // MyClass.main();
// class Array2D {
//   private array: number[][];
//   constructor() {
//     this.array = [];
//   }
//   getArray(): void {
//     const input = document.getElementById("num1") as HTMLInputElement
//     const size  =  parseFloat(input.value)
//     for (let i = 0; i < size; i++) {
//       this.array[i] = [];
//       const values = prompt(`Enter the values for row ${i + 1}, separated by spaces:`).split(" ");
//       for (let j = 0; j < size; j++) {
//         this.array[i][j] = parseInt(values[j]);
//       }
//     }
//   }
//   displayArray(): void {
//     console.log("Array elements are:");
//     for (const row of this.array) {
//       console.log(row.join("\t"));
//     }
//   }
// }
// function main(): void {
//   const array2D = new Array2D();
//   array2D.getArray();
//   array2D.displayArray();
// }
// main();
// function multiplyAdjacentValues(inputArray: number[]): number[] {
//   const resultArray: number[] = [];
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     resultArray.push(inputArray[i] * inputArray[i + 1]);
//   }
//   return resultArray;
// }
// function main(): void {
//   const limit = parseInt(prompt("Enter the array limit: "));
//   const inputArray: number[] = [];
//   for (let i = 0; i < limit; i++) {
//     const value = parseInt(prompt(`Enter the value at index ${i}: `));
//     inputArray.push(value);
//   }
//   const resultArray = multiplyAdjacentValues(inputArray);
//   console.log("Output:");
//   console.log(resultArray.join("\t"));
// }
// main();
function printPattern(rows) {
    let counter = 1;
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += counter + "\t";
            counter++;
        }
        console.log(row);
    }
}
const rows = 4;
printPattern(rows);
