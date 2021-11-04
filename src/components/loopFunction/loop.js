// 模拟后端接口返回
const queryProgress = () => {
  const data = parseInt(Math.random() * 100 + 1)
  console.log('queryProgress', data)
  return data
}

/**
 * 轮询 当返回的数字大于60不再调接口
 * time  轮询的时间
 * count 轮询的次数
 * fn  轮询的方法
 */
const loopFunction = (time = 1000, count = 5, fn) => {
  const data = fn();
  let timer = null;
  if (data > 90) {
    clearTimeout(timer);
    console.log('成功返回');
  } else {
    if (--count === 0) {
      console.log('超时了...');
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        loopFunction(time, count, fn);
      }, time);
    }
  }
}
loopFunction(1000, 5, queryProgress);