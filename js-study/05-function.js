//函数声明
function add(a, b) {
  return a + b;
}

console.log(addTwoNumber(10, 20)); //先使用函数, 后去定义, 不会报错
function addTwoNumber(a, b) {
  return a + b;
}

//函数表达式
// console.log(square(10)); //报错, 没有定义

//匿名函数表达式
var square = function (a) {
  return a * a;
}
console.log(square(10));

//带有函数名的函数表达式, 可在函数体内部使用
var fibonasi = function fib(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return fib(number - 1) + fib(number - 2);
  }
}
//调用函数
const number = fibonasi(5);
console.log(number);
//函数参数
function addNumbers(a, b) {
  console.log(arguments, arguments.length);
  return a + b;
}
console.log(addNumbers(4)); //可正常执行
console.log(addNumbers(4, 5));
console.log(addNumbers(4, 5, 6)); //可正常执行

//默认参数
function hello(name = 'world') {
  console.log('hello' + ' ' + name);
}

hello();
hello('xiaoming');

//剩余参数
function map(number, ...rest) {
  return rest.map(function (arg) {
    return number * arg;
  });
}

console.log(map(2, 1, 2, 3));


//arguments对象
function addNumbers1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(addNumbers1(4));
console.log(addNumbers1(4, 5));
console.log(addNumbers1(4, 5, 6));

//函数返回值
function log(value) {
  console.log(value);
}

function log1(value) {
  console.log(value);
  if (value === 100) return;
  if (value === 1000) return value;
}

function log2(value) {
  console.log(value);
  return 'hello:' + value;
}

let returnValue = log(100);
console.log(returnValue);
returnValue = log1(100);
console.log(returnValue);
returnValue = log1(1000);
console.log(returnValue);
returnValue = log2(1000);
console.log(returnValue);

//函数作用域
let name = 'xiaoming';
let number0 = 0
function outter() {
  console.log(name);
  let number1 = 1;
  // console.log(number0, number1, number2); //报错, 在该函数作用域内, 不能访问number2
  function inner() {
    let name = 'daming';
    console.log(name);
    let number2 = 2;
    console.log(number0, number1, number2); //正常, 内部函数可以访问外部变量
  }
  inner()
}
outter();

//闭包

function extra(number) {
  return function (innerNumber) {
    return innerNumber + number;
  }
}

const extra2 = extra(2);
console.log(extra2(5));
console.log(extra2(6));

const extra3 = extra(3);
console.log(extra3(5));

//内建函数
let a = 5, b = 6;
console.log(eval('a + b'));

const url = 'https://jianghongbing.com/?name=凌凌漆&id=007';

const encodeURL = encodeURI(url);
const encodeURLComponent = encodeURIComponent(url);
console.log(encodeURL);
console.log(encodeURLComponent);
let decodeURL = decodeURI(url);
let decodeURLComponent = decodeURIComponent(url);
console.log(decodeURL);
console.log(decodeURLComponent);

decodeURL = decodeURI(encodeURL);
decodeURLComponent = decodeURIComponent(encodeURLComponent);
console.log(decodeURL);
console.log(decodeURLComponent);
