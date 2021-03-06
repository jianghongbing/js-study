# number: 数字

在js中, 数字均为双进度浮点型. 有四种数字类型: 二进制, 八进制, 十进制, 十六进制.

* 二进制: 以0b开头
* 八进制: es5中以0o开头, 并且在严格环境下不允许使用八进制数据. es6中以0o开头
* 十进制: 不需要加前缀
* 十六进制: 以0x开头

通过e可某个数字以指数的形式来表示. eg `const number = 2.34e2`, number为2.34 * 10^2.

## 数字对象: Number

对象是经过封装的能让你处理数字值的对象. Number对象由Number()(不需要再前面加上new)构造器创建. Number对象主要用于将某个类型转换为数字类型.

### Number中的方法和属性

* MAX_VALUE: 最大数
* MIN_VALUE: 最小数
* MAX_SAFE_INTEGER: 最大安全整数
* MIN_SAFE_INTEGER: 最小安全整数
* NAN: 特殊的非数字值. 使用typeof获取类型时, 依然返回number类型.
* EPSILON: 两个可表示数之间的最小间隔. 一般使用该值来表示两个数的差是不是为0, 从而表示这两个数是否相等
* NEGATIVE_INFINITY: 负无穷大值.
* POSITIVE_INFINITY: 正无穷大值.
* isNaN(): 判读传递的值是否是NaN. 该方法不会强制将参数转换成数字, 只有在参数是真正的数字类型, 且值为NaN的时候才会返回true.
* isFinite(): 判断某个数是否是有限数. 这个方法不会强制将一个非数值的参数转换成数值, 这就意味着, 只有数值类型的值, 且是有穷的, 才返回true.
* isInteger(): 判断某个数是否为整数
* isSafeInteger(): 判断某个数是否为安全整数
* parseFloat(): 和全局对象parseFloat()一样, 将字符串转换为浮点数
* parseInt(): 和全局对象parseInt()一样, 以指定基数, 将字符串转换为整数, 默认基数为10
* toExponential(): 用幂的形式(科学记数法)来表示Number对象的字符串. 接收一个参数, 用于表示小数的位数.
* toFixed(): 格式化某个数字, 接收一个参数, 用于表示保留的小数位数. 采用四舍五入的形式来格式化, 返回一个字符串
* toPrecision(): 以指定的精度返回该数值对象的字符串表示. 接收一个参数, 用于表示格式化的精度(整数和小数的位数之和), 返回一个字符串

#### parseFloat的转换规则

* 如果parseFloat在解析过程中遇到了正号+, 负号-, 数字0-9, 小数点., 或者科学记数法中的指数e或E以外的字符, 则它会忽略该字符以及之后的所有字符, 返回当前已经解析到的浮点数. 
* 第二个小数点的出现也会使解析停止(在这之前的字符都会被解析)
* 参数首位和末位的空白符会被忽略
如果参数字符串的第一个字符不能被解析成为数字,则 parseFloat 返回 NaN.
* parseFloat也可以解析并返回Infinity.
* parseFloat解析BigInt为 Numbers, 丢失精度. 因为末位n字符被丢弃.
考虑使用 Number(value) 进行更严谨的解析，只要参数带有无效字符就会被转换为NaN. parseFloat也可以转换一个已经定义了 toString或者valueOf方法的对象, 它返回的值和在调用该方法的结果上调用parseFloat值相同.

#### praseInt的转换规则

parseInt函数将其第一个参数转换为字符串, 解析它. 并返回一个整数或NaN. 如果不是NaN, 返回的值将是作为指定基数中的数字的第一个参数的整数.


* 如果parseInt的字符不是指定基数中的数字, 则忽略该字符和所有后续字符. 并返回解析到该点的整数值. parseInt将数字截断为整数值. 允许使用前导空格和尾随空格. 
* 如果parseInt遇到了不属于r所指定的基数中的字符那么该字符和其后的字符都将被忽略. 接着返回已经解析的整数部分. parseInt将截取整数部分. 开头和结尾的空白符允许存在, 会被忽略. 

* 在基数为undefined, 或者基数为0或者没有指定的情况下, JavaScript作如下处理
  * 如果字符串string以"0x"或者"0X"开头, 则基数是16 (16进制).
  * 如果字符串 string 以"0"开头, 基数是8（八进制）或者10（十进制, 那么具体是哪个基数由实现环境决定. ECMAScript 5 规定使用10, 但是并不是所有的浏览器都遵循这个规定. 因此永远都要明确给出radix参数的值.
  * 如果字符串string以其它任何值开头, 则基数是10.
* 如果第一个字符不能被转换成数字, parseInt返回NaN.

