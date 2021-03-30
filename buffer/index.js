


const fs=require("fs");

fs.writeFileSync("read.txt","hello world");

const buf_data=fs.readFileSync("read.txt");

console.log(buf_data);

org_data=buf_data.toString();
console.log(org_data);