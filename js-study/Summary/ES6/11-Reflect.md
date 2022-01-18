# Reflect: 反射
Reflect是一个内置的对象, 它提供拦截JavaScript操作的方法. 这些方法与proxy handlers的方法相同. Reflect不是一个函数对象, 因此不能通过构造函数来构造Reflect对象, Reflect提供的都是静态方法. 

## Reflect提供的方法

* Reflect.set(target, propertyKey, value, receiver): 设置某一个对象属性的值. 如果遇到的是set函数, 那么set函数中的this就是receiver. 如果设置成功, 返回true, 如果设置失败(比如该对象被冻结), 返回false
* Reflect.get(target, propertyKey, receiver): 获取某个对象属性的值. 如果遇到的是get函数, 那么get函数中绑定的this就是receiver. 
* Reflect.apply(target, thisArgument, argumentsList): 用于替代函数的apply方法, target为目标函数, thisArgument为目标函数绑定的this, argumentsList为目标函数的参数列表, 返回值是目标函数的返回值.
* Reflect.construct(target, argumentsList, newTarget): 类似与new操作符的作用. target为一个构造函数, argumentsList为构造函数参数列表, newTarget为新构建的原型对象, 默认为target,也就是构造函数.
* Reflect.defineProperty(target, propertyKey, attributes): 替换Object.defineProperty, 定义成功后返回true, 定义失败返回false
* Reflect.deleteProperty(target, propertyKey): 删除某个对象的属性, 替代delete操作符, 删除成功返回true, 删除失败返回false
* Reflect.getOwnPropertyDescriptor(target, propertyKey): 获取某个对象的属性的描述符. 替代Object.getOwnPropertyDescriptor函数. 
* Reflect.getPrototypeOf(target): 获取给定对象的原型. 替代Object.getPrototypeOf函数
* Reflect.has(target, propertyKey): 判断对象中是否存在指定的属性. 与in操作符功能相同, 替代in操作符
* Reflect.isExtensible(target): 判断一个对象是否可以扩展. 用于替代Object.isExtensible函数
* Reflect.ownKeys(target): 获取某个对象的所有自身属性的key的数组. 用于替代Object.OwnKeys函数
* Reflect.preventExtensions(target): 让目标对象变的不可扩展. 用于替代Object.preventExtensions方法
* Reflect.setPrototypeOf(target, prototype): 设置目标对象的原型. 用于替代Object.setPrototypeOf方法.

## Reflect和Proxy配合使用

Reflect和Proxy提供的api基本一致, 通常在Proxy的handler中, 一般都通过Reflect提供对应的api去执行对应的handler方法. 
