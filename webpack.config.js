// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const autoprefixer = require('autoprefixer');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['antd', {
    style: 'css',  // if true, use less
  }]);

  // Enable this if you have to support IE8.
  // webpackConfig.module.loaders.unshift({
  //   test: /\.jsx?$/,
  //   loader: 'es3ify-loader',
  // });

  
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.test = /\.dont\.exist\.file/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.test = /\.less$/;
    }
  });/*
  webpackConfig.module.loaders.push(
    {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            plugins: ['transform-runtime', 'transform-decorators-legacy', 'antd'],
            presets: ['react', 'es2015', 'stage-0']
        }
    }, {
        test: /\.less$/,
        loader: 'style!css?importLoaders=1!autoprefixer!less'
    }, {
        test: /\.(jpg|png|svg|woff|woff2)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=8192" //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
    }, {
        test: /\.(ttf|eot)$/,
        loader: 'file'
    }
  );*/


// Parse all less files as css module.
  /*webpackConfig.module.loaders.push({
  test: /\.(jpg|png|svg|woff|woff2)$/,
  exclude: /node_modules/,
  loader: "url-loader?limit=8192"
  });*/
  // Load src/entries/*.js as entry automatically.
  const files = glob.sync('./src/entries/*.js');
  const newEntries = files.reduce(function(memo, file) {
    const name = path.basename(file, '.js');
    memo[name] = file;
    return memo;
  }, {});
  webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);

  return webpackConfig;
};
