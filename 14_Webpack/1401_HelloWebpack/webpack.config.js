const path = require('path');

module.exports = {
  entry: './14_Webpack/1401_HelloWebpack/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
