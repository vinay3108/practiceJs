const {google}=require('googleapis');
const path=require('path');
const fs=require('fs');

const CLIENT_ID='253479561364-iq9mahp397bfutolfarh9f5vcn0dqdm1.apps.googleusercontent.com'
const CLIENT_SECRET='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'
const REDIRECT_URI='https://developers.google.com/oauthplayground'

const REFRESH_TOKEN='1//04DfpPnJqv4TDCgYIARAAGAQSNwF-L9IrQ-wdTGVnti2TJWOzn2jO6Px_ay5XGgDyi3EdBgDlDYzjU1oyxuCfJ6BICX6NB4dyg-Y'



const oauth2Client=new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive=google.drive({
    version:'v3',
    auth:oauth2Client
});

const filePath=path.join(__dirname,'download.jpg');
// console.log(filePath);


async function uploadFile()
{
    try{
        const response=await drive.files.create({
            requestBody:{
                name:"download.jpg",
                mimeType:"image/jpg",
            },
            media:{
                mimeType:"image/jpg",
                body:fs.createReadStream(filePath)
            }
        })
        console.log(response.data);
    }catch(err){
        console.log(err);
    }
}


// uploadFile();


async function deleteFile()
{
    try {
        const response= await drive.files.delete({
            fileId:"1qadq3wqGiDwe5KulL0Sy0mRrSR1DePed",

        });
        console.log(response.data,response.status);
    } catch (err) {
        console.log(err);
    }
}

// deleteFile();


//geting public url


async function generatePublicUrl()
{
    try {
        const fileId='1QQLfA3wbnGgMvYpyq0oBlG-Cv5zg84iG';
        await drive.permissions.create({
            fileId:fileId,
            requestBody:{
                role:'reader',
                type:'anyone'
            }
        })
        const result=await drive.files.get({
            fileId:fileId,
            fields:'webViewLink, webContentLink',
        })
        console.log(result.data);
    } catch (err) {
        console.log(err);
    }
}

// generatePublicUrl();


// async function getAllData()
// {
//     try{
//        const data= await drive.files.list({
//             q: "mimeType='image/jpeg'",

//         })
//         if(data)
//         {

//             console.log(data)
//         }
//     }catch(err){
//         console.log(err);
//     }
// }


// getAllData();


function retrieveAllFiles(callback) {
    var retrievePageOfFiles = function(request, result) {
      request.execute(function(resp) {
        result = result.concat(resp.items);
        var nextPageToken = resp.nextPageToken;
        if (nextPageToken) {
          request = gapi.client.drive.files.list({
            'pageToken': nextPageToken
          });
          retrievePageOfFiles(request, result);
        } else {
          callback(result);
        }
      });
    }
    var initialRequest = gapi.client.drive.files.list();
    retrievePageOfFiles(initialRequest, []);
  }


