# Object的扩展

## 属性的简介表示方法

ES6 允许在大括号里面, 直接写入变量和函数, 作为对象的属性和方法. 这样的书写更加简洁. 
```javascript
const name = 'admin';
const id = '001';
const user = {
  name, 
  id,
  logUserInfo(){
    console.log(`name:${this.name}, id:${this.id}`);
  }
}
//上面的例子等同于下面
const user = {
  name: 'admin',
  id: '001',
  logUserInfo: function() {
    console.log(`name:${this.name}, id:${this.id}`);
  }
}
```

## 属性名表达式

ES6中可以使用属性名表达式来访问属性的值, 表达式必须使用中括号包括起来. 该特性一般情况下用处不大, 在获取某个对象的属性时, 属性名是动态时, 该特性能起到作用. 注意, 属性名表达式如果是一个对象, 默认情况下会自动将对象转为字符串[object Object], 这一点要特别小心. 

## 方法的name属性

[参考函数扩展](./07-function.md)

## 属性的可枚举性和遍历

### 可枚举性

对象的每个属性都有一个描述对象, 用来控制该属性的行为. Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象. 描述对象的enumerable属性, 称为可枚举性, 如果该属性为false, 就表示某些操作会忽略当前属性. 

* for...in循环: 只遍历对象自身的和继承的可枚举的属性. 
* Object.keys(): 返回对象自身的所有可枚举的属性的键名
* JSON.stringify(): 只串行化对象自身的可枚举的属性. 
* Object.assign(): 忽略enumerable为false的属性, 只拷贝对象自身的可枚举的属性. 

### 属性的遍历

ES6一共有5种方法可以遍历对象的属性. 
* for...in: 循环遍历对象自身的和继承的可枚举属性(不含 Symbol 属性). 
* Object.keys(obj): 返回一个数组, 包括对象自身的(不含继承的)所有可枚举属性(不含 Symbol 属性)的键名. 
* Object.getOwnPropertyNames(obj): 返回一个数组, 包含对象自身的所有属性(不含Symbol属性, 但是包括不可枚举属性)的键名.
* Object.getOwnPropertySymbols(obj): 返回一个数组, 包含对象自身的所有Symbol属性的键名. 
* Reflect.ownKeys(obj): 返回一个数组, 包含对象自身的所有键名, 不管键名是Symbol或字符串, 也不管是否可枚举. 

以上的5种方法遍历对象的键名, 都遵守同样的属性遍历的次序规则: 

1. 首先遍历所有数值键，按照数值升序排列.
2. 其次遍历所有字符串键，按照加入时间升序排列.
3. 最后遍历所有 Symbol 键，按照加入时间升序排列.


## super关键字

js中的this关键字总是指向函数所在的当前对象, ES6又新增了另一个类似的关键字super, 指向当前对象的原型对象. 注意, super关键字表示原型对象时, 只能用在对象的方法之中, 用在其他地方都会报错.

## 对象的解构赋值和扩展运算符

扩对象的扩展运算符（...）用于取出参数对象的所有可遍历属性, 拷贝到当前对象之中. 由于数组是特殊的对象, 所以对象的扩展运算符也可以用于数组. 如果扩展运算符后面是一个空对象, 则没有任何效果. 如果扩展运算符后面不是对象, 则会自动将其转为对象. 

## 链判断运算符 ?.

链判断运算符用用于判断某个对象是否有值. 在链式调用的时候判断, 左侧的对象是否为null或undefined. 如果是的, 就不再往下运算, 而是返回undefined. 

## Null判断运算符 ??

当??左侧的值为null或者undefined的时候, ??运算符的结果是右侧的值. 而不像||, ||当左侧的值为0, false, null, undefined的时候, 都会将得到右侧的值.

## Object新增的方法

* Object.is(): 用于比较两个值是否相等, 与===的比较基本一致, 唯一例外的是NaN, +0和-0. 
  * Object.is(NaN, NaN)为true, 而NaN === NaN为false
  * Object.is(+0, -0)为false, 而 +0 === -0 为true.
* Object.assign(): 由于将源对象的所有可枚举的属性, 添加到指定的目标对象中.
* Object.getOwnPropertyDescriptors(): 返回指定对象所有自身属性(非继承属性)的描述对象.
* Object.setPrototypeOf(): 设置某个对象的原型对象
* Object.getPrototypeOf(): 获取某个对象的原型对象
* Object.values(): 返回一个数组, 成员是参数对象自身的(不含继承的)所有可遍历属性的键值. 
* Object.entries(): 返回一个数组, 成员是参数对象自身的(不含继承的)所有可遍历属性的键值对数组. 
* Object.fromEntries(): Object.entries()的逆操作, 用于将一个键值对数组转为对象. 

