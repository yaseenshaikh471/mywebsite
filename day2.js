// //this is artimatic operators /
// let a = 10;
// let b = 5;
// console.log("a + b = " + (a + b));
// console.log("a - b = " + (a - b));
// console.log("a * b = " + (a * b));
// console.log("a / b = " + (a / b));
// console.log("a % b = " + (a % b));  
// console.log("a ** b = " + (a ** b));    

// //unary operators
// let c = 10;
// console.log("c = " + c++);
// let d = 12;
// console.log("++d = " + ++d);

// console.log("c = " + c)
// console.log("d = " + d)

// assignment operators
// let e = 10;
// e += 5; // e = e + 5
// console.log("e = " + e);
// e -= 3; // e = e - 3
// console.log("e = " + e);
// e *= 2; // e = e * 2
// console.log("e = " + e);
// e /= 4; // e = e / 4
// console.log("e = " + e);
// e %= 3; // e = e % 3
// console.log("e = " + e);
// e **= 2; // e = e ** 2
// console.log("e = " + e);

//COMPARISON OPERATORS
// let f= 10;
// let g = "10";
// console.log("f == g: " + (f == g)); // true (loose equality)
// console.log("f === g: " + (f === g)); // false (strict equality)

// //conditional statements
// let h = 20;
// if (h > 15) {
//     console.log("h is greater than 15");
// }

// alert("Hello, World!");
// let name= prompt("What is your name?");
// console.log("Hello, " + name );

// let num= prompt("Enter a number: ");
// if (num % 3 === 0) {
//     console.log(num + " divisible number by 3.");
// } else {
//     console.log(num + " divisible number by 3.");
// }

// let num= prompt("one more: ");
// if (num % 8 === 1) {
//     console.log(num + " has a remainder of 1 when divided by 8.");
// } 
// else if (num % 8 === 0) {
//     console.log(num + " is divisible by 8.");
// }
// else {
//     console.log(num + " does not have a remainder of 1 when divided by 8.");
// }

// for(let i=1;i<=10;i++){
//     console.log(i)
// };
// for (let j=2; j<=50; j+=2){
//     console.log(j)
// }

// let fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }
// let num=1
// while (num<=100)
// {
//     console.log("num: " + num);
//     num++;
// }
// for (let i=1; i<=100; i++){
//     if (i %2 === 1){
//         console.log("i: " + i);
//     }
// }
// let numgame=prompt("Enter anumber")
// if (numgame == 15) {
//     console.log("you are right");
// }
// else {
//     console.log("you are wrong");
// }

// let gamenum=25
// let uernum=prompt("guess the number and enter it:")

// while(uernum != gamenum){
//     uernum = prompt("guess the number and enter it:");
// }
// alert("you are right");


//template litrel
// console.log(`the number is ${gamenum}`);

// //\n
// console.log("line 1\nline 2\nline 3");


// let name = "Alice";
// let hisname= name.toUpperCase();
// console.log(hisname);


// let price = "19.99$";
// let numprice = price.trim();
// console.log(numprice);

// let cost = "19.99$";
// let numcost  = parseFloat(cost);
// console.log(numcost); 

let cost = "19.99$";
let numcost  = cost.replace("$", "");
console.log(numcost);

let oldname= "Shaikh";
let newname= oldname.slice(1,5);
console.log(newname);


//concat

let str1="Yaseen";
let str2="Shaikh";
let myName=str1.concat(str2);
console.log(myName);

let middleName="Shafiq";
let correcMname=middleName.replace("Shafiq", "Shafi Shaikh");
console.log(correcMname);

let namePrompt=prompt("Enter your name: ");
lengthofName=namePrompt.length;
let userid=namePrompt + lengthofName;
console.log("Your user ID is: @" + userid);