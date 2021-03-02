module.exports = {
  // devServer: {
  //   host:"172.16.3.162",
  //   port:8080,
  //   disableHostCheck: true
  // },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'img': '@/assets/img'
      }
    }
  }
}