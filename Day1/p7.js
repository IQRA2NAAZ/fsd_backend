const fs=require('fs');
const data="I am iqra naaz"
fs.appendFile("./data.txt",data,(err)=>{
    if(err)
        console.log(err);
    console.log("Data appended");
});


console.log("data appended")