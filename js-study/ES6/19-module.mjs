import {
  a, b, add, multiply, Person, C,
  d as D //通过as, 将d作为D导入
} from './19-module-a.mjs';
//引入export default 导出的变量
import zero from './19-module-a.mjs';

//模块的整体加载
import * as ModuleB from './19-module-b.mjs';

//使用导入的变量
console.log(a, b);

// a = 300; //不能修改导入的变量的值, 其在引入的文件中被视为常量
// console.log(a);

//使用导入的函数
const sum = add(100, 200); 
console.log(sum);

const product = multiply(1, 2);
console.log(product);

//使用导入的类
const p1 = new Person('007');
p1.logInfo();

console.log(zero);

//通过as, 将c变量作为C导出
console.log(C);
//通过as, 将d变量作为D导入
console.log(D);

//访问模块整体加载导出的对象上的属性
console.log(ModuleB.A, ModuleB.B);