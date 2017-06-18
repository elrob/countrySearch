module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  }
};
