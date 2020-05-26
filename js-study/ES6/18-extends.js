//1. 继承
class Shape {
  constructor() {
    console.log(new.target.name);
    this.type = 'shape';
  }
  perimeter() {
    return 0;
  }
  area() {
    return 0;
  }
  logInfo() {
    console.log(`周长:${this.perimeter()}, 面积:${this.area()}`)
  }
}

class Rect extends Shape {
  constructor(x, y, width, height) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  perimeter() {
    return (this.width + this.height) * 2;
  }
  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(x, y, r) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
  }
  perimeter() {
    return 2 * Math.PI * this.r;
  }
  area() {
    return Math.PI * Math.pow(this.r, 2);
  }
}

const shape = new Shape();
const rect = new Rect(0, 0, 100, 200);
const circle = new Circle(100, 100, 50);

//访问在父类中的属性
console.log(shape.type); 
console.log(rect.type);
console.log(circle.type);
rect.type = 'rect';
circle.type = 'circle';
console.log(shape.type);
console.log(rect.type);
console.log(circle.type);

//调用在父类中的方法
shape.logInfo(); 
rect.logInfo();
circle.logInfo();

class Square extends Rect {
  constructor(x, y, length) {
    super(x, y, length, length);
  }
}

//判断实例对象是不是属于某个类
console.log(shape instanceof Object);
console.log(shape instanceof Shape);
const squre = new Square(0, 0, 100);
console.log(squre instanceof Square);
console.log(squre instanceof Rect);
console.log(squre instanceof Shape);
console.log(squre instanceof Object);

//super关键字

class Person {
  id = "unknown"
  constructor(name = 'unknown', age = 0) {
    this.name = name;
    this.age = age;
  }
  static logInfo() {
    console.log('i am a person');
  }

  logInfo() {
    console.log(`name:${this.name}, age:${this.age}`);
  }
}

Person.prototype.type = 'Person';

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    //name, age, id这些属性都是定义在实例上面的, 而不是原型上, 因此通过super访问这些属性的时候, 值都为undefined, 定义在实例上的属性需要通过this来访问
    console.log(`super name: ${super.name}, age: ${super.age}`); 
    console.log(`super id: ${super.id}`);
    //可以通过super来访问定义在父类原型上的属性
    console.log(`super type: ${super.type}`); //
  }

  static logStudentInfo() {
    //调用父类的静态方法, 此时super指向的是父类
    super.logInfo();
    console.log('i am a student');
  }

  logStudentInfo() {
    super.logInfo();
  }
  logInfo() {
    // console.log(`name:${this.name}, age:${this.age}`);
    console.log(`name:${this.name}, age:${this.age} studnetId: ${this.studentId}`);
  }

  

}

const s1 = new Student('xiaoming', 10, '001');
Student.logStudentInfo();
s1.logStudentInfo();
s1.logInfo();





