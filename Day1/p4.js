const fs = require('fs');
const { emitKeypressEvents } = require('readline');
fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err)
        console.log(err)
    else
    console.log(data)
})