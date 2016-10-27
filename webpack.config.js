var path = require('path');
var html = require('html-webpack-plugin');
var script = process.env.npm_lifecycle_event;

module.exports = (function config() {
  let config = {};

  config.entry = './src/app/app.module.js';

  config.output = {};
  config.output.path = path.join(__dirname, 'dist');
  config.output.filename = 'bundle.[hash].js';

  config.devtools = script === 'build' ? 'source-map' : 'eval-source-map';

  config.module = {};
  config.module.loaders = [{
    test: path.join(__dirname, 'src/app'),
    loaders: ['ng-annotate', 'babel-loader']
  },
  {
    test: path.join(__dirname, 'src/app'),
    include: /\.html$/,
    loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html'
  }];

  config.resolve.modulesDirectories = ['node_modules'];

  config.plugins = [
    new html({
      template: 'src/index.html'
    })
  ];

  return config;
}());
