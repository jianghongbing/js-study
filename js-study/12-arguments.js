// console.log(arguments);
function addNumbers(a, b, c) {
  console.log(arguments.length); //获取传入参数的长度
  //访问指定位置的参数
  for (let i = 0; i < arguments.length; i++) {
    console.log('参数' + i + ':' + arguments[i]);
  }
  // return a + b + c;
  let sum = 0;
  for (const number of arguments) {
    sum += number;
  }
  return sum;
}
let sum = addNumbers(1, 2, 3);
console.log(sum);
sum = addNumbers(1, 2);
console.log(sum);
sum = addNumbers(1, 2, 3, 4, 5);
console.log(sum);


function factorial(number) {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
  // return number * arguments.callee(number - 1);
}
let fac = factorial(5);
console.log(fac);

//下面的代码和报错, 因为factorial函数被置为null, 同时在新的函数表达式里面又将factorial当做函数使用, 因此报错, 可使用argument的callee来解决该问题, callee总是表示当前正在执行的函数, 并不指向一个固定的函数.
// const factorialF = factorial;
// factorial = null;
// fac = factorialF(5);
// console.log(fac); 
function factorial1(number) {
  console.log(arguments.callee);
  if (number <= 1) return 1;
  return number * arguments.callee(number - 1);
}
fac = factorial1(5);
console.log(fac); 

const factorialF = factorial1;
factorial1 = null;
fac = factorialF(5);
console.log(fac); 
