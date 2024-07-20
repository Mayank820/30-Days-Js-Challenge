// ES6+ Features
// Activity 1:- Template Literals

function templateLiterals() {
    // Task 1:- Use template literals to create string taht include name and age and log the result to console
    console.log('Activity 1, template literals');
    let name = 'Mayank Singh Chandel'
    let age = 20
    console.log(`Hey, I'm ${name} and i'm ${age} year old`);

    // Task 2:- Create a multiline string using template literals and log it to console
    let multilineString = `Hey i'm doing 30 days Javascript Challenge.
    I hope you also doing the same, and giving your 100% effort. `

    console.log(multilineString);
}

templateLiterals()

// Activity 2:- Destructuring
function destructuring() {
    console.log('\nActivity 2, array destructuring');
    // Task 1:- Use array destructuring to extract first and second element from an array of numbers and log them to console
    let first, second
    [first, second, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80]
    console.log(`The first element is ${first} and second element is ${second} and rest of the element are ${rest}`);

    // Task 2:- Use object destructuring to extract title and author from a book object and log to console
    let books = {
        title: 'It Ends With Us',
        author: 'Coollen Hoover'
    }

    const { title, author } = books
    console.log(`Book title is ${title} and the author is ${author}`);

}

destructuring()

// Activity 3:- Spread and rest Operator
function spreadAndRest() {
    // Task 1:- Use spread operator to create a new array that includes all element of an existing array plus additional elemnets, and log the new array to the console
    console.log('\nActivity 3 Spread and Rest Operator');
    let arr = [1, 2, 3, 4, 5]
    let arr2 = [...arr, 10, 20]
    console.log(arr2);

    // Task 2:- Use rest operator in a function to accept an arbitary number of arguments, sum them and return the result
    console.log('\nRest Operator');
    function sum(...numbers) {
        let result = 0
        for (const num of numbers) {
            result += num
        }
        return result
    }
    console.log(sum(10, 20, 30));
    console.log(sum(10, 20, 30, 200, 300, 400));

}

spreadAndRest()

// Activity 4:- Default Parameters
function defaultParameters(a, b = 1) {
    console.log('\nActivity 4, Default Paramters');
    return a * b
}

console.log(defaultParameters(5, 10));  // o/p is 50 because the 2nd argument will override the 2nd parameter
console.log(defaultParameters(5));     // o/p is 5 because we hard code the 2nd parameter value.

// Activity 5:- Enchanced Object Literals
function enhancedObject() {
    console.log('\nActivity 5, Enhanced Object Literals');
    // Task 1:- Use enhanced object literals to create an object with methods and properties, and log the object to the console.
    let person = {
        personName: 'Aniket',
        personAge: 18,
        greet() {
            return `I'm ${this.personName} and my age is ${this.personAge} `
        }
    }
    console.log(person.greet());

    // Task 2:- Create an object with computed property names based on variables and log the object to the console.
    const propLanguage = 'first'
    const propChannel = 'second'

    let channel = {
        [propLanguage]: 'Javascript',
        [propChannel]: 'Chai aur Code',
        intro() {
            return `I'm learning ${this[propLanguage]} from ${this[propChannel]}`
        }
    }
    console.log(channel.intro());
}

enhancedObject()