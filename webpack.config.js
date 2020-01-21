const path = require('path');
const webpack = require('webpack');
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
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {loader: 'babel-loader'},
        exclude: /node_modules/
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
                  outputPath: 'images',
                  limit:154000,
                  name: '[name].[ext]?[hash]'
                }
              }
              ,'image-webpack-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      template: path.resolve(__dirname, '/', 'index.html'),
      filename: 'index.html',
        inject: true
      }),
    
      new ImageminPlugin(),
      new CleanWebpackPlugin()
  ]
};