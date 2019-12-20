//1.数组的解构赋值
const [one, two, three] = [1, 2, 3];
console.log(one, two, three);
const [a, , c] = ['a', 'b', 'c'];
console.log(a, c);
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head, tail);
// const [...head1, tail1] = [1, 2, 3, 4, 5]; //报错, rest变量必须是最后一个变量
// console.log(head1, tail1);

//2.对象的解构赋值
const user = {
  name: 'xiaoming',
  age: 10, 
  id: '001',
  info: {
    father: 'laoli',
  },
  friends: [
    {
      name: 'daming',
      age: 9,
      id: '002',
    },
    {
      name: 'xiaoli',
      age: 11,
      id: '003',
    }
  ]
}

const { name, age, id } = user;
console.log(name, age, id);
//2.1 对象的嵌套解构赋值
const { info: { father } } = user;
console.log(father);

const { friends: [friend0, {name: name2, age: age2, id: id2}] } = user;
console.log(friend0);
console.log(name2, age2, id2);

//2.2 将指定key的值赋值到一个不同命的key上
const { name: myName } = user;
console.log(myName);

//3.解构赋值的默认值, 如果匹配的值为undefined, 那么该变量将使用默认值, 如果不是undefined, 则将该值, 赋值给该变量
//3.1 数组的解构赋值默认值, 
const [k = 'k', l = 'l', m = 'm', n = 'n'] = [, undefined, null, 'N'];
console.log(k, l, m, n);
//3.2 对象的解构赋值默认值
const { sex = '未知', age: myAge } = user;
console.log(myAge, sex);

//4.对已经声明的变量进行解构赋值
const user1 = {
  yourName: 'daming',
  yourAge: 11,
}

let yourName = '小明';
({ yourName } = user1);
console.log(yourName);

//4.字符串的解构赋值

const [x, y, z] = 'xyz';
console.log(x, y, z);

//5.函数参数的解构赋值
function addNumbers([a, b, c]) {
  return a + b + c;
}
console.log(addNumbers([1, 2, 3]));

function logUserInfo({ name, age, id }) {
  console.log('name:' + name + ', age' + age + ', ' + id);
}
logUserInfo(user);

const user2 = { name, age };
console.log(user2);
