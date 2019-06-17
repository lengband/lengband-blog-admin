const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.base.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        vendor: {
          // 打包重复出现的代码
          name: "vendor",
          test: /node_modules\//,
          // test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|redux|react-redux)[\\/]/,
          filename: "[name].bundle.js", // [name].[hash].js
          chunks: "all", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          minSize: 0, // 最小尺寸，默认0
          minChunks: 1, // 最小 chunk ，默认1
          maxInitialRequests: 5, // 最大初始化请求书，默认1
          maxAsyncRequests: 1 // 最大异步请求数， 默认1
          // reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
        },
        commons: {
          // 打包第三方类库
          name: "commons",
          // test: /common\/|components\//,
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  plugins: [new CleanWebpackPlugin()]
});
