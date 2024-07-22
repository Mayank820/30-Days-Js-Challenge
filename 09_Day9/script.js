// Activity 1:- Selecting and Manipulating Elements

// Task 1:- Select an HTML elemnet by its id and change its textContent
let para = document.querySelector('#para')
para.textContent = 'This is 30 day challenege'

// Task 2:- Select an HTML element by its class and change its background color
let bg = document.querySelector('.bg')
bg.style.backgroundColor = 'red'

// Activity 2:- Creating and Appending Element
let div = document.querySelector('div')
div.append('This is appended')
document.querySelector('body').appendChild(div)

let li = document.createElement('li')
li.append('apple')
let ul = document.querySelector('ul').appendChild(li)

// Activity 3:- Removing Element
let remove = document.querySelector('div')
if (remove) {
    remove.remove()
}

let lastChildRemove = document.querySelector('ul')
lastChildRemove.lastElementChild.remove()

// Modifying Element
let img = document.querySelector('img')
img.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1721562627916-e7784f42f679?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

let text = document.querySelector('.text')
text.style.color = 'red'

// Event Handling
let button = document.querySelector('button')
button.addEventListener('click', () => {
    let changetext = document.querySelector('.changetext')
    changetext.innerHTML = 'Changed Successfully'
})