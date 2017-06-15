const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
    // below line only works for webpack 1.0
    // path: './dist',
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
     test: /\.jsx?$/,
     exclude: /(node_modules|bower_components)/,
     loader: 'babel-loader',
     options: {
       presets: ['react', 'es2015']
     }
   },
     {
       test: /\.scss$/,
       use: [
         'style-loader',
         'css-loader',
         'sass-loader'
       ]
     }]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new LiveReloadPlugin({appendScriptTag: true})
  ]
}
