// params
module.exports = {
  publicPath: '/',
  devServer: {
    port: 6060, // 端口号
    host: 'localhost',
    proxy: {
      '/banana/': {
        target: 'http://9.110.213.115:8080/',
        // filter(pathname) {
        //   return pathname.indexOf('/banana/') !== -1;
        // },
      },
    },
  },
};
