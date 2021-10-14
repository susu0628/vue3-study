const h = (tag, props, children) => {
  return {
    tag,
    props,
    children
  }
}


// 挂在VNode
const mount = (vNode, rootContainer) => {
  const { tag, props, children = [] } = vNode

  const el = vNode.el = document.createElement(tag);

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

// 更新node 
const patch = (n1, n2) => {
  console.log('n1n1nn1n', n1, n2)
  const el = n1.el = n2.el;
  const parentEle = el.parentElement;
  if (n1.tag !== n2.tag) {
    parentEle.innerHTML = '';
    mount(n1, parentEle)
  } else {
    // 比较props
    const newProps = n1.props;
    const oldProps = n2.props;
    for (let key in newProps) {
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLocaleLowerCase(), newProps[key])
      } else {
        el.setAttribute(key, newProps[key])
      }
    }

    for (let key in oldProps) {
      if (key.startsWith('on')) {
        el.removeEventListener(key.slice(2).toLocaleLowerCase(), oldProps[key])
      }
      if (!(key in newProps)) {
        el.removeAttribute(key)
      }
    }

    const newChildren = n1.children || [];
    const oldChildren = n2.children || [];
    // 比较children
    if (typeof newChildren === 'string') {
      el.textContent = newChildren
    } else {
      let minLength = Math.min(newChildren.length, oldChildren.length)
      if (minLength) {
        for (let i = 0; i < minLength; i++) {
          patch(newChildren[i], oldChildren[i])
        }
      }
      if (newChildren.length > oldChildren.length) {
        newChildren.slice(minLength).forEach((newEle) => {
          mount(newEle, el)
        })
      }
      if (oldChildren.length > newChildren.length) {
        oldChildren.slice(minLength).forEach((oldEle) => {
          el.removeChild(oldEle.el)
        })
      }
    }
  }
}
