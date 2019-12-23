//对象的原型
const obj = {
  name: '123',
  age: 10,
}
//获取对象的prototype
let prototype = Object.getPrototypeOf(obj);
console.log(prototype);
//设置对象的prototype
const proto = {
  type: 'Person',
  name: 'unknown',
  sayName() {
    console.log(`hi, ${this.name}`);
  }
}
Object.setPrototypeOf(obj, proto);
console.log(Object.getPrototypeOf(obj)); 
//访问原型中的数据和方法
console.log(obj.name, obj.type);
obj.sayName();

//函数的原型

function sayHi(name) {
  console.log(`hi, ${name}`);
  this.name = name;
}
console.log(sayHi.prototype);
sayHi.prototype.a = 'a';
sayHi.prototype.b = 'b';
sayHi.prototype.logName = function () {
  console.log(`name:${this.name}`);
}
console.log(sayHi.prototype, Object.getPrototypeOf(sayHi)); //在函数的prototype上面添加属性

//将sayHi函数作为构造函数使用
const objA = new sayHi();
const objB = new sayHi();
console.log(objA.a, objB.b, objB.a, objB.b);

//构造函数的原型
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person();
//通过构造函数创建出来的对象的原型默认是指向构造函数的prototype属性
console.log(Object.getPrototypeOf(person), Object.getPrototypeOf(person) === Person.prototype);
const person2 = new Person();
console.log(Object.getPrototypeOf(person2), Object.getPrototypeOf(person2) === Person.prototype);
Object.setPrototypeOf(person2, proto);
//但是可以修改对象的原型对象的指向.
console.log(Object.getPrototypeOf(person2), Object.getPrototypeOf(person2) === Person.prototype);
//Object的prototype属性
console.log(Object.prototype);

//原型链
const superProto = {
  id: '001',
  a: 'A',
  logId() {
    console.log(`id:${this.id}`);
  }
}
Object.setPrototypeOf(proto, superProto);
console.log(obj.name) //访问的是自身上的属性, 而不是原型的属性
console.log(obj.type); //访问原型上的属性
console.log(obj.id); //访问原型的原型的方法和属性
obj.logId();

