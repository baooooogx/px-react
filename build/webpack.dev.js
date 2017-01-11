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
      port: 8889,
      hot: true,
      inline: true
  }
});

