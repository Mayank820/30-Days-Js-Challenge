// Objects
// activity 1:- Objects Creation and Access

function objectCreation() {
    // Task 1:- Create an object of a book with properties of title, author and year and log the result to the console.
    let books = {
        title: 'It Ends With US',
        author: 'Collen Hoover',
        year: 2018
    }

    console.log(books);

    // Task 2:- Access and log the title and author proeprty of the book object
    let title = books.title
    let author = books.author

    console.log(`The title of this book is ${title} and the author is ${author}`);


    // Actitvity 2:- Object Methods
    // Task 1:- Add a method to the book object that returns string with the book's title and author
    // This is the activity 4 as well
    books.getBooksInfo = function () {
        return `${this.title} by ${this.author}`
    }

    console.log(books.getBooksInfo());

    // Task 2:- Add a method to the book object that takes a parameter of year and updates the book's year property
    books.updateYear = function (newYear) {
        books.year = newYear
        console.log(`The second edition of this book will release in ${newYear}`);
        return this.year
    }
    console.log(books.updateYear(2020));

}

objectCreation()

// Activity 3:- Nested Objects
function NestedObjects() {
    // Task 1:- Create a nested object that represent a library with property like name and books (an array of book object) and log the library object to the console

    let library = {
        name: 'Central Library',
        books: [
            { bookname: 'It Start With US', Author: 'Colleen Hoover' },
            { bookname: 'Verity', Author: 'Collen Hoover' },
            { bookname: 'IKIGAI', Author: 'Hector Gracia' },

        ]
    }

    console.log(library);

    // Task 2:- Access and log the name of the library and the titles of the books
    let name = library.name
    let title = library.books.map(book => book.bookname)
    console.log(`In ${name} the available books are:- ${title}`);

}

NestedObjects()

// Avtivity 5:- Object Iteration
function objectIteration() {
    console.log('\nObject iteration in books object');
    // Task 1:- Use for...in loop to iterate over the properties of teh book object and log each property and its value.
    let books = {
        title: 'It Ends With US',
        author: 'Collen Hoover',
        year: 2018
    }
    for (const key in books) {
        console.log(`${key} and ${books[key]}`);
    }

    // Task 2:- Use object.keya nd object.value methods to log all the key and values of the objects
    console.log(Object.keys(books));
    console.log(Object.values(books));
}

objectIteration()