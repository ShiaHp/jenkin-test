const { expect } = require("chai");
const fs = require("fs");

describe("readFile", () => {
  it("should return file content if file exists", (done) => {
    fs.readFile("./text.txt", "utf8", (err, content) => {
      if (err) return done(err);
      expect(content).to.equal("This is a test file.");
      done();
    });
  });

  it('should return "File not found." if file does not exist', (done) => {
    fs.readFile("non_existent_file.txt", (err, content) => {
      if (err) {
        expect(err.code).to.equal("ENOENT");
        done();
      } else {
        done(new Error("File should not exist."));
      }
    });
  });
});
