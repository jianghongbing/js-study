//js中的基本数据类型

//1. 数字类型, 数字类型分为整形和浮点型数字
var age = 10;
//浮点数
var weight = 65.78;
//2.布尔类型, 只有两个值 true 和 false
var isTrue = 5 > 3;
//3. 字符串类型
var name = 'jianghongbing';
//4. undefined, 某个变量如果被申明了, 但是没有进行赋值, 该变量的值就是undefined. 该类型只有一个值undefined
var myName;
//5. null, 指向空指针的对象. 该类型只有一个值null
var obj = null
//6. object: 对象类型
var xiaoming = {
  name: 'xiaoming',
  age: 10
}

//获取基本数据类型的类型值
console.log(typeof 10);
console.log(typeof 4.5);
console.log(typeof isTrue);
console.log(typeof name);
console.log(typeof myName);
console.log(typeof obj); //使用typeof获取null类型的值为object. 
console.log(typeof xiaoming);
