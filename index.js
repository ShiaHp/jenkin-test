const fs = require("fs");

function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    if (error.code === "ENOENT") {
      return "File not found.";
    } else {
      return error.message;
    }
  }
}

module.exports = { readFile };
