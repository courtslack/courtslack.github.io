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
