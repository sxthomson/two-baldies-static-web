/**
 * Assets Config file
 */

process.noDeprecation = true;

const localServer = {
  path: 'localhost/',
  port: 3000,
  proxyPort: 3100
};

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('webpack-uglifyes-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');

const ASSET_PATH = '/';

const config = {
  entry: {
    app: ['./src/js/app.js', './src/scss/app.scss']
  },
  output: {
    filename: 'js/[name].js',
    path: DIST_PATH
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        include: path.resolve(__dirname, 'src/images'),
        use: [{
          loader: 'url-loader',
          options: {
            name: 'images/[name].[hash:6].[ext]',
            limit: 8192, // Convert images < 8kb to base64 strings
            publicPath: ASSET_PATH,
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, 'src/fonts'),
        use: [{
          loader: 'url-loader',
          options: {
            name: 'fonts/[name].[hash:6].[ext]',
            limit: 8192,
            publicPath: ASSET_PATH,
          }
        }]
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: localServer.proxyPort
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('css/[name].css'),
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development
        host: localServer.path,
        port: localServer.port,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:3100/',
        files: [],
        ghostMode: {
          clicks: false,
          location: false,
          forms: false,
          scroll: false
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'webpack',
        notify: true,
        reloadDelay: 0
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }

    ),
    new HtmlWebpackPlugin({ // Also generate a test.html and inject in our assets
      filename: 'index.html',
      template: 'src/index.html',
      hash: true, //Add hash to links for browser cache invalidation on update
      chunksSortMode: 'manual', // Use order of array below
      chunks: ['app']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery',
      Popper: ['popper.js', 'default'],
      '_': 'lodash'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJSPlugin(),
    new OptimizeCssAssetsPlugin()
  );
}

module.exports = config;