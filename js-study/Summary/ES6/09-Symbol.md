# Symbol

ES6引入了一个新的原始数据类型Symbol, 表示独一无二的值. 主要将其用于作为对象属性的key, 保证每个属性的key都不相同, 这也就从根本上防止了属性名的冲突. Symbol的值不能隐式转换成其他类型的值, 但是可以通过toString()将其转换成字符串.

## Symbol值的创建

* Symbol(): Symbol的值可以通过Symbol()函数来构建. 注意, 由于Symbol是原始数据类型的值, 不是对象, 因此不能再Symbol函数前面加上new关键字. Symbol()函数可接受一个字符串, 用于对该Symbol值的说明, 在调试打印的时候, 该字符串会显示在控制台上, 方便于调试.
* Symbol.for(): 从全局Symbol注册表查询指定key的Symbol. 如果找到, 返回该值, 如果不存在, 创建一个新的Symbol的值, 并注册在全局Symbol注册表中.


## Symbol值作为属性的key

在ES6之前, 对象的属性的key只能为字符串, 现在Symbol的值也可以作为属性的key, 而且不会和其他属性的key产生冲突. 使用Symbol值作为key有以下几点需要注意.

* 在对象中, 必须要用中括号将Symbol值括起来, 否则会将其作为字符串看待
* 设置和或者获取Symbol值key的value时, 也必须使用中括号的形式去访问和设置, 不能通过点语法的形式设置和获取属性的值
* 不会被for...in, Object.getOwnPropertyNames(), Object.keys()遍历, JSON.stringify()方法也会将其忽略. 
* 可以使用Object.getOwnPropertySymbols()来获取对象上的Symbol属性的key.

## Symbol的属性和方法
* Symbol.for(): 使用给定的key在全局注册表中搜索, 如果找到则返回该Symbol. 否则将使用给定的key创建一个新的Symbol, 并且注册到全局symbol注册表. 
* Symbol.keyFor(sym): 从全局Symbol注册表中, 获取指定Symbol的key, 如果没有知道, 返回undefined. 

## 内置的Symbol值

除了定义自己使用的Symbol值以外, ES6还提供了许多内置的Symbol值, 指向语言内部使用的方法. 当相关的方法被调用的时候, 都会转到该方法Symbol的实现, 因此我们可以自定义自己需要的一些方法, 如果String.prototype.search()等.

* Symbol.iterator: 一个返回一个对象默认迭代器的方法. 被for...of使用. 
* Symbol.asyncIterator: 一个返回对象默认的异步迭代器的方法. 被for await of 使用. 
* Symbol.match: 一个用于对字符串进行匹配的方法, 也用于确定一个对象是否可以作为正则表达式使用. 被String.prototype.match() 使用. 
* Symbol.replace: 一个替换匹配字符串的子串的方法. 被String.prototype.replace()使用
* Symbol.search: 一个返回一个字符串中与正则表达式相匹配的索引的方法. 被String.prototype.search()使用. 
* Symbol.split: 一个在匹配正则表达式的索引处拆分一个字符串的方法. 被String.prototype.split()使用. 
* Symbol.hasInstance: 一个确定一个构造器对象识别的对象是否为它的实例的方法. 被instanceof使用. 
* Symbol.isConcatSpreadable: 一个布尔值, 表明一个对象是否应该flattened为它的数组元素. 被 Array.prototype.concat() 使用. 
* Symbol.unscopables: 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外. 
* Symbol.species: 一个用于创建派生对象的构造器函数。
* Symbol.toPrimitive: 一个将对象转化为基本数据类型的方法。
* Symbol.toStringTag: 用于对象的默认描述的字符串值. 被 Object.prototype.toString() 使用. 



