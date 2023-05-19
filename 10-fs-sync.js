const { readFileSync, writeFileSync, appendFileSync } = require("fs");
//or
// const fs= require('fs');
// fs.readFileSync

const fFilePath = "content/first.txt";
const sFilePath = "content/second.txt";

const first = readFileSync(fFilePath, "utf8");
const second = readFileSync(sFilePath, "utf8");

console.log(first,second);

console.log("start");
writeFileSync("./content/result-sync.txt", `${first} , ${second}`, {
  flag: "a",
});
 
// When the file is opened in append mode ("a"), 
// it means that if the file already exists,
//  new data will be added to the end of the file rather than overwriting the existing content. 
// If the file doesn't exist, a new file will be created.

const dataToAppend = "This is the data to append.";
// another way to do it
// try {
//     appendFileSync('./content/result-sync.txt', dataToAppend);
//     console.log('Data appended to file!');
//   } catch (err) {
//     console.error(err);
//   }
