import express from "express";
import path from "path";

const server = express();

const webpack = require("webpack");
const config = require("../../config/webpack.dev");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

const staticMiddleware = express.static("dist");

server.use(webpackDevMiddleware); // Khi save (vd main.css) sẽ tự compile lại nhưng browser chưa tự reload lại (đang chạy npm run dev)
server.use(staticMiddleware);

server.listen(8080, () => {
  console.log("Server is listening");
});
