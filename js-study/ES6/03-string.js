//1. 字符的unicode表示法
const str = '\uD842\uDFB7';
console.log(str, str.length);
const ji = '𠮷';
console.log(ji, ji.length);
console.log('\u20BB7');
console.log('\u{20BB7}');
//2.遍历字符串
for (const char of 'abcd') {
  console.log(char);
}
//3.模板字符串
const a = 1, b = 2, c = 3;
//在模板字符串中使用变量和表达式
const str1 = `a:${a}, b+c=${b + c}`;
console.log(str1);
//多行字符串
const str2 = `hello 
world`;
const str3 = 'hello \
world';
console.log(str2, str2.length);
console.log(str3, str3.length);
