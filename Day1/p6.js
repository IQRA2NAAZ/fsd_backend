const fs=require('fs');
const write=(data)=>{
    
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err)
            console.log("Error Writimg File",err);
        else
         console.log("File Written Successfully")
    });
}
console.log("before")
write("I am new data");
console.log("after")