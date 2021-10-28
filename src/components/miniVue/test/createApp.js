const createApp = (rootComponent) => {
  return {
    mount(select) {
      let isMounted = false;
      let oldNode = null;
      watchEffect(() => {
        if (!isMounted) {
          oldNode  = rootComponent.render()
          mount(oldNode, document.querySelector(select))
          isMounted = true
        } else {
          let newNode = rootComponent.render()
          patch(newNode, oldNode)
          oldNode = newNode
        }
      })
      
    }
  }
}