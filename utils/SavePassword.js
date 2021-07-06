// *Import Modules
const fs=require("fs");
const path=require("path");
const os=require("os");

const chalk=require("chalk");

const savePassword=password=>{
    fs.appendFileSync(path.join(__dirname,"..","passwords.txt"),password+os.EOL);
}

module.exports=savePassword;