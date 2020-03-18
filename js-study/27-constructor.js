//1. 构造函数的声明
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.logInfo = function () {
  console.log(this.name + '-' + this.age);
}
//2. 通过new的形式来创建类的实例
const person = new Person('Mark', 20);
//3. 对象方法的调用
person.logInfo();
//将构造函数作为一般普通函数使用
// const person1 = Person('Mark', 20); //person1为undefined.
// console.log(person1);
// person1.logInfo(); //报错, person1不存在logInfo方法

//4. 将普通函数作为构造函数使用

function createAnimal() {
  this.name = 'animal'; 
  this.age = 0;
  // const obj = {};
  // obj.name = 'animal';
  // obj.age = 0;
  // return obj;
}
const animal = new createAnimal();
console.log(animal.name, animal.age, animal instanceof createAnimal);

//5. constructor, 一般对象的constructor指向类的构造函数
const aPerson = new Person('jiang', 20);
console.log(aPerson.constructor);
console.log(aPerson.constructor === Person);
const obj = {};
const obj1 = new Object();
console.log(obj.constructor === Object, obj1.constructor === Object);

//通过构造函数实例化出来的对象的原型指向构造函数的原型
console.log(aPerson.__proto__);
console.log(aPerson.__proto__ === Object.getPrototypeOf(aPerson));
console.log(Object.getPrototypeOf(aPerson));
console.log(aPerson.__proto__ === Person.prototype);
console.log(Person.prototype);
