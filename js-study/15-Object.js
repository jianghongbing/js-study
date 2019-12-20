const obj = new Object();
const obj1 = Object(); //等同于上面构造函数创建对象
console.log(obj, obj1);
const obj2 = new Object(true);
const obj3 = new Object('admin');
const obj4 = new Object([1, 2, 3, 4]);
const obj5 = new Object(undefined);
const obj6 = new Object(null);
[obj2, obj3, obj4, obj5, obj6].forEach(function (obj) {
  console.log(obj, typeof obj);
})
console.log(obj3, obj3 instanceof String);
console.log(Array.isArray(obj4));

//object
function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Object.length, Person.length);
console.log(Object.prototype);

const user = {
  name: 'admin',
  id: '001',
}

let newUser = Object.assign(user, { age: 10, name: 'root' }); //将第二个参数对象的值复制到user里面, 如果有同名的属性则覆盖
console.log(user, newUser);
const obj7 = Object.assign({}, user);
console.log(obj7);
//通过某个原型来创建一个新的对象
const createUser = Object.create(user, {
  sex: {
    writable: true, 
    enumerable: true,
    value: 'man',
}});
console.log(createUser, createUser.id, createUser.name, createUser.__proto__);

//为某个对象添加属性, 并定义属性的相关配置
newUser = Object.defineProperty(user, 'age', {
  enumerable: true,
  value: 10,
  writable: true,
});
console.log(newUser, user);
//为某个对象同时定义多个属性和相关属性的配置
newUser = Object.defineProperties(user, {
  'prop1': {
    value: 1,
    enumerable: true, 
    writable: true,
  },
  prop2: {
    value: 2,
    enumerable: false,
    writable: false,
  }
})
console.log(newUser, user);
//返回某个对象的以键值对作为数组的数组并返回
const entries = Object.entries(user);
console.log(entries, Array.isArray(entries));
//冻结某个对象
const freezeObj = Object.freeze({ name: 'abc', age: 10 });
console.log(freezeObj);
freezeObj.age = 20; //修改已被冻结的对象属性没有作用
console.log(freezeObj);
delete freezeObj.name; //删除对象的属性没有作用
console.log(freezeObj);
//获取自有的属性描述, 不是从原型继承而来的.
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(createUser, 'name')) //当获取原型上的属性描述时, 返回undefined.
//获取对象自有的所有属性名(包括可枚举的和不可枚举的)所组成的数组, 不包括从原型对象上继承而来的.
console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertyNames(createUser));
//获取某个对象的原型对象, 替代__proto__
console.log(Object.getPrototypeOf(user));
console.log(Object.getPrototypeOf(createUser));
//比较连个值是否相等
console.log(Object.is(undefined, undefined));
console.log(Object.is(null, undefined));
//判断某个对象是否可扩展
console.log(Object.isExtensible(user), Object.isExtensible(freezeObj));
//判断某个对象是否被冻结
console.log(Object.isFrozen(user), Object.isFrozen(freezeObj));
const newUser1 = Object.defineProperties(user, {
  'prop1': {
    value: 1,
    enumerable: true, 
    writable: true,
  },
  prop3: {
    value: 3,
    enumerable: false,
    writable: true,
  }
})
console.log(Object.keys(newUser), Object.keys(newUser1));

const object = { name: 'hehe', age: 10 };
Object.preventExtensions(object); //将某个对象变的不能扩展
object.age = 10; //不能添加属性
object.name = 'haha'; //可改变属性的值
delete object.age; //可删除属性
console.log(object, Object.isExtensible(object)); 
const object1 = { name: 'hehe', age: 10 };
Object.seal(object1); //密封某个对象
object1.name = 'haha';  //密封对象属性的值是可以修改的
delete object1.name; //密封对象属性不能被删除
console.log(object1);
console.log(Object.getOwnPropertyDescriptor(object1, 'name')); //密封对象的属性都变的不可配置
console.log(Object.isSealed(object), Object.isSealed(object1)); //判断某个对象是否密封

//设置某个对象的原型
const object2 = Object.setPrototypeOf({ prop4: 4 }, user);
console.log(object2, Object.getPrototypeOf(object2));
console.log(Object.entries(object2));
//返回给定对象自身可枚举值的数组.
console.log(Object.values(user), Object.values(newUser1));
//判断对象是否含有某个属性, 不包括从原型链上继承而来的属性
console.log(user.hasOwnProperty('name'), createUser.hasOwnProperty('name'));
//判读一个对象是否在另外一个对象的原型链上
console.log(user.isPrototypeOf(createUser), Object.prototype.isPrototypeOf(user));
//判断某个对象的属性是否是可枚举的
console.log(newUser1.propertyIsEnumerable('prop1'), newUser1.propertyIsEnumerable('prop3'));
console.log(user.valueOf()); //对象的原始值
console.log(user.toString()); 
console.log(user.toLocaleString());