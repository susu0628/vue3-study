// 渲染器实现
// h 函数，生成vnode
const h = (tag, props, children) => {
  return {
    tag,
    props, 
    children
  }
}


// 挂在vnode
const mount = (vnode, container) => {
  const { tag, props, children = [] } = vnode;
  const tagEle = vnode.el = document.createElement(tag);
  for (let key in props) {
    console.log('key', key)
    if (key.startsWith('on')) {
      tagEle.addEventListener(key.slice(2).toLocaleLowerCase(), props[key])
    } else {
      tagEle.setAttribute(key, props[key])
    }
  }
  if (children) {
    if (typeof children === 'string') {
      tagEle.textContent = children
    } else {
      children.forEach(element => {
        mount(element, tagEle)
      });
    }
  }
  container.appendChild(tagEle)
}

// 对比两个vnode
const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    const parent = n1.el.parentElement;
    parent.removeChild(n1.el)
    mount(n2, parent);
  } else {
    // 处理props
    const oldProps = n1.props;
    const newProps = n2.props;
    const el = n2.el = n1.el;
    for (let key in newProps) {
      if (newProps[key] !== oldProps[key]) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLocaleLowerCase(), newProps[key])
        } else {
          el.setAttribute(key, newProps[key])
        }
      }
    }
    for (let key in oldProps) {
      if (key.startsWith('on')) {
        el.removeEventListener(key.slice(2).toLocaleLowerCase(), newProps[key])
      }
      if (!newProps.hasOwnProperty(key)) {
        el.removeAttribute(key)
      }
    }

    // 处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || []
    // 1、newChildren本身是一个string
    if (typeof newChildren === 'string') {
      el.textContent = newChildren
    } else {
      // 2、oldChildren是一个字符串 newChildren是一个数组
      if (typeof oldChildren === 'string') {
        el.textContent = '';
        children.forEach((node) => {
          mount(node, el)
        })
      } else {
        const minLength = Math.min(oldChildren.length, newChildren.length)
        for (let i = 0; i < minLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }

        // 卸载
        if (oldChildren.length > newChildren.length) {
          for (let i = minLength; i < oldChildren.length; i++) {
            el.removeChild(oldChildren[i].el)
          }
        }

        // 挂载
        if (oldChildren.length < newChildren.length) {
          for (let i = minLength; i < newChildren.length; i++) {
            mount(children[i], el)
          }
        }
      }
    }
  }
}