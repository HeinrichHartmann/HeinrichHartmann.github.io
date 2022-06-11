module.exports = {
  publicPath: '',
  outputDir: '../public/sampling',
  productionSourceMap: false,
  parallel: false,
  css: {
    extract: false,
  },
  configureWebpack: {
    mode: 'production',
    optimization: {
      minimize: true,
      usedExports: true,
    },
  }
}
