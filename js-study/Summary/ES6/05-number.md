# 数字的扩展

## Number的扩展
它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。
* ES6提供了二进制和八进制数值的新的写法, 分别用前缀0b(或0B)和0o(或0O)表示.
* inFinate(): 判断一个数字是不是有限数, 对非数字和Infinity都返回false. 与传统的全局方法isFinite()的区别在于, 传统方法先调用Number()将非数值的值转为数值, 在进行判断. 该函数不会将传入的参数进行类型转换, 也就是说如果传入的参数不是数字, 不会先将其转换成数字, 再进行判断.
* isNaN(): 判断传入的参数是不是NaN, 对于非数字和除去NaN的数字一律返回false. 与传统的全局方法isNaN()的区别在于, 传统方法先调用Number()将非数值的值转为数值, 再进行判断, 而这个方法只对数值有效. Number.isNaN()只有对于NaN才返回true, 非NaN一律返回false.
* parseInt()和parseFloat(): 与全局的parseInt()和parseFloat()功能一致
* EPSILON: 一个极小的常量Number. 表示1与大于1的最小浮点数之间的差. Number.EPSILON实际上是JavaScript能够表示的最小精度. 误差如果小于这个值, 就可以认为已经没有意义了, 即不存在误差了.
* isSafeInteger(): JavaScript能够准确表示的整数范围在-2^53到2^53之间(不含两个端点), 超过这个范围, 无法精确表示这个值. 

## Math的扩展

ES6为Math添加了许多的新方法, [可以参考这里](../08-math.md)

## 指数运算符

ES6中新增了一个指数运算符 **, 这个运算符的一个特点是右结合, 而不是常见的左结合. 多个指数运算符连用时, 是从最右边开始计算的.