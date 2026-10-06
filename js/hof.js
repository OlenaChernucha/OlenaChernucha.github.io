'use strict';


function sum(n1, n2) {
  return n1 + n2;
}


function multiply(n1, n2) {
  return n1 * n2;
}


function calculate(operation, initialValue, numbers) {
  let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}

console.log(calculate(sum, 0, [1, 2, 4]));      
console.log(calculate(multiply, 1, [1, 2, 4])); 

let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
  console.log(`name: ${name} | index: ${index} | array:`, array);
});

let students_information = [
  { "name": "Wick", "degree": 375 },
  { "name": "Malcolm", "degree": 405 },
  { "name": "Smith", "degree": 453 },
];

const MAX_DEGREE = 600;

const studentsWithPercentage = students_information.map((student) => {
  return {
    ...student,
    percentage: (student.degree / MAX_DEGREE) * 100,
  };
});

studentsWithPercentage.forEach((student) => console.log(student));