//property
//1.不能再原始数据类型(number, string, boolean, null, undefined)上添加属性.
let number = 10
number.age = 10;
console.log(number, number.age);

//2. 为对象添加和删除属性
const obj = { 
  name: 'xiaoming', //申明对象时为其定义某些属性
  logInfo() {
    console.log('name:' + this.name);
  },
  set myName(newValue) {
    console.log('set myName:' + newValue);
    this.name = newValue;
  },
  get myName() {
    console.log('get myName:' + this.name);
    return this.name;
  }
}

obj.id = '001'; //运行时为其申明属性
console.log(obj);

const proto = {
  type: 'object',
  name: 'proto name',
}
//通过proto继承而来的属性
Object.setPrototypeOf(obj, proto);
console.log(obj.type, obj.name);
//通过Object.defineProperty()和Object.definedProperties()来添加属性
let obj1 = Object.defineProperty(obj, 'sex', {
  value: '男',
  enumerable: true,
});
console.log(obj1, obj1 === obj);
//通过defineProperties来为某个对象同时添加多个属性
obj1 = Object.defineProperties(obj, {
  city: {
    value: 'wuhan',
    enumerable: true,
  },
  address: {
    value: '1街2号',
    enumerable: false,
  }
})
console.log(obj1);

//3.获取和设置属性的值
const name = obj.name; //通过点语法的形式来获取属性的值
const type = obj.type;
const address = obj['address']; //通过中括号的形式来获取属性的值
console.log(name, type, address);
obj.name = 'daming'; //修改属性的值
obj.myName = 'aming';
console.log(obj.name, obj.myName);

//4.属性的判断
console.log('type' in obj);
console.log('name' in obj);
console.log(obj.hasOwnProperty('type'), obj.hasOwnProperty('name'), obj.hasOwnProperty('myName'));
console.log(obj.hasOwnProperty('myName1'));


//5. 属性描述符
let propertyDesc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(propertyDesc); 
propertyDesc = Object.getOwnPropertyDescriptor(obj, 'address');
console.log(propertyDesc);
propertyDesc = Object.getOwnPropertyDescriptor(obj, 'myName');
console.log(propertyDesc);
propertyDesc = Object.getOwnPropertyDescriptor(obj, 'type');
console.log(propertyDesc);

//6.属性的枚举
console.log('*************对象的遍历方式*************')
for (const key in obj) {
  console.log(`${key}-${obj[key]}`)
}
for (const key of Object.keys(obj)) {
  console.log(`${key}-${obj[key]}`)
}
for (const value of Object.values(obj)) {
  console.log(`value-${value}`);
}
for (const keyValue of Object.entries(obj)) {
  console.log(`${keyValue[0]} - ${keyValue[1]}`)
}
const propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames);
//7. 属性的删除和修改属性的值
const user1 = {
  name: 'daming',
  age: 10,
}
delete user1.age;
console.log(user1)

Object.defineProperty(user1, 'age', {
  value: 20,
  configurable: false,
  enumerable: true,
})
console.log(user1)
delete user1.age; //属性的configurable为false, 属性是不能删除的. 
console.log(user1);
user1.name = 'xiaoli';
console.log(user1);
Object.defineProperty(user1, 'name', {
  value: 'xiaoming',
  enumerable: true,
  writable: false,
})
console.log(user1);
user1.name = 'xihuang'; //属性描述符的writable为false的时候, 属性的值不能被修改
console.log(user1); 

//8.冻结对象对属性相关操作的影响

const user2 = {
  name: 'xiaohong',
  age: 10,
}
const freezeObj = Object.freeze(user2);
console.log(freezeObj === user2); //返回被冻结的对象, 而不是其副本
user2.sex = 'man'; //冻结后的对象, 不能为其添加属性
console.log(user2);
delete user2.age; //冻结后的对象, 其属性不能被删除
console.log(user2); 
// Object.defineProperty(user2, 'id', {
//   value: '001',
//   enumerable: true
// });
// console.log(user2); //报错, 不能被扩展的对象, 调用该方法报错
// Object.defineProperty(user2, 'name', { //报错, 不能重新定义冻结的对象
//   value: 'daming',
//   enumerable: true,
//   configurable: false,
//   writable: false,
// })
// Object.setPrototypeOf(user2, proto) //报错, 冻结的对象不能修改其原型
// console.log(Object.getPrototypeOf(user2));

//Object.preventExtensions(): 阻止对象的扩展

const user3 = {
  name: 'xiaoli',
  age: 20,
}
Object.setPrototypeOf(user3, proto);
const preventExtensionsObj = Object.preventExtensions(user3);
console.log(preventExtensionsObj === user3);
user3.name = 'xiaoming';
delete user3.age;
console.log(user3); //可以删除和修改属性的值
user3.sex = '男';
console.log(user3); //不能添加新的属性
console.log(user3.type);
const user3Proto = Object.getPrototypeOf(user3);
user3Proto.sex = '未知';
console.log(user3.sex); //可以为不能扩展对象的原型, 添加属性
// Object.setPrototypeOf(user3, proto); //报错, 不能重新设置对象的原型
// console.log(user3.type);
// Object.defineProperty(user3, 'id', { //报错, 不能扩展的对象不能添加属性
//   value: '001',
//   enumerable: true
// })
// console.log(user3);

//Object.seal(): 密封一个对象

const user4 = {
  name: 'xiaoming',
  age: 10,
}
const sealObj = Object.seal(user4); //返回user4, 而不是user4的副本
console.log(sealObj === user4); 
user4.name = 'daming'; //可以修改已存在属性的值
delete user4.age; //不能删除已存在的属性
user4.sex = '男'; //不能添加属性
console.log(user4);

// Object.setPrototypeOf(user4, proto); //报错, 不能修改不能扩展对象的原型
// Object.defineProperty(user4, 'id', { //报错, 不能为不能扩展的对象添加属性
//   value: '001',
//   enumerable: true,
// })









