class Dep {
  constructor() {
    this.subscribe = new Set()
  }
  addSub() { // 自动收集依赖
    if (activeEffect) {
      this.subscribe.add(activeEffect)
    }
  }
  publish() { // 发布
    this.subscribe.forEach((effect) => {
      effect()
    })
  }
}
/**
 * 格式如下
 * 
 */
let targetMap = new WeakMap();
const getDep = (target, key) => {
  let depMap = targetMap.get(key)
  if (!depMap) {
    depMap = new Map();
    targetMap.set(target, depMap)
  }

  let dep = depMap.get(key)
  if (!dep) {
    dep = new Dep()
    depMap.set(key, dep)
  }
  return dep
}
const reactive = (obj) => {
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    let dep = getDep(obj, key);
    Object.defineProperty(obj, key, {
      get() {
        dep.addSub()
        return value
      },
      set(newVal) {
        value = newVal
        dep.publish()
      }
    })
  });
  return obj
}

let activeEffect = null;
const watchEffect = (effect) => {
  activeEffect = effect
  effect()
  activeEffect = null
}

// 自动收集依赖，自动发布
// 测试代码
// const info = reactive({
//   count: 100,
//   name: 'susu'
// })

// watchEffect(function () {
//   console.log('effect1', info.count * 2, info.name)
// })

// watchEffect(function () {
//   console.log('effect2', info.count * info.count)
// })

// setTimeout(() => {
//   // info.count++
//   info.name = 'tlp'
// }, 1000);
