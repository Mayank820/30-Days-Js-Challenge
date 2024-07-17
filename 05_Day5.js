// Activity 1:- Function Declaration
// Task 1:- Write a Function to check if a number is even or odd and log the result in the console
function oddOrEven(num) {
    console.log('Function to check if a number is even or odd and log the result in the console');
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

oddOrEven(21)

// Task 2:- Write a function to calculate the square of a number and return the result
function square(num) {
    console.log('Function to calculate the square of a number and return the result');
    return num * num
}

let num = 20
let result = square(num)
console.log(`The square of ${num} is ${result}`);

// Activity 2:- Function Expression
// Task 1

function maximum(a, b) {
    console.log('Program to find maximium number');
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    } else {
        console.log(`${b} is greater than ${a}`);
    }
}

maximum(20, 30)

// Task 2
function concat(str1, str2) {
    console.log("Write a program to concatenate two string");
    const result = str1 + str2
    console.log(`${result}`);
}

concat("Hello", " World")

// Activity 3:- Arrow Functions
// Task 1
const sum = (a, b) => {
    let result = a + b
    console.log(`The sum of ${a} and ${b} = ${result}`);
}

sum(300, 800)

// Task 2
console.log('Program to check if a string contain an specfic character or not');

const CheckChar = (char) => {
    if (char.includes('@')) {
        console.log(true); 
    }
    else{
        console.log(false);
    }
}

CheckChar("shgjsg@")   // The answer is true
CheckChar('hfgsizgs')  // The answer is false