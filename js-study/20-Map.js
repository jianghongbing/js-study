//Map
//1. Map的创建
let map = new Map(); //创建一个空的map
//通过数组来创建Map
map = new Map([['one', 1], ['two', 2]]);
console.log(map);
map = new Map(new Set([['name', null], ['age', 10]]));
console.log(map);
//2.size: Map中元素的个数
console.log(map.size);
//3. 为map设置键值对
map = new Map();
map.set('name', 'xiaoming');
map.set('age', 10).set('id', '001');
console.log(map);
map.set('age', 11);
console.log(map);
//对象作为map的key
const friends = { key: 'friends' };
map.set(friends, ['daming', 'xiaoli', 'xiaowang']);
console.log(map);
//4. has:判断一个元素是否存在
console.log(map.has('name'), map.has('name1'));
//5. get: 获取map对象指定key的值
let name = map.get('name');
console.log(name);
name = map.get('name1');
console.log(name);
//6.遍历Map
for (const item of map) {
  console.log(item);
  console.log(item[0], item[1]);
}
map.forEach((value, key, map) => console.log(`key:${key}, value:${value}, map:${map}`));
//7.keys: Map中所有元素的key所组成的迭代器
const keys = map.keys();
for (const key of keys) {
  console.log(key);
}
//8.values: Map中所有元素的value所组成的迭代器
const values = map.values()
for (const value of values) {
  console.log(value);
}
//9.entries: Map中元素的key,value所组成的数组的迭代器
const entries = map.entries();
for (const item of entries) {
  console.log(item);
  console.log(item[0], item[1]);
}
//10.delete: 删除指定key的数据, 如果存在指定的key的数据, 则移除指定key的数据并返回true, 如果不存在返回false
console.log(map.delete('name'), map.delete('name1'));
console.log(map);
//11.clear: 清除map中所有的数据
console.log(map.clear(), map);