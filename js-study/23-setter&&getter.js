//setter和getter的定义

const user = {
  _name: 'xiaoming',
  set name(newValue) {
    console.log(`setter:${newValue}`);
    this._name = newValue;
  },
  get name() {
    console.log(`getter:${this._name}`);
    return this._name;
  },
}
Object.defineProperty(user, '_name', {
  value: 'xiaoming',
  enumerable: false,
  writable: true,
  configurable: true
})
console.log(user);
user.name = 'daming'; //调用setter方法
console.log(user.name); //调用getter方法, 并返回另外一个隐私属性的值
// delete user.name; //删除setter, getter
// console.log(user)