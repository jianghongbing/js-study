// 正则中的量词,量词表示要匹配的字符或表达式的数量

// * 匹配0次或更多次
let reg = /b*/
console.log(reg.exec('ac'))
console.log(reg.exec('abc'))
console.log(reg.exec('abbbc'))
// +: 匹配一次以上 等价于 {1, }
reg = /b+/
console.log(reg.exec('ac'))
console.log(reg.exec('abc'))
console.log(reg.exec('abbbc'))
// ?: 匹配0次或1次, 如果放在量词后面, 表示为非贪婪匹配
reg = /b?/
console.log(reg.exec('ac'))
console.log(reg.exec('abc'))
console.log(reg.exec('abbbc'))
// {n}: 匹配n次
reg = /b{2}/
console.log(reg.exec('ac'))
console.log(reg.exec('abc'))
console.log(reg.exec('abbc'))
console.log(reg.exec('abbbc'))
// {n,}: 至少匹配n次
reg = /b{2,}/
console.log(reg.exec('ac'))
console.log(reg.exec('abc'))
console.log(reg.exec('abbc'))
console.log(reg.exec('abbbc'))
// {n, m}: 匹配n到m次, 其中n是0或一个正整数，m是一个正整数且m > n, 至少与前一项x匹配，最多与m匹配
reg = /b{2,3}/
console.log(reg.exec('ac'))
console.log(reg.exec('abc'))
console.log(reg.exec('abbc'))
console.log(reg.exec('abbbbbbc'))
//默认情况下, 量词的匹配都是贪婪匹配, 如果要使用非贪婪匹配, 需要在量词修饰符的后面加上?
reg = /b{2,5}/
console.log(reg.exec('abbbbbbc'))
reg = /b{2,5}?/
console.log(reg.exec('abbbbbbc'))
