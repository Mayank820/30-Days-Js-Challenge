// This is day1 of 39 Days js Challange

// Activity 1:- Variable Declaration
// Task 1
function Activity1() {
    var num = 20
    console.log(num);

    // Task 2
    let string = "Hello"
    console.log(string);
}
Activity1()
// Activity 2 :- Constant Declaration
// Task 1

function Activity2() {
    const bool = true
    console.log(bool);
}
Activity2()

// Activity 3: Data Types
// Task 1
function Activity3() {
    let number = 20
    let char = "This is Day 1"
    let bool1 = true
    let obj = {
        name: 'Mayank Chandel',
        number: 10
    }

    let arr = [1, 2, 3, "Hyy", {
        now: 'This is new'
    }]

    console.log(typeof number);
    console.log(typeof char);
    console.log(typeof bool1);
    console.log(typeof obj);
    console.log(typeof arr);
}
Activity3()


// Activity 4
function Activity4() {
    let num1 = 30
    console.log("This original value of num1:-", num1);
    num1 = 40
    console.log("Reassigning the value of num1:-", num1);
}

Activity4()


function Activity5() {
    const ConstNum = 30
    console.log("The constant number is:-", ConstNum);
    // ConstNum++
    // Can't reassign the value of a const data type 
}

Activity5()
