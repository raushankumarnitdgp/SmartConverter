module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
        }
    ],
  }
};
