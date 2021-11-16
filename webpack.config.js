const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'threeSepinaco.min.js',
    library: {
      name: 'threeSepinaco',
      type: 'var'
    }
  },
  devServer: {
    static: './dist',
  },
};