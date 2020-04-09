const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: './src/App.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ['css-loader']
        }
      ]
    },
    watch: argv.mode === 'development'
  };
}