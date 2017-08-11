module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './build/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env'] },
        }],
      },
      // Loaders for other file types can go here
    ],
  },
};
