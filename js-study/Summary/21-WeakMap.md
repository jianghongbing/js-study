# WeakMap

WeakMap也是键值对的集合. 它的键必须是对象类型, 值可以是任意类型. 它的键被弱保持, 也就是说, 当其键所指对象没有其他地方引用的时候, 它会被回收掉. 与Map对象不同的是，WeakMap的键是不可枚举的, 因此不能遍历WeakMap.

## WeakMap的属性和方法

* 构造函数: WeakMap的构造函数接收一个遍历器对象, 并且遍历器对象中每个成员都是一个双元素的数组的数据结构. 每个键值对都会添加到新的Map. 不能使用Object对象来构建WeakMap.
* set(key, value): 设置WeakMap中键的值. 返回该WeakMap对象.
* has(key): 判断某个key是否存在
* get(key): 返回key对应的值, 如果不存在, 则返回undefined.
* delete(key): 如果Map对象中存在该元素, 则移除它并返回true, 否则如果该元素不存在则返回false
