const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, 'docs/'),
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  transpileDependencies: ['vuetify']
}
