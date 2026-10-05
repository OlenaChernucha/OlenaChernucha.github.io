const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

// 1 for
console.log('- for -');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2 while
console.log('- while -');
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

// 3 do while
console.log('- do while ');
let k = 0;
do {
  console.log(fruits[k]);
  k++;
} while (k < fruits.length);