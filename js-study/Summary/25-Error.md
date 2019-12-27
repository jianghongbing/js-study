# Error

Error表示一个错误对象. 当运行时错误产生时, Error的实例对象会被抛出, 如果没有对抛出的错误进行处理, 程序将会停止执行, 后面的代码不会得到执行. Error对象也可用于用户自定义的异常的基础对象. 可以通过throw语句来抛出错误, 通过try...catch来进行捕获错误并做相应的处理.

## Error的属性和方法

* Error(): 当像函数一样使用Error时, 如果没有new, 它将返回一个Error对象. 与通过new关键字构造Error对象的输出相同. 
* message: 错误信息
* name: 错误名称, 初始值为Error.
* stack: 错误的堆栈信息
* fileName: 错误发生的所在的文件名
* lineNumber: 错误发生的所在文件代码的行数
* columnNumber: 错误发生的所在文件代码的列数

## JS定义的Error类型

* EvalError: 错误的原因与eval()有关
* InternalError: 表示Javascript引擎内部错误的异常. 如: "递归太多".
* RangeError: 数值变量或参数超出其有效范围. 
* ReferenceError: 无效引用. 
* SyntaxError: eval()在解析代码的过程中发生的语法错误
* TypeError: 变量或参数不属于有效类型
* URIError: encodeURI()或者decodeURl()传递的参数无效。

## 错误处理

当我们知道某个语句的执行, 会发生错误的时候, 我们可以将其放到try语句块中执行, 通过catch可以捕获在try语句块中抛出的错误. 

### throw语句

throw语句用来抛出一个用户自定义的异常. 当前函数的执行将被停止(throw之后的语句将不会执行), 并且控制将被传递到调用堆栈中的第一个catch块. 如果调用者函数中没有catch块, 程序将会终止. throw语句抛出的值可以是数字, 对象, 字符串等任何值. 

### try...catch语句

try语句包含了由一个或者多个语句组成的try块,, 和至少一个catch子句或者一个finally子句的其中一个, 或者两个兼有. 下面是三种形式的try...catch语句声明

* try...catch
* try...finally
* try...catch...finally

try...catch语句各个语句块的说明
* try: 用于执行一些语句, 这些语句可能会发生异常. 如果在try块中有任何一个语句(或者从try块中调用的函数)抛出异常, 控制立即转向catch子句. 如果在try块中没有异常抛出, 会跳过catch子句. 
* catch: 用于捕获try语句块中抛出的异常. 并接受一个可选的参数. 参数为抛出的值, 也就是throw表达式后面的值.
* finally: 在try块和catch块之后执行, 但是在下一个try声明之前执行. 无论是否有异常抛出或捕获它总是执行, 一般用于做一些清理工作. 

### try...catch语句的嵌套

在一个try...catch语句中, 在try语句语句块中, 还有其他的try...catch语句. 捕获的规则: 任何给定的异常只会被离它最近的封闭catch块捕获一次. 当然，在里面块抛出的任何新异常(因为catch块里的代码也可以抛出异常), 将会被外面的catch块所捕获.

