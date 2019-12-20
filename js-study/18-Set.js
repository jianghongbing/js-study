//Set的构造
//创建一个空的set
let set = new Set()
//通过数组来创建一个set
let newSet = new Set([1, 2, 3, 4, 4, 5]);
console.log(set, newSet);
console.log(set.size, newSet.size);

const user = {
  name: 'xiaoming',
}
const user1 = {
  name: 'xiaoming',
}
//Set中元素的相等性
const isTrue = true;
const isFalse = false;
const nullObj = null;
const undefinedObj = undefined;
const set1 = new Set([user, user1, user, isTrue, true, isFalse, false, null, nullObj, undefinedObj, undefined, +0, -0, NaN, NaN]);
console.log(set1);
//迭代
for (const obj of set1) {
  console.log(obj);
}
//add: 在Set的末尾添加一个元素
set.add(1).add(2).add(3).add(2);
console.log(set);
//has
console.log(set.has(2), set.has(5));
set.add(100)
//entries: 返回一个[value, value]形式的迭代器对象
for (const obj of set.entries()) {
  console.log(obj);
}
//values: 返回一个由所有元素组成的迭代器
for (const obj of set.values()) {
  console.log(obj);
}
//keys: 和values相同
for (const obj of set.keys()) {
  console.log(obj);
}
//遍历set
set.forEach((value, value2, set) => console.log(value, value2, set));
//delete删除元素
let deleteSuccess = set.delete(100);
console.log(deleteSuccess, set);
deleteSuccess = set.delete(200);
console.log(deleteSuccess, set);
//clear: 清除所有的元素
set.clear();
console.log(set);