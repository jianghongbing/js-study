const numbers = [1, 2, 3, 4, 5];
let sum = 0;

//for语句
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index]
}
console.log(sum);
sum = 0;
//while语句
let number = 10;
while (number-- > 0) {
  sum += number;
}
console.log(sum);

//do...while语句: do...while语句至少执行一次循环
sum = 0;
number = 10;
do {
  sum += number
} while (number-- > 0);
console.log(sum);

//break 语句
number = 10;
sum = 0;

while (number-- > 0) {
  if (number === 5) {
    break;
  }
  sum += number;
}
console.log(sum);

number = 10;
sum = 0;

//continue语句
number = 10;
sum = 0;
while (number-- > 0) {
  if (number === 5) {
    continue;
  }
  sum += number;
}
console.log(sum);

//for...in语句
const user = {
  name: 'xiaoming',
  age: 10,
  id: '001',
}
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(key + ':' + user[key])
  }
}
//for of 语句
for (const number of numbers) {
  console.log(number);
}

//label语句
sum = 0;
loop: for (let m = 0; m < 100; m++) {
  for (let n = 0; n < 100; n++) {
    if (m % 10 === 0) {
      continue loop;
    }
    if (m === 50 && n === 50) {
      break loop;
    }
    sum += n;
  }
}

console.log(sum);

