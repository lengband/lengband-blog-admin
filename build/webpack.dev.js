const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src")
    }
  },
  devServer: {
    historyApiFallback: true
  }
});
