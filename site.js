// const hours = new Date().getHours() // get the current hour

// const morning = hours >= 4 && hours < 12 // is it morning?
// const afternoon = hours >= 12 && hours < 17 // is it afternoon?
// const evening = hours >= 17 || hours < 4 // is it evening?

// const welcome = document.querySelector('.welcome h2');

// if (morning) {
//   greeting = 'Good Morning! Welcome To My Site!';
// } else if (afternoon) {
//   greeting = 'Good Afternoon! Welcome To My Site!';
// } else if (evening) {
//   greeting = 'Good Evening! Welcome To My Site!';
// }

// h2.innerHTMl = html

//console.log('site.js is running');

// const hours = new Date().getHours()

// const time = document.querySelector('#welcome')

// const li = document.querySelector('h2')
// hours.append(li)
// const htnl = <span class = "hours">${hours}</span>
// h2.innerHTML = html

//assignment 4
localStorage.setItem(
  "It's a secret to everybody.",
  "Secret in in the tree at the dead-end."
);


const hours = new Date().getHours(); //figure out time
const welcome = document.querySelector('#welcome h2'); //where to put time

let greeting; //variable to store the greeting text = if statment

if (hours >= 4 && hours < 12) {
  greeting = 'Good morning! Wecome To My Site!';
} else if (hours >= 12 && hours < 17) {
  greeting = 'Good afternoon! Wecome To My Site!';
} else {
  greeting = 'Good evening! Wecome To My Site!';
}

welcome.textContent = greeting; //display



// const button = document.querySelector('#btn')

// button.addEventListener('click', () =>{
//   button.textContent = `Secret in in the tree at the dead-end`
// })


//<!-- Carousel Assingment 5 -->
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prevBtn = document.querySelector('#prev')
prevBtn.addEventListener('click', () => {
  currentImage --
  showImages()
})

const nextBtn = document.querySelector('#next')
nextBtn.addEventListener('click', () => {
  currentImage ++
  showImages()
})

setInterval(() => {
  currentImage++
  showImages()
}, 5000)


// asssingment 6 - todo list
[
    { "text": "Buy milk", "completed": false },
    { "text": "Walk the dog", "completed": false },
    { "text": "Do homework", "completed": false }
]

const todoList = document.querySelector('.todo-list') // <ul> element
const input = document.querySelector('#new-todo') // text input box
const addBnt = document.querySelector('#add-todo') // add button

const todoParse = JSON.parse(localStorage.getItem('todo-list')) || [] 
// convert stored string back into array
// || [] ensures it is always an array

const renderTodos = () => { // arrow function to create and display list items in the DOM
  
   todoList.innerHTML = '' // clear existing <li> elements before rebuilding

   todoParse.forEach((todo) => { // loop through each todo object in the array
    const li = document.createElement('li') // create new <li> element
    li.textContent = todo.text // set text from todo object
    li.classList.add('todo') // required class for assignment
    todoList.append(li) // append <li> to the <ul>
  })
}

  renderTodos()

addBnt.addEventListener('click', () => {

  const text = input.value.trim() //get input

  if(!text) return //prevent empty
      
  todoParse.push({ text: text, completed: false }) //creat javascript object ({property name, value}) add to array
  
  localStorage.setItem('todo-list', JSON.stringify(todoParse)) //convert array to string save to localStorage

  input.value = ' ' //clearn input

  renderTodos() //rebuild list
})

