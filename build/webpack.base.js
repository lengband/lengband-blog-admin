const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    // 'react-hot-loader/patch',
    path.join(__dirname, "../src/index.jsx")
  ],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[hash:6].js"
  },
  resolve: {
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
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 50000,
          name: path.join(__dirname, "static/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(wav|mp3|eot|ttf)$/,
        loader: "file-loader",
        options: {
          name: path.join(__dirname, "static/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html")
    })
  ]
};
