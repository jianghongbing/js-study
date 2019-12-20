// 定义JSON字符串

const json = '{"name":"xiaoming", "age":10, "isBoy":true}'

//将JSON字符串解析成js对象
let obj = JSON.parse(json); 
console.log(obj);

//带有回调的转换
obj = JSON.parse(json, (key, value) => {
  if (key === 'age') {
    return value * 2;
  }
  return value;
})

console.log(obj);
//将对象转换成字符串
let anotherJson = JSON.stringify(obj);
console.log(anotherJson, typeof anotherJson);

//带有回调函数的转换
anotherJson = JSON.stringify(obj, (key, value) => {
  if (key === 'age') return value / 2;
  if (key === 'isBoy') return !value;
  return value;
});
console.log(anotherJson);

//解析数组
const users = '[{"name":"xiaoming"}, {"name":"daming"}]'
console.log(JSON.parse(users));

const user = '{"name":"xiaoming", "vip": false, "age": 10, "title":null, "friends": [{"name": "xiaoli"}, {"name": "xiaohua"}]}';
const userObj = JSON.parse(user);
console.log(userObj);
const isVip = userObj.vip;
console.log(isVip, typeof isVip);