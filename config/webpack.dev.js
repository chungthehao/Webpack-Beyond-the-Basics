const path = require("path");

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html",
            },
          },
          {
            loader: "extract-loader", // Tách ra 1 file html riêng, ko để trong main-bundle.js
          },
          {
            loader: "html-loader", // linting
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
