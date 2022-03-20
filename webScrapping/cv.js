const cheerio=require('cheerio');
const request=require('request');
var fs = require('fs');
const imageDownloader = require('node-image-downloader')
// const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';
const url='http://codingvirus.in/';

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
    const imgArr=$('img').map(function(){ return $(this).attr('src'); });

    //getting image url
    // for(let item of imgArr)
    // {
    //     const updateData=item+'\n';
    //     fs.appendFile('cvdata.txt',updateData,(err)=>{
    //         if(err)
    //         {
    //             console.log(err);
    //         }
    //     });
    // }
//    console.log('saved');

// download images

// for(let item of imgArr)
// {

//     imageDownloader({
//         imgs: [
//       {
//           uri: item,
//         }
//     ],
//     dest: './downloads', //destination folder
// })
// .then((info) => {
//     console.log('all done', info)
// })
// .catch((error, response, body) => {
//     console.log('something goes bad!')
//     console.log(error)
// })
// }

//Something went wrong 

// imgArr.map((item)=>{
//     imageDownloader({
//         imgs: [
//       {
//           uri: item,
//         }
//     ],
//     dest: './downloads1', //destination folder
// })
// .then((info) => {
//     console.log('all done', info)
// })
// .catch((error, response, body) => {
//     console.log('something goes bad!')
//     console.log(error)
// })
// })

}



