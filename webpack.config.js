const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
module.exports = {

  entry: [
    './src/index.js'
  ],
  mode:'production',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
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
        test: /\.(sa|sc|c)ss$/,
          use: [
              {
                  loader:MiniCssExtractPlugin.loader
              }
              , 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap','postcss-loader']
              
      },
      {
        test: /\.(gif|png|jpe?g|svg|svg|woff|woff2|ttf|eot)$/i,
        use: [
            {
              loader: 'url-loader',
              options: {
                outputPath: 'assets/images',
                limit:154000,
                name: '[name].[ext]?[hash]'
              }
            }
            ,'image-webpack-loader']
    }
    ]
  }


};