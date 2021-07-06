#!/usr/bin/env node

// *Import Modules
const chalk=require("chalk");
const {program}=require("commander");
const clipboardy=require("clipboardy");

const log=console.log;

// *Import method
const createPassword=require("./utils/CreatePassword");
const savePassword=require("./utils/SavePassword");

// *Program version and description
program.version("1.0.0").description("Simple Password Generator");

// *Program options
program
.option("-l,--length <number>","Length of Password","6")
.option("-s,--save","Save Passwords to password.txt")
.option("-nn,--no-numbers","Remove Numbers")
.option("-ns,--no-symbols","Remove Symbols")
.parse();

// *Destructor method
const {length,save,numbers,symbols}=program.opts();

//* Get generated password
const generatedPassword=createPassword(+length,numbers,symbols);

// *Save to file
if(save)
 savePassword(generatedPassword);

// *Copy password to clipboard
clipboardy.writeSync(generatedPassword);

log(chalk.blue(`Generated Password:`)+ chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard."));