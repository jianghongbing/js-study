# Promise

Promise 对象用于表示一个异步操作的最终完成(成功或失败). 简单来说, Promise 对象是一个代理对象(代理一个值), 里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果. 在创建 Promise 对象时, 可以为异步操作的成功和失败绑定相应的回调方法, 可以在回调方法中来获取异步操作完成的结果或异步操作失败的错误.

## Promise 的基本使用

通过 Promise 类提供的构造函数来创建 Promise 实例. Promise 构造函数接受一个函数作为参数, 该函数的两个参数分别是 resolve 和 reject. resolve 和 reject 都是函数. resolve 函数的作用是当 Promise 对象的状态从 pending 状态变为 resolved 状态, 在异步操作成功时调用, 并将异步操作的结果. 作为参数传递出去. reject 函数的作用是当 Promise 对象的状态从 pending 状态变为 rejected, 在异步操作失败时调用, 并将异步操作报出的错误, 作为参数传递出去. Promise 实例生成以后, 可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数. 在新建完Promise实例后, 构造函数接收的函数参数会立即执行, 在同步队列中的任务执行完成后, 再去执行then方法中指定的回调函数.

```javascript
const p = new Promise(function (resolve, reject) {
  if (doAsyncWorkSuccess()) {
    resolve(someValue);
  } else {
    reject(error);
  }
});
p.then(
  value => console.log(value),
  error => console.log(error)
);
```
## Promise 的状态

- pending: 初始状态, 既不是成功, 也不是失败状态. 可理解操作还没有发生, 或者进行中.
- fulfilled: 操作成功完成.
- rejected: 操作失败.

pending 状态的 Promise 对象可能会变为 fulfilled 状态并传递一个值给相应的状态处理方法, 也可能变为失败状态并传递失败信息。当其中任一种情况出现时, Promise 对象的 then 方法绑定的处理方法就会被调用, then 方法包含两个参数:onfulfilled 和 onrejected, 都是函数类型. 当 Promise 状态为 fulfilled 时, 调用 then 的 onfulfilled 方法; 当 Promise 状态为 rejected 时, 调用 then 的 onrejected 方法. Promise 对象的状态不受外界影响. 只有操作的结果, 可以决定当前是哪一种状态, 任何其他操作都无法改变这个状态. 一旦状态改变, 就不会再变, 任何时候都可以得到这个结果. Promise 对象的状态改变, 只有两种可能:从 pending 变为 fulfilled 和从 pending 变为 rejected. 只要这两种情况发生. 状态就凝固了, 不会再变了, 会一直保持这个结果. 如果改变已经发生了, 你再对 Promise 对象添加回调函数, 也会立即得到这个结果.

## Promise 的特点

- 在本轮事件循环运行完成之前, 回调函数是不会被调用的. 也就是说要等到同步队列中的完成后, 才会去执行then中回调函数.
- 通过 then()添加的回调函数总会被调用, 即便它是在异步操作完成之后才被添加的函数.
- 通过多次调用 then(), 可以添加多个回调函数, 它们会按照插入顺序一个接一个独立执行.

## Promise 的方法

- then(onFulfilled, onRejected): Promise 状态发生改变的回调函数. 该函数接收 2 个参数, 这 2 个参数也是函数. 返回值是一个新的 Promise 对象. 参数以及返回值说明如下

  - onFulfilled: 可选, 当 Promise 的状态变为已成功时的回调函数. 该函数有一个参数, 通过 resolve 传递过来的值. 如果该参数不是函数, 则会在内部被替换为(x)=>x, 即原样返回 promise 最终结果的函数.
  - onRejected 可选, 当 Promise 的状态变为失败时的回调函数. 该函数有一个参数, 即拒绝的原因, 通过 reject 函数传递过来的函数; 如果该参数不是函数, 则会在内部被替换为一个抛出错误的函数.
  - then函数的返回值有以下几种情况.
    1. 如果then函数中显式的默认什么也不返回, then函数会返回一个Promise, Promise的未来状态是fulfilled, resolve函数参数的值为undefined.
    2. 如果then函数中显式的返回一个Promise, 那么then函数则返回该Promise, 返回的Promise未来的状态就是该Promise决定
    3. 如果then函数中显示的返回一个非Promise对象的值, 那么在then函数中, 首先会将该值包装成一个Promise对象, 该Promise对象未来的状态就是fulfilled, 并且resolve参数的值就是该值. 然后将该Promise对象进行返回
    4. 如果在then函数中发生了异常, 抛出错误, 那也会将该错误包装成一个Promise对象, 该Promise对象未来的状态就是rejected, reject函数参数的值就是所then函数中抛出的错误.
