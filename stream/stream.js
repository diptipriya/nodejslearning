const fs=require("fs");
const http=require("http");

const server=http.createServer();

server.on('request',(req,res)=>{

var fs=require("fs");
const rstream=fs.createReadStream("input.txt");

rstream.on('data',(cunkdata)=>{
    res.write(cunkdata);
});

rstream.on('end',()=>{
    res.end();
});

rstream.on('error',(err)=>{
    console.log(err);
    res.end("file not found");
});

});

server.listen(8000,"127.0.0.1");