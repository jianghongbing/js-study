//1.正则表达式的创建
const re = /ab+c/; //字面量方式构建
const re1 = new RegExp('ab+c'); //构造函数的方式来构建
const url = 'https://apple.com';
const url2 = 'Https://apple.com';
//2.正则表达式模式
let normalRe = /https/ //简单模式
console.log(normalRe.test(url));
console.log(/apple1/.test(url));
console.log(normalRe.test(url2));
console.log(/https/i.test(url2)); //带有标志的正则表达式

//3.正则表达式中, 特殊字符的含义
//3.1. 小数点, 匹配任意字符, 不包括换行符
let regex = /.app/;
console.log(regex.exec(url));
//3.2 \d: 匹配任意一个数字
regex = /\d/;
let result = regex.test(url);
console.log(result);
result = regex.exec('abc12345');
console.log(result);
//3.3 \D: 匹配任意一个非数字
console.log(/\D/.test(url));
console.log(/\D/.test('12345'));
//3.4 \w: 匹配任意一个字母或者数字, 下划线
result = /\w/.exec(url); //匹配到字母
console.log(result);
result = /\w/.exec('!@#$%~&*'); //没有匹配到字母或则数字, 下划线
console.log(result);
result = /\w/.exec('!@#$%~&*_'); //匹配到下划线
console.log(result);
//3.5 \W: 匹配到任意一个非字母,数字,下划线的字符
result = /\W/.exec(url);
console.log(result); //匹配到冒号
result = /\W/.exec('!@#$%~&*'); //匹配到
console.log(result);
result = /\W/.exec('abc1234'); //没有匹配到
console.log(result);
//3.5 \s: 匹配一个空白符, 包括空白符, 换行符, 制表符等
result = /\s/.exec(url);
console.log(result);
result = /\s/.exec('1234\n5678'); //匹配到换行符
console.log(result);
result = /\s/.exec('1234 5678'); //匹配到空白符
console.log(result);
//3.5 \S: 匹配一个非空白符
result = /\S/.exec(url);
console.log(result);
result = /\S/.exec('\n \n'); //没有匹配到非空白字符
console.log(result);
//4.字符集合
//4.1 [xyz] [a-z]: 匹配字符集合中的任意一个字符
result = /[dfg]/.exec(url); //匹配字符集合dfg中任意一个字符
console.log(result);
result = /[a-z]/.exec(url); //匹配a到z中字符集合中的任意一个
console.log(result);
//4.2 [^xyz] [^a-z]: 匹配非字符集合中的任意一个字符
result = /[^dfg]/.exec(url); //匹配非字符集合dfg中的任意一个字符
console.log(result);
result = /[^a-z]/.exec(url); //匹配非a到z中字符集合中的任意一个字符
console.log(result);
//5.边界
//5.1 ^: 匹配以某个字符串开头
regex = /^https/;
result = regex.exec(url);
console.log(result);
//5.2 $: 匹配以某个字符串结尾
regex = /com$/;
result = regex.exec(url);
console.log(result);
//6.分组和反向引用
//6.1 (x): 匹配x并获取捕获项
let str = 'abccbabcedeced';
regex = /(abc)/;
result = regex.exec(str);
console.log(result);
regex = /(abc)\1/;
result = regex.exec(str);
console.log(result);

//7.数量词
//7.1 x*: 匹配前面的模式0次或者多次
let newStr = 'abdca';
regex = /abc*/
result = regex.exec(str);
console.log(result);
result = regex.exec(newStr);
console.log(result);
//7.2 x+: 匹配前面的模式1次或者多次
regex = /abc+/
result = regex.exec(str);
console.log(result);
result = regex.exec(newStr);
console.log(result);
//7.3 x*?: 匹配前面的模式0或者多次, 但匹配是最小可能匹配
regex = /abc*?/
result = regex.exec(str);
console.log(result);
result = regex.exec(newStr);
console.log(result);
//7.3 x+?: 匹配前面的模式1次或者多次, 但匹配是最小可能匹配
regex = /abc+?/
result = regex.exec(str);
console.log(result);
result = regex.exec(newStr);
console.log(result);
//7.4 x?: 匹配前面的模式0或者1次
regex = /abc?/
result = regex.exec(str);
console.log(result);
result = regex.exec(newStr);
console.log(result);
//7.5 x|y: 匹配x或者y
regex = /abc|bdc/
result = regex.exec(str);
console.log(result);
result = regex.exec(newStr);
console.log(result);
//7.6: x{n}: 模式x连续出现n次时的匹配
regex = /t{2}/;
console.log(regex.exec(url));
//7.7: x{n,}: 模式x至少连续出现n次时的匹配
regex = /t{2,}/
console.log(regex.exec(url));
regex = /t{3,}/
console.log(regex.exec(url));
//7.8: x{n, m}: 模式x至少连续出现n, 至多m次时的匹配.
regex = /t{2,3}/
console.log(regex.exec(url));
console.log(regex.exec('matttt'));

//8. 断言
//8.1 x(?=y): 匹配模式x后面跟着y
regex = /http(?=s)/
result = regex.exec(url);
console.log(result);
result = regex.exec('http://www.jianghongbing.com');
console.log(result);
//8.2 x(?!y): 仅匹配不被y跟随的x
regex = /http(?!s)/
result = regex.exec(url);
console.log(result);
result = regex.exec('http://www.jianghongbing.com');
console.log(result);
//8.3 (?<=y)x: 	x只有在y后面才匹配.
regex = /(?<=人民币)\d+/;
result = regex.exec('需要人民币100元');
console.log(result);
//8.4 (?<!y)x: x只有不在y后面才匹配.
regex = /(?<!元)\d+/;
result = regex.exec('需要人民币100元');
console.log(result);

//RegExp的属性和方法
console.log(RegExp.length); //静态属性
console.log(regex.global); //是否开启全局匹配
regex = /abc/g;
console.log(regex.global);
console.log(regex.ignoreCase); //是否开启忽略大小写的匹配
regex = /abc/gi;
console.log(regex.ignoreCase);
console.log(regex.multiline); //是否开启多行匹配模式.
regex = /abc/gim;
console.log(regex.multiline);
console.log(re1.source); //正则对象的源模式文本
console.log(regex.lastIndex); //下次匹配开始的字符串索引位置. 
str = 'abcbabcba';
result = regex.exec(str);
console.log(result);
console.log(regex.lastIndex);
console.log(regex.test(str));
regex = /abc*/g
let res;
while ((res = regex.exec(str)) !== null) {
  console.log(res);
  console.log(res[0], res.input, res.index)
}

// regex = /^https:\/\/.+[0-9a-zA-Z]+.+com$/g;
// console.log(regex.exec(url));
//与正则相关的字符串的方法
str = 'a1b2c3d4';
console.log(str.split(/\d+/)); //以数字将字符串进行分离
str = 'abccba';
console.log(str.replace(/a/g, 'A')); //将所有的a替换成A
console.log(str.search(/cc/));
console.log(str.match(/ccb/));
str = 'abccbaabcacb';
console.log(str.match(/abc/g));

//匹配一个手机号码

regex = /^1[356789]\d{9}$/
console.log(regex.test('12345678901'));
console.log(regex.test('1366666688888888'));
console.log(regex.test('13666668888'));

//匹配一个简易邮箱 123@me.com
regex = /^\w+@\w+.\w+$/;
console.log(regex.test('me@me.com'));






