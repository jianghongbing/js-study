# 属性

对象中的数据字段可以称为属性. js中, 属性只能添加到对象中, 可以在定义对象的时候为其申明属性, 也可以在后面为其添加和删除属性(运行时添加和删除属性). js中, 可以通过点语法来设置和访问属性的值. 

## 属性描述符

属性描述符是对属性的描述, 其本身也是一个对象. 可以通过Object.getOwnPropertyDescriptor()方法获取指定对象上一个自有属性对应的属性描述符.(自有属性指的是直接赋予该对象的属性, 不需要从原型链上进行查找的属性). 可以通过Object.defineProperty()或者Object.defineProperties()方法在为对象添加属性的同时, 设置该属性的描述符. 属性描述符的字段的说明如下:
通过definedProperty()和definePropertier()声明属性, 如果没有设置这下面的配置项, 默认值分别为 value: undefined, writale: false, enumeralbe: false, configurable: false, get: undefined, set: undefined.
* value: 属性的值. 
* writable: 属性的值是否可以修改. 直接声明的属性, 该值为true
* enumerable: 属性是否可以别枚举. 不能枚举的属性, 一些遍历方法不会将其遍历出来, 在打印对象的时候, 不可枚举的属性也不会出现在控制台上. 直接声明的属性, 该值为true
* configurable: 是否可以配置该属性的描述符, 或者删除该属性. 直接申明的属性, 该值为true
* get: 只有在属性有get方法的时候, 才存在该值. 在获取属性值的时候, 该方法会被调用. 直接声明的属性, 该值为undefined.
* set: 只有在属性有set方法的时候, 才存在该值. 在设置该属性的值的时候, 该方法会被调用. 直接声明的属性, 该值为undefined.

## 属性的判断

* in: 判断某个对象是否存在指定key的属性, 包括本身的属性和通过prototype继承而来的属性
* hasOwnPropertyOf(): 是否存在对象本身的某个属性, 通过prototype继承来的属性和不存在的属性该方法返回false. 

## 为对象添加属性的方式

* 在定义的对象的时候, 同时申明属性
* 声明对象后, 动态添加属性
* 从原型上继承的属性
* 通过Object.defineProperty()或者Object.defineProperties()来为对象添加属性

## 对象的遍历方式

* for...in: 遍历对象本身的并且enumerable为true的属性, 不含Symbol属性
* Object.keys(): 返回一个数组, 包括遍历对象本身的并且enumerable为true的属性的key, 不含Symbol属性.
* Object.values(): 返回一个数组, 包括遍历对象本身的并且enumerable为true的属性的值, 不含Symbol属性.
* Object.entries(): 返回一个数组, 包括遍历对象本身的并且enumerable为true的属性的键值所组成的数组, 不含Symbol属性.
* Object.getOwnPropertyNames(): 返回一个数组, 包含对象自身的所有属性(不含Symbol属性, 但是包括不可枚举属性)的键名.

## 属性的删除

属性描述符中的configrueable为true的时候, 可以通过delete来删除该属性. 如果没false, 则删除无效, 在严格模式下会报错.

## Object相关的方法对属性操作的影响

* Object.freeze(): 冻结某个对象, 返回和被传入参数相同的对象. 一个被冻结的对象再也不能被修改, 冻结了一个对象则不能向这个对象添加新的属性, 不能删除已有属性, 不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值. 此外, 冻结一个对象后该对象的原型也不能被修改. 
* Object.preventExtensions(): 让一个对象变的不可扩展, 也就是永远不能再添加新的属性. 返回传入该函数参数的对象. 不能添加新的属性, 不能重新设置该对象的原型, 但是可在之前的原型上添加新的属性. 可以修改该对象原有属性的值和删除之前添加的属性
* Object.seal(): 封闭一个对象, 阻止添加新属性并将所有现有属性标记为不可配置. 不能删除原本已经存在的属性, 不能添加新的属性和重新定义属性的属性描述符. 但是之前添加的属性的值还是可以修改的.

