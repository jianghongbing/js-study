# 异步函数

ES2017中引入了异步函数, 当执行异步函数的时候, 异步函数立即返回一个Promise对象, 然后执行非异步代码, 而不会等到该异步函数完成后, 再去执行后面的代码.  异步函数通过async来定义. 异步函数本质是一个AsyncFunction类的实例. 在异步函数中, 可以使用await. async和await关键字让我们可以用一种更简洁的方式写出基于Promise的异步行为, 而无需刻意地链式调用promise. 异步函数的返回值是一个Promise对象(如果显式的返回不是Promise对象, 会被Promise.resolve函数处理成一个Promise对象). async函数返回的 Promise 对象, 必须等到内部所有await命令后面的 Promise 对象执行完. 才会发生状态改变, 除非遇到return语句或者抛出错误. 也就是说, 只有async函数内部的异步操作执行完, 才会执行then方法指定的回调函数.

## await指令

异步函数可以包含await指令, await指令后面一般是一个Promise对象(里面包含异步操作), 返回值是Promise的resolve函数的参数. 如果await后面不是Promise对象, 则直接返回该值. async函数可能包含0个或者多个await表达式. await表达式会暂停整个async函数的执行进程并出让其控制权，只有当其等待的基于promise的异步操作被兑现或被拒绝之后才会恢复进程. promise的解决值会被当作该await表达式的返回值. 异步函数中如果有多个await指令, 多个指令之间同步进行, 如果某一个await的Promise被reject, 那么包含该指令的异步函数返回的Promise就会被拒绝, 后面的await表达式也不会得到执行. await指令只在异步函数内有效. 如果在异步函数外使用它, 会抛出语法错误. 注意, 当异步函数暂停时, 它调用的函数会继续执行(收到异步函数返回的隐式Promise). 使用async / await关键字就可以在异步代码中使用普通的try / catch代码块。

### await指令的特点

* 会暂停异步函数的执行进程, 只有await后面的Promise的对象的状态发生改变后, 才回复异步函数的执行
* 如果有个多个await指令, 他们之间是同步执行的, 也就是每个await指令, 需要等其前面的await指令完成才执行
* 异步函数中, 如果有多个await指令, 如果所有await指令后面的Promise的状态为resolve, 异步函数返回的Promise对象的状态才为resolve, 否则为reject. 如果某个await指令后面的Promise reject了, 该指令后面的await指令也不会得到执行. 



## 异步函数和普通的函数的区别

* 异步函数需要使用async来声明
* 异步函数的返回值一般为Promise对象, 如果为普通对象, 会立即通过Promise.resolve()将其转换成状态为resolve的Promise对象.
* 异步函数中可以包含await指令
* 和普通函数一样, 可以通过try...catch来捕获异步函数中发生的错误
