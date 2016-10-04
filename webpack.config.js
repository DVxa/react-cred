var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: 'build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      presets: ['es2015', 'react'],
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }]
  }
};
