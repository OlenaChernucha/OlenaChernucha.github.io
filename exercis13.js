'use strict';

// - вік -
function checkAge1(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAge2(age) {
  return age > 18 || confirm('Батьки дозволили?');
}

console.log(checkAge1(20)); // true
console.log(checkAge2(20)); // true

const age = Number(prompt('Скільки вам років?'));
alert(checkAge1(age));
alert(checkAge2(age));

// - min -
function minIf(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function minTernary(a, b) {
  return a < b ? a : b;
}

console.log(minIf(2, 5));       // 2
console.log(minIf(3, -1));      // -1
console.log(minIf(1, 1));       // 1
console.log(minTernary(2, 5));  // 2
console.log(minTernary(3, -1)); // -1
console.log(minTernary(1, 1));  // 1

// - pow -
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// - функції-
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);

console.log(pow(3, 2));   // 9
console.log(pow(3, 3));   // 27
console.log(pow(1, 100)); // 1

document.getElementById('calc').addEventListener('click', () => {
  const x = Number(document.getElementById('x').value);
  const n = Number(document.getElementById('n').value);
  const output = document.getElementById('output');

  if (!Number.isInteger(n) || n < 1) {
    output.textContent = 'n має бути натуральним числом (1, 2, 3...)';
    return;
  }

  output.textContent = `pow(${x}, ${n}) = ${pow(x, n)}`;
});