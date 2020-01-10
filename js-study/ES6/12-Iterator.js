//模拟迭代器对象, 实现需要的协议接口
function repeat(number) {
  let index = 0;
  return {
    next: function () {
      return index < number ?
        { value: index++, done: false } :
        { value: undefined, done: true }; //在done为true的时候, value的值可以省略
    }
  }
}

let itrator = repeat(5);
//手动调用遍历器的方法 
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());

//循环的形式来迭代
// let result = itrator.next();
// while (!result.done) {
//   console.log(result);
//   result = itrator.next();
// }

//上面模拟的迭代器, 不能被for...of消费, 能使用for...of语句的对象必须实现可迭代协议, 也就是对象需要实现Symbol.itrator()方法.

function forOfRepeat(number) {
  let index = 0;
  return {
    [Symbol.iterator]() {
      return {
        next: function () {
          return index < number ? { value: index++, done: false } : { value: undefined, done: true };
        }
      }
    }
  }
}

for (const result of forOfRepeat(5)) {
  console.log(result);
}

//实现itrator接口的内置对象
const str = 'hello, world';
iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//重写str的迭代器方法
const str2 = new String('hello, world');
str2[Symbol.iterator] = function () {
  let index = str2.length - 1;
  return {
    next: function () {
      return index >= 0 ? { value: str2.charAt(index--), done: false } : { done: true };
    }
  }
}

for (const char of str2) {
  console.log(char);
}


