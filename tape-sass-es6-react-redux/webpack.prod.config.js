const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/es6/main.js'
  },
  output: {
    // Save to build (public) folder
    path: path.join(__dirname, 'build/prod/js'),
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        // Transpile ES6 and include it in the bundle
        loader: 'babel-loader',
        test: path.join(__dirname, 'src/es6')
      },{
        // Trasnpile SASS and include it in the bundle
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    // Extract CSS to separate file
    new ExtractTextPlugin("../css/styles.min.css"),
    // Minify the results
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
