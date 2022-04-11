// 正则表达式的字符匹配
// 简单字符的匹配
let reg = /a/
console.log(reg.test('abc'));
console.log(reg.test('bbb'));
// 数字的匹配 \d
reg = /\d/
console.log(reg.test('1abc'));
console.log(reg.test('abc'));
// 非数字的匹配 \d
reg = /\D/
console.log(reg.exec('1234'));
console.log(reg.exec('abc'));

// 匹配基本拉丁字母中的任何字母数字字符，包括下划线 a-zA-Z0-9_
reg = /\w/
console.log(reg.exec('!@#$%&*'))
console.log(reg.exec('@~!@#$%&*(_'))

// 匹配字母数字下划线的其他字符
reg = /\W/
console.log(reg.exec('123!@#$'));
console.log(reg.exec('123ASD_abc'));

// 匹配空格, 换行符, 以及tab制表符等 \s
reg = /\s/
console.log(reg.exec('123 sf'))
console.log(reg.exec('1234'))
console.log(reg.exec('123\nsf'))
// 匹配非空格, 换行符, tab制表符等
reg = /\S/
console.log(reg.exec('12345'))
console.log(reg.exec(' \n \r'))

// 匹配除终止符之外的任何单个字符, 在字符集内, 点失去了它的特殊意义, 并与文字点匹配
reg = /.a/
console.log(reg.exec('ab ab ba'))
console.log(reg.exec('ababca'))
console.log(reg.test('...'))
reg = /[.a]/
console.log(reg.test('...'))










