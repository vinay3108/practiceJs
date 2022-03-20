const cheerio=require('cheerio');
const request=require('request');

// const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';
const url='https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/australia-women-vs-india-women-18th-match-1243925/ball-by-ball-commentary';

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
function handleHtml(html){

    const $=cheerio.load(html);
    const ballDetailArray=$('.match-comment-run-col .match-comment-over');
    const ballDetail=$(ballDetailArray[0]).text();
    const scoreCard=$('.match-comment-wrapper .match-comment-short-text span');
    const cricketerName=$(scoreCard[0]).text();
    const score=$(scoreCard[1]).text();

    const elemArr=$('.match-comment-wrapper .match-comment-long-text p');
    const commentary=( $(elemArr[0]).text());

    console.log(`The ball is ${ballDetail} \nBy ${cricketerName} \nThe commentry is ${commentary}`);
}

console.log("after");