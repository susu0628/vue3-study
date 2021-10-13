const h = (tag, props, children) => {
  return {
    tag,
    props,
    children
  }
}


// 挂在VNode
const mount = (vNode, rootContainer) => {
  console.log('vNode', vNode);
  const { tag, props, children = [] } = vNode

  const el = document.createElement(tag);

  // 处理props
  for (let key in props) {
    if (key.startsWith('on')) {
      el.addEventListener(key.slice(2).toLocaleLowerCase(), props[key])
    } else {
      el.setAttribute(key, props[key])
    }
  }

  // 处理children
  if (typeof children === 'string') {
    el.textContent = children
  } else {
    children.forEach((node) => {
      mount(node, el)
    })
  }
  

  rootContainer.appendChild(el)
}
