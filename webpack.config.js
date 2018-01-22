const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let plugins = [];

plugins.push(
  new ExtractTextPlugin('style.css')
);

  module.exports = [{
    entry: './global/js/main.js',
    output: {
      filename: 'resume.js',
      path: path.resolve(__dirname, 'page')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        }
      ]
    },
    devServer: {
      port: 3000, // most common port
      contentBase: './page',
      inline: true
    },
    plugins: plugins,
    resolve: {
      extensions: ['.js']
    }
  }, {
    entry: './global/scss/main.scss',
    output: {
      filename: 'style.css',
      path: path.resolve(__dirname, 'page')
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: plugins,
    resolve: {
      extensions: ['.js', '.scss', '.css']
    }
  }];