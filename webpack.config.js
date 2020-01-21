const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
  }
  
};