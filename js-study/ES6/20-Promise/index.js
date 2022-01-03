//Promise的状态
const p1 = new Promise((resolve, reject) => {
})
console.log(p1);

const p2 = new Promise((resolve, reject) => {
  resolve();
})
console.log(p2);

const p3 = new Promise((resolve, reject) => {
  reject();
})
console.log(p3);

//Promise的执行
const p4 = new Promise((resolve, reject) => {
  resolve();
  console.log('1');
})
//then的回调函数需要等到同步队列中的任务完成后, 才会去执行. 因此打印的顺序会在3之后.
p4.then(value => {
  console.log('2');
})
console.log('3');

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p5');
  }, 1000);
})
//多次执行then方法, 在Promise实现状态变更后, 多个then方法会依次调用
p5.then(value => console.log(`1 - ${value}`));
p5.then(value => console.log(`2 - ${value}`));
p5.then(value => console.log(`3 - ${value}`));


//then函数的返回值
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
})

const p7 = p6.then(value => {
  console.log(value);
})
const p8 = p6.then(value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 2);
    }, 1000);
  })
})
const p9 = p6.then(value => value * 2);
const p10 = p6.then(value => {
  throw new Error("error");
})
console.log(p7);
console.log(p8);
console.log(p9);
console.log(p10);

const p11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('throw error'));
  }, 1000);
})

p11.then(value => {
  console.log('p11 resolved');
  console.log(value);
})
//当Promise的状态转变为reject时, catch回调会被触发.
const p12 = p11.catch(error => {
  console.log(error);
})
console.log(p12);
const p13 = p11.catch(error => {
  console.log(error);
  return 'aaa';
})
console.log(p13);

//finally, 不过Promise的状态变为fulfilled还是rejected, finally
const p14 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
})
p14.finally(() => {
  console.log('p14 finally');
})
const p15 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
})
p15.finally(() => {
  console.log('p15 finally');
})

//Promise.resolve

const p16 = Promise.resolve(16);
console.log(p16);
p16.then(value => {
  console.log(`p16: ${value}`);
})
const p17 = Promise.resolve(p16);
console.log(p17 === p16);

const p18 = Promise.resolve({
  then(resolve, rejet) {
    resolve(18);
  }
})
p18.then(value => {
  console.log(`p18: ${value}`);
})

// Promise.reject

const p19 = Promise.reject('oh no, this is an error');
p19.catch(error => {
  console.log(error);
})

//Promise.all
const p20 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p20');
  }, 1000);
})
const p21 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p21');
  }, 2000);
})
const p22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p22');
  }, 3000);
})

const p23 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p23 rejected');
  }, 2000);
})

const all1 = Promise.all([p20, p21, p22]);
const all2 = Promise.all([p21, p22, p23]);
all1.then(value => {
  console.log(`all1: ${value}`);
}).catch(error => {
  console.log(`all1: ${error}`);
})

all2.then(value => {
  console.log(`all2: ${value}`);
}).catch(error => {
  console.log(`all2: ${error}`);
})

//Promise.race
const race1 = Promise.race([p20, p21, p22]);
race1.then(value => {
  console.log(`race1: ${value}`);
}).catch(error => {
  console.log(`race1: ${error}`);
})
const race2 = Promise.race([p21, p22, p23]);
race2.then(value => {
  console.log(`race2: ${value}`);
}).catch(error => {
  console.log(`race2: ${error}`);
})

//Promise.allSettled
const allSettled1 = Promise.allSettled([p20, p21, p22]);
allSettled1.then(value => {
  console.log(`allSettled1: ${JSON.stringify(value)}`);
}).catch(error => {
  console.log(`allSettled1: ${error}`);
})
const allSettled2 = Promise.allSettled([p21, p22, p23]);
allSettled2.then(value => {
  console.log(`allSettled2: ${JSON.stringify(value)}`);
}).catch(error => {
  console.log(`allSettled2: ${error}`);
})

//Promise.any
const any1 = Promise.any([p20, p21, p22, p23]);
any1.then(value => {
  console.log(`any1: ${value}`);
}).catch(error => {
  console.log(`any1: ${error}`);
})

const p24 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p24 rejected');
  }, 1000);
})

const any2 = Promise.any([p23, p24]);
any2.then(value => {
  console.log(`any2: ${value}`);
}).catch(error => {
  console.log(`any2: ${error}`);
})



