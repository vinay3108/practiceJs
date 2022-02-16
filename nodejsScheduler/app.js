const schedule = require('node-schedule');


// At a part Date and Time

// const someDate= new Date(2022,1,14,16,55,1);
// schedule.scheduleJob(someDate,()=>{
//     console.log("hello budyy");
// })



// at recureence intervals

// schedule.scheduleJob('myjob','*/2 * * * * *',()=>{
//     console.log("after 2 second");
//     //cancel job 1 way
//     // schedule.cancelJob('myjob');
// })


//second way to cancel a job

const myjob=schedule.scheduleJob('*/2 * * * * *',()=>{
    console.log("after 2 second");
   myjob.cancel();
})

