// Activity 1:- For Loop
// Task 1:- Write a program to print numbers from 1 to 10 using for loop
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// Task 2:- Write a program to print the multiplication table of 5 using for loop
const number = 5
console.log(`Multiplication Table of ${number}`);
for (let index = 1; index <= 10; index++) {
    console.log(`${number} x ${index} = ${number * index} `);
}

// Activity 2:- While Loop
// Task 1:- Write a program to calulate the sum of number from 1 to 10 using while loop

function calculateSum() {
    let sum = 0
    let i = 1
    while (i < 10) {
        sum += i
        i++
    }
    console.log(`The sum of numbers from 1 to 10 is ${sum}`);
}
calculateSum()

// Task 2:- Write a program to print the numbers from 10 to 1 using while loop
function printNumber() {
    let i = 10
    while (i >= 1) {
        console.log(i);
        i--
    }
}
printNumber()

// Activity 3:- Do... While Loop

// Task 1:- Write a program to print numbers from 1 to 5 using do...while loop
function OneToFive() {
    console.log("Print number from 1 to 5 using do while");
    let i = 1
    do {
        console.log(i);

        i++
    } while (i <= 5);
}

OneToFive()

// Task 2:- Write a program to calculate the factorial of a number using do...while loop
function factorial(number) {
    console.log("The factorial");
    let factorial = 1
    let i = number

    do {
        factorial *= i
        i--
    } while (i > 0);
    console.log(`The factorial of ${number} is ${factorial}`);
}

factorial(5)

// Activity 4:- Nested loop
// Task 1:- Wite a program to print stars

function stars() {
    for (let i = 0; i <= 5; i++) {
        let star = ''
        for (let j = 0; j < i; j++) {
            star += '*'
        }
        console.log(star);
    }
}

stars()

// Activity 5
// task 1:- Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement
function continueStatement() {
    console.log('Program to print numbers from 1 to 10, but skip the number 5 using the continue statement');
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue
        }
        console.log(i);
    }
}

continueStatement()

// Task 2:- Write a program to print numbers from 1 to 10, but skip the number 7 using the break statement
function breakStatement() {
    console.log('Program to print numbers from 1 to 10, but skip the number 7 using the break statement');
    for (let i = 1; i < 10; i++) {
        if (i === 7) {
            break
        }
        console.log(i);
    }
}

breakStatement()