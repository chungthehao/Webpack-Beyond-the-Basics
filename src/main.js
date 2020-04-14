require("core-js");
// require("regenerator-runtime/runtime"); // 859 KiB
// require("@babel/runtime/regenerator"); // 835 KiB
require("webpack-hot-middleware/client"); // Setup the web socket connection

require("./main.css");
require("./index.html"); // Sau đó compile ra 1 file riêng (cấu hình ở webpack.dev.js)

/**
 * - Mặc dù dùng babel plugin từng cái 1 cũng ok, mà có cách khác đưa trước 1 đống plugin sẵn rồi dùng thôi (preset)
 * - Sau khi cài:
 *      @babel/preset-env
 *      @babel/runtime
 *      @babel/plugin-transform-runtime
 *      core-js@3
 * + cấu hình lại .babelrc
 * + require thêm ở file này
 * thì cứ code thoải mái theo kiểu modern
 */
const myFunc = async (args) => {
  //   const { a, b } = args;

  await console.log("Hi from the future!" /*, a, b*/);
  console.log("Done!");
};
myFunc({ a: 111, b: 222 });
