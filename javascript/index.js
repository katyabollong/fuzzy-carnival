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
