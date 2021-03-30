const fs=require("fs");
fs.mkdir("async",(err)=>{

console.log("folder created");

});


fs.writeFile("./async/bio.txt","this is nodejs tutorial",(err)=>
{

console.log("file created");

});

fs.appendFile("./async/bio.txt","appended text ",(err)=>{

console.log("file appended");


});


fs.readFile("./async/bio.txt","utf8",(err,data)=>{

    console.log(data);
}

);




fs.rename("./async/bio.txt","./async/bybio.txt",(err)=>{


    console.log("rename done");
});





fs.unlink("./async/bybio.txt",(err)=>{

    console.log("file deleted");
});






fs.rmdir("./async",(err)=>{

    console.log("folder deleted");
});