// const fs = require("fs");
// const { resolve } = require("path");

// function readFun(fileName) {
//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       fs.readFile(fileName, function (err, data) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     }, 1000);
//   });

//   return promise;
// }

// let promiseResult=readFun("./demo.txt");

// promiseResult.then(function(data){
//     console.log(data.toString());
// },function(err){
//     console.log(err.message);
// })


const fs=require('fs')

function name(fileName){
    const promise=new Promise((resolve,reject)=>{

        setTimeout(()=>{

            fs.readFile(fileName,(err,data)=>{
                if(err){
                    reject(err)
                }
                resolve(data)
            })

        },1000)


    }).then((data)=>{
        console.log(data.toString());
    })

    return promise;
}

 name("./demo.txt")

// const val=name("./demo.txt");
// val.then((data)=>{
//     console.log(data.toString());
// })