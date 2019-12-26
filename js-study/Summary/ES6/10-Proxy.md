# Proxy: 代理器

Proxy对象用于定义基本操作的自定义行为(如属性查找, 赋值, 枚举, 函数调用等), 用于修改某些操作的默认行为. Proxy可以理解成在目标对象之前架设一层拦截, 外界对该对象的访问, 都必须先通过这层拦截. 因此提供了一种机制, 可以对外界的访问进行过滤和改写. 

## Proxy的构造函数 

Proxy对象都通过构造函数来创建, 构造函数接收2个参数, 参数说明如下

* target: 需要代理的对象, 它通常用作代理的存储后端. 根据目标验证关于对象不可扩展性或不可配置属性的不变量.
* handler: 处理器对象, 用于放置相关的代理器方法, 对某些操作进行过滤和拦截

被代理的对象的属性和方法会添加到代理对象上面, 通过代理去添加, 修改属性和方法等操作, 代理会将所有应用到它的操作转发到这个对象上. 

### Proxy的其他方法

* Proxy.revocable(): 创建一个可撤销的Proxy对象, 参数和Proxy的构造方法一样, 但是该函数返回一个包含了所生成的代理对象本身以及该代理对象的撤销方法的对象. 一旦某个代理对象被撤销, 它将变的几乎完全不可用, 在它身上执行任何的可代理操作都会抛出 TypeError异常（注意, 可代理操作一共有13种, 执行这14种操作以外的操作不会抛出异常). 一旦被撤销，这个代理对象永远不可能恢复到原来的状态, 同时和它关联的目标对象以及处理器对象将有可能被垃圾回收掉. 调用撤销方法多次将不会有任何效果, 当然, 也不会报错.


## 处理器对象

处理器对象也就是Proxy构造函数传入的第二个参数, 用于放置一些方法用于对某些操作进行来接和过滤. 大多数方法都有一定的约束. 违背了约束, 相关的处理器方法会抛出异常.

## 处理器方法

### get(target, property, receiver)
用于拦截对象的读取属性操作. 

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* property: 被获取的属性名
* receiver: 代理对象或者继承Proxy的对象

#### 拦截操作

* 通过点语法和中括号的形式访问属性
* 访问原型链上的属性
* Reflect.get()方法的调用

#### 约束

如果违背了以下的约束, proxy会抛出TypeError错误
* 如果要访问的目标属性是不可写以及不可配置的, 则返回的值必须与该目标属性的值相同. 
* 如果要访问的目标属性没有配置访问方法, 即get方法是undefined的, 则返回值必须为undefined. 

### set(target, property, value, receiver)

用于拦截设置属性值的操作. set方法应该返回一个布尔值, 返回true代表此次设置属性成功了, 如果返回false, 表示设置失败. 如果设置属性操作在严格模式下并且失败, 那么会抛出一个TypeError.

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* property: 被设置的属性名
* value: 被设置的新值
* receiver: 代理对象或者继承Proxy的对象

#### 拦截操作

* 设置属性值, 通过点语法或者中括号的形式设置属性值
* 设置原型链上属性的值
* Reflect.set()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* 若目标属性是不可写及不可配置的, 则不能改变它的值. 
* 如果目标属性没有配置存储方法, 即set方法是undefined的, 则不能设置它的值. 
* 在严格模式下, 若set方法返回false, 则会抛出一个 TypeError 异常. 

### apply(target, thisArg, argumentsList)

用于拦截函数的调用

#### 参数说明

* target: 目标对象, 必须是一个函数
* thisArg: 被调用时的上下文对象
* argumentsList: 被调用时的参数数组

#### 拦截操作

* proxy(...args)
* Function.prototype.apply() 和 Function.prototype.call()
* Reflect.apply()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* target必须是可被调用的. 也就是说, 它必须是一个函数对象. 

### construct() 

方法用于拦截new 操作符. 为了使new操作符在生成的Proxy对象上生效, 用于初始化代理的目标对象自身必须具有Construct内部方法即newtarget必须是有效的. 

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* argumentsList: 构造函数参数列表
* newTarget: 被创建的代理对象

#### 拦截操作

* new proxy(...args)
* Reflect.construct()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* 必须返回一个对象

### defineProperty() 

用于拦截对对象的 Object.defineProperty()操作. 

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* property: 待检索其描述符的属性名
* descriptor: 待定义或修改的属性的描述符.

#### 拦截操作

