const fs = require("fs");

const names = ["John", "Jane", "Doe", "Smith"];
const rayaGreetings =
  "Selamat Hari Raya Aidilfitri! Maaf Zahir dan Batin kepada [[NAME]]";

const content =
  "Hello world, this is a note produced by the core-module fs in node.js";

fs.writeFile("./output/text-node.txt", content, function (error) {
  if (error) {
    console.error("Error writing file");
  } else {
    console.log("File written successfully");
  }
});

fs.readFile("./input/notes.txt", "utf-8", function (error, data) {
  if (error) {
    console.error("Error reading file");
  } else {
    console.log(data);
  }
});

// raya greetings generator
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const greeting = rayaGreetings.replace("[[NAME]]", name);
  console.log(greeting);

  // write to file
  fs.writeFile(
    `./output/${name.toLowerCase()}-raya-greetings.txt`,
    greeting,
    function (error) {
      if (error) {
        console.error("Error writing file");
      } else {
        console.log(`Raya greeting for ${name} written successfully`);
      }
    }
  );
}
