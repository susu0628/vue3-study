import { customRef } from 'vue'
// 定义一个防抖的ref
export const useDebounceRef = (value, delay = 2000) => {
  let timer = null
  /**
   * 本质对value做个代理，自己来决定value收集依赖的when&依赖更新的when
   * 1. track  跟踪/追踪  决定什么时候收集依赖
   * 2. trigger  触发  决定什么时候触发依赖的更新
   */
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 收集依赖
        return value
      },
      set(newval){
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newval
          trigger() // 触发更新
        }, delay);
      }
    }
  })
}