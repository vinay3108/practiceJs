const cheerio=require('cheerio');
const request=require('request');
var fs = require('fs');

// const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';
const url='https://takeuforward.org/interview-experience/strivers-cp-sheet/';

console.log("before");
request(url,cb);
function cb(error,response,html){
    if(error)
    {
        console.log(error);
    }
    else{
        handleHtml(html);
    }
}

function handleHtml(html)
{
    const $=cheerio.load(html);
    const olArray=$('ol li');
    for(let i=0;i<olArray.length;i++)
    {
        const data=`${i+1} \t `+$(olArray[i]).text()+'\n';
        fs.appendFile('sheet2.xls',data , function (err) {
            if (err) throw err;
        });
    }
    console.log('Saved!');
   
}



