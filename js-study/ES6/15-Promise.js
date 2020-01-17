function fetchStudentByScore(score) {
  //通过构造函数来创建Promise对象
  //构造函数接收的函数时创建Promise实例时立即调用的
  const p = new Promise(function (resolve, reject) {
    console.log('开始执行学生查询操作')
    setTimeout(() => {
      if (score >= 0 && score <= 100) {
        resolve('查询学生成功, 列表如下')
      } else {
        reject(new RangeError('分数必须在0~100之间'))
      }
    }, 2000);
  })
  console.log('创建promise对象成功');
  return p;
}

let p = fetchStudentByScore(60);
p.then(function (value) {
  console.log(value);
}, function (error) {
    console.log(error.message);
})

p = fetchStudentByScore(200);
p.then(function (value) {
  console.log(value);
}, function (error) {
    console.log(error.message);
})

p.catch(function (reason) {
  console.log('reason:' + reason.message);
})
p.finally(function () {
  console.log('p执行完成, 不管其状态是成功还是失败, finally回调都会被调用');
}).catch(function (error) {
  console.log('error:' + error.message);
});

p = fetchStudentByScore(85);
p.then(value => console.log(value)).catch(error => console.log('error' + error.message)).finally(() => console.log('查询结束'));