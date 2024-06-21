const { expect } = require("chai");
const { readFile } = require("./fileOperations");

describe("readFile", () => {
  it("should return file content if file exists", () => {
    const content = readFile("text.txt");
    expect(content).to.equal("This is a test file.");
  });

  it('should return "File not found." if file does not exist', () => {
    const content = readFile("non_existent_file.txt");
    expect(content).to.equal("File not found.");
  });
});
