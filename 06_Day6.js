// Array 
// Activity 1:- Array Creation and Access
// Task 1:- CReate an array of number from 1 to 5 and log the array to console.
console.log(`Creation of an array`);
let num = [1, 2, 3, 4, 5]
console.log(num);

// Task 2:- access the first element and the last element
console.log(`The first element of an array is ${num[0]} and last element of an array is ${num[4]}`);

// Activity 2:- Array Method Basics
// Task 1:- Use the push method to add a new element to the end of the array and log the updated array
function push() {
    // The array.push() will return an new length of an array
    let arr = [10, 20, 30]
    console.log(`Array before push function`);
    console.log(arr);
    console.log(`Array after push`);
    let push = arr.push(40)
    console.log(arr);
}

push()

// Task 2:- Use the pop method to remove an existing element to the end of the array and log the updated array
function pop() {
    // Return value:- The removed element from the array; undefined if the array is empty.
    let arr = [10, 20, 30, 40, 50]
    console.log(`\nArray before pop function`);
    console.log(arr);
    console.log(`Array after pop`);
    let pop = arr.pop()
    console.log(arr);
}

pop()

// Task 3:- Use the shift method to remove the first element of the array and log the updated array
function shift() {
    // Return value:- The removed element from the array; undefined if the array is empty.
    let arr = [10, 20, 30, 40, 50]
    console.log(`\nArray before shift function`);
    console.log(arr);
    console.log(`Array after shift`);
    let shift = arr.shift()
    console.log(arr);
}

shift()

// Task 4:- Use the unshift method to add teh new number at the begining of the array and log the updated array
function unShift() {
    // Return value:- The removed element from the array; undefined if the array is empty.
    let arr = [10, 20, 30, 40, 50]
    console.log(`\nArray before unshift function`);
    console.log(arr);
    console.log(`Array after unshift`);
    let unshift = arr.unshift(100)
    console.log(arr);
}

unShift()

// Activity 3:- Array Method Intermediate

function useMap() {
    // Task 1:- Use the map method to create a new array where each number is doubled an log the new array
    let arr = [10, 20, 30, 40, 50]
    console.log(`\nOriginal array before using map function`);
    console.log(arr);
    let arrMap = arr.map((x) => x * 2)
    console.log(`Array after using the map function`);
    console.log(arrMap);
}

useMap()

// Task 2:- Use the filter method to create a new array with only even number and log the result
function useFilter() {
    let arr = [10, 20, 45, 30, 85, 66, 77, 99, 51, 30, 15, 12]
    console.log(`\nOriginal arrya before using the filter function`);
    console.log(arr);
    let arrFilter = arr.filter((num) => num % 2 == 0)
    console.log(`Array after using filter function that gives only even number`);
    console.log(arrFilter);
}

useFilter()

// Task 3:- Use the reduce method to calculate the sum of all numbers in the array and log the result 
function useReduce() {
    let arr = [10, 20, 30, 40, 50]
    console.log(`\nOriginal arrya before using the reduce function`);
    console.log(arr);
    let arrReduce = arr.reduce((acc, curr) => acc + curr)
    console.log(`The sum of all the numbers in an array is`);
    console.log(arrReduce);
}

useReduce()

// Activity 4:- Array Iteration
// Task 1:- Iteration of an array using for loop
function IterationArr() {
    console.log(`\nIteration of an array using for loop`);
    let arr = [10, 20, 30, 40, 50]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
}

IterationArr()

// Task 2:- Iteration of an array using foreach loop
function ForEachArr() {
    console.log(`\nIteration of an array using foreach loop`);
    let arr = [10, 20, 30, 40, 50]
    arr.forEach((element) => console.log(element))
}

ForEachArr()

// Activity 5:- Multi-Dimensional Array
// Task 1:- Create an 2D array and log the entire array to the console
function TwoDimensional() {
    console.log(`\nThis is the 2D array`);
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    console.log(arr);

    // Task 2:- Accessing the particular element from an 2D array
    for (let i = 0; i < arr.length; i++) {
        let b = ""
        for (let j = 0; j < arr[i]; j++) {
            b += arr[i][j] + " "
        }
        console.log(b);
    }
    console.log(arr[1][1]);
}

TwoDimensional()

