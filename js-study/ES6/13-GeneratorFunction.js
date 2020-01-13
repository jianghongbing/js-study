
//生成器函数的定义
function* numbers() {
  let index = 0;
  console.log(`第${++index}次迭代开始`);
  yield 0;
  console.log(`第${index}次迭代结束`);
  console.log(`第${++index}次迭代开始`);
  yield 1;
  console.log(`第${index}次迭代结束`);
  console.log(`第${++index}次迭代开始`);
  yield 2;
  console.log(`第${index}次迭代结束`);
  console.log(`第${++index}次迭代开始`);
  yield 3;
  console.log(`第${index}次迭代结束`);
  console.log('整个生成器函数调用结束');
}
//调用生成函数, 返回一个生成器对象
let g = numbers();
//调用生成器的next方法, 返回一个对象, 里面包含value和done属性. done为一个布尔值, 表示为是否可继续迭代, value为每次迭代返回的值
let result = g.next();
console.log(result);
result = g.next();
console.log(result);
result = g.next();
console.log(result);
result = g.next();
console.log(result);
result = g.next();
console.log(result);
result = g.next();
console.log(result);

//带有显示return和抛出异常的生成器函数. 
function* generateNumbers(number) {
  if (number < 0) {
    console.log('小于0的数字跳出该生成器函数')
    return -1;
  }
  if (number % 7 === 0) {
    console.log('7的倍数会抛出异常');
    const error = Error('生成器函数抛出异常, 生成器函数传入的参数不能为7的倍数');
    error.code = number;
    throw error;
  }
  while (number >= 0) {
    yield number--;
  }
  console.log('generateNumbers执行完成');
}

g = generateNumbers(10);
result = g.next();
let done = false;
while (!(done = result.done)) {
  console.log(result);
  result = g.next();
}
//遇到显示的return语句
g = generateNumbers(-10);
console.log(g.next());

//遇到throw语句
g = generateNumbers(7);
try {
  console.log(g.next());
} catch (error) {
  console.log(error);
}

//没有yield表达式的生成器函数

function* generateWithoutYield() {
  console.log('没有yield表达式的生成器函数');
}

g = generateWithoutYield();

result = g.next();
console.log(result);

