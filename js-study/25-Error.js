//Error的创建
let error = new Error("发生了异常");
//当发生错误时, 如果不对其处理, 程序会终止, 抛出错误位置后面的代码都不会得到执行

//引用不存在的变量, 在运行时系统会自动抛出一个错误
// console.log(name);

//用户手动抛出错误
// throw error
// console.log('1234')

try {
  console.log(name);
} catch (e) {
  console.log('try 语句块中抛出了错误');
  console.log(e.message, e.name);
}

try {
  throw '有错误存在'; //手动抛出一个字符串
} catch (e) {
  console.log(e);
}

//try...catch...finally
try {
  throw Error('错误发生了');
} catch (e) {
  console.log('抛出了一个错误');
} finally {
  console.log('finally语句最后都要执行');
}
function inputNumber(number) {
  if (typeof number !== 'number') {
    throw TypeError('输入的值必须是一个数字');
  }
  if (!Number.isInteger(number)) {
    throw TypeError('输入的值必须是一个整数');
  }
  if (number < 0 || number > 100) {
    throw RangeError('输入的值必须在0-100之间');
  }
  console.log('很好, 输入成功');
}
//模拟多个catch语句
try {
  inputNumber('100');
} catch (e) {
  if (e instanceof TypeError) {
    console.log('发生了一个类型错误:' + e.message);
  } else if (e instanceof RangeError) {
    console.log('发生了一个范围错误:' + e.message);
  }
}
try {
  inputNumber(200);
} catch (e) {
  if (e instanceof TypeError) {
    console.log('发生了一个类型错误:' + e.message);
  } else if (e instanceof RangeError) {
    console.log('发生了一个范围错误:' + e.message);
  }
}


