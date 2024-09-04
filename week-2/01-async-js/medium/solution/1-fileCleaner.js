const fs = require("fs");

function removeExtraSpace(text) {
  return text.replace(/\s+/g, " ").trim();
}

fs.readFile("../solution/utils/a.txt", "utf8", function (err, data) {
  if (err) {
    console.error("Error in Reading File", err);
    return;
  }

  const cleanedData = removeExtraSpace(data);

  fs.writeFile("../solution/utils/a.txt", cleanedData, "utf8", function (err) {
    if (err) {
      console.error("Error in Writing File", err);
      return;
    }

    console.log("File has been cleaned and written back!");
  })
})
