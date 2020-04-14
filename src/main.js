require("./main.css");
require("./index.html"); // Sau đó compile ra 1 file riêng (cấu hình ở webpack.dev.js)

/**
 * Sau khi cài: "babel-polyfill" và cấu hình ở file webpack.dev.js (import nó trước source code của mình) thì:
 * IE11 cho dù không natively có tính năng 'promise' cũng đã chạy được code dùng 'promise'
 */
const myFunc = async () => {
  await console.log("Hi from the future!");
  console.log("Done!");
};
myFunc();
