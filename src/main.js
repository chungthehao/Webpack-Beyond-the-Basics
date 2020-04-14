require("./main.css");
require("./index.html"); // Sau đó compile ra 1 file riêng (cấu hình ở webpack.dev.js)

/**
 * Sau khi cài: "babel-plugin-async-to-promises" thì:
 * Đã convert code từ async-await qua promise (1 số browser ko hiểu async-await, mà hiểu promise thì vẫn chạy ngon)
 * Nhưng IE11 cũng ko hiểu promise nên sẽ có lỗi: 'Promise' is undefined (Sẽ dùng polyfill giải quyết)
 */
const myFunc = async () => {
  await console.log("Hi from the future!");
  console.log("Done!");
};
myFunc();
