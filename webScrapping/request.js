const request = require('request');
const cheerio=require('cheerio');
request('https://www.worldometers.info/coronavirus/',cb)
 function cb(error, response, html) {
     if(error)
     {

         console.error('error:', error); // Print the error if one occurred
     }else{
            handleHtml(html);
        //  console.log('statusCode:',response.statusCode); // Print the response status code if a response was received
        //  console.log('html:', html); // Print the HTML for the Google homepage.
        }
};

function handleHtml(html)
{
    console.log(html);
}
