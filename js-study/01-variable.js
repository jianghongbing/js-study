//变量
//1.变量名又称为标识符, 不是使用js的关键字和保留字作为标识符, 而且标识符必须以字母,下划线或者$符号开头.
//js中有三中方式来说申明变量. var, let, const 
//var: 声明一个变量, 可选初始化一个值. 
//let: 声明一个块作用域的局部变量, 可选初始化一个值. 
//const: 声明一个块作用域的只读常量. 
var name = 'xiaoming';
let age = 10;
const TYPE = 'Person';

//变量的作用域: 在函数之外声明的变量, 叫做全局变量, 因为它可被当前文档中的任何其他代码所访问. 在函数内部声明的变量, 叫做局部变量. 因为它只能在当前函数的内部访问. ECMAScript 6之前的JavaScript没有语句块作用域, 相反语句块中声明的变量将成为语句块所在函数(或全局作用域)的局部变量.

function addTwo(number) {
  var two = 2;
  return number + two;
}
// console.log(two); //局部变量在函数体外部就不存在了

//变量提升: JavaScript变量的另一个不同寻常的地方是你可以先使用变量稍后再声明变量而不会引发异常. 这一概念称为变量提升. JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面. 但是提升后的变量将返回undefined值. 因此在使用或引用某个变量之后进行声明和初始化操作, 这个被提升的变量仍将返回undefined值. 只有通过var申明的变量才会存在变量提升, let和const不会, 会直接报错

console.log(myName);
// console.log(myAge) //报错
// console.log(PI); //报错
var myName = 'xiaoming';
let myAge = 11; 
const PI = 3.14;

//函数提升: 对于函数来说, 只有函数声明会被提升到顶部, 而函数表达式不会被提升. 
let number = add(1, 2); //函数提升
console.log(number); 
// number = addTwoNumber(100, 200); //函数变量不会提升, 因此会报错
// console.log(number);
function add(a, b) {
  return a + b;
}



const addTwoNumber = function (a, b) {
  return a + b;
}
number = addTwoNumber(100, 200);
console.log(number);

//全局变量是全局对象的属性. 在网页环境中全局对象是window; 在node环境中, 全局对象是global. 全局变量一般可以直接访问, 不需要通过对象.属性名的方式来访问. 声明且赋值的没有使用修饰符的变量都会被加到全局对象属性中去.

global.globalVariable = 'jiang';
testVariable = 1234;
console.log(globalVariable)
console.log(global.testVariable);

//常量: 可以通过const来定义一个常量, 常量的值不能改变(其实是其指向的值). 如果是一个基本类型的值, 值是不能改变的, 如果指向的是一个对象类型, 还是可以对象里面的属性的值, 或者添加,删除属性, 但是不能将其指向另外一个变量
const ZERO = 0 
// ZERO = 100; //报错, 常量的值不能改变. 
const XIAO_MING = {
  name: 'xiaoming',
  id: '001',
}
XIAO_MING.id = '002'; //正常, 可以改变常量指向的对象的里面的属性
// XIAO_MING = {}; //报错, 不能在指向另外一个变量

