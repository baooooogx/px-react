/**
 * @file px-coupon 开发环境构建配置
 *
 * @author baoguanxia
 */

const webpack = require('webpack');
const webpackConfig = require('./webpack.base.config.js');

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': true
  })
)

module.exports = Object.assign({}, webpackConfig, {
  devtool: '#source-map',

  devServer: {
      host: '0.0.0.0',
      port: 8889,
      hot: true,
      inline: true,
      proxy: {
        '/data/*': {
          target: 'http://127.0.0.1:3000/',
          secure: false,
          host: '127..0.0.1:3000',
          changeOrigin: true
        }
      }
  }
});

