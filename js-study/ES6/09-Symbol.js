//Symbol: 基本数据类型, 表示独一无二的值
//1. Symbol值的创建
const symbol = Symbol(); //由于Symbol的值是原始数据类型的值, 不是对象, 因此不能在Symbol()函数, 前面不能加上new关键字
console.log(typeof symbol);
const symbol1 = Symbol();
//2. 独一无二性, 任意两个不同的Symbol的值都不相同 
console.log(symbol === symbol1);
//3. Symbol的描述
console.log(symbol, symbol1);
const symbol2 = Symbol('name');
console.log(symbol2);
const symbol3 = Symbol('name');
console.log(symbol2 === symbol3);

//4. 作为属性名的Symbol
const nameSymbol = Symbol('name');
const user = {
  [nameSymbol]: 'xiaoming',  //symbol变量作为属性名
  [Symbol('age')]: 10, //新创建的symbol作为属性名
  id: '001',
}
let name = user[nameSymbol]; //获取值
console.log(name);
user[nameSymbol] = 'daming'; //设置值
name = user[nameSymbol];
console.log(name);
//5. 遍历, Symbol值的key不会出现在for...in, Object.getOwnPropertyNames(), Object.keys()中
for (const key in user) {
  console.log(key);
}

for (const iterator of Object.getOwnPropertyNames(user)) {
  console.log(iterator);
}
for (const key of Object.keys(user)) {
  console.log(key);
}
const symbols = Object.getOwnPropertySymbols(user);
for (const symbol of symbols) {
  const value = user[symbol];
  console.log(`key:${symbol.toString()}-value:${value}`);
}

//6. Symbol.for()
const idSymbol = Symbol.for('id'); //全局注册表中, 没有指定key的symbol, 创建一个, 并且注册到全局注册表中
console.log(idSymbol);
const idSymbol1 = Symbol.for('id'); //返回全局注册表中的symbol
console.log(idSymbol === idSymbol1); 
//在全局注册表中搜索. 返回指定Symbol的key, 如果没有找到, 返回undefined.
console.log(Symbol.keyFor(symbol));
console.log(Symbol.keyFor(idSymbol));

//7. 通过内置的Symbol值, 自定义自己的方法.
const mySearch = {
  value: 'hello, world',
  [Symbol.search](string) {
    return this.value.indexOf(string);
  }
}
console.log('world'.search(mySearch));
mySearch.value = 'https://www.apple.com';
console.log('apple'.search(mySearch));
