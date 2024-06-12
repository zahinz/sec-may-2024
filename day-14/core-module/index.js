// whatsapp link generator

const fs = require("fs");

const csvData = fs.readFileSync("./input/contacts.csv", "utf-8");
console.log(csvData);

// output = [{name: "name", tel: "number"}]
const csvToJson = (csvData) => {
  const lines = csvData.split("\n");
  const result = [];
  const headers = lines[0].split(",");
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
};
const contacts = csvToJson(csvData);
console.log(contacts);

// generate whatsapp link - wa.me/number?text=message
const generateWhatsappLink = (tel, message) => {
  const baseUrl = "https://wa.me";
  // const url = `${baseUrl}/${tel}?text=${message}`;
  const url = `${baseUrl}/${tel}?text=${encodeURIComponent(message)}`;
  return url;
};

// save to output file
let fileContent = "";
for (let i = 0; i < contacts.length; i++) {
  const contact = contacts[i];
  const link = generateWhatsappLink(
    contact.tel,
    `Hello ${contact.name}, how are you?`
  );
  fileContent += `${link}\n`;
}

fs.writeFile("./output/whatsapp-links.txt", fileContent, function (error) {
  if (error) {
    console.error("Error writing file");
  } else {
    console.log("File written successfully");
  }
});
