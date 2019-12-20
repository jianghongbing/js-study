let date = new Date(); //创建一个date实例
let dateString = Date(); //返回一个表示当前时间的字符串
console.log(typeof date, date);
console.log(typeof dateString, dateString);
date = new Date(1989, 9, 20); 
console.log(date.toString());
console.log(Date.now()); //自1970-1-1 00:00:00 UTC(世界标准时间)至今所经过的毫秒数.
console.log(Date.parse('2019, 10, 20')); //解析一个表示某个日期的字符串, 并返回从1970-1-1 00:00:00 UTC 到该日期对象(该日期对象的UTC时间)的毫秒数.
console.log(Date.UTC(2019, 10, 20)); //接受和构造函数最长形式的参数相同的参数(从2到7),并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数.
date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliSeconds = date.getMilliseconds();
const week = date.getDay();
console.log(year, month, day, hours, minutes, seconds, milliSeconds, week);
const time = date.getTime(); 
const timezoneOffset = date.getTimezoneOffset();
console.log(time, timezoneOffset);
const utcYear = date.getUTCFullYear();
const utcMonth = date.getUTCMonth();
const utcDay = date.getUTCDate();
const utcHours = date.getUTCHours();
const utcMinutes = date.getUTCMinutes();
const utcSeconds = date.getUTCSeconds();
const utcMilliSeconds = date.getUTCMilliseconds();
const utcWeek = date.getUTCDay();
console.log(utcYear, utcMonth, utcDay, utcHours, utcMinutes, utcSeconds, utcMilliSeconds, utcWeek);

const setDate = new Date();
setDate.setFullYear(2000);
setDate.setMonth(10);
setDate.setDate(15);
setDate.setHours(20);
setDate.setMinutes(30);
setDate.setSeconds(20);
setDate.setMilliseconds(500);
console.log(setDate.toLocaleString());

setDate.setTime(10000000000000);
console.log(setDate.toLocaleString());
const string = date.toString();
const localeString = date.toLocaleString();
console.log(string, localeString);
dateString = date.toDateString();
const localeDateString = date.toLocaleDateString();
console.log(dateString, localeDateString);
const timeString = date.toTimeString();
const localeTimeString = date.toLocaleTimeString();
console.log(timeString, localeTimeString);

const ISODateString = date.toISOString();
const dateJson = date.toJSON();
const utcDateString = date.toUTCString();
const valueOf = date.valueOf();
console.log(ISODateString, dateJson, utcDateString, valueOf);
