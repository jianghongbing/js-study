//Object的扩展
//1.属性的简洁表示法
const name = 'jiang';
const user = {
  id: '001', //es5中的属性表示方法, 只能通过属性键值对的形式来表示
  name, //直接使用某个变量, 相当于 name: 'jiang', 键为变量名, 值为变量的值
  age: 10,
  logUserInfo: function () {
    console.log(`name:${this.name}, id:${this.id}`);
  }, //es5中对象的方法声明
  logInfo() {
    console.log(`name:${this.name}, id:${this.id}`); //es6中的简洁申明
  }
}
user.logUserInfo();
user.logInfo();

//2. 属性名表达式
const lastName = 'myLastName';
const user1 = {
  'first name': 'wang', //不是合法的标识符,可以通过属性名的方式来作为属性的key
  [lastName]: 'xiaoming', //以某个变量作为属性的key,
  ['full' + 'Name']: 'wang xiaoming', //通过表达式的形式来申明属性的key
  ['log' + 'Name']() { //通过表达式的形式来声明方法
    console.log(`name is ${this.fullName}`);
  }
}
console.log(user1['first name']);
console.log(user1.myLastName);
console.log(user1.fullName);
user1.logName();
console.log(user1.logName.name);
//属性可枚举性和遍历
const descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

const obj = {
  name: 'jiang',
  age: 10,
}
Object.defineProperty(obj, 'sex', {
  enumerable: false,
  value: '未知',
  configurable: true,
  writable: true,
})
Object.defineProperty(obj, 'id', {
  enumerable: true, 
  value: '007',
  writable: true,
  configurable: true,
})
for (const key in obj) { //只能遍历enumerable为true的属性
  console.log(`key:${key}, value:${obj[key]}`);
}
Object.getOwnPropertyNames(obj).forEach(propertyName => { //包含enumerable为false的属性
  console.log(propertyName);
})

//super关键字
const car = {
  type: 'car',
  logType() {
    console.log(this.type);
  }
}
const toyota = {
  name: 'toyota',
  // carType: super.type, //报错, super关键字只能在方法中使用
  run() {
    console.log(`${this.name}-${super.type} run`);
  }
}
Object.setPrototypeOf(toyota, car);
toyota.run();
// console.log(toyota.carType)

//解构赋值和扩展运算符
//解构赋值, 从对象中提取值
const { age, id } = user;
console.log(age, id);
const newUser = { ...user };
console.log(newUser);

//链判断运算符
// let a
// let value = a ?. name || 'unknown'; 
// console.log(value);
// //上面的等同于 const value = a ? a.name : undefined;
// a = {
//   name: 'a',
// }
// value = a?.name || 'unknown';
// console.log(value);

//null 判断运算符
// let obj2;
// const admin = {
//   name: 'admin',
//   id: '001',
// }
// let defaultUser = obj2 ?? admin;
// console.log(defaultUser);

//Object新增加的方法
//Object.is()
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, +0));
console.log(Object.is(0, -0));
console.log(Object.is(+0, -0));
console.log(+0 === -0);
console.log(NaN === NaN);
//Object.assgin()
const target = { name: 'daming' };
let result = Object.assign(target);
console.log(result, result === target);
result = Object.assign(target, { age: 10 }, { id: '002' });
console.log(result, target);

const propertyDescriptors = Object.getOwnPropertyDescriptors(target);
console.log(propertyDescriptors)

//设置和获取某个对象的prototype
console.log(Object.getPrototypeOf(target));
Object.setPrototypeOf(target, { sex: '男' })
const prototype = Object.getPrototypeOf(target);
console.log(prototype);
console.log(target.sex);

//values: 返回一个可遍历对象, 由某个对象的非继承的可枚举的属性的值组成
for (const value of Object.values(target)) {
  console.log(value);
}
//entries: 返回一个可遍历对象, 由对象的非继承的可枚举的属性的键值对数组组成
for (const iterator of Object.entries(target)) {
  const key = iterator[0];
  const value = iterator[1];
  console.log(`key:${key}-value:${value}`);
}

//fromEntries: 将键值对数组转换成对象
const keyValueArray = [];
for (const iterator of Object.entries(target)) {
  keyValueArray.push(iterator);
}
const newTarget = Object.fromEntries(keyValueArray);
console.log(newTarget, Object.getPrototypeOf(newTarget));