console.log(name);
var name = 'xiaoming'; //上面的不会报错, 使用var声明的变量存在变量提升. 当使用
// console.log(age);
// let age = 10;  //报错, let的变量在使用之前必须先声明
// {
//   console.log(name);
//   console.log(typeof name);
//   let name = 'daming'; //会报错, 下面的name会绑定这个大括号区域, 里面的name都将使用里面的name变量. 而不会使用外面的name, 而let申明的变量不存在变量提升, 因此会报错
// }
var name = 'daming' //不报错, 使用var修饰的变量可以重复声明
// let age = 10
// let age = 20 //报错, 重复声明变量age

{
  var myName = 'xiaoli';
  let myAge = 20;
  const PI = 3.14;
  console.log('inner:' + myName + '-' + myAge + '-'+ PI);
}
// console.log('outter:' + myName + '-' + myAge + '-'+ PI); //myAge和PI没有声明就使用
// const PI = 3.14;
// PI = 3.1415; //报错, PI的值不能修改
const user = {
  name: 'xiaoming',
}

// user = {
//   name: 'daming'
// } //报错, 不能再将user指向其他对象

user.name = 'daming'; //修改引用类型变量里面的内容不会报错
user.age = 10;
console.log(user);

