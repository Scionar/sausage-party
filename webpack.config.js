const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist', 'static')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sausage party',
      template: path.resolve(__dirname, 'views', 'default.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html')
    })
  ]
};

if (process.env.WEBPACK_SERVE) {
  webpackConfig.serve = {
    content: 'dist'
  };
}

module.exports = webpackConfig;
