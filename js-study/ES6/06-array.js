//1. 扩展运算符
console.log(...[1, 2, 3]);
//1.1 使用扩展运算符来替代apply函数
function add(x, y) {
  return x + y;
}
let numbers = [10, 20];
//es6之前调用
let sum = add.apply(null, numbers);
console.log(sum);
//es6的调用
sum = add(...numbers);
console.log(sum);
//1.2 赋值数组
let newNumbers = [...numbers];
newNumbers[0] = 30;
console.log(numbers, newNumbers);
const totalNumber = [...numbers, ...newNumbers];
console.log(totalNumber);
//1.3 与解构赋值联合使用, 产生新的数组, 使用...修饰的变量必须放在结构赋值列表的最后一位
const [first, ...rest] = totalNumber;
console.log(first, rest);
//1.4 将字符串转换成数组
console.log([...'hello, world']);

//2. from(): 将类数组和可遍历的对象转换成数组
const object = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
let array = Array.from(object);
console.log(array, Array.isArray(array));
array = Array.from(object, function (v, k) {
  return k + '-' + v;
});
console.log(array);

//2. of(): 将一组变量转换成数组
console.log(Array(1));
console.log(Array(1, 2));
console.log(Array.of(1));
console.log(Array.of(1, 2));
//3. flat:将数组拉平
let flatArray = [1, [2, 3, 4], 5, [6, 7]];
array = flatArray.flat();
console.log(array);
flatArray = [1, [2, [3, [4]]], 5, 6, [7, [8, 9]]];
array = flatArray.flat(4);
console.log(array);
flatArray = [1, 2, 3, 4, 5, 6, 7];
array = flatArray.flatMap(function (x) {
  return x * 3;
})
console.log(array, flatArray);

flatArray = [[1, 2, 3], [4, 5, 6, 7]];
array = flatArray.flatMap(function (x, index, array) {
  console.log(x, index, array);
  return x.length;
})
console.log(array);