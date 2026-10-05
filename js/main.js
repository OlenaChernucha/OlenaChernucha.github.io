'use strict';

const classes = ['first', 'second', 'third', 'fourth'];


const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');

const btn1 = document.querySelector('#p1 button');
const btn2 = document.querySelector('#p2 button');
const btn3 = document.querySelector('#p3 button');
const btn4 = document.querySelector('#p4 button');


p1.style.backgroundColor = 'gold';

p2.style.backgroundColor = 'gold';
p2.style.color = 'blue';
p2.style.fontSize = '2rem';

p3.classList.add(classes[2]); 

p4.classList.add(classes[3], 'border');

btn1.style.backgroundColor = 'gold';
btn1.style.color = 'blue';

btn2.addEventListener('click', () => {
  p1.style.display = 'none';
});

btn3.addEventListener('click', () => {
  p1.style.display = '';
});

btn4.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});