const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    // contentBase: '/static',
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
