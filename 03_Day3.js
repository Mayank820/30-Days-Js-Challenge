// Day 3 Control Statement

// Activity 1:- If else Statement
// Task 1:- Write a program to check if a number is positive negative or zero and log the result in console.
function checkingNum(num) {
    if (num < 0) {
        console.log(`${num} is a negative number`);
    } if (num > 0) {
        console.log(`${num} is a positive number`);
    } if (num === 0) {
        console.log(`${num} this is zero`);
    }
}

checkingNum(0)

// Task 2:- Write a program to check if a person is eligible for vote and log the result to console.
function vote(age) {
    if (age >= 18) {
        console.log(`Your're is eligible for vote`);
    } else {
        console.log(`You're is not eligible for vote`);
    }
}

vote(20)

// Activity 2:- Nested if-else statement
// Task 1:- Write a program to find largest of three number using nested if statement
function largestNUm(a, b, c) {
    let largest
    if (a >= b) {
        if (a >= c) {
            largest = a
        } else {
            largest = c
        }
    } if (b >= c) {
        largest = b
    }
    else {
        largest = c
    }
    return largest
}

let num1 = 10
let num2 = 30
let num3 = 20

let check = largestNUm(num1, num2, num3)
console.log(`The largest number is ` + check)

// Activity 3:- Switch Case
// Task 1:- Write a program that uses a switch case to determine the day of the week based on number (1-7) and log the result in the console.

function WeekDay() {

    let day
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thrusday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;

        default:
            break;
    }

    console.log(day);
}

WeekDay()

function GradeDispaky(score) {
    // Task 2:- Write a program that uses a switch case to assign a grade (A,B,C,D,F) based on score and log the result.
    let grade
    switch (true) {
        case (score >= 80):
            grade = "A"
            break;

        case (score >= 70):
            grade = "B"
            break;

        case (score >= 60):
            grade = "C"
            break;

        case (score >= 50):
            grade = "D"
            break;

        case (score <= 33):
            grade = "F"
            break;

        default:
            break;
    }

    console.log(`Your grade is ${grade}`);
}

GradeDispaky(66)

// Activity 4
// Task 4:- Write a prgram that uses the ternary operator to check if number is even or odd and log the result in console

const number = 20
const result = number % 2 === 0 ? "Even" : "Odd"
console.log(result);

// Activity 5:- COmbining Operator

// Task 1:- Write a program to check if is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to console.

function LeapYear(year) {
    let isLeap;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true
            } else {
                isLeap = false
            }
        } else {
            isLeap = true
        }
    } else {
        isLeap = false
    }

    console.log(`Year ${year} is ${isLeap ? '' : 'not'} is a leap year`);
}

LeapYear(2000)  // This a a leap year 
LeapYear(1999)  // This is not a leap year

