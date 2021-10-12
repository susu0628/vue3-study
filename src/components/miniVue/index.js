const createApp = (rootComponent) => {
  return {
    mount: (selector) =>{
      let isMounted = false;
      let oldNode = null;
      watchEffect(() => {
        if (!isMounted) {
          oldNode = rootComponent.render();
          mount(oldNode, document.querySelector(selector))
          isMounted = true
        } else {
          let newNode = rootComponent.render()
          patch(oldNode, newNode);
          oldNode = newNode
        }
      })
    }
  }
}