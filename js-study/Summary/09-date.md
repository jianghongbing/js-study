# Date: 日期

js中使用Date对象和其方法来处理日期和时间. Date实例呈现时间中的某个时刻. Date是基于Unix Time Stamp, 即自1970年1月1日UTC起经过的毫秒数. Date对象有大量的设置, 获取和操作日期的方法. 它并不含有任何属性. 

## Date的构造函数
只能将Date作为构造函数调用, 才能实例化Date对象. 若将它作为常规函数调用(即不加 new 操作符), 则将会返回一个字符串, 而非Date对象. 另外，不像其他的JavaScript对象类型, Date对象没有字面量语法.

## 构造函数参数说明

* 不带参数: 实例创建时的当前日期和时间.
* 时间戳: 一个整数值，表示自1970年1月1日00:00:00 UTC以来的毫秒数.
* 一个符合以下格式的表示日期的字符串: "月 日, 年 时:分:秒" 如果你省略时分秒, 那么他们的值将被设置为0. 
* 分别提供日期与时间的每一个成员: 当至少提供了年份与月份时, 返回的Date对象中的每一个成员都来自下列参数/ 没有提供的成员将使用最小可能值(对日期为1, 其他为0), 成员列表表示如下:
  * year: 表示年份的整数值. 0到99会被映射至1900年至1999年, 其它值代表实际年份. 
  * monthIndex: 月份索引, 表示月份的整数值, 从0(1月)到11(12月).
  * day: 表示一个月中的第几天的整数值. 从1开始. 默认值为1.
  * hours: 表示一天中的小时数的整数值(24小时制). 默认值为0(午夜).
  * minutes: 表示一个完整时间中的分钟部分的整数值. 默认值为0. 
  * seconds: 表示一个完整时间中的秒部分的整数值. 默认值为0. 
  * milliseconds: 表示一个完整时间的毫秒部分的整数值. 默认值为0.

## Date中组成部分的范围

* 秒: 0到59
* 分: 0到59
* 时: 0到23
* 号: 1到31
* 月: 0到11月, 0表示一月, 11表示12月
* 年: 
* 星期: 0到6 0表示星期天, 1-6分别表示周一到周六


## Date中的方法类别

处理日期时间的Date对象方法可分为以下几类: 
* set方法, 用于设置Date对象的日期和时间的值. 
* get方法, 用于获取Date对象的日期和时间的值.
* to方法, 用于返回Date对象的字符串格式的值. 
* parse和UTC方法, 用于解析Date字符串. 

## Date中的方法

* now: 返回自1970-1-1 00:00:00 UTC(世界标准时间)至今所经过的毫秒数. 
* parse: 解析一个表示某个日期的字符串, 并返回从1970-1-1 00:00:00 UTC 到该日期对象(该日期对象的UTC时间)的毫秒数. 每个平台的实现不一致, 不建议使用该函数来解析日期字符串
* UTC: 接受和构造函数最长形式的参数相同的参数(从2到7), 并返回从1970-01-01 00:00:00 UTC开始所经过的毫秒数.
* getFullYear: 年份
* getMonth: 月份
* getDate: 天数
* getHours: 小时
* getMinutes: 分钟
* getSeconds(): 秒数
* getMilliseconds: 毫秒数
* getDay: 星期几, 0为星期天. 
* getTime: 返回从1970-1-1 00:00:00 UTC 到该日期经过的毫秒数, 对于1970-1-1 00:00:00 UTC之前的时间返回负值.
* getTimezoneOffset: 当前时区的时区偏移. 表示协调世界时UTC与本地时区之间的差值, 单位为分钟.
* getUTCFullYear: 根据世界时返回特定日期对象所在的年份
* getUTCMonth: 根据世界时返回特定日期对象的月份
* getUTCDate: 根据世界时返回特定日期对象一个月的第几天
* getUTCHours: 根据世界时返回特定日期对象当前的小时
* getUTCMinutes: 根据世界时返回特定日期对象的分钟数
* getUTCSeconds: 根据世界时返回特定日期对象的秒数
* getUTCMilliseconds: 根据世界时返回特定日期对象的毫秒数
* getUTCDay: 根据世界时返回特定日期对象一个星期的第几天
* setFullYear: 设置年份
* setMonth: 设置月份
* setDate: 设置月份中的第几天
* setHours: 设置小时数
* setMinutes: 设置分钟数
* setSeconds: 设置秒数
* setMilliseconds: 设置毫秒数
* setTime: 通过指定从1970-1-1 00:00:00 UTC开始经过的毫秒数来设置日期对象的时间, 对于早于 1970-1-1 00:00:00 UTC的时间可使用负值. 
* setUTCFullYear: 根据世界时设置对象中的年份
* setUTCMonth: 根据世界时设置月份
* setUTCDate: 根据世界时设置天数
* setUTCHours: 根据世界时设置小时
* setUTCMinutes: 根据世界时设置分钟
* setUTCSeconds: 根据世界时设置秒钟
* setUTCMilliseconds: 根据世界时设置毫秒
* toDateString: 获取日期对象日期部分的字符串
* toISOString: 把一个日期转换为符合ISO8601扩展格式的字符串
* toJSON: 使用toISOString返回一个表示该日期的字符串. 为了在JSON.stringify()方法中使用.
* toLocaleDateString: 返回一个表示该日期对象日期部分的字符串, 该字符串格式与系统设置的地区关联.
* toString: 返回一个表示该日期对象的字符串. 覆盖了Object.prototype.toString() 方法.
* toLocaleString: 返回一个表示该日期对象的字符串, 该字符串与系统设置的地区关联覆盖了 Object.prototype.toLocaleString()方法
* toLocaleTimeString: 返回一个表示该日期对象时间部分的字符串, 该字符串格式与系统设置的地区关联
* toTimeString: 返回日期对象时间部分的字符串。
* toUTCString: 把一个日期对象转换为一个以UTC时区计时的字符串. 
* valueOf: 返回一个日期对象的原始值. 覆盖了 Object.prototype.valueOf() 方法. 

