//ES中数字的扩展
//1. 二进制和八进制表示
const binary = 0b10011111;
const octonary = 0o12341234;
console.log(binary, octonary);
//2. isFinite判断一个数是不是有限数, 如果传入的参数不是数字类型或者为Infinity, 一律返回false.
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(100));
console.log(Number.isFinite('100'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(true));
console.log(Number.isFinite(false))
//3. isNaN: 判断传入的参数是否为NaN类型, 如果不为NaN则都返回false
console.log('**************isNaN**************')
console.log(Number.isNaN(100));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('100'));
console.log(Number.isNaN(100 / 0));
console.log(Number.isNaN('abc' / 0));
console.log(Number.isNaN(100 / NaN));
console.log(Number.isNaN(Infinity));
//4. parseInt()和parseFloat()
console.log(Number.parseInt('100'), Number.parseFloat('68.32kg'));
console.log(parseInt('100'), parseFloat('68.32kg'));
//5.EPSILON: js能表示的最小精度值, 大小为2的负52次方
console.log(Number.EPSILON === Math.pow(2, -52));
console.log(0.1 + 0.2 === 0.3);
console.log(0.3 - 0.2 - 0.1 === Number.EPSILON);
console.log(0.3 - 0.2 - 0.1 <= Number.EPSILON);
//6.isSafeInteger: 判断一个数字是否为安全的整数
console.log('***************isSafeInteger**************')
console.log(Number.isSafeInteger('100'));
console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
console.log(Number.isSafeInteger(Number.MAX_VALUE));
console.log(Number.isSafeInteger(Number.MIN_VALUE));

//指数运算符
let number = 2 ** 3;
console.log(number);
number = 2 ** 3 ** 2;
console.log(number);

number = 2;
number **= 3; //等同于number = number ** 3;
console.log(number);