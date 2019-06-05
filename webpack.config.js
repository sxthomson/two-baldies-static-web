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
const NameAllModulesPlugin = require('name-all-modules-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');
const ASSET_PATH = '/';

const config = {
  entry: {
    app: [
      './src/js/app.js',
      './src/scss/app.scss',
      'font-awesome-loader!./font-awesome.config.js'
    ],
    vendor: ['jquery', 'bootstrap', 'lodash']
  },
  output: {
    filename: 'js/[name].[chunkhash:6].js',
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
        // Fonts in the fonts folder only!
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
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
      {
        // For font-awesome / scss embedded fonts
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: [
          path.resolve(__dirname, 'src/scss'),
          path.resolve(__dirname, 'node_modules/font-awesome'),
        ],
        use: [{
           loader: 'file-loader',
           options: {
             name: 'fonts/[name].[hash].[ext]',
             publicPath: ASSET_PATH
           }
         }]
      },
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      },
      {
        test: /\.(html)$/,
        use: ['html-loader-srcset']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: localServer.proxyPort
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin((chunk) => {
        if (chunk.name) {
            return chunk.name;
        }
        return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime',
        minChunks: Infinity
    }),
    new NameAllModulesPlugin(),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('css/[name].[chunkhash:6].css'),
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
    new HtmlWebpackPlugin({ // Also generate an index.html and inject in our assets
      filename: 'index.html',
      template: 'src/index.html',
      chunksSortMode: 'manual', // Use order of array below
      chunks: ['runtime', 'vendor', 'app']
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