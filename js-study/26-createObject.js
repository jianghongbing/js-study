//1.通过字面量的形式来创建对象
const xiaoming = {
  name: "xiaoming",
  age: 10
};

//2.通过new Object()的形式来创建对象
const obj = new Object();
obj.name = "daming";
obj.age = 11;

//3.工厂模式

function createPerson(name, age) {
  const person = new Object();
  person.name = name;
  person.age = age;
  return person;
}
const xiaowang = createPerson('xiaowang', 12);
console.log(xiaowang.name, xiaowang.age);

//4. 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.logInfo = function () {
    console.log('my name is ' + this.name + ', age is ' + this.age);
  }
}

const aPerson = new Person('peter', 10);
aPerson.logInfo();

//通过instanceOf来判断某个对象是不是属于某个类型
const isPerson = aPerson instanceof Person;
const isObject = aPerson instanceof Object;
console.log(isPerson, isObject);

//5. 原型模式

function Student() {
  
}
Student.prototype.name = 'xiaowang';
Student.prototype.age = 10;
Student.prototype.logInfo = function () {
  console.log('my name is ' + this.name + ', age is ' + this.age);
}
const student1 = new Student();
const student2 = new Student();
student1.logInfo();
student2.logInfo();
student1.name = 'xiaoli';
const studentPrototype = Object.getPrototypeOf(student1);
studentPrototype.name = 'xiaozhou';
student1.logInfo();
student2.logInfo();

//6.构造函数和原型模式相结合的方式

function Teacher(name, age) {
  this.name = name;
  this.age = age;
}
Teacher.prototype.logInfo = function () {
  console.log('my name is ' + this.name + ', age is ' + this.age);
}
const teacher1 = new Teacher('laoli', 25);
teacher1.logInfo();