- catch(onRejected): Promise 变为拒绝状态时的回调, 等同于 then(null, onRejected), 返回一个新的 Promise 对象, 返回值的说明可以参考then中的说明. Promise对象的错误具有“冒泡”性质, 会一直向后传递, 直到被捕获为止. 也就是说, 错误总是会被下一个catch语句捕获.
- finally(): 在 promise 结束时, 无论结果是 fulfilled 或者是 rejected, 都会执行的回调函数, 返回一个新的 Promise 对象. 这为在 Promise 是否成功完成后都需要执行的代码提供了一种方式, 这避免了同样的语句需要在 then()和 catch()中各写一次的情况. 如果返回的是 reject 的 Promise 对象, 需要在后面跟上 catch 方法.
- Promise.resolve(value): 返回一个以给定值解析后的 Promise 对象. 解析规则如下:
  - 如果该值为 promise, 这原封不动的返回这个 promise;
  - 如果这个值是 thenable(即带有"then"方法), Promise.resolve 方法会将这个对象转为 Promise 对象, 然后就立即执行 thenable 对象的 then 方法. 此函数用于将类 promise 对象的多层嵌套展平.
  - 如果参数是一个原始值, 或者是一个不具有 then 方法的对象, 则 Promise.resolve 方法返回一个新的 Promise 对象, 状态为 resolved. 需要注意的是, 立即resolve()的 Promise 对象, 是在本轮事件循环的结束时执行, 而不是在下一轮事件循环的开始时.
- Promise.reject(): 返回一个带有拒绝原因的 Promise 对象.
- Promise.all(iterable): 用于将多个 Promise 对象(如果传入的数组中有不是 Promise 类型的值, 则先通过 Promise.resolve 方法将其转换成 Promise 对象), 包装成一个新的 Promise 对象. 新的 Promise 对象的状态有其内部的 Promise 对象来决定. 只有内部所有的 Promise 对象的状态都变成 fulfilled，该 Promise 的状态才会变成 fulfilled, 此时内部 Promise 的返回值组成一个数组, 传递给新的 Promise 的回调函数; 只要内部 Promise 有一个被 rejected, 该 Promise 的状态就变成 rejected, 此时第一个被 reject 的实例的返回值, 会传递给 p 的回调函数.
- Promise.race(): 将多个 Promise 实例, 包装成一个新的 Promise 实例. 只要其内部的一个 Promise 改变了状态, 新的 Promise 的状态也就发生了改变, 并和发生改变的 Promise 的状态保持一致. resolve函数参数的值也为该Promise resolve后的值.
- Promise.allSettled(): 将多个 Promise 实例, 包装成一个新的 Promise 实例. 只有等到所有这些参数实例都返回结果, 不管是 fulfilled 还是 rejected, 包装实例才会结束. 回调函数的参数是一个对象数组, 每个对象表示对应的内部的 promise 结果.
- Promise.any(): 接收一个 Promise 可迭代对象, 只要其中的一个 promise 完成, 就返回那个已经有完成值的 promise. 如果可迭代对象中没有一个 promise 完成(即所有的 promises 都失败/拒绝), 就返回一个拒绝的 promise. 这个方法和 Promise.all()是相反的.

## Promise 的链式调用

由于 Promise 的 then, catch, finally 等方法都返回一个新的 Promise 对象, 因此可以用链式的方式去调用这些方法.


