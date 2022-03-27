const puppeteer=require('puppeteer');
const fs=require('fs');
const pdfKit=require('pdfkit');
// const link='https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg';
const link='https://www.youtube.com/playlist?list=PL-Jc9J83PIiEeD3I4VXETPDmzJ3Z1rWb4';
let cTab;
(async function(){
    try {
        let browserOpen=puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:['--start-maximized']
        })
        let browserInstance=await browserOpen
        let allTabsArr=await browserInstance.pages()
        cTab=allTabsArr[0];
        await cTab.goto(link);
        await cTab.waitForSelector('.yt-simple-endpoint.style-scope.yt-formatted-string')
        let name=await cTab.evaluate((select)=>{return document.querySelector(select).innerText},'.yt-simple-endpoint.style-scope.yt-formatted-string');
        console.log(name);
       let allData= await cTab.evaluate(getData,'.style-scope.ytd-playlist-sidebar-primary-info-renderer');
       let totalVideos=allData.noOfVideos.split(" ")[0];
       console.log(totalVideos);
        let currentVideos=await getCVideosLength();
        console.log(currentVideos);
        while(totalVideos-currentVideos>=1)
        {
            await scrollToBottom();
            currentVideos=await getCVideosLength();
        }

        let finalList=await getStats();
        let pdf=new pdfKit;
        pdf.pipe(fs.createWriteStream('pep.pdf'))
        pdf.text(JSON.stringify(finalList));
        pdf.end();

       cTab.close();
        
    } catch (error) {
            console.log(error);
    }

})()




function getData(selector){

    let allElems=document.querySelectorAll(selector);
    let noOfVideos=allElems[5].innerText
    let noOfViews=allElems[6].innerText;
    return {
       noOfVideos,
       noOfViews 
    }

}

async function getCVideosLength(){
    let length=await cTab.evaluate(getLength,'.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer');
    return length;

}

function getLength(durationSelect){
    let durationElem=document.querySelectorAll(durationSelect)
    return durationElem.length;
}

async function scrollToBottom(){
    await cTab.evaluate(goToBottom);
    function goToBottom()
    {
        window.scrollBy(0,window.innerHeight);
    }
}

async function getStats(){
    let list=cTab.evaluate(getNameAndDuration,'#video-title.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer','#text.style-scope.ytd-thumbnail-overlay-time-status-renderer');
    return list;
}

function getNameAndDuration(videoSelector,durationSelector){
    let videoElem=document.querySelectorAll(videoSelector);
    let durationElem=document.querySelectorAll(durationSelector);
     let currentList=[]
     for(let i=0;i<durationElem.length;i++)
     {
         let videoTitle=videoElem[i].innerText;
         let duration=durationElem[i].innerText;
         currentList.push({videoTitle,duration});
     }
     return currentList;
}