// function myFunction(){
//     console.log("Hello World");
// }
// myFunction();

// function sum(x,y){
//     s = x +y;
//     return s;
// }
// let value=sum(5,3);
// console.log(value);

const multi=(c,d)=>{
    return c*d;
}
console.log(multi(4,5));


function carValue(car){
    if(car=="BMW" || car=="Audi"){
        console.log(car + " is an expensive car");
    }
    else{        console.log(car + " is not an expensive car");
    }
    return car;
}
carValue("BMW");
carValue("sd");
carValue("Audi");
carValue("sdf");

//forEach method
let names=["John","Jane","Doe"];
names.forEach((value, i) => {
    console.log(value, i);
});

//map method
let numbers=[1,2,3,4,5];
let squaredNumbers=numbers.map(val => {
    return val**2;
});
console.log(squaredNumbers);

//filter method
let numberslist=[1,2,3,4,5];
let biggerThanTwo=numberslist.filter(val => {
    return val > 2;
});
console.log(biggerThanTwo);

let mynumbers=[1,2,5]
let arraycount= mynumbers.length;
console.log(arraycount);
let mynewNumbers=mynumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue /arraycount;
});
console.log(mynewNumbers);