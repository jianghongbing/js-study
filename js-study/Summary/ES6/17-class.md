# 类

在ES6中引入了类的概念, 通过class关键字可以声明一个类, class的大部分功能可以使用ES5的方式实现, 新的类的声明让对象原型的写法更加清晰, 看上去更面向对象. 类的本质也是一个函数. 就如同在ES5的构造函数. 在ES6中, 类必须先声明后使用, 类不存在类似于变量提升的可能

## 构造方法

每个类有且仅有一个构造方法, 构造函数的函数名固定为constructor. 当使用new的方式去创建实例时, 会自动调用该方法, 如果在类中, 没有显示的定义构造方法, 一个空的构造函数会自动添加到类上. 和ES5中一样, 构造方法指向类型本身. 

## 实例方法

为了和之前的ES版本保持一致, 实例方法也都是添加在类型的原型上面, 实例方法的调用和ES5的一致, 可以通过Object.assign方法一次性为某个类型添加多个方法

## 实例属性

可以在构造方法中为实例对象添加属性, 也可以在类代码体中来定义

## 静态方法

在class中, 通过static声明的方法为静态方法, 静态方法添加到类本身上, 而不是类的原型对象, 静态方法同过类名来调用, 不能通过实例来进行调用.

## 静态属性

静态属性是添加在类上面的, 而不是在实例上面, 通过static声明的属性为静态属性, 静态属性也通过类来访问, 而不是实例来访问

## 方法中this的指向

在实例方法中, this指向该实例; 在类方法中, this指向该类本身

## 私有属性和方法

在属性和方法前面加上#来表示该属性或者方法是私有的, 私有属性和方法只能在类的声明体内部访问, 在外部访问会报错.

## set和get

* set: 设置方法, 在设置某个属性的值的时候, 该方法会被调用. set函数接收一个newValue的参数
* get: 获取方法, 在获取某个属性的值的时候, 该方法会被调用

set和get本质上是定义在属性的Descriptor, 可以通过Object.getOwnPropertyDescriptor来获取该属性的相关信息. 当只有get没有set表示该属性是只读的.

## new.target属性

new是从构造函数生成实例对象的命令, ES6为new命令引入了一个new.target属性, 该属性一般用在构造函数之中, 返回new命令作用于的那个构造函数. 如果构造函数不是通过new命令或Reflect.construct()调用的, new.target会返回undefined, 因此这个属性可以用来确定构造函数是怎么调用的. 在类的构造方法中, new.target指向直接被new执行的构造函数. 并且当一个父类构造方法在子类构造方法中被调用时, 情况与之相同. 也就是说通过通过new的方式创建子类实例时, 在父类中构造方法中获取到的new.target的值还是子类.
