const webpack = require("webpack");
const paths = require("./paths");

module.exports = {
  mode: "development",
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: paths.outputPath,
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: paths.outputPath,
    hot: true,
    port: 3000,
    open: true,
    compress: true,
    inline: true,
    publicPath: "/",
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "inline-source-map",
};
