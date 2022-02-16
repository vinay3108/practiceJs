const fs=require('fs');
const path=require('path');

const dirName=path.join(__dirname,"files");

// const input=process.argv;

// fs.writeFileSync(dirName+'/abc.txt',"hello bro how are you?");
for(let i=0;i<5;i++)
{
    fs.writeFileSync(`${dirName}/hello${i}`,"hello bro how are you");
}
fs.readdir(dirName,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})

// console.log(input);