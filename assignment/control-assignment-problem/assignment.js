const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber >= 0.7) {
  alert("here you go");
} else {
  alert("not greater");
}

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}

let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
}

//for loop => backwards

for (let i = numbers.length - 1; i--; ) {
  console.log(numbers[i]);
}
