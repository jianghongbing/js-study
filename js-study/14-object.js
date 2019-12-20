//1.创建对象
//字面量的形式定义
const obj = {} //字面量形式定义一个没有键值对的object

//字面量定义一个有键值对的object
const user = {
  name: 'admin',
  id: '001',
  login: function () {
    console.log('start login');
  }
}
//通过Object的构造函数来定义
const obj1 = new Object();
console.log(typeof obj, typeof user, typeof obj1);

//2.访问对象中的属性和方法
console.log(user.id);
user.login();

const xiaoming = {
  'my name': 'xiaoming',
  age: 10,
}

console.log(xiaoming['my name']); //此处只能通过中括号的形式来访问, 不能通过点语法的形式
const key = 'age';
// console.log(xiaoming[age]);
console.log(xiaoming[key]); //以变量的形式作为key来进行访问, 只能以中括号的形式去访问
console.log(user.sex); //访问不存在的函数, 返回undefined.
user.id = '002'; //修改对象属性的值
//动态给对象添加属性和删除属性
user.sex = 'man';
console.log(user);
delete xiaoming.age;
console.log(xiaoming);

//遍历对象
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    const value = user[key];
    console.log(key + ':' + value);
  }
}



