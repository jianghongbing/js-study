//1.字符串的创建
const name = 'jiang'; //通过字面量的方式来创建字符串, name的类型为string
const name1 = new String('jiang'); //通过new 对象的形式来创建字符串, name1的类型为object
const name2 = String('jiang'); //以string函数的方式来创建字符串, name2的类型为string
console.log(name, typeof name);
console.log(name1, typeof name1);
console.log(name2, typeof name2);
//2.转义字符
const escString = 'my name is: \n \"xiaoming\"';
console.log(escString);

//3.字符串的拼接
const info = 'my name is' + ': ' + name;
console.log(info);

//4.字符串的属性和方法
const length = info.length;  //字符串的长度
const str = 'abcdefg一二三四五六七八九喆0123456789';
console.log(str.charAt(1), str.charAt(9), str.charAt(16), str.charAt(18)); //获取指定位置的字符
console.log(str.charCodeAt(1), str.charCodeAt(9), str.charCodeAt(16), str.charCodeAt(18));
console.log(str.codePointAt(1), str.codePointAt(9), str.codePointAt(16), str.codePointAt(18));
const hello = 'hello';
const helloWorld = hello.concat(',', 'world'); //拼接多个字符串
console.log(helloWorld);

console.log(name.includes('ang'), name.includes('ang', 4)); //判断某个字符串是否包含另外一个字符串.
const apple = 'https://www.apple.com';
const google = 'http://www.google.cn';
console.log(apple.endsWith('com'), google.endsWith('com')); //判断某个字符串是否以指定的字符串结尾
console.log(apple.startsWith('https'), google.endsWith('https')); //判断某个字符串是否以指定的字符串开头
let index = apple.indexOf('p'); //获取指定字符串的位置. 没有找到返回-1, 找到返回字符串所在的位置
console.log(index);
index = apple.indexOf('p', 5);
console.log(index);
index = apple.indexOf('p', 15);
console.log(index);
console.log(apple.lastIndexOf('p'));
console.log(apple.lastIndexOf('p', 13));
console.log(apple.localeCompare(google)); //字符串比较

let matches = apple.match(/[p]/);
console.log(matches);
matches.forEach(item => (console.log(item)));
matches = apple.match(/p/g);
console.log(matches);
matches.forEach(item => (console.log(item)));

const a = '123';
console.log(a.padEnd(10, '0')); //在字符串的尾部填充某个字符串, 直到达到指定的长度
console.log(a.padStart(10, '0')); //在字符串的头部填充某个字符串, 直到达到指定的长度
console.log(a.repeat(10));  //重复某个字符串n次
const str1 = 'abccdedcbca';
console.log(str1.replace(/c/, 'C')); //替换第一个匹配到的字符串
console.log(str1.replace(/c/g, 'C')); //替换掉所有匹配到的字符串
console.log(apple.search('p')); //搜索某个字符串, 返回搜索到的字符串的位置, 如果没有搜到, 返回-1
console.log(apple.search('z'));
console.log(apple.slice(0, 5)); //获取索引为0到5(不包括5)之间的字符串
console.log(apple.slice(-3, apple.length)); //获取倒数第三个字符的位置到字符串结束位置之间的字符串
console.log(apple.split('.')); //以某种模式分隔字符串, 并返回分隔的结果, 为数组类型
console.log(apple.split('.', 2));
console.log(apple.substring(4, 9)); //返回index位置为4(包括4)到9(不包括9)之间的字符.
const str2 = ' HellO, World ';
console.log(str2.toLowerCase()); //转换成小写
console.log(str2.toUpperCase()); //转换成大写
console.log(str2.toLocaleLowerCase()); //根据当前区域设置, 转换成小写
console.log(str2.toLocaleUpperCase()); //根据当前区域设置, 转换成大写
console.log(str2.trim()); //除去字符串首尾的空格
console.log(str2.trimStart()); //移除字符串开始的空格
console.log(str2.trimEnd()); //移除字符串结束位置的空格
console.log(str2.trimLeft()); //移除字符串左侧开始位置的空格
console.log(str2.trimRight()); //移除字符右侧开始位置的空格
// console.log(str2.toSource());
console.log(str2.toString());
console.log(str2.valueOf());

//字符串的比较
