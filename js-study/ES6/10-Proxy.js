//Proxy:代理器
const person = {
  name: 'xiaoming',
  age: 10,
  logName() {
    console.log(this.name);
  },
  increaseAge(age = 1) {
    this.age += age; 
  }
}
let proxy = new Proxy(person, {});
//被代理对象的方法和属性, 会添加到代理中去
console.log(proxy, person === proxy, typeof proxy);
console.log(proxy.hasOwnProperty('name'));
console.log(proxy.hasOwnProperty('logName'));
//对代理的操作会转发到被代理的对象上
proxy.id = '001';
proxy.name = 'daming';
proxy.increaseAge();
console.log(person);
console.log(proxy.age1);

//对属性的set操作和get操作进行拦截
proxy = new Proxy(person, {
  get(target, key, reciver) {
    console.log(target, key, reciver);
    if (key in target) {
      return target[key];
    }
    console.log('你访问了不存在的key');
  },
  set(target, key, value, reciver) {
    console.log('**********set**********')
    console.log(target, key, value, reciver);
    if (key === 'age') {
      if (!Number.isInteger(value)) {
        console.log('age的值必须是一个整数');
        return false;
      }
      if (value > 120 || value < 0) {
        console.log('age的大小在0到120之间');
        return false;
      }
      target[key] = value;
      return true;
    }
    target[key] = value;
    return true;
  }
})

console.log(proxy.sex);
proxy.age = '20';
proxy.age = 200;
proxy.age = 20;
proxy.age2 = 30;
console.log(person);

//代理的撤销
const user = {
  name: 'admin',
  age: 10,
}
const revocableProxyObj = Proxy.revocable(user, {});
console.log(revocableProxyObj);
const { proxy:userProxy, revoke } = revocableProxyObj;
userProxy.name = '大内密探007';
console.log(user);
revoke();
// console.log(userProxy); //报错, revoke之后, userProxy不能使用
// userProxy.name = '大内密探008'; // 报错, 提示相关的操作不存在.
// console.log(user);




