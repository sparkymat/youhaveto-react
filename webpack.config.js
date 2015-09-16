// webpack.config.js
module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: './public/js/',
    filename: 'application.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
