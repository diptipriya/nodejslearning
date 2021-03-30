const validator=require("validator");
const chalk=require("chalk");
const res=validator.isEmail("foo@bar.com");

console.log(res?chalk.blue.inverse(res):chalk.red.inverse(res));
