const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin,
} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const nodeExternals = require("webpack-node-externals");
const config = {
  entry: [
    "react-hot-loader/patch",
    "./client/src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./dist",
  },
  target: "web",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
      REACT_APP_LOCALAPI_URL: "http://localhost:5002/api",
      PUBLIC_URL: "/",
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
    new HtmlWebpackPlugin({
      title: "",
      filename: "index.html",
      template: path.resolve(
        __dirname,
        "public/index.html"
      ),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!(server.js)"],
    }),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
const ssrConfig = {
  externals: [nodeExternals()],
  entry: {
    server: "./server/src/bin/api.js",
  },
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        loader: "ignore-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: "./dist",
  },
  target: "node",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      DEBUG: false,
      REACT_APP_LOCALAPI_URL: "http://localhost:5002/api",
      PUBLIC_URL: "/",
    }),

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./server.js"],
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = "[name].[hash].js";
  }

  return [ssrConfig, config];
};
