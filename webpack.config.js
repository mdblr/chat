var path = require('path');
var html = require('html-webpack-plugin');
var script = process.env.npm_lifecycle_event;

module.exports = (function config() {
  let config = {};

  config.entry = './src/app/app.module.js';

  config.output = {};
  config.output.path = path.join(__dirname, 'dist');
  config.output.filename = 'bundle.js';
  if (script === 'start')
    config.output.publicPath = 'http://localhost:8080/assets/';
  else
    config.output.publicPath = '/assets/';

  config.contentBase = 'http://www.localhost:9090/';

  config.devtools = script === 'build' ? 'source-map' : 'eval-source-map';

  config.module = {};
  config.module.loaders = [{
    test: /\.js$/,
    loaders: ['ng-annotate', 'babel-loader'],
    exclude: /node_modules/
  },
  {
    test: /\.html$/,
    loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html',
    exclude: /index\.html/
  }];

  config.plugins = [
    new html({
      template: 'src/index.html'
    })
  ];

  config.resolve = {
    modulesDirectories: ['node_modules']
  }

  return config;
}());
