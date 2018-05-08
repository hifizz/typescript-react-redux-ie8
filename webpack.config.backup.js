/**
 * @author stack fizz <huangchaolin@xylink.com>
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractSCSS = new ExtractTextPlugin('[name].scss');

// 获取node环境变量
let env = process.env.NODE_ENV || "production";

// todo: 使用react外部cdn
const config = {
  devtool: "source-map",

  // devServer: {
  //   colors: true,
  //   modules: false,
  //   children: false,
  //   chunks: false,
  //   chunkModules: false
  // },

  entry: {
    index: [path.resolve(__dirname, "./src/todomvc/index.tsx")],
    vendors: [
      "es5-shim",
      "es5-shim/es5-sham",
      'console-polyfill',
      'babel-polyfill',
      "es6-promise",
      "fetch-ie8",
      "qs"
    ]
    // , webpack: "webpack/hot/dev-server"
  },

  output: {
    path: path.resolve(__dirname, "build", env),
    filename: "js/[name].[chunkhash:8].js"
    //publicPath: conf.staticResource
  },

  resolve: {
    enforceExtension: false,
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: "tslint-loader",
          options: {
            fix: true
          }
        }]
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['ts-loader']
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        enforce: 'post',
        use: ["es3ify-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["url-loader?limit=8096&name=img/[name].[hash:8].[ext]&publicPath=./"]
      },
      {
        test: /\.(css|scss)$/,
        // include: [path.resolve(__dirname, 'src')],
        // 这里的loaders 如果是 env === development 应该取loaders
        // ExtractTextPlugin 需要为loader
        // issue here:
        // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/30
        use: [
          {loader: "style-loader"},
          {
            loader: "typings-for-css-modules-loader", options: {
            namedExport: true,
            modules: true,
            localIdentName: "[local]-[hash:base64:5]",
            importLoaders: 2
          }
          },
          {loader: "postcss-loader"},
          {loader: "sass-loader"}
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendors", "manifest"],
      minChunks: Infinity,
      filename: "js/[name].[hash:8].js"
    }),

    // new ExtractTextPlugin("main.[hash:8].css"),

    extractSCSS,

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["index", "vendors", "manifest"],
      filename: "index.html"
    })
  ]
};

// 开发环境和本地环境
if (env === "development") {
  config.devtool = "source-map";

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  );
}

// 生产环境和预发布环境
if (env === "production") {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: false
      },
      mangle: {
        screw_ie8: false
      },
      output: {
        screw_ie8: false //
      }
    })
  );

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  );
}

module.exports = config;
