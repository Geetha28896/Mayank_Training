const fs=require('fs')
const eventEmitter=require('events')

var emitter=new eventEmitter();

emitter.on('readFile',(data)=>{
    console.log(data.toString());

})

fs.readFile('./demo.txt',(err,data)=>{
    if(err){
        console.log('cant read this file ');
    }else{
        emitter.emit('readFile',data)
}
})



