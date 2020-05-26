# 异步函数

async function用来定义一个返回AsyncFunction对象的异步函数. 异步函数是指通过事件循环异步执行的函数, 它会通过一个隐式的Promise返回其结果. async函数返回的 Promise 对象, 必须等到内部所有await命令后面的 Promise 对象执行完. 才会发生状态改变, 除非遇到return语句或者抛出错误. 也就是说, 只有async函数内部的异步操作执行完, 才会执行then方法指定的回调函数.

## await指令

异步函数可以包含await指令, await指令后面一般是一个Promise对象, 返回值是Promise的resolve函数的参数. 如果await后面不是Promise对象, 返回值则是该后面跟着的对象. 该指令会暂停异步函数的执行, 并等待该Promise执行, 然后继续执行异步函数, 并返回结果. 异步函数中可以有多个await指令, 多个指令之间同步进行, 如果某一个await的Promise被reject, 那么包含该指令的异步函数返回的Promise就会被拒绝.
await指令只在异步函数内有效. 如果在异步函数外使用它, 会抛出语法错误. 注意, 当异步函数暂停时, 它调用的函数会继续执行(收到异步函数返回的隐式Promise). async/await的目的是简化使用多个 Promise时的同步行为, 并对一组Promises执行某些操作.

## 异步函数和普通的函数的区别
* 异步函数需要使用async来声明
* 异步函数的返回值一般为Promise对象, 如果为普通对象, 会立即通过Promise.resolve()将其转换成状态为resolve的Promise对象.
* 异步函数中可以包含await指令
* 和普通函数一样, 可以通过try...catch来捕获异步函数中发生的错误
