let webpackConfig = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const scssLoaders = {
  test: /\.(css|scss)$/,
  loader: ExtractTextPlugin.extract(
    "style",
    "typings-for-css-modules-loader?namedExport=true&modules&localIdentName=[path][name]---[local]---[hash:base64:5]&importLoaders=2!postcss!sass"
  )
};

webpackConfig.module.loaders.push(scssLoaders);
webpackConfig.plugins.push(new ExtractTextPlugin('main.[hash:8].css'));
