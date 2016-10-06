var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, '');

var config = {
  entry: path.resolve(APP_DIR, 'index.jsx'),

  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
