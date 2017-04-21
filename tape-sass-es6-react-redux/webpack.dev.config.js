const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // Code splitting...
    app: './src/es6/main.js',
    vendor: ['react', 'react-redux', 'redux']
  },
  output: {
    // Save to build (public) folder
    path: path.join(__dirname, 'build/dev/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Transpile ES6 and include it in the bundle
        loader: 'babel-loader',
        test: path.join(__dirname, 'src/es6')
      },{
        // Transpile SASS and include it in the bundle
        test: /\.scss$/,
        loader: 'style!css!sass'
      },{
        // Validate linting in our work (use AirBnB style guide)
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    // Split vendor code from source code (just jquery for now)
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
