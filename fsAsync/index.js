

const fs=require("fs");
fs.writeFile("read.txt","Today is awesome day",(err)=>{

console.log("files is created");
console.log("err");



});


fs.appendFile("read.txt"," plz like share and subscribe my channel",(err)=>{


    console.log("task is completed");


});

fs.readFile("read.txt","utf8",(err,data)=>{


    console.log(data);
});
