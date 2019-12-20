# 正则表达式的扩展

* Regexp构造函数: 该函数接收两个参数, 第一个参数可以是字符串或者是一个正则表达式, 第二个参数为正则表达式的修饰符, 如果第一个参数为正则表达式并且提供了修饰符, 后面的修饰符会覆盖之前的修饰符.
* 字符串的正则方法: 字符串对象共有4个方法可以使用正则表达式: match(), replace(), search()和split(). ES6将这4个方法, 在语言内部全部调用RegExp的实例方法, 从而做到所有与正则相关的方法, 全都定义在RegExp对象上. String.prototype.match 调用 RegExp.prototype[ Symbol.match ]. String.prototype.replace 调用 RegExp.prototype[ Symbol.replace ], String.prototype.search 调用 RegExp.prototype[ Symbol.search ], String.prototype.split 调用 RegExp.prototype[ Symbol.split ]

