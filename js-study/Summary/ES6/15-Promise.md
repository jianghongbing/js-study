# Promise
Promise对象用于表示一个异步操作的最终完成(成功或失败). 简单来说, Promise对象是一个代理对象(代理一个值), 里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果. 在创建Promise对象时, 可以为异步操作的成功和失败绑定相应的回调方法, 可以在回调方法中来获取异步操作完成的结果或异步操作失败的错误. 

## Promise的构造函数

```javascript
const p = new Promise(function(resolve, reject) {
  if (doAsyncWorkSuccess()) {
    resolve(someValue);
  } else {
    reject(error);
  }
})
```

Promise对象通过其构造函数来创建, 其构造函数接收一个函数作为参数, 该函数又接收两个函数作为它的参数, resolve和reject, 在异步操作成功, 可以通过调用resolve函数, 使Promise对象的状态变为操作成功完成状态, 并传递某些值给其他变量; 在异步操作失败, 可以通过调用reject函数, 使Promise对象的状态变为操作失败状态, 并可传递错误信息. 构造函数接收的函数参数是立即就会调用的.

## Promise的状态

* pending: 初始状态, 既不是成功, 也不是失败状态. 可理解操作还没有发生, 或者进行中.
* fulfilled: 操作成功完成. 
* rejected: 操作失败. 

pending状态的Promise对象可能会变为fulfilled状态并传递一个值给相应的状态处理方法, 也可能变为失败状态并传递失败信息。当其中任一种情况出现时, Promise对象的then方法绑定的处理方法就会被调用, then方法包含两个参数:onfulfilled 和 onrejected, 都是函数类型. 当Promise状态为fulfilled时, 调用then的onfulfilled方法; 当Promise状态为rejected时, 调用then的onrejected方法. Promise对象的状态不受外界影响. 只有操作的结果, 可以决定当前是哪一种状态, 任何其他操作都无法改变这个状态. 一旦状态改变, 就不会再变, 任何时候都可以得到这个结果. Promise对象的状态改变, 只有两种可能:从pending变为fulfilled和从pending变为rejected. 只要这两种情况发生. 状态就凝固了, 不会再变了, 会一直保持这个结果. 如果改变已经发生了, 你再对Promise对象添加回调函数, 也会立即得到这个结果. 

## Promise的特点

* 在本轮事件循环运行完成之前, 回调函数是不会被调用的. 
* 通过then()添加的回调函数总会被调用, 即便它是在异步操作完成之后才被添加的函数. 
* 通过多次调用then(), 可以添加多个回调函数, 它们会按照插入顺序一个接一个独立执行. 

## Promise的方法

* then(onFulfilled, onRejected): Promise状态发生改变的回调函数. 该函数接收2个参数, 这2个参数也是函数. 返回值是一个新的Promise对象. 参数说明如下
  * onFulfilled: 可选, 当Promise的状态变为已成功时的回调函数. 该函数有一个参数, 通过resolve传递过来的值. 如果该参数不是函数, 则会在内部被替换为(x)=>x, 即原样返回promise最终结果的函数.
  * onRejected 可选, 当Promise的状态变为失败时的回调函数. 该函数有一个参数, 即拒绝的原因, 通过reject函数传递过来的函数; 如果该参数不是函数, 则会在内部被替换为一个抛出错误的函数.

* catch(onRejected): Promise变为拒绝状态时的回调, 等同于then(null, onRejected), 一个新的Promise对象
* finally(): 在promise结束时, 无论结果是fulfilled或者是rejected, 都会执行的回调函数, 返回一个新的Promise对象. 这为在Promise是否成功完成后都需要执行的代码提供了一种方式, 这避免了同样的语句需要在then()和catch()中各写一次的情况. 如果返回的是reject的Promise对象, 需要在后面跟上catch方法. 
* Promise.resolve(value): 返回一个以给定值解析后的Promise对象. 解析规则如下: 
  * 如果该值为promise, 这原封不动的返回这个promise; 
  * 如果这个值是thenable(即带有"then"方法), Promise.resolve方法会将这个对象转为Promise对象, 然后就立即执行thenable对象的then方法. 此函数用于将类promise对象的多层嵌套展平.
  * 如果参数是一个原始值, 或者是一个不具有then方法的对象, 则Promise.resolve方法返回一个新的Promise对象, 状态为resolved.
* Promise.reject(): 返回一个带有拒绝原因的Promise对象. 
* Promise.all(iterable): 用于将多个Promise对象(如果传入的数组中有不是Promise类型的值, 则先通过Promise.resolve方法将其转换成Promise对象), 包装成一个新的Promise对象. 新的Promise对象的状态有其内部的Promise对象来决定. 只有内部所有的Promise对象的状态都变成fulfilled，该Promise的状态才会变成fulfilled, 此时内部Promise的返回值组成一个数组, 传递给新的Promise的回调函数; 只要内部Promise有一个被rejected, 该Promise的状态就变成rejected, 此时第一个被reject的实例的返回值, 会传递给p的回调函数.
* Promise.race(): 将多个Promise实例, 包装成一个新的Promise实例. 只要其内部的一个Promise改变了状态, 新的Promise的状态也就发生了改变, 并和发生改变的Promise的状态保持一致.
* Promise.allSettled(): 将多个Promise实例, 包装成一个新的Promise实例. 只有等到所有这些参数实例都返回结果, 不管是fulfilled还是rejected, 包装实例才会结束. 回调函数的参数是一个对象数组, 每个对象表示对应的内部的promise结果.
* Promise.any(): 接收一个Promise可迭代对象, 只要其中的一个promise完成, 就返回那个已经有完成值的promise. 如果可迭代对象中没有一个promise完成(即所有的 promises 都失败/拒绝), 就返回一个拒绝的promise. 这个方法和Promise.all()是相反的. 
* 

## Promise的链式调用

由于Promise的then, catch, finally等方法都返回一个新的Promise对象, 因此可以才有链式的方式去调用这些方法.


