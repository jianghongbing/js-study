// 正则的2种创建方式 
let reg = /abc/ // 字面量创建
console.log(reg)
reg = new RegExp('abc') // 构造函数的方式创建 
console.log(reg)
console.log(reg.test('abca'))
console.log(reg.test('cba'))
console.log(reg.exec('abcaba'))
