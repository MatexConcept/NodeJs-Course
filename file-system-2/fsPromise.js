// const fsPromise = require('fs').promises

const fsPromises = require("fs/promises");
const path = require("path");

const fsOperations = async () => {
  try {
    // Read file
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      { encoding: "utf-8" }
    );
    console.log(data);

    // Wrtting File In fs Promise

    const newData = await fsPromises.writeFile(
      path.join(__dirname, "new-file", "write.txt"),
      data
    );
    console.log(newData);

    // Update File
    const newUpdate = await fsPromises.appendFile(
      path.join(__dirname, "files", "write.txt"),
      "n\nHello, i have been updated"
    );

    console.log(newUpdate);

    // Rename File
    const newName = await fsPromises.rename(
        path.join(__dirname, "new-file", "write.txt"),
        path.join(__dirname, "files", "new-write.txt"),
       
      );
      console.log(newName);

      // Delete File
      const del = await fsPromises.unlink(
        path.join(__dirname, "files", "starter.txt"),
       
      );
      console.log(del);
  } catch (error) {
    console.log(error);
  }
};

fsOperations();
