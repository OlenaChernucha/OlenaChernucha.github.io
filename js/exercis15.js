// Завдання 1

const user = {};

user.name = 'Іван';

user.surname = 'Сміт';

user.name = 'Петро';

delete user.name;


console.log(user); 

//Завдання 2.1
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "Вставай";

alert(isEmpty(schedule)); // false

//2.2

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

//Завдання 3

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); 


//Завдання 4

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

multiplyNumeric(menu);

console.log(menu); 



