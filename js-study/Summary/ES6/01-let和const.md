# let和const
ES6中新增了let和const指令, 用来申明变量. const声明的变量的值不允许再次修改. let和const的使用方式和var类似, 但是和var声明的变量有本质的区别

## 不存在变量提升

使用let和const修饰的变量, 必须先声明在使用. 如果没有声明就使用, 会报错, 而不像使用var声明变量那样存在变量提升.

## 暂时性死区

只要块级作用域内存在let, const命令, 它所声明的变量就绑定这个区域, 不再受外部的影响.  ES6明确规定, 如果区块中存在let和const命令, 这个区块对这些命令声明的变量, 从一开始就形成了封闭作用域. 凡是在声明之前就使用这些变量, 就会报错. 总之, 在代码块内, 使用let命令声明变量之前, 该变量都是不可用的. 这在语法上, 称为暂时性死区(temporal dead zone, 简称 TDZ). 暂时性死区会导致typeof不会百分百安全.

## 不允许重复声明

使用var声明的变量可以重复声明, let和const不予许重复申明某个变量

## 块级作用域

ES5只有全局作用域和函数作用域, 没有块级作用域. ES6新增了块级作用域. 在块级作用域声明变量的规则如下:
* 使用var声明的, 在块级作用域外部可以访问
* 使用let和const声明的, 在外部不可访问

## const: 常量

使用const申明的变量的值不可更改. 如果变量是引用类型, 则代表的是不能将变量在指向另外一个对象, 但是其指向的对象的内容还是可以更改的.

## 顶层对象与变量

顶层对象: 在浏览器环境指的是window对象; 在 Node 指的是global对象. ES5 之中, 顶层对象的属性与全局变量是等价的. ES6 为了改变这一点, 一方面规定, 为了保持兼容性, var命令和function命令声明的全局变量, 依旧是顶层对象的属性; 另一方面规定, let命令, const命令, class命令声明的全局变量, 不属于顶层对象的属性.

