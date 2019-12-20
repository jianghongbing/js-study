# setter和getter

set和get语法将对象属性绑定到设置属性和查询该属性时将被调用的函数. set和get通常用于模拟一个伪属性, 用对该属性设置和获取值时, 进行拦截, 加入自己相应业务上的处理. 可以通过delete删除getter和setter. 不要将同名的数据属性和setter, getter同时定义和使用.

## setter

当设置属性的值的时候, setter会被调用, 该方法会接收一个参数, 用于设置新值

## getter

当获取属性的值的时候, getter会被调用. getter在访问它们之前不会计算属性的值. getter会延续计算值的成本, 直到需要值, 如果不需要, 您就不用支付成本. 一种额外的优化技术是用智能或记忆化getters延迟属性值的计算并将其缓存以备以后访问. 该值是在第一次调用getter时计算的, 然后被缓存. 因此后续访问返回缓存值而不重新计算它. 这在以下情况下很有用:
* 如果属性值的计算是昂贵的(占用大量RAM或CPU时间，产生工作线程，检索远程文件等)
* 如果现在不需要该值. 它将在稍后使用, 或在某些情况下它根本不使用. 
* 如果被使用, 它将被访问几次, 并且不需要重新计算该值将永远不会被改变, 或者不应该被重新计算. 