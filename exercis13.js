'use strict';

// Варіант 1
function checkAge1(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}

// Варіант 2
function checkAge2(age) {
  return age > 18 || confirm('Батьки дозволили?');
}

// Перевірка
console.log(checkAge1(20)); // true, confirm не викликається
console.log(checkAge2(20)); // true, confirm не викликається

const age = Number(prompt('Скільки вам років?'));
alert(checkAge1(age));
alert(checkAge2(age));