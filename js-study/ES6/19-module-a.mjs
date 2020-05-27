
//导出变量
export var a = 100;
var b = 200;
var c = 300;
var d = 400;
export {
  b, multiply, Person,
  c as C, //通过as, 将c变量作为C导出
  d,
};
  
export default 0;
  
export function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

class Person {
  constructor(name) {
    this.name = name;
  }
  logInfo() {
    console.log(`my name is ${this.name}`);
  }
}