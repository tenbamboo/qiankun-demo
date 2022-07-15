// params
const { name } = require('./package.json');

module.exports = {
  publicPath: '/subApp/project3/',
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 5000, // 端口号
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
