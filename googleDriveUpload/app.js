const {google}=require('googleapis');
const path=require('path');
const fs=require('fs');
require('dotenv').config()





const oauth2Client=new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

const drive=google.drive({
    version:'v3',
    auth:oauth2Client
});

const filePath=path.join(__dirname,'download.jpg');
console.log(filePath);


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


uploadFile();


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