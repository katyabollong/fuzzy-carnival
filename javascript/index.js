function windowLoaded() {
  document.getElementById('button-1').classList.toggle('is-red');
}

function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

window.onload = windowLoaded;

const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName(){
  const name = prompt('Enter a new name');
  Para.textContent= `Player1:${Name}`;
}

let myVariable;
myVariable = 'katya';

let myVariable2 = 'brooke';

let iceCream = 'chocolate';
if (iceCream==='chocolate') {
  Alert ('yay. i love chocolate');

} else {
  Alert ('aww but chocolate is my favorite');
}

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "src('img/borkeandi.jpg')";
});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/rocks 2.jpg')";
});
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/rocks.jpg')";
});
btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://i.imgur.com/mPKfD2J.jpg')";
});
