const user = {
  name: 'xiaoming',
  age: 10
}

const daming = {
  _name: 'daming',
  set name(newValue) {
    console.log(newValue, this);
    this.name = newValue;
  }, 
  get name() {
    return this._name;
  },
  // age: 11,
  _age: 20,
  get age() {
    return this.age;
  }
}



//set: 设置某个对象某个属性的值
let result = Reflect.set(user, 'name', 'daming');
console.log(result, user);

result = Reflect.set(daming, 'name', 'xiaoming', user);
console.log(result, user, daming);

Object.freeze(user);
result = Reflect.set(user, 'name', 'admin');
console.log(result, user);
//get: 获取某个对象某个属性的值
result = Reflect.get(user, 'age');
console.log(result);
result = Reflect.get(daming, 'age', user);
console.log(result);

//apply: 与函数的apply方法功能相同. 
//以前的写法
result = Math.min.apply(null, [1, 2, 3]); 
console.log(result);
//Reflect的写法
result = Reflect.apply(Math.min, null, [1, 2, 3]);
console.log(result);

function Person(name, id) {
  this.name = name;
  this.id = id;
}

//construct
const person = Reflect.construct(Person, ['admin', '001']);
console.log(person.name, person.id, Object.getPrototypeOf(person), person instanceof Person);