* Object.defineProperty()
* Reflect.defineProperty()
* proxy.property='value'

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* 如果目标对象不可扩展, 将不能添加属性. 
* 不能添加或者修改一个属性为不可配置的, 如果它不作为一个目标对象的不可配置的属性存在的话. 
* 如果目标对象存在一个对应的可配置属性, 这个属性可能不会是不可配置的. 
* 如果一个属性在目标对象中存在对应的属性, 那么 Object.defineProperty(target, prop, descriptor)将不会抛出异常.    在严格模式下, false 作为 handler.defineProperty 方法的返回值的话将会抛出TypeError异常.


### deleteProperty(target, property)

用于拦截对对象属性的 delete 操作

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* property: 待删除属性的名称

#### 拦截操作

* 删除代理属性
* Reflect.deleteProperty()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* 如果目标对象的属性是不可配置的, 那么该属性不能被删除. 

### getOwnPropertyDescriptor() 

用于拦截 Object.getOwnPropertyDescriptor()方法. 

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* prop: 返回的属性描述符的key

#### 拦截操作

* Object.getOwnPropertyDescriptor()
* Reflect.getOwnPropertyDescriptor()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* getOwnPropertyDescriptor必须返回一个object 或 undefined. 
* 如果属性作为目标对象的不可配置的属性存在, 则该属性无法报告为不存在. 
* 如果属性作为目标对象的属性存在, 并且目标对象不可扩展, 则该属性无法报告为不存在. 
* 如果属性不存在作为目标对象的属性, 并且目标对象不可扩展, 则不能将其报告为存在. 
* 属性不能被报告为不可配置, 如果它不作为目标对象的自身属性存在, 或者作为目标对象的可配置的属性存在. 
* Object.getOwnPropertyDescriptor(target) 的结果可以使用 Object.defineProperty应用于目标对象, 也不会抛出异常.

### getPrototypeOf(target)

用于拦截当读取代理对象的原型. 

#### 参数说明

* target: 目标对象, 也就是被代理的对象

#### 拦截操作

* Object.getPrototypeOf()
* Reflect.getPrototypeOf()
* __proto__
* Object.prototype.isPrototypeOf()
* instanceof

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* getPrototypeOf()方法返回的不是对象也不是null. 
* 目标对象是不可扩展的, 且getPrototypeOf()方法返回的原型不是目标对象本身的原型. 

### has() 

用于拦截in操作符的操作

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* property: 需要检查是否存在的属性的key

#### 拦截操作

* 属性查询: foo in proxy
* 继承属性查询: foo in Object.create(proxy)
* with 检查: with(proxy) { (foo); }
* Reflect.has()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* 如果目标对象的某一属性本身不可被配置, 则该属性不能够被代理隐藏. 
* 如果目标对象为不可扩展对象, 则该对象的属性不能够被代理隐藏

### isExtensible() 

用于拦截对对象的Object.isExtensible()

#### 参数说明

* target: 目标对象, 也就是被代理的对象

#### 拦截操作

* Object.isExtensible()
* Reflect.isExtensible()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* Object.isExtensible(proxy)必须同Object.isExtensible(target)返回相同值. 也就是必须返回true或者为true的值,返回false和为false的值都会报错. 

### ownKeys()

用于拦截Reflect.ownKeys()操作

#### 参数说明

* target: 目标对象, 也就是被代理的对象

#### 拦截操作

* Object.getOwnPropertyNames()
* Object.getOwnPropertySymbols()
* Object.keys()
* Reflect.ownKeys()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* ownKeys 的结果必须是一个数组.
* 数组的元素类型要么是一个String, 要么是一个Symbol.
* 结果列表必须包含目标对象的所有不可配置, 自有属性的key.
* 如果目标对象不可扩展, 那么结果列表必须包含目标对象的所有自有属性的key, 不能有其它值. 

### preventExtensions()

用于对Object.preventExtensions()的拦截

#### 参数说明

* target: 目标对象, 也就是被代理的对象

#### 拦截操作

* Object.preventExtensions()
* Reflect.preventExtensions()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* 如果Object.isExtensible(proxy)是false, Object.preventExtensions(proxy)只能返回true. 

### setPrototypeOf()

用于拦截Object.setPrototypeOf()操作

#### 参数说明

* target: 目标对象, 也就是被代理的对象
* prototype: 要设置的原型

#### 拦截操作

* Object.setPrototypeOf()
* Reflect.setPrototypeOf()

#### 约束

如果违背以下的约束条件, proxy会抛出一个TypeError. 
* 如果target不可扩展, 原型参数必须与Object.getPrototypeOf(target)的值相同


