const e = Math.E; //自然对数的底数
console.log(e);
const ln2 = Math.LN2; //2的自然对数
const ln10 = Math.LN10; //10的自然对数
console.log(ln2, ln10); 
const log2e = Math.LOG2E; //以2为底e的对数
const log10e = Math.LOG10E; //以10为底e的对数
console.log(log2e, log10e);
const pi = Math.PI; //圆周率
const sqrt12 = Math.SQRT1_2; //二分之一的平方根
const sqrt2 = Math.SQRT2; //2的平方根
console.log(pi, sqrt12, sqrt2);

console.log(Math.abs(5), Math.abs(-5)); //绝对值
let number = 2.34;
console.log(Math.ceil(number), Math.floor(number)); //ceil:向上取整, floor:向下取整
console.log(Math.round(3.49), Math.round(3.51)); //round: 四舍五入
console.log(Math.max(1.23, 1.56, 2, 3.9), Math.min(1.23, 1.56, 2, 3.9)); //max:最大值, min:最小值
console.log(Math.random()); //random: 返回0到1之间的随机数
console.log(Math.trunc(number)); //trunc: 去掉小数部分, 保留整数
console.log(Math.pow(2, 3)); //2的3次方. 

console.log(Math.log(Math.pow(e, 2))); //某个数的自然对数
console.log(Math.log1p(Math.pow(e, 2) - 1)); //某个数加一后的自然对数加
console.log(Math.log10(100), Math.log2(4)); //log10:以10为底的某个数的对数, log2: 以2为底的某个数的对数
console.log(Math.sqrt(16), Math.cbrt(27)); //sqrt:计算某个数的平方根, cert: 计算某个数的立方根
console.log(Math.sign(100), Math.sign(-100), Math.sign(0), Math.sign(-0), Math.sign(+0)); //返回某个数的符号, 正式为1, 负数为-1, 0为0
console.log(Math.hypot(3, 4)); //返回所传入的数字的平方和的平方根

function angleToDegree(number) {
  return number / 180.0 * Math.PI;
}
const sin = Math.sin(angleToDegree(30)); //正弦
const cos = Math.cos(angleToDegree(60)); //余弦
console.log(sin, cos);

const tan = Math.tan(angleToDegree(45)); //正切
const atan = Math.atan(angleToDegree(60)); //反正切
console.log(tan, atan);
