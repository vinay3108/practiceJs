const puppeteer=require('puppeteer');
const loginLink='https://www.hackerrank.com/auth/login'
const email='xamot46817@stvbz.com';
const password='222525';



let browserOPen=puppeteer.launch({
    headless:false,
    args:['--start-maximized'],
    defaultViewport:null
})

let page;
browserOPen.then(function (browserObj){
    let browserOPenPromise=browserObj.newPage()
    return browserOPenPromise;
})
.then(function (newTab){
    page=newTab
    let hackerrankOPenPromise=newTab.goto(loginLink);
    return hackerrankOPenPromise;
}).then(function(){
    let emailEntered=page.type("input[id='input-1']",email,{
        delay:50
    })
    return emailEntered
}).then(()=>{
    let passwordEntered=page.type("input[type='password']",password,{
        delay:50
    })
    return passwordEntered;
}).then(()=>{
    
})