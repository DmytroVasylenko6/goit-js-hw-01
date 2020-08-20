let numbers = [];

while (true) {
  let input = prompt('Введите число', 0);

  // Прекращаем ввод?
  if (input === '' || input === null || !isFinite(input)) break;
  numbers.push(+input);
}

let total = 0;
for (let number of numbers) {
  total += number;
}

alert(total);
console.log(total);
