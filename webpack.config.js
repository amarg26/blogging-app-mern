//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   // query: {
   //  presets: ['es2015', 'react']
   // },
      options: {
        presets: [
            'es2015', 'react', 'stage-2',
            //['env', {modules: false}] // this line causes error when stage-2 enabled
        ]
    }
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }]
 }
};