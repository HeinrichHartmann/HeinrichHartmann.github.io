module.exports = {
  publicPath: '',
  outputDir: '../public/sampling',
  productionSourceMap: false,
  parallel: false,
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      minimize: false,
    },
  }
}
