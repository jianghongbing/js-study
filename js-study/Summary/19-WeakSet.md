# WeakSet

WeakSet和Set类似, 但是有2点区别. 
* WeakSet中的值只能为对象类型, 而Set中既可以存放对象类型, 也可以存放基本类型
* WeakSet中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet对象是无法被枚举的, 没有办法拿到它包含的所有元素.

## WeakSet的方法和属性

* add: 添加一个元素到WeakSet的末尾
* delete: 删除指定的元素, 删除成功返回true, 删除失败返回false
* has: 判断WeakSet中, 是否存在某个值