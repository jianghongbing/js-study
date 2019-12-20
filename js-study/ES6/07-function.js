//1.函数参数的默认值
function add(a, b = 0) {
  return a + b;
}
console.log(add(5));
console.log(add(5, undefined));

// function foo(a, b, c) {
//   let a = 1;
//   const b = 2;
//   let c = 3;
//   return a + b + c;
// }

function foo1(a, b, c = 10) {
  var a = 5; //不会报错
  // let b = 5; //报错, 不能再通过let和const来声明参数列表中的同名参数的变量
  // const c = 100; //报错, 不能再通过let和const来声明
  return a + b + c;
}
// console.log(foo(100, 200, 300));
console.log(foo1(100, 200, 300));


function foo2(a, a, b) {
  console.log(a, a, b);
}
// function foo3(a, a, b = 10) {
//   console.log(a, a, b); //报错, 当有参数默认值的时候, 参数列表中, 不允许有同名的参数
// }
foo2(1, 2, 3);
// foo3(1, 2, 3);

//默认参数和解构赋值的结合使用
function logUserInfo({ name = 'unknown', age = 0 }) {
  console.log(`name:${name}, age:${age}`);
}
logUserInfo({});
logUserInfo({ name: 'xiaoming', age: 10 });

//带有默认值的参数的位置, 一般将带有默认值的参数放在参数列表的后面
function sum(a, b, c = 10) { //调用时, 可以省略参数c
  return a + b + c;
}

function sum1(a, b = 10, c) { //调用时, 不能省略参数b
  return a + b + c;
}
console.log(sum(1, 2));
// console.log(sum1(1, ,2)); //直接报错
console.log(sum1(1, undefined, 2)); //需要显示的给参数传递一个undefined
console.log(sum.length, sum1.length);

function sum2(a, b, ...rest) {
  console.log('rest:' + rest);
  let sum = a + b;
  rest.forEach(function (number) {
    return sum + number;
  })
  return sum;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));

//name属性
console.log(sum.name);
console.log(function () { }.name);
const f = function () { };
console.log(f.name);
function logInfo() {
  console.log(this.name);
}
let name = logInfo.bind({ name: 'xiaming' }).name;
console.log(name);

name = function () { console.log(this.name) }.bind({ name: '123' }).name;
console.log(name);
console.log((new Function).name);

//箭头函数表达式
const sum3 = (a, b, c) => a + b + c;
const noParameter = _ => {
  console.log('不带参数的箭头函数');
}
const logNumber = a => console.log(a);

noParameter();
logNumber(5);
console.log(sum3(1, 2, 3));
const hasReturn = (a, b, c) => sum3(a, b, c);
const noReturn = (a, b, c) => void sum3(a, b, c)
console.log(hasReturn(1, 2, 3), noReturn(1, 2, 3));
// globalThis.myName = 'myName';
// const myName = 'myName';
// 箭头函数中的this
function foo4() {
  setTimeout(function () {
    console.log(this.myName);
  }, 1000);
}

function foo5() {
  setTimeout(() => {
    console.log(this.myName);
  }, 1000);
}

foo4.call({myName: 'foo4'});
foo5.call({ myName: 'foo5' });

//箭头函数的嵌套
const foo6 = (a, b) => c => a + b + c
console.log(foo6, foo6(1, 2), foo6(1, 2)(3));
const PI = 3.14
try {
  PI = 3.15
} catch(error) {
  console.log('捕获到了错误:', error.message);
}

try {
  PI = 3.15
} catch { //catch不带参数
  console.log('捕获到了错误');
}
