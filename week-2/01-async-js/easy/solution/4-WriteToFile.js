const fs = require("fs");

let sum = 0;
for (let i = 0; i < 10000000; i++) {
  sum = sum + 1;
}
console.log(sum);

fs.writeFile("../solution/utils/a.txt", "This is writing to a file using fs module", "utf8", function (err) {
  if (err) {
    console.error("Error in Writing the File", err);
  }
  console.log("file has been written");
})
