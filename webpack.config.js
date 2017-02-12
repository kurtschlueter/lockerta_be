const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// For testing purposes the default flavor is MORAN
const config = require('./config/moran.js');

const themeFilePath = path.join(__dirname, `src/assets/resources/${config.resources}/_theme.scss`);
const iconPath = path.join(__dirname, `src/assets/resources/${config.resources}/favicon-32x32.png`);

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: [
        'mkdir -p static',
        `cp ${iconPath} ${path.join(__dirname, 'static')}`,
        `cp ${themeFilePath} ${path.join(__dirname, 'src/assets/css')}`,
        'echo _theme.scss copied!',
        'sass src/assets/css/style.scss src/assets/css/style.css',
        'echo style.scss compiled!'
      ],
      onBuildEnd: ['echo Webpack End'] }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        RESOURCES: JSON.stringify(config.resources),
        STAGE: JSON.stringify('dev')
      }
    }),
    new HtmlWebpackPlugin({
      title: config.title,
      filename: '../index.html',
      template: 'config/indexTemplate.ejs'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
      },
      {
        test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'src')
      }]
  }
};
