const fs=require("fs");
fs.mkdirSync("dipti");
fs.writeFileSync("dipti/bio.txt","my name is dipti priya ");
fs.appendFileSync("dipti/bio.txt","Please subscribe to my channel");
const data=fs.readFileSync("dipti/bio.txt","utf8");

console.log(data);
fs.renameSync("dipti/bio.txt","dipti/mybio.txt");

fs.unlinkSync("dipti/mybio.txt");
fs.rmdirSync("dipti");

