// Day 2

// Activity 1:- Arithmetic Operations

function Activity1() {
    console.log("Activity 1 starts from here");
    // Task 1:- Write a programm to add two numnbers and log the result to the console
    let num1 = 20
    let num2 = 40
    console.log("Sum of num1 and num 2 is:-", num1 + num2);

    // Task 2:- Write a programm to subtract two numnbers and log the result to the console
    let num3 = 48
    let num4 = 28
    console.log("Subtraction of num3 and num4 is:-", num3 - num4);

    // Task 3:- Write a programm to multiply two numnbers and log the result to the console
    let num5 = 10
    let num6 = 20
    console.log("Product of num5 and num6 is:-", num5 * num6);

    // Task 4:- Write a programm to divide two numnbers and log the result to the console
    let num7 = 250
    let num8 = 5
    console.log("The division of num7 and num8", num7 / num8);

    // Task 5:- Write a programm to to find remainder when one number is divided by another and log the result to console
    let num9 = 425
    let num10 = 9
    console.log("The remainder of num9 and num10 is:-", num9 % num10);
}

Activity1()

function Activity2() {
    console.log("\nActivity 2 Starts from here");
    // Task 6:- Use the += operator to add a number to a variable and log the result to the console
    let addX = 20
    console.log('Original value of assignX is:-', addX);
    addX += 30
    console.log('New value of assignX is:-', addX);   // New value is 50

    // Task 6:- Use the -= operator to subtract a number to a variable and log the result to the console
    let subY = 70
    console.log('Original value of subY is:-', subY);
    subY -= 20
    console.log('New value of subY is:-', subY);  // New value is 50
}

Activity2()

function Activity3() {
    // Activity 3:- Comparision Operator
    console.log('\nActivity 3 starts from here');
    // Task 1:- Write a program to compare two numbers usning > and < and log the result
    let a = 100
    let b = 200
    if (a > b) {
        console.log(`Variable a which is ${a} greater than b which is ${b}`);
    } else {
        console.log(`Variable b which is ${b} is greater than a which is ${a}`);
    }

    // Task 2:- Write a program to compare two numbers using >= and <= and log the result
    let age1 = 17
    let age2 = 25
    let drivingAge = 18
    if (drivingAge >= age1) {
        console.log(`He cannot drive`);
    } if (drivingAge <= age2) {
        console.log(`He can drive`);
    }

    // Task 2:- Write a program to compare two numbers using == and === and log the result
    let c = 5
    let d = "5"
    if (c == d) {
        console.log(`Both c and d are equal`);
    }
    if (c === d) {
        console.log(`Both c and d are equal in both number and datatypes also`);
        // This statement not get printed because the datatype of d is string and c is number, and === check the datatype also
    }

}

Activity3()

function Activity4() {
    // Activity 4:- Logical Operation
    console.log("\nActivity 4: Logical Operators");
    console.log(`Logical AND: (4 > 2) && (6 < 9): ${(4 > 2) && (6 < 9)}`);
    console.log(`Logical OR: (4 > 6) || (6 < 9): ${(4 > 6) || (6 < 9)}`);
    console.log(`Logical NOT: !(4 > 6): ${!(4 > 6)}`);
}

Activity4()

function Activity5() {
    // Activity 5:- Ternary Operator
    console.log("\nActivity 5: Ternary Operator");
    let number = -5;
    let isPositive = number >= 0 ? 'Positive' : 'Negative';
    console.log(`${number} is a ${isPositive} Number`);
}

Activity5()