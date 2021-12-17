export const role = 'admin'; //直接导出变量
const name = 'xiaoming'; 
export {
  name 
}

//导出函数
export function foo() {
  console.log('foo');
}

//导出类
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// export default 10; //直接默认导出

const admin = {
  role: 'admin',
  pwd: 'admin'
}

export default admin; //默认导出变量