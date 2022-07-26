const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

const pac = require("./package.json");

function modify(buffer) {
  const manifest = JSON.parse(buffer.toString());
  manifest.version = pac.version;
  return JSON.stringify(manifest, null, 2);
}

module.exports = {
  mode: "production",
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
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
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public/manifest.json",
          to: "./manifest.json",
          transform(content) {
            return modify(content);
          },
        },
        {
          from: "./public/logo192.png",
          to: "./logo192.png",
        },
      ],
    }),
    new Dotenv({ path: `./.env`, systemvars: true }),
  ],
};
