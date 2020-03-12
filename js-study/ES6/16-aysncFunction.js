//1.异步函数的声明
async function doSomething() {
  return new Promise(resolve => {
    resolve("doSomethingSuccess");
  });
}
doSomething().then(result => {
  console.log(result);
});
console.log("这个在doSomethingSuccess之前打印出来");

async function checkScore(score) {
  return new Promise((resolve, reject) => {
    if (typeof score !== "number" || score > 100 || score < 0) {
      reject(new Error("错误的分数, 请检查输入分数的有效性"));
    }
    resolve(score);
  });
}

checkScore("100")
  .then(value => {
    console.log("1:" + value);
  })
  .catch(error => {
    console.log("1:" + error.message);
  });

checkScore(101)
  .then(value => {
    console.log("2:" + value);
  })
  .catch(error => {
    console.log("2:" + error.message);
  });

checkScore(99)
  .then(value => {
    console.log("3:" + value);
  })
  .catch(error => {
    console.log("3:" + error.message);
  });

//异步函数中使用await指令
async function readFile1(timeout) {
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log('读取文件1')
  //     resolve('获取了文件1');
  //   }, 1000);
  // });
  return new Promise((resolve, reject) => {
    if (timeout > 2000) {
      reject(new Error("time out"));
    } else {
      setTimeout(() => {
        console.log("读取文件1");
        resolve("获取了文件1");
      }, 1000);
    }
  });
  
}

async function readFile2(timeout) {
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     console.log("读取文件2");
  //     resolve("获取了文件2");
  //   }, 1000);
  // });
  return new Promise((resolve, reject) => {
    if (timeout > 3000) {
      reject(new Error("time out"));
    } else {
      setTimeout(() => {
        console.log("读取文件2");
        resolve("获取了文件2");
      }, 1000);
    }
  });
}

async function readFiles() {
  const file1 = await readFile1(1000);
  const file2 = await readFile2(1000);
  return file1 + " " + file2;
}

readFiles().then(result => {
  console.log(result);
});

console.log("开始读取文件");
async function readFilesTimeout() {
  const file1 = await readFile1(3000);
  const file2 = await readFile2(1000);
  return file1 + " " + file2;
}
readFilesTimeout().then(value => {
  console.log(value);
}).catch(error => {
  console.log('error:' + error.message);
})
async function readFilesTimeout1() {
  const file1 = await readFile1(1000);
  const file2 = await readFile2(4000);
  return file1 + " " + file2;
}
readFilesTimeout1().then(value => {
  console.log(value);
}).catch(error => {
  console.log('error:' + error.message);
})