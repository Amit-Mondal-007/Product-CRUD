require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const DBCon = require("./app/config/db");

const product = express();
DBCon();

// product.set('view engine','ejs')
// product.set('views','views')

product.use(express.static('public'));

product.use(express.json());

const ApiRoutes=require('./app/routes/ApiRoute')
product.use('/api',ApiRoutes)

const PORT=2905;

product.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})