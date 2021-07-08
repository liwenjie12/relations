let path = require('path')
let NyanProgress = require('nyan-progress-webpack-plugin')

module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@@': path.resolve(__dirname, 'src')
      }
    },

    plugins: [
      new NyanProgress()
    ]
  }
}