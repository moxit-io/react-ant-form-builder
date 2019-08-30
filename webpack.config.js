const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'example/src/index.html'),
  filename: './index.html',
});
module.exports = {
  entry: {
    index: path.join(__dirname, 'example/src/index.js'),
    renderer: path.join(__dirname, 'src/FormRenderer/index.js'),
    builder: path.join(__dirname, 'src/FormBuilder/index.js'),
    card: path.join(__dirname, 'src/FormBuilder/SortableCard.js'),
  },
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 4000,
  },
};
