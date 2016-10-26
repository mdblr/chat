var path = require('path')

module.exports = {
  entry: './lib/app/app.module.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtools: 'inline-source-map',
  module: {
    loaders: [{
      test: path.join(__dirname, 'lib/app'),
      loader: 'babel-loader'
    }]
  }
}
