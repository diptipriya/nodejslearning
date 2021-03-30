console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);


const[,,Firstname,Lastname]=process.argv;
console.log(`Your name is ${Firstname} ${Lastname} `);







