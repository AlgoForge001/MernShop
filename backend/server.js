const express = require("express");
const app = express() ;
const ConnectDb = require("../backend/config/db.js");
const productRoute = require("./routes/productRoutes.js");


ConnectDb();
app.use(express.json());


//product Route
app.use("/api/products" , productRoute);

app.get("/" , (req ,res )=>{
    res.send("Server is running !");
});



app.listen(5000 , ()=>{
    console.log("Server is running on port 5000");
});