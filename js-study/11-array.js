//1.数组的构建
let numbers = [0, 1, 2, 3, 4, 5]; //字面量构建函数
const numberList = Array(1, 2, 3, 4); //Array函数构建
const numberObject = new Array(1, 2, 3, 4); // new对象的形式构建
console.log(typeof numbers, numbers);
console.log(typeof numberList, numberList);
console.log(typeof numberObject, numberObject);
const list = Array(5);
const listObject = new Array(5);
console.log(list.length, list);
console.log(listObject.length, listObject);
list.forEach(function (item, index) {
  console.log(index + '-' + item);
})

//2.访问数组里面的元素
const zero = numbers[0];
const one = numbers[1];
console.log(zero, one);
//3.修改数组里面的元素
numbers[2] = 4;
numbers[3] = 8;
console.log(numbers);

//4.遍历数组
for (const number of numbers) {
  console.log(number);
}
numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});
//5. length属性
const length = numbers.length;
console.log(length);
numbers[10] = 10;
console.log(numbers);
console.log(numbers.length);
numbers.length = 20;
console.log(numbers);
numbers.length = 8;
console.log(numbers);
numbers.length = 6;
console.log(numbers);
numbers.length = 0;
console.log(numbers);

//6.Array的属性和方法
numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers.length); //获取数组的属性
const isArray = Array.isArray(numbers); //判读某个变量是否是一个数组
console.log(isArray, Array.isArray('hello, world'));
numbers = Array.from('12345'); //通过一个可迭代的对象或者类数组对象来创建一个数组
console.log(numbers);
numbers = Array.of(1, 2, 3, 4, 5, 6, 7); //通过给定的参数来创建数组, 该函数的参数可以是任意的, 类型也没有限制
console.log(numbers);
//6.1 访问方法, 访问方法不会改变原始数组的值
const concatNumbers = numbers.concat([6, 3], 2, 3, 1, 0); //将参数和原始数组拼接成一个数组并返回
console.log(concatNumbers);
console.log(numbers.includes(100), numbers.includes(2), numbers.includes(2, 3)); //从指定的位置开始搜索, 判断数组是否包含某个元素
const numberStr = numbers.join('-'); //用指定的字符串, 将数组内的元素拼接成一个字符串并返回
console.log(numberStr);
const subArray = numbers.slice(2, 5); //获取某个数组的子数组并返回, 包括开始位置的元素, 不包括结束位置的元素
console.log(subArray);
const index = concatNumbers.indexOf(3); //获取第一个匹配到给定元素的位置, 如果没有匹配到返回-1
const lastIndex = concatNumbers.lastIndexOf(3); //获取最后一个匹配到给定元素的位置, 如果没有匹配到返回-1
console.log(index, lastIndex);
console.log(concatNumbers.indexOf(3, 5)); //从指定的位置开始查找, 获取第一个匹配到给定元素的位置, 如果没有匹配到返回-1.
console.log(numbers.toString(), numbers.toLocaleString());
numbers.forEach(function (value, index, array) {
  console.log(value + '-' + index + '-' + array);
}); //遍历数组
const entries = numbers.entries(); //返回一个迭代器, 该迭代器包含所有元素的索引和值
for (const item of entries) {
  console.log(item);
}
let match = numbers.every(function (value) {
  return value > 5;
}) //判断数组中的元素是否都满足某个条件
console.log(match);
match = numbers.some(function (value) {
  return value > 5;
}) //判断数组中有一个元素满足某个条件即可
console.log(match);
const filteredNumbers = numbers.filter(function (value) {
  return value > 3;
}); //返回符合条件的元素所组成的数组, 过滤掉不符合条件的元素
console.log(filteredNumbers);
const three = concatNumbers.find(function (value, index) {
  return value === 3 && index > 3;
}); //查找第一个符合条件的元素, 如果找到则返回该元素, 如果没有找到返回undefined
console.log(three);
const findIndex = concatNumbers.findIndex(function (value, index) {
  return value === 3 && index > 3;
}); //查找第一个符合条件的元素所在数组中的位置, 如果找到该元素, 则返回该元素的位置, 如果没有找到返回-1
console.log(findIndex);
const keys = numbers.keys(); //返回数组所有元素索引组成的迭代器
for (const key of keys) {
  console.log(key);
}
const squareNumbers = numbers.map(function (value) {
  return value * value;
}) //返回一个由回调函数的返回值组成的新数组.
console.log(squareNumbers);
const sum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
console.log(sum);
const values = numbers.values(); //返回一个数组迭代器对象, 该迭代器会包含所有数组元素的值.
for (const value of values) {
  console.log(value);
}
const copyWithIn = numbers.copyWithin(0, 2, 5); //浅复制数组的一部分到同一数组中的另一个位置, 并返回它. 不会改变原数组的长度, 可能会改变原数组里面元素的值
console.log(numbers, copyWithIn);
const fill = numbers.fill(0, 2, 4); //将指定区间的元素都替换成某个值
console.log(fill, numbers);
const pop = numbers.pop(); //数组的最后一个元素出栈并返回该元素.
console.log(pop, numbers);
const nubmersLength = numbers.push(8, 9, 10); //将一个或者多个元素入栈, 并返回入栈后数组的长度
console.log(nubmersLength, numbers);
const reversedArray = numbers.reverse(); //翻转数组
console.log(reversedArray, numbers);
const shiftElement = numbers.shift(); //删除数组的第一个元素并且返回该元素
console.log(shiftElement, numbers);
const unshiftArray = numbers.unshift(100, 200); //在数组的前面添加一个或多个元素, 返回添加元素后数组的长度
console.log(unshiftArray, numbers);
const sortedArray = numbers.sort(function (number1, number2) {
  return number1 - number2;
}) //按照某种条件去重新排列数组
console.log(sortedArray, numbers);
const splicedNumbers = numbers.splice(2, 3, 12, 13); //从指定的位置开始, 先移除某个数量的元素, 在添加指定的元素
console.log(splicedNumbers, numbers);