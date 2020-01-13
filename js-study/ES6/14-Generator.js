function* generateNumber(number) {
  let inner = 0;
  while (inner++ < number) {
    yield inner;
  }
}
let g = generateNumber(10);

//生成器对象是符合可迭代协议的, 因此可以通过for...of来进行遍历
for (const number of g) {
  console.log(number);
}

//next方法, next方法返回一个对象. 
g = generateNumber(3);
let result = g.next();
console.log(result);
result = g.next();
console.log(result);
result = g.next();
console.log(result);
result = g.next();
console.log(result);

//next方法向生成器函数传值
function* generateNumbers(number) {
  while (number-- > 0) {
    try {
      let a = yield number;
      console.log('a的值:' + a);
    } catch (error) {
      console.log(error);
    }
  }
}

g = generateNumbers(5);
result = g.next();
console.log(result);
result = g.next(1);
console.log(result);
result = g.next();
console.log(result);
result = g.next(2);
console.log(result);


//return
g = generateNumber(5);
result = g.next();
console.log(result);
result = g.return();
console.log(result);

g = generateNumber(1);
result = g.next();
console.log(result);
result = g.next();
console.log(result);
result = g.return(-1);
console.log(result);

g = generateNumbers(5);
result = g.next();
console.log(result);
result = g.throw(Error('抛出了错误'));
console.log(result);
result = g.next();
console.log(result);



