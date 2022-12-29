const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8', (err, data) => {
  if (err) throw err;
});

const elfCalories = input.toString().split('\n');

const totals = [];

let calories = 0;

for (const listOfCalories of elfCalories) {
  if (listOfCalories === '') {
    totals.push(calories);
    calories = 0;
  } else {
    calories += Number(listOfCalories);
  }
}

totals.push(calories);

const answer = totals.sort((a, b) => {
  return b - a;
});

console.log(answer[0]);
