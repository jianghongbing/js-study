//WeakSet
let set = new Set();
//WeakSet的创建
let weakSet = new WeakSet();
let user = {
  name: 'xiaoming'
}
//添加元素
weakSet.add(user);
console.log(weakSet);
console.log(weakSet.has(user));
{
  let newUser = {
    name: 'new user'
  }
  let newUser1 = {
    name: 'new user 1'
  }
  set.add(newUser);
  weakSet.add(newUser1);
}
console.log(set, weakSet);
let deleteSuccess = weakSet.delete(user);
console.log(deleteSuccess, weakSet);
// console.log(weakSet.clear());

