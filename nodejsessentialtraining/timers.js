const waittime=3000;
const waitinterval=500;
var currenttime=0;

const inctime=()=>{
    currenttime += waitinterval;
    console.log(`waiting ${currenttime/1000}seconds`);
}




console.log(`setting a ${waittime/1000}second delay`);



const timefinished=()=>{
    
  clearInterval(interval);
    console.log("done");
}

 const interval=setInterval(inctime,waitinterval);

setTimeout(timefinished,waittime);