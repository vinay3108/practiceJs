const cheerio=require('cheerio');
const request=require('request');
var fs = require('fs');

// const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';
const url='https://www.hotstar.com/in';

console.log("before");
request(url,cb);
function cb(error,response,html){
    if(error)
    {
        console.log(error);
    }
    else{
        // handleHtml(html);
        // console.log(html);
        fs.appendFile('test.html',html,(err)=>{
            if(err)
            {
                console.log(err);
            }
        })
    }
}

function handleHtml(html)
{
    const $=cheerio.load(html);
    // const imgArr=$('').attr('src');
    const imgArr=$('.ripple.movie-card.vertical .thumbnail-container .card.card-img-container img').map(function(){ return $(this).attr('src'); });
    console.log(imgArr.length);
    console.log("after");
    // if(imgArr.length==0)
    // {
    //     console.log('no output');
    // }else{

    //     for(let item of imgArr)
    //     {
    //         const updateData=item+'\n';
    //         fs.appendFile('cvdata2.txt',updateData,(err)=>{
    //             if(err)
    //             {
    //                 console.log(err);
    //             }
    //         });
    //     }
    //     console.log('saved');
    // }
}



