
// *Possible password characters
const alphabets="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const specialCharacters="!@#$%^&+-=_";

// *Method to generate password
const generatePassword=(length,characters)=>{
    let password="";
    for(let index=0;index<length;index++){
        password+=characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password;
}

// *Method to join possible password characters
const createPassword=(length=8,hasNumbers=true,hasSymbols=true)=>{
 let characters=alphabets;
 hasNumbers? characters+=numbers:"";
 hasSymbols? characters+=specialCharacters:"";
 return generatePassword(length,characters);
}

// *Export Method
module.exports=createPassword;