//1. 类的声明, 通过class关键字来声明类

class Person {
  constructor(name, age) {
    //构造函数
    this.name = name;
    this.age = age;
  }

  //添加实例方法
  greeting(name) {
    console.log(`hello, ${name}`);
  }
  logInfo() {
    console.log(`my name is ${this.name}, age is ${this.age}`);
  }
  static type() {
    return 'human';
  }
  static logType() {
    console.log(this.total);
    console.log(this.type());
  }
  
  static total = 1000; //申明静态属性
}

//添加静态属性
Person.count = 100;

//2. new出新实例
const xiaoming = new Person("小明", 10);

//3. 构造函数的指向
console.log(Person.prototype.constructor === Person);
xiaoming.greeting("daming");
xiaoming.logInfo();

class Student {
  logStudentInfo() {
    console.log(`name is ${this.name}, age is ${this.age}, id is ${this.#id}`);
  }
  constructor(name) {
    this.name = name; //在构造函数中定义属性
  }
  age = 10; // 在类体中定义属性
  #id = 0; //申明私有属性
  add() {
    this.#id ++;
  }

  _sex = 'unknown';

  set sex(newValue) {
    console.log('set sex');
    this._sex = newValue;
  }
  get sex() {
    console.log('get sex');
    return this._sex;
  }
  // #decrease() {
  //   // if (this.#id > 0) {
  //   //   this.#id --;
  //   // }
  // }
  // reduce() {
  //   // this.#decrease();
  // }
}

let stu = new Student('001');
let stu1 = new Student('007');
stu1.name = '小明';
stu1.age = 20;
console.log(stu.name, stu.age);
console.log(stu1.name, stu1.age);

//静态方法
console.log(Person.type());
Person.logType();


console.log(Person.count);
console.log(Person.total);

stu.logStudentInfo();
stu.add();
stu.logStudentInfo();
console.log(stu.sex);
stu.sex = 'man';
console.log(stu.sex);
// stu.reduce();
// stu.logStudentInfo();
// console.log(stu.#id);



