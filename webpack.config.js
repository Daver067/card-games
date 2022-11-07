const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'

  },
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './dist.main.js',
  },
  optimization: {
    runtimeChunk: 'single',
  },
};