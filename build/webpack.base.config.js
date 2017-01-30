/**
 * @file px-coupon 公共构建配置
 *
 * @author baoguanxia
 */

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const projectRoot = path.resolve(__dirname, '../');

const DEBUG = process.env.NODE_ENV === 'development';

const srcDir = path.join(projectRoot, 'src');
const pageWrapDir = path.resolve(srcDir, 'modules');

const config =  {
    context: srcDir,

    entry: {index: '../index'},

    output: {
        path: path.join(projectRoot, 'dist'),
        publicPath: DEBUG ? '/' : './',
        filename: 'js/[name].js'
    },

    resolve: {
        root: [srcDir],

        extensions: ['', '.js', '.jsx']
    },

    postcss: [autoprefixer],

    module: {
        loaders: [
            {
              test: /\.html$/,
              loader: 'html?minimize=false'
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!resolve-url?sourceMap')
            },
            {
              test: /\.less$/,
              exclude: /node_modules/,
              loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!resolve-url!less?sourceMap')
            },
            {
              test: /\.jsx|\.js$/,
              exclude: /node_modules/,
              loader: 'babel?presets[]=es2015&presets[]=react'
            }
        ]
    },

    plugins: [
      new ExtractTextPlugin(
          'css/[name].css',
          {
              allChunks: false
          }
      ),
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
      }),
      new HtmlWebpackPlugin({title: 'test', template: '../index.html'})
    ]
};


// add page entry
// const pages = fs.readdirSync(pageWrapDir);
// const tplPath = path.resolve(projectRoot, 'index.html');
// const pageChunks = [];

// pages.forEach(function (page, index) {
//   const curPageDir = path.resolve(pageWrapDir, page);
//   const stat = fs.statSync(curPageDir);

//   if (stat.isDirectory()) {
//     const indexPath = path.resolve(curPageDir, `${page}.jsx`);
//     const indexStat = fs.statSync(indexPath);

//     // add entry
//     if (indexStat.isFile()) {
//       config.entry[page] = path.relative(config.context, indexPath);
//     }

//     pageChunks.push(page);

//     // add page
//     config.plugins.push(
//       new HtmlWebpackPlugin({
//         template: tplPath,
//         filename: page + `/${page}.html`,
//         inject: true,
//         page: page,
//         chunks: [page]
//       })
//     );
//   }

//   else if (stat.isFile()) {
//     const filename = path.basename(page, '.jsx');
//     const mainPath = path.resolve(pageWrapDir, `${filename}.jsx`);

//     config.entry[filename] = path.relative(config.context, mainPath);

//     // add filename
//     config.plugins.push(
//       new HtmlWebpackPlugin({
//         template: tplPath,
//         filename: `${filename}.html`,
//         inject: true,
//         page: filename,
//         chunks: [filename]
//       })
//     );
//   }
// });

module.exports = config;
