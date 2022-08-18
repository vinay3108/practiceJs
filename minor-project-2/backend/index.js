const express=require('express');
const app=express();
const dotenv = require( 'dotenv' );
const cookieParser = require('cookie-parser');
const connectDB=require('./db');
const cors=require('cors')
// const seedDB=require('./seedDB');
connectDB();
 
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use( cookieParser() );

dotenv.config({path:'backend/config/config.env'});

const user=require('./routes/userRoutes');
const movieRoutes=require('./routes/movieRoutes')

app.use( '/api/v1', user );
app.use('/api/v1',movieRoutes);

// seedDB();

const port=5000;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})