var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
	  publicPath: 'build'
    }]
  }
};
