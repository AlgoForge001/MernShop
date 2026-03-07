const mongoose = require("mongoose");

const MONGO_URL = 'mongodb://127.0.0.1:27017/Shopping';

main()
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log(err);
});


const ConnectDb = async function main(){
    await mongoose.connect(MONGO_URL);
};

module.exports  =  ConnectDb ;