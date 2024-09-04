const fs = require("fs");

let sum = 0;
for (let i = 0; i < 10000000; i++) {
  sum = sum + 1;
}
console.log(sum);

fs.readFile("../solution/utils/a.txt", "utf8", function (err, data) {
  if (err) {
    console.error("Error in Reading File!");
    return;
  }
  console.log("file content: " + data);
})
