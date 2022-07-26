const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: "[name].[hash].bundle.min.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".svg"],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src"),
        use: "ts-loader",
      },
      {
        test: /\.less|.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /(\.jsx|\.js)$/,
        use: "babel-loader",
        include: path.join(__dirname, "src"),
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
    new Dotenv({
      path: `./.env.development`,
      systemvars: true,
    }),
  ],
};
