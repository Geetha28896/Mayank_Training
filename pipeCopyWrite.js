const fs=require('fs');

// const fileRead=fs.createReadStream('./employee.json');
// const fileWrite=fs.createWriteStream('./emoployeeCopy.json')

const fileRead1=fs.createReadStream('C:/evaluation/hello.js');
const fileWrite2=fs.createWriteStream('./httpHello.js')

//fileRead.pipe(fileWrite);
fileRead1.pipe(fileWrite2);