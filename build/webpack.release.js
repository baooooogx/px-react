/**
 * @file px-coupon 发布环境构建配置
 *
 * @author baoguanxia
 */

const webpack = require('webpack');
const webpackConfig = require('./webpack.base.config.js');

webpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
          warnings: false
      }
  }),
  new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      '__DEV__': false
  })
);

module.exports = Object.assign({}, webpackConfig);









