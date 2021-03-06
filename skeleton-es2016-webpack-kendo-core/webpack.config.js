/*eslint-disable no-var*/

var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 4000
  },
  entry: {
    main: [
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./vendors/telerik.kendoui.2016.1.226.core/js')
    ]
  },
  plugins: [
    new AureliaWebpackPlugin({
      includeSubModules: [
        { moduleId: 'aurelia-kendoui-bridge', include: /(autocomplete|button)/ }
      ]
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {stage: 0} },
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
    ]
  }
};
