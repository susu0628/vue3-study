// 响应式 -> 依赖收集 -> 依赖改变 -> 触发方法

class Dep {
  constructor() {
    this.subScriber = new Set() // 收集订阅
  }
  depend() { // 添加订阅
    if (activeEffect) {
      this.subScriber.add(activeEffect)
    }
  }
  notify() { // 发布
    this.subScriber.forEach((effect) => {
      effect()
    })
  }
}



// 通过watchEffect添加的effect都可以通过watchEffect添加的依赖
// 无需再手动触发addEffect
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  // dep.depend();
  effect();
  activeEffect = null;
}

const targetMap = new WeakMap();
function getDep (target, key) {
  let depMap = targetMap.get(target);
  if (!depMap) {
    depMap = new Map();
    targetMap.set(target, depMap);
  }
  let dep = depMap.get(key)
  if (!dep) {
    dep = new Dep();
    depMap.set(key, dep);
  }
  return dep;
}

// 对传入的对象做数据劫持
// vue3 Proxy
function reactive(row) {
  return new Proxy(row, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend();
      return target[key]
    },
    set(target, key, newValue) {
      const dep = getDep(target, key)
      target[key] = newValue
      dep.notify()
    },
  })
}

const info = reactive({ count: 100, name: 'jiang' });
const foo = reactive({ age: 18 });

watchEffect(function () {
  console.log('effect1', info.count * 2, info.name)
})

watchEffect(function () {
  console.log('effect2', info.count * info.count)
})

watchEffect(function () {
  console.log('effect3', info.count * 10, info.name)
})

watchEffect(function() {
  console.log('effect4', foo.age)
})

info.count++
// info.name = '++'
// foo.age++