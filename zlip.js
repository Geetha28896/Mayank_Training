const fs=require('fs');
const zlip=require('zlib')

const fileRead=fs.createReadStream('./employee.json');
const fileWrite=fs.createWriteStream('./empCopy2.json')
const fileZlip=fs.createWriteStream('./empCopy2.json.gz')

fileRead.pipe(fileWrite);
fileRead.pipe(zlip.createGzip()).pipe(fileZlip);



