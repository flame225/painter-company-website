const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRouts = require('./routes/authRouts')
const User = require('./model/Usermessage')
const connectDB = require('./connectDb/db');
const nodemailer = require('nodemailer')
dotenv.config();
''
const app = express();


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

// view engine
app.set('view engine', 'ejs')
 
//route
app.get("/", (req,res)=>{
    res.render("index")
})



app.use(authRouts)


const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`server on ${PORT}`);
    connectDB( );
})  