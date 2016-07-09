var path = require('path')

var rootpath = path.join(__dirname, 'app');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: [rootpath]
  }
}