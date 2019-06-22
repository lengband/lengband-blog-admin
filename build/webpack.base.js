const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "../src/index.jsx")],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[hash:6].js"
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src")
    },
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss|.css$/,
        use: [
          {
            loader:
              process.env.NODE_ENV !== "production"
                ? "style-loader"
                : MiniCssExtractPlugin.loader
          },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url-loader"
      },
      {
        test: /\.(woff|woff2|wav|mp3|eot|ttf)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
