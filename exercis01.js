'use strict';

// -alert із двох змінних---
const message1 = 'Hello';
const message2 = 'JavaScript';

alert(`${message1} ${message2}!`);

// - сума двох чисел-
const x = Number(prompt('Введіть значення x:'));
const y = Number(prompt('Введіть значення y:'));

alert(`Сума: ${x + y}`);

// - вгадай число -
const secretNumber = 3;
const guess = Number(prompt('Вгадайте число:'));

if (guess === secretNumber) {
  alert('Congratulations, You did it!');
} else if (guess > secretNumber) {
  alert('The number is too long');
} else {
  alert('The number is short');
}

// - день тижня -
const day = prompt('Введіть назву дня тижня:').trim();

//  з if else
if (day === 'Понеділок' || day === 'Monday') {
  alert('Start of the work week!');
} else if (day === "П'ятниця" || day === 'Friday') {
  alert('End of the work week!');
} else {
  alert('A regular day');
}

//  з switch
switch (day) {
  case 'Понеділок':
  case 'Monday':
    alert('Start of the work week!');
    break;
  case "П'ятниця":
  case 'Friday':
    alert('End of the work week!');
    break;
  default:
    alert('A regular day');
}

// - оцінка за бали -
const score = Number(prompt('Введіть кількість балів:'));
let grade;

if (score < 50) {
  grade = 'F';
} else if (score < 70) {
  grade = 'D';
} else if (score < 80) {
  grade = 'C';
} else if (score < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

alert(`Ваша оцінка: ${grade}`);