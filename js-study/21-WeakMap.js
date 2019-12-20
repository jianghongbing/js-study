// WeakMap
//1.WeakMap的构建
const weakMap = new WeakMap(); //创建一个空的weakMap
//2.set: 设置键值对
const one = new String('one');
weakMap.set(one, 'one');
let two = new String('two');
{
  weakMap.set(two, 'two');
  console.log(weakMap.has(two));
  two = null; //回收two, two会从map中移除
}
//2. has:判断某个key是否存在于weakMap中
console.log(weakMap.has(one), weakMap.has(two));
//3.get: 获取指定key的值
console.log(weakMap.get(one), weakMap.get(two));
//4.delete,删除指定key的元素
console.log(weakMap.delete(one), weakMap.delete(two));
console.log(weakMap);


