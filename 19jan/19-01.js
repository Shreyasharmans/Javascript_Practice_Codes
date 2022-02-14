// In JavaScript, we can declare a variable in 3 ways
// 1. by using var
//ES6
// 2. by using let                                                                              
// 3. by using const

const myName = "John";
// myName="g";
console. log(myName + " is a good")

//const
const x=[1,2,3];
x.push(4);
console.log(x);
//string concatenation
const m="hello";
n=m+"ok";
console.log(n);

//var can b reassigned but let cannot be reassigned cant be done using let or const
var a=1;
console.log(a);
var a=2;
console.log(a);

//var in function
function myFunction(){
    var x1=1;
    console.log(x1);
}
myFunction();
// console.log(x1);//error


//block scope of var is global
{
    var x11="hello";
}
console.log(x11);


//-----------------------------------------------
// String Interpolation or template literals or tem//helps in memory optimisation

let firstName = "Shantanu"; 
let lastName = "Shubham"; 

console.log(firstName + " " + lastName) ;
//
// let fullName=firstName+" "+lastName;
//
let fullName = `${firstName} ${lastName}`;//str intp
console.log(fullName);
///function
//old
// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

//new arrow function//used in react
let addTwoNumbers = (num1, num2=5) => {
    return num1 + num2;
}

console.log(addTwoNumbers(1));
//----------------------------------------------------
//Rest and Spread Operator is used in array and object
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//spread operator
let newNumbers = [...numbers];
console.log(newNumbers);

let newNumbers1 = [1,2,3,...numbers, 6, 7, 8];
console.log(newNumbers1);
//
// Spread ->...
let newArray = [...numbers];//decloning//doubt++++++++++++
console.log(newArray) ;

//rest operator used in fn
let maxofnum = (...numbers) => {
    let max = -Infinity;//or -Math.max_num;
    for (let number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

console.log(maxofnum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));//10 result

//
//rest sprd in obj
let person = {
    name: "John",
    age: 30
};

let p2={...person,name:"Shubham",city:"Pune"};

console.log(p2);
//shallow copy only lvl 1 is copied // l2 is referenced ////deep cloning
let person1 = {
    name: "John",
    age: 30,
    address: {
        street: "50 Main st",
        city: "Boston"
    }
};

// let p3 = {...person1};
let p3 = JSON.parse(JSON.stringify(person1)); //for deep cloning of nested obj
p3.address.city="Pune";
console.log(p3);
console.log(person1);
///day1done---------------:)

//tommorow -> 
//map, forEach, find, sort, filter, obj destructuring
//array matching obj matching
//maps/sets
//classes in js

