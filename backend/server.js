const express = require("express");
const app = express() ;
const ConnectDb = require("../backend/config/db.js");

ConnectDb();


app.get("/" , (req ,res )=>{
    res.send("Server is running !");
});


app.listen(5000 , ()=>{
    console.log("Server is running on port 5000");
});