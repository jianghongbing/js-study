//构造函数
// const url = 'https://www.abc.com';
const regexp = /abc/gi
const regexpObj = new RegExp(regexp, 'g');
console.log(regexp.flags, regexpObj.flags);
