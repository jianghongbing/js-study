function add(number1, number2) {
  return number1 + number2;
}

console.log(typeof add);
console.log(add, add.__proto__);

const add1 = new Function('a', 'b', 'return a + b');
console.log(typeof add1);
console.log(add1(10, 20));

const length = add.length;
console.log(length);
console.log(add.name); //获取函数的名称
const add2 = add;
console.log(add2.name);
// console.log(add.displayName, add2.displayName);

const name = 'xiaoming';
function logString(string) {
  console.log(logString.caller); //返回调用logString的函数
  console.log(string);
}

const xiaoming = {
  name: '小明',
  showName() {
    logString(this.name);
  },
}
xiaoming.showName();

function printName(name) {
  logString(name);
}
printName(name);

let max = Math.max.call(null, 1, 2, 3);
console.log(max);

const numbers = [1, 2];
Array.prototype.push.call(numbers, 3, 4); //绑定this为numbers, 并且调用Array.prototype.push函数, 将后面的参数压如到numbers中

const min = Math.min.apply(null, [1, 2, 3]);
console.log(min);
Array.prototype.push.apply(numbers, [5, 6]);
console.log(numbers);

const toyota = {
  type: 'Toyota',
}

const honda = {
  type: 'Honda',
}

function logCarType() {
  console.log(this.type);
}

let bindFunction = logCarType.bind(toyota) //为某个函数bind this的值, 在函数的内部, this就指向该对象
bindFunction();
bindFunction = logCarType.bind(honda);
bindFunction();

function sum(number1, number2) {
  console.log(number1, number2);
  return this.number + number1 + number2;
}

const obj = {
  number: 5,
}

let aBindFunction = sum.bind(obj, 2, 3);
let total = aBindFunction();
console.log(total);
total = aBindFunction(10, 20);
console.log(total);
aBindFunction = sum.bind(obj);
total = aBindFunction();
console.log(total);
total = aBindFunction(10, 20);
console.log(total);
// console.log(sum.total());
console.log(sum.toString());


