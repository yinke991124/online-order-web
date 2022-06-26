const postcss = require('postcss')
module.exports = postcss.plugin('postcss-uni-px2rpx', (options = {}) => {
  return root => {
    root.walkDecls(decl => {
      if (decl.value.indexOf(' rpx') !== -1) {
        decl.value = decl.value.replace(' rpx', 'rpx')
      } else {
        decl.value = decl.value.replace(/(\d+)px/, (mat, p1) => +p1 * 2 + 'rpx')
        decl.value = decl.value.replace(/opx/g, 'px')
      }
    })
  }
})
