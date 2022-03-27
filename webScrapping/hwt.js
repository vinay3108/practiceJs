const cheerio=require('cheerio');
const request=require('request');
const fs=require('fs');

// const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';
// const url='https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/australia-women-vs-india-women-18th-match-1243925/full-scorecard';
const url='https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/bangladesh-women-vs-india-women-22nd-match-1243929/full-scorecard';

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
    const teamArr=$('.match-header-container .match-header .teams .team');
    // console.log(teamArr.length);
    let wTeamName;
    for(let item of teamArr)
    {
        const loserTeam=($(item).hasClass('team-gray'));
      
        if(!loserTeam)
        {
           wTeamName= $(item).find('.name');
           wTeamName=wTeamName.text().trim();
        }
      
    }
  let inningArr=  $('.card.content-block.match-scorecard-table .Collapsible');
//   let htmlStr="";
  for(let item of inningArr)
  {
    //   let cHtml=$(item).html();
    //   htmlStr+=cHtml;
    let teamNameElem=$(item).find('.header-title.label')
    let teamName=teamNameElem.text().split('INNINGS')[0];
    teamName=teamName.trim();
    // console.log(teamName);
    if(wTeamName===teamName)
    {
        console.log(teamName);
       let tableElm= $(item).find('.table.bowler');
        let allBowlers=$(tableElm).find('tr');
        // console.log(allBowlers.length);
        let hwt=0,hwtName="";
        for(bolwer of allBowlers)
        {
          let allColsOfPlayer=$(bolwer).find('td');
          let playerName=$(allColsOfPlayer[0]).text();
          let playerWicket=$(allColsOfPlayer[4]).text();
        //   if(playerName&&playerWicket)
        //   {

        //       console.log(`${playerName} -> ${playerWicket}`);
        //   }
        //   console.log();
            if(playerWicket>=hwt)
            {
                hwt=playerWicket;
                hwtName=playerName;
            }
        }
        console.log(`${wTeamName} : ${hwtName}-> ${hwt}`);
    }
  }


}