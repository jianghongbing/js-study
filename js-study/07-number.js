const age = 10;
const weight = 65.43;
const binaryNumber = 0b10101101;
const octonaryNumber = 0o1234;
const hexadecimalNumber = 0xff;
console.log(typeof age, typeof weight, typeof binaryNumber);

//数字的指数形式表示
const exponentialNumber = 2.3e2;
console.log(exponentialNumber);

const aNumber = Number(); //aNumber的值为基本数字类型
const bNumber = new Number(); //bNumber的值为object类型
console.log(typeof aNumber, typeof bNumber);

const max = Number.MAX_VALUE; //js中最大的数字
const min = Number.MIN_VALUE; //js中最小的数字
console.log(max, min);

const maxSafeInt = Number.MAX_SAFE_INTEGER; //最大的安全的整数
const minSafeInt = Number.MIN_SAFE_INTEGER; //最小的安全的整数
console.log(maxSafeInt, minSafeInt);
const nan = Number.NaN; //表示非数字, not a number
console.log(typeof nan, nan);
let epsilon = Number.EPSILON;
const nagativeInfinity = Number.NEGATIVE_INFINITY;
const positiveInfinity = Number.POSITIVE_INFINITY;

console.log(epsilon, nagativeInfinity, positiveInfinity);
console.log(Number.isNaN(nan), Number.isNaN(age), Number.isNaN('jiang'));
console.log(Number.isFinite(age), Number.isFinite(nagativeInfinity), Number.isFinite(positiveInfinity));
console.log(Number.isInteger(age), Number.isInteger(weight))

let cNumber = Number.parseFloat('a23.98');
let dNumber = Number.parseInt('a23.98');
console.log(cNumber, dNumber);
cNumber = Number.parseFloat('23.98');
dNumber = Number.parseInt('23.98');
console.log(cNumber, dNumber);
cNumber = Number.parseFloat('23.98.2343abcd');
dNumber = Number.parseInt('23.98.2343abcd');
console.log(cNumber, dNumber);

const convertToBinary = Number.parseInt('100', 2);
console.log(convertToBinary);
let number = 2345.3456
epsilon = number.toExponential(2);
console.log(epsilon, typeof epsilon);
console.log(number.toFixed(1));
console.log(number.toFixed(2));
console.log(number.toFixed(3));
console.log(number.toPrecision(6));
console.log(number.toPrecision(3));