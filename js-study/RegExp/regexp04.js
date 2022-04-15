// 组的匹配以及命名组

// |: 匹配其中一个
let reg = /a|b/
console.log(reg.exec('abc'))
console.log(reg.exec('ccc'))
console.log(reg.exec('cba'))
// []: 字符集, 匹配中括号中的任意一个字符, []中的-表示从从某个字符开始到某个字符结束
reg = /[abc]/
console.log(reg.exec('abc'))
console.log(reg.exec('a1'))
console.log(reg.exec('b2'))
console.log(reg.exec('def'))
reg = /[a-c]/ //等同于 [abc]
console.log(reg.exec('a1'))
console.log(reg.exec('b2'))
console.log(reg.exec('def'))
// 匹配0-9的数字
reg = /[0-9]/
console.log(reg.exec('1234'))
console.log(reg.exec('abcdef'))
// 匹配所有字母
reg = /[A-Za-z]/
console.log(reg.exec('abc'))
console.log(reg.exec('123456'))
// 匹配所有字母和数字
reg = /[a-zA-Z0-9]/
console.log(reg.exec('!@#$$$!!@'))
console.log(reg.exec('123abc'))
// \w的匹配
reg = /[a-zA-Z0-9_]/
console.log(reg.exec('~!@@_'))
console.log(/\w/.exec('~!@@_'))
console.log(reg.exec('1qaz@'))
// [^]: 匹配中括号内以外的字符
reg = /[^a-c]/
console.log(reg.exec('aef'))
console.log(reg.exec('abc'))
// (): 捕获组: 匹配x并记住匹配项 
reg = /(a)/
console.log('abc'.match(reg))
reg = /(a)/g
console.log('abc'.match(reg))
// console.log(RegExp.$1)
//(?<name>x): 具名匹配组
reg = /(?<phone>iPhone|iPad)/
const str = 'iPhone13 Iphone12 Ipad5'
console.log(reg.exec(str))





