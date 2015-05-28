var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, '../src/client/scripts/main.js'),
  output: {
    path: path.resolve(__dirname, '../src/client/scripts'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        loaders: ['react-hot', 'jsx', 'babel'],
        exclude: /node_modules/
      }
    ]
  }
};